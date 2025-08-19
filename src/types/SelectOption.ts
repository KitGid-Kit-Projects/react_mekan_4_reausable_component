// Represents a single option item for <Select> or <Dropdown> components.
// Kept minimal for reuse across forms, filters, and any choice inputs.

/**
 * A selectable option with a human-readable label and a stable string value.
 *
 * Guidance:
 * - Keep `value` unique within a given options list and stable over time to avoid
 *   mismatches when restoring selections from saved state.
 * - If your IDs are numbers, normalize to string at the edge (e.g., String(id))
 *   since the union here is string-only for consistency across components.
 * - Localize `label` at render-time if using i18n.
 * - If you need richer metadata (disabled, description, icon), extend this type
 *   in the UI layer or create a superset (e.g., `OptionItem extends SelectOption`).
 *
 * Example:
 *   const options: SelectOption[] = [
 *     { label: 'Active', value: 'active' },
 *     { label: 'Archived', value: 'archived' },
 *   ];
 */
export interface SelectOption {
  // Text shown to the user in the select/dropdown list.
  label: string;

  // Underlying value used for form submission, filtering, or lookups.
  // Must be a string; convert numbers/UUIDs via String(x) for consistency.
  value: string;
}