import { useTranslation } from 'react-i18next';
import enTranslations from './en.json';

// Auto-generate dot-notation string keys from the English translation file
type NestedKeyOf<T> = {
  [K in keyof T]: T[K] extends object
    ? `${K & string}.${NestedKeyOf<T[K]> & string}`
    : K;
}[keyof T];

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
      (result[key] as string) = fullKey;
    }
  }
  
  return result;
};

// Generate typed keys object
export const translation = generateTypedKeys(enTranslations);

// Custom hook that provides typed access
export const useTypedTranslation = () => {
  const { t:Translate, i18n } = useTranslation();
  
  return { Translate, i18n, translation };
}; 