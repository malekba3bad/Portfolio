import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Set HTML dir and lang attributes
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('language', lng);
  
  // Apply RTL body class
  if (lng === 'ar') {
    document.body.classList.add('rtl-mode');
  } else {
    document.body.classList.remove('rtl-mode');
  }
});

// Set initial RTL
if (savedLanguage === 'ar') {
  document.documentElement.lang = 'ar';
  document.documentElement.dir = 'rtl';
  document.body.classList.add('rtl-mode');
} else {
  document.documentElement.lang = 'en';
  document.documentElement.dir = 'ltr';
}

export default i18n;
