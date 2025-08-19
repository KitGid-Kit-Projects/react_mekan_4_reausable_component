// Defines the allowed visual styles (variants) for Button-like components across the app.
// Keeping this as a string-literal union centralizes the contract and enables strong typing
// wherever a component accepts a `variant` prop.

/**
 * Allowed visual variants for button components.
 *
 * - 'primary'   => High emphasis. Use for the main action on a screen or form.
 * - 'secondary' => Medium/low emphasis. Use for less prominent or alternative actions.
 *
 * Notes for extension:
 * - When adding a new variant (e.g., 'tertiary', 'danger'), update any mapping logic in
 *   Button implementations (e.g., Tailwind class maps) and stories/tests to keep behavior consistent.
 * - Keep names aligned with your design system tokens to avoid confusion.
 *
 * Example:
 *   <Button variant="primary">Save</Button>
 *   const v: ButtonVariant = 'secondary';
 */
export type ButtonVariant = 'primary' | 'secondary';
