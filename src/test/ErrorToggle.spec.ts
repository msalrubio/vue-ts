import { axe } from 'vitest-axe';
import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/vue';
import ErrorToggle from '@/components/ErrorToggle.vue';

describe('Error Toggle', () => {
  test('should display message when button is clicked', async () => {
    render(ErrorToggle);

    const button = screen.getByRole('button', { name: /toggle/i });
    await fireEvent.click(button);

    const message = screen.getByRole('alert');
    expect(message).toBeInTheDocument();
    expect(message).toHaveTextContent(/contact us/i);

    await fireEvent.click(button);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  test('should be accesible', async () => {
    const { container } = render(ErrorToggle);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
