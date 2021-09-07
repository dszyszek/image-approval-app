# Methodology

My idea for the app was to make it loosely-coupled and modularized. That's why I've choosed the Atomic Design as main methodology. The source directory has 5 core sub-dirs, those are:

- atom
- molecule
- organism
- template
- page

Atoms, molecules and organisms are completely independent from the rest of the app - they could be exported and used as a library of components. Templates and pages are app-specific, the first one defines styles for whole app, the latter one handles the data.

# Tech stack

- React 17
- Redux
- Webpack
- Jest
- React-testing-library
- Material UI
- Eslint
- Prettier

# Environment

The app has completely custom configuration (i.e. no create-react-app used). That include webpack (separate configs for dev and prod environments), babel, linter, prettier, jest and dotenv configs.

# Work flow

As mentioned, the app uses linter (eslint), prettier and husky (for git-hooks). Before every commit, the `pre-commit` command fires up to check if the code matches the standards

# Available commands

- test: run the unit tests
- lint: lint the source code
- webpack:build: build production-ready build
- pretty-quick: checks if code is well-formatted
- build: create production-ready build (run linter, prettier and tests before)
- start: start the application and dev-server

# Installation

To install and run the app you need to:

1. clone the repo: `git clone <repo URI>`
2. get into the directory: `cd ./image-approval-app`
3. install dependencies: `npm install`
4. create .env file: `touch .env`
5. put valid unsplash access key inside: `UNSPLASH_API_KEY='<your access key>'`
6. run the app: `npm run start`
