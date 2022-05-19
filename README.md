# template-vue2-project

Vue 2 project's template with storybook, nuxt, jest, chromatic and vitepress

### Prerequisites

- Have `nvm` installed on your local machine

:sos: To verify that **nvm** is installed, you can run `nvm --version`. If it is not installed, then run ` curl -o- ``https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh`` | bash `

### Project setup :

- Clone the project
- Go to the project's root and run `nvm use` to use the correct Node's version
- Stay at the project's root and run `npm ci`
- Go to the `ui` folder and run `npm ci`
- Go to the `client` folder and run `npm ci`
- Go to the `documentation` folder and run `npm ci`

### Run Storybook :

- Go to the `ui` folder and run `npm run dev`

### Run Nuxt client :

- Go to the `client` folder and run `npm run dev`

### Run tests :

- Go to the project's root and run `npm run test`

### Run documentation :

- Go to the `documentation` folder and run `npm run docs`

### Workflow :

There are 2 github actions related to the project:
- A first one that runs the tests at each PR open on the main branch
- A second one that runs the build of ui on chromatic at each PR open on the production branch

### :warning: Good to remember :warning:

- It's important to always make sure you're using the correct version of Node. If in doubt, go back to the project's root and run `nvm use`
