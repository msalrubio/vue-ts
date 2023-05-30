import { axe } from 'vitest-axe';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/vue';
import HelloWorld from '@/components/HelloWorld.vue';

describe('Hello world', () => {
  const props = {
    msg: 'Mensaje',
  };

  test('renders props.msg when passed', () => {
    render(HelloWorld, {
      props,
    });

    const message = screen.getByRole('heading', { level: 1 });
    expect(message).toHaveTextContent('Mensaje');
  });

  test('should be accesible', async () => {
    const { container } = render(HelloWorld, {
      props,
    });
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
