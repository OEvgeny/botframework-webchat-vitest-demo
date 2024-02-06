import { expect, test } from 'vitest';
import 'botframework-webchat/dist/webchat.js';

test('can import WebChat', () => {
  expect(WebChat).toBeDefined();
});
