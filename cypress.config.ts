import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    execTimeout: 30 * 1000,
    taskTimeout: 30 * 1000,
    viewportWidth: 1792,
    viewportHeight: 1017,
    supportFile: false,
    baseUrl: 'http://localhost:3000',
    videoUploadOnPasses: false,
    setupNodeEvents(on, config) {},
  },
});
