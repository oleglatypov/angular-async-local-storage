/**
 * Subset of the JSON Schema.
 * Types are enforced to validate everything: each value MUST have either 'type' or 'properties' or 'items' or 'const' or 'enum'.
 * Therefore, unlike the spec, booleans are not allowed as schemas.
 * @see http://json-schema.org/latest/json-schema-validation.html
 * Not all validation features are supported: just follow the interface.
 * @todo When TS 2.8, explore if this schemas can be split for object and arrays with conditional types.
 */
export interface JSONSchema {

  /**
   * Type for a primitive value.
   * Not required for objects, just set 'properties'.
   * Not required for arrays, just set 'items'.
   * Not required for const and enum.
   */
  type?: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object' | 'null';

  /**
   * List of properties schemas for an object.
   */
  properties?: {
    [k: string]: JSONSchema;
  };

  /**
   * Array of names of the required properties for an object.
   * Properties set as required should be present in 'properties' too.
   * Note that in the last spec, booleans are not supported anymore.
   */
  required?: string[];

  /**
   * Schema for the values of an array.
   * 'type' of values should be a string (not an array of type).
   */
  items?: JSONSchema | JSONSchema[];

  /**
   * Checks if a value is strictly equal to this.
   */
  const?: any;

  /**
   * Checks if a value is strictly equal to one of the value of enum.
   */
  enum?: any[];

  /**
   * Minumum lenght for a string.
   * Must be a non-negative integer.
   */
  maxLength?: number;

  /**
   * Minumum lenght for a string.
   * Must be a non-negative integer.
   */
  minLength?: number;

  /**
   * Pattern to match for a string.
   * Must be a valid regular expression, WITHOUT the / delimiters.
   */
  pattern?: string;

  /**
   * Check if a number is a multiple of x.
   * Must be strictly greater than 0.
   */
  multipleOf?: number;

  /**
   * Check if a number is less or equal than this maximum.
   */
  maximum?: number;

  /**
   * Check if a number is strictly less than this maximum.
   */
  exclusiveMaximum?: number;

  /**
   * Check if a number is greater or equal than this minimum.
   */
  minimum?: number;

  /**
   * Check if a number is strictly greater than this minimum.
   */
  exclusiveMinimum?: number;

  /**
   * Check if an array length is less or equal to this value.
   * Must be a non negative integer.
   */
  maxItems?: number;

  /**
   * Check if an array length is greater or equal to this value.
   * Must be a non negative integer.
   */
  minItems?: number;

  /**
   * Check if an array only have unique values.
   */
  uniqueItems?: boolean;

  /**
   * Allow other properties, to not fail with existing JSON schemas.
   */
  [k: string]: any;

}
