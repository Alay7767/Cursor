import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

// Example component showing how to use translations in other components
const ExampleTranslatedComponent = () => {
  const { t, currentLanguage } = useTranslation();

  return (
    <div>
      <h2>{t('dashboard')}</h2>
      <p>{t('overview')}</p>
      <p>Current language: {currentLanguage}</p>
      
      {/* You can use translations for any text in your components */}
      <button>{t('save')}</button>
      <button>{t('cancel')}</button>
    </div>
  );
};

export default ExampleTranslatedComponent;