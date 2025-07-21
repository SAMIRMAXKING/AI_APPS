import { useTranslation } from "react-i18next";
import React from 'react';

const suggestions = [
  'How to create a popup?',
  'Optimize my extension',
  'Check permissions',
  'Security tips',
];

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="font-bold">{t("AI Extension Studio")}</h1>
      <nav className="space-x-2 text-sm hidden sm:block">
        {suggestions.map(s => (
          <button key={s} className="text-blue-500 hover:underline" onClick={() => alert(s)}>
            {s}
          </button>
        ))}
      </nav>
    </header>
  );
};
export default Header;
