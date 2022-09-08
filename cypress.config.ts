import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    HELLO_FROM_ENV_FILE: 'Hello from Cypress Env file!!!',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    baseUrl: 'http://localhost:3000',
  },
})
