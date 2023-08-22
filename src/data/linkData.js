import { FaFileAlt as Resume, FaBlog as Blog, FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export const internalLinks = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/portfolio', text: 'Portfolio' },
  { to: '/contact', text: 'Contact' },
];

export const externalLinks = [
  {
    to: 'https://www.linkedin.com/in/nicolas-mortelliti/',
    text: 'LinkedIn',
    icon: <Linkedin />,
  },
  {
    to: 'https://github.com/NicMortelliti',
    text: 'Github',
    icon: <Github />,
  },
  { to: 'https://dev.to/nicm', text: 'Blog', icon: <Blog /> },
  {
    to: 'https://drive.google.com/file/d/1ZO13CR-AHOCkQju_WGAi45meCaNX8liW/view?usp=sharing',
    text: 'Resume',
    icon: <Resume />,
  },
];

export const calendlyLink = 'https://calendly.com/nic-mortelliti/30min';
