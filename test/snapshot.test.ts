import { expect, test } from 'vitest';
import 'botframework-webchat/dist/webchat.js';

test('snapshot', () => {
  expect(WebChat).toMatchSnapshot();
});
