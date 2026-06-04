import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log("Changing to:", e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      value={i18n.language}
      onChange={handleLanguageChange}
    >
      <option value="en">EN</option>
      <option value="et">ET</option>
      <option value="ru">RU</option>
      <option value="ar">AR</option>
    </select>
  );
};

export default LanguageSelector;

