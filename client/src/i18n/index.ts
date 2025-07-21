import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'AI Extension Studio': 'AI Extension Studio',
      'Ask the assistant...': 'Ask the assistant...',
    },
  },
  ar: {
    translation: {
      'AI Extension Studio': 'استوديو ملحقات الذكاء الاصطناعي',
      'Ask the assistant...': 'اسأل المساعد...',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
