# Translation Files

This folder contains all translation files for the application.

## Structure

```
src/translation/
├── en.json          # English translations
├── mm.json          # Burmese translations
└── index.js         # Export file for easy importing
```

## Usage

### 1. Import translations in your i18n config:
```javascript
import { translations } from './translation';

i18n.init({
  resources: {
    en: { translation: translations.en },
    mm: { translation: translations.mm }
  }
});
```

### 2. Use in React components:
```javascript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return <h1>{t('home.hot_games')}</h1>;
};
```

### 3. Change language:
```javascript
import { useTranslation } from 'react-i18next';

const { i18n } = useTranslation();
i18n.changeLanguage('mm'); // Switch to Burmese
```

## Adding New Translations

1. Add new keys to both `en.json` and `mm.json`
2. Use nested structure for organization (e.g., `home.products.diamonds_56`)
3. Import and use in your components with the `t()` function

## Supported Languages

- **en**: English
- **mm**: Burmese (မြန်မာ) 