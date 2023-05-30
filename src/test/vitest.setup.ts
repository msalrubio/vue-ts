import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/vue';
import matchers from '@testing-library/jest-dom/matchers';
import * as matchersAxe from 'vitest-axe/matchers';

expect.extend(matchers);
expect.extend(matchersAxe);

afterEach(() => {
  cleanup();
});
