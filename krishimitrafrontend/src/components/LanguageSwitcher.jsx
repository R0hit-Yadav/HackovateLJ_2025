import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={changeLanguage} className="language-dropdown">
      <option value="en">🇺🇸 English</option>
      <option value="hi">🇮🇳 हिंदी</option>
    </select>
  );
};

export default LanguageSwitcher;
