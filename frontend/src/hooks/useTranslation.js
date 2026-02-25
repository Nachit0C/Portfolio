import { useLanguageStore } from "../store/languageStore";
import es from '../languageTexts/es.json';
import en from '../languageTexts/en.json';

const translations = { es, en };

export const useTranslation = () => {
  const { language } = useLanguageStore();

  const text = (id) => {
    const [section, key] = id.split(".");
    return translations[language][section]?.[key] || id;
  };

  return { text };
};