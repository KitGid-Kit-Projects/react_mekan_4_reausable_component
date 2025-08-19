// This interface defines the base props that can be shared by most React components.
export interface BaseComponentProps {
  // Optional CSS class name(s) to apply to the component's root element.
  className?: string;

  // Optional inline styles to apply to the component's root element.
  // Uses the standard React CSSProperties type for type safety and IntelliSense.
  style?: React.CSSProperties;
}