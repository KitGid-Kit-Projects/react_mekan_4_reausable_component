// A centralized alias for React's "children" type used across components.
// Using a single alias helps keep props consistent and easy to refactor.

/**
 * ComponentChildren represents anything React can render as a child:
 * - JSX elements (e.g., <div />)
 * - Strings and numbers (e.g., "Hello", 42)
 * - Arrays of the above
 * - Fragments (<>...</>) and Portals
 * - null and undefined (render nothing)
 * - Booleans are allowed but typically render nothing (use with care)
 *
 * Usage:
 *   type Props = { children?: ComponentChildren }
 *   const Panel = ({ children }: Props) => <section>{children}</section>
 *
 * Tips:
 * - Prefer this alias for general-purpose children. If you need exactly one element,
 *   consider React.ReactElement instead of React.ReactNode.
 * - If you want to include children automatically, you can also use
 *   React.PropsWithChildren<{ ...otherProps }>, but this alias keeps it explicit.
 */
export type ComponentChildren = React.ReactNode;
