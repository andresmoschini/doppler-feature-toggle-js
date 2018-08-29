/**
 * Something that can self update reading an external resource
 */
export interface SelfUpdatable {
  /**
   * Execute the update asynchronously
   */
  update(): Promise<void>;
}
