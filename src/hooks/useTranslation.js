import { useLanguage } from '../contexts/LanguageContext';

export const useTranslation = () => {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  
  return {
    t,
    currentLanguage,
    changeLanguage,
    isEnglish: currentLanguage === 'en',
    isFrench: currentLanguage === 'fr'
  };
};