import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import logo from './images/NUETECH_LOGO-transparent.png';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.jsx';
import SettingsPage from './components/settings/SettingsPage.js';
import Home from './components/screenPage/Home.jsx';

import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';

import './CSS/App/page.css'

Amplify.configure(awsExports);

const getDisplayName = (user) => {
   if (!user) return "Farmer";

  const name = user.attributes?.name;
  const email = user.attributes?.email;
  const preferredUsername = user.attributes?.preferred_username;
  const givenName = user.attributes?.given_name;
  const familyName = user.attributes?.family_name;

  if (name) return name;

  if (givenName || familyName) return `${givenName || ''} ${familyName || ''}`.trim();

  if (preferredUsername) return preferredUsername;

  if (email) return email.split("@")[0];

  return "Farmer";
};

function AuthenticatedApp() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <h2>{t('welcome')}, {getDisplayName(user)}!</h2>
          <p style={{paddingRight: '311px'}}>{t('signedInMessage')}</p>

          <button 
            onClick={() => navigate('/dashboard')} 
            className='getStarted-button'
          >
            {t('getStarted')}
          </button>
          
          <button onClick={signOut} className='signOut-button'>
            {t('signOut')}
          </button>
        </>
      )}
    </Authenticator>
  );
}

function AppContent() {
  const { t } = useLanguage();
  
  return (
    <BrowserRouter>
      <div className="App page-css">
        <img src={logo} alt='Company Logo' className='logo'/>
        <h1 className='title-name'>{t('appTitle')}</h1>
        
        {/* Language Selector positioned below the title */}
        <LanguageSelector />

        <Routes>
          <Route path="/" element={
            <div 
              style={{
                /*display:'none',*/
              }}>
              <AuthenticatedApp />
            </div>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;