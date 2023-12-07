# Portfolio

This is the repo for my portfolio site, which is found here: [nicweb.dev](https://nicweb.dev)

## Technologies

The site is built with the following technologies.

- [ReactJS](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [React Redux](https://react-redux.js.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Calendly](https://github.com/tcampb/react-calendly)
- [Styled Components](https://styled-components.com/)
- [Gh-Pages](https://pages.github.com/) for deployment

## Installation

This project utilizes Docker to create a consistent development environment. If you don't have Docker, you can still run the application, but you'll need to make sure you have node installed.

_Theses instructions assume you are using VS Code with the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed._

1. Clone this git repo

   `git clone https://github.com/NicMortelliti/portfolio.git`

1. Change directory into the `portfolio` directory.

   `cd portfolio`

1. Open project in VS Code.

   `code .`

1. VS Code will see the `/.devcontainer` directory and prompt you to "Reopen in Container", click "Reopen in Container"

1. With the development container now running, open a Terminal in VS Code and install npm packages.

   `npm install`

## Running Locally

To run the development build of this project, follow these instructions.

1. Open the project in a dev container (see [Installation step 4](#installation))

1. In a terminal session, run the development build.

   `npm run start`
