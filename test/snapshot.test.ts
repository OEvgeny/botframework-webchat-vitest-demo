import { expect, test } from 'vitest';
import WebChat from 'botframework-webchat';

test('snapshot', () => {
  expect(WebChat).toMatchSnapshot();
});
