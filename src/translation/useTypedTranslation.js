import { useTranslation } from 'react-i18next';
import { T } from './keys';

/**
 * Custom hook that provides typed access to translations
 * @returns {Object} Object containing t function, i18n instance, and T keys object
 */
export const useTypedTranslation = () => {
  const { t, i18n } = useTranslation();
  
  return { t, i18n, T };
}; 