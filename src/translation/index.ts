import en from './en.json';
import mm from './mm.json';

interface Translations {
  en: Record<string, any>;
  mm: Record<string, any>;
}

export const translations: Translations = {
  en,
  mm,
};

export default translations;