import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const distDir = path.resolve('dist');
const pages = new Map([
  ['/', await readFile(path.join(distDir, 'index.html'), 'utf8')],
  ['/about/', await readFile(path.join(distDir, 'about/index.html'), 'utf8')],
]);

function textContent(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function isInsideAnchor(html, index) {
  const beforeText = html.slice(0, index);
  return beforeText.lastIndexOf('<a ') > beforeText.lastIndexOf('</a>');
}

function hrefs(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi)]
    .map((match) => match[1]);
}

function ids(html) {
  return new Set([...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]));
}

async function pageFile(pathname) {
  const normalizedPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  const candidates = pathname.endsWith('/')
    ? [path.join(distDir, normalizedPath, 'index.html')]
    : [path.join(distDir, `${normalizedPath}.html`), path.join(distDir, normalizedPath, 'index.html')];

  for (const candidate of candidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      // Try the next static route shape.
    }
  }

  return undefined;
}

test('featured work renders featured collection entries in order and links entries with URLs', () => {
  const html = pages.get('/');
  const rendered = textContent(html);
  const frontendIndex = html.indexOf('Frontend');
  const viwIndex = html.indexOf('Virtual Integration Workspace (VIW)');

  assert.notEqual(frontendIndex, -1, 'the featured frontend entry should render');
  assert.notEqual(viwIndex, -1, 'the featured VIW entry should render');
  assert.ok(frontendIndex < viwIndex, 'featured entries should follow their configured order');
  assert.match(rendered, /Frontend.*Virtual Integration Workspace \(VIW\)/);
  assert.equal(isInsideAnchor(html, frontendIndex), false, 'an entry without a URL should not be linked');
  assert.equal(isInsideAnchor(html, viwIndex), true, 'an entry with a URL should link the whole card');
  assert.ok(hrefs(html).includes('https://parrylabs.com/viw-virtual-integration-workspace/'));
});

test('about page renders its content collection entry', () => {
  const rendered = textContent(pages.get('/about/'));

  assert.match(rendered, /I’m Nic, a software engineer who likes making complex things useful\./);
  assert.match(rendered, /My background in systems engineering and aviation shapes how I approach software/);
  assert.match(rendered, /I enjoy taking a problem from the first questions through a working solution\./);
  assert.match(rendered, /I also care about how the work gets done\./);
});

test('primary navigation, page anchors, and external profile links are present', () => {
  const homeLinks = hrefs(pages.get('/'));
  const aboutLinks = hrefs(pages.get('/about/'));

  for (const href of ['/', '/about/', '#featured-work', '/#contact', '#top']) {
    assert.ok(homeLinks.includes(href), `homepage should include ${href}`);
  }

  for (const href of ['/', '/about/', '/#contact', '#top']) {
    assert.ok(aboutLinks.includes(href), `about page should include ${href}`);
  }

  assert.ok(homeLinks.includes('https://github.com/NicMortelliti'));
  assert.ok(homeLinks.includes('https://www.linkedin.com/in/nicolas-mortelliti'));
});

test('all rendered links resolve to an existing page and anchor or a valid external URL', async (t) => {
  for (const [pagePath, html] of pages) {
    await t.test(pagePath, async () => {
      const pageIds = ids(html);

      for (const href of hrefs(html)) {
        const destination = new URL(href, `https://portfolio.test${pagePath}`);

        if (destination.origin !== 'https://portfolio.test') {
          assert.ok(['http:', 'https:', 'mailto:', 'tel:'].includes(destination.protocol), `${href} uses a supported external protocol`);
          continue;
        }

        const destinationPath = destination.pathname || pagePath;
        const destinationFile = await pageFile(destinationPath);
        assert.ok(destinationFile, `${pagePath} links to a missing page: ${href}`);

        if (destination.hash) {
          const destinationHtml = pages.get(destinationPath) ?? await readFile(destinationFile, 'utf8');
          const destinationIds = destinationPath === pagePath ? pageIds : ids(destinationHtml);
          assert.ok(destinationIds.has(decodeURIComponent(destination.hash.slice(1))), `${pagePath} links to a missing anchor: ${href}`);
        }
      }
    });
  }
});
