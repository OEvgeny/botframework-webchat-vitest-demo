import { expect, test } from 'vitest';
import WebChat from 'botframework-webchat';

test('can import WebChat', () => {
  expect(WebChat).toBeDefined();
});
