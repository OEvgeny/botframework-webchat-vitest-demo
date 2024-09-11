/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    deps: {
      optimizer: {
        web: {
          enabled: true,
          include: ['botframework-webchat', 'botframework-webchat-component', 'react-scroll-to-bottom']
        }
      }
    }
  }
});
