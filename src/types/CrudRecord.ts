// Represents a single data item handled by CRUD components and hooks in this app.
// This interface defines the minimal shape expected across list, read, create, and update flows.
export interface CrudRecord {
  // Stable unique identifier for the record (e.g., UUID, database ID, slug).
  // Should not change after creation; used for lookups, routing, and updates.
  id: string;

  // Human-readable name/title of the record.
  // Displayed in lists and detail views; also commonly used for search/filter.
  name: string;

  // Logical grouping or taxonomy for the record (e.g., "books", "electronics").
  // Used to filter, segment, or style records by category.
  category: string;

  // Longer free-form text describing the record's content or purpose.
  // Keep required to simplify forms; allow empty string ("") when no details provided.
  description: string;

  // Creation timestamp as a Date object in the client.
  // Note: when loading from APIs, dates often arrive as ISO strings; convert to Date.
  // Example: new Date(json.createdAt)
  createdAt: Date;
}