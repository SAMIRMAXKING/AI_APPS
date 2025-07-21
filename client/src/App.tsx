import React from 'react';
import { useTranslation } from 'react-i18next';
import ChatWidget from './components/ChatWidget';
import Header from './components/Header';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">{t('AI Extension Studio')}</h1>
        {/* Content placeholder */}
      </div>
      <ChatWidget />
    </div>
  );
};
export default App;
