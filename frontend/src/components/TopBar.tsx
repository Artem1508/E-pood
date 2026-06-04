import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const TopBar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="topbar">
      <div className="topbar-container">

        {/* LANGUAGE SELECTOR */}
        <select
          className="language-select"
          value={i18n.language}
          onChange={handleLanguageChange}
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="et">ET</option>
          <option value="ar">AR</option>
        </select>

        {/* AUTH LINKS */}
        <div className="auth-links">
          <Link to="/login">{t("signin")}</Link>
          <span>|</span>
          <Link to="/register">{t("signup")}</Link>
          <span>|</span>
          <Link to="/about">{t("about")}</Link>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
