import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/vue';
import HelloWorld from '../components/HelloWorld.vue';

describe('Hello world', () => {
  test('Renders props.msg when passed', () => {
    render(HelloWorld, {
      props: {
        msg: 'Mensaje',
      },
    });

    const message = screen.getByRole('heading', { level: 1 });
    expect(message).toHaveTextContent('Mensaje');
  });
});
