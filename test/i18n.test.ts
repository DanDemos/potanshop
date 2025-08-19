import { describe, it, expect } from "vitest";
import i18n from '../src/i18n';

describe('i18n translations', () => {
  it('should loads translation key for why_shop_with_us', () => {
    const translated = i18n.t('home.why_shop_with_us');
    expecTranslate(translated).toBeTypeOf('string');
    expecTranslate(translated.length).toBeGreaterThan(0);
  });
});