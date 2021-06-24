// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import LocalStorageMock from './__mocks__/LocalStorageMock';

global.localStorage = LocalStorageMock;

// require('./__mocks__/I18nSetup');

export default {};
