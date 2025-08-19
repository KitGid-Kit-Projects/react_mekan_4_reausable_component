// A flexible catch-all shape for dynamic form state and payloads.
// Centralizing this alias keeps components/hooks consistent when a
// strongly-typed per-form interface is not available.

/**
 * FormData represents a simple key-value map for form fields.
 *
 * Keys:
 * - string field names (case-sensitive). Nested paths are not interpreted
 *   specially (e.g., "user.name" is just a string key, not deep access).
 *
 * Values (any): commonly one of
 * - string | number | boolean
 * - Date (for date/time inputs)
 * - string[] or number[] (multi-select inputs)
 * - File or File[] (file uploads)
 * - Nested objects are allowed but consider flattening for APIs unless your
 *   stack supports deep objects.
 *
 * Trade-offs:
 * - Using `any` maximizes flexibility but loses type safety. Prefer a specific
 *   interface per form whenever possible, e.g., `type LoginForm = { email: string; password: string }`.
 *
 * Alternatives:
 * - Define a per-form interface and use that instead of this alias.
 * - Use a generic wrapper like `type FormDataLike<T> = T` to keep call sites explicit.
 * - Validate/parse with a schema library (e.g., Zod/Yup) before submitting.
 *
 * Naming note:
 * - This alias intentionally overlaps with the browser's global `FormData` type (multipart form data).
 *   If you need the DOM `FormData`, reference it via the global or rename this alias on import
 *   (e.g., `import type { FormData as AppFormData } from '.../types'`).
 */
export type FormData = Record<string, any>;