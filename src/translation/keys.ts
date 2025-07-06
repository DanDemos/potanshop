import enTranslations from './en.json';

// Create a type from the JSON structure
type TranslationKeys = typeof enTranslations;

// Generate keys object with proper typing
const generateTypedKeys = <T extends Record<string, any>>(
  obj: T,
  prefix = ''
): T => {
  const result = {} as T;
  
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      result[key] = generateTypedKeys(obj[key], fullKey);
    } else {
      result[key] = fullKey;
    }
  }
  
  return result;
};

// Generate typed keys object
export const T = generateTypedKeys(enTranslations);

// Export the type for use in other files
export type TypedTranslationKeys = typeof T; 