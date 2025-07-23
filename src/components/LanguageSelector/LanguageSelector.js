import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, t } = useLanguage();

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <div className="language-selector">
      <label htmlFor="language-select" className="language-label">
        {t('language')}:
      </label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={handleLanguageChange}
        className="language-dropdown"
      >
        <option value="en">{t('english')}</option>
        <option value="fr">{t('french')}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;