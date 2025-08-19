// Describes an action that can be rendered alongside a row in a data table
// (e.g., Edit/Delete/View) or used for bulk actions. This keeps table UI
// definitions declarative and consistent across the app.

/**
 * TableAction
 *
 * Guidance:
 * - Keep `key` stable and unique within a given table to assist React list rendering
 *   and analytics/tracking.
 * - `label` is user-facing; localize at render time if using i18n.
 * - `onClick` receives the source record for context. Consider confirming destructive
 *   actions and handling errors gracefully.
 * - `type` controls visual emphasis/severity. Map these to your design system styles.
 *
 * Example:
 *   const actions: TableAction[] = [
 *     { key: 'edit', label: 'Edit', onClick: (r) => openEdit(r), type: 'primary' },
 *     { key: 'delete', label: 'Delete', onClick: (r) => confirmDelete(r), type: 'danger' },
 *   ];
 *
 * Typing note:
 * - `record` is `any` for flexibility across tables. For stronger typing, consider a
 *   generic variant in your own code:
 *   // interface TableActionOf<T> { key: string; label: string; onClick: (record: T) => void; type?: 'primary'|'danger'|'default' }
 */
export interface TableAction {
  // Stable unique identifier for the action within a table. Used as a React key
  // and may also be used for testing or analytics (e.g., data-action="edit").
  key: string;

  // User-visible text for the action control (button, menu item, etc.).
  // Keep concise and action-oriented (e.g., "Edit", "View", "Delete").
  label: string;

  // Callback invoked when the action is triggered. Receives the row's record.
  // Consider defensive checks and confirmations for destructive operations.
  onClick: (record: any) => void;

  // Optional visual style/severity for the action control:
  // - 'primary' => High emphasis (main/positive action)
  // - 'danger'  => Destructive/irreversible (e.g., delete)
  // - 'default' => Neutral/secondary action
  // Components rendering actions can map these to button classes or icons.
  type?: 'primary' | 'danger' | 'default';
}