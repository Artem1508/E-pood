import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { isAuthenticated, getCurrentUser, logout } from "../services/auth.service";

const TopBar = () => {
  const { t, i18n } = useTranslation();

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setIsAuth(isAuthenticated());
    setUser(getCurrentUser());
  }, []);
  const handleLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    i18n.changeLanguage(e.target.value);
  };
  const handleLogout = () => {
    logout();
    setIsAuth(false);
    setUser(null);
    window.location.reload();
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
          {!isAuth ? (
            <>
              <Link to="/login">{t("signin")}</Link>
              <span>|</span>
              <Link to="/register">{t("signup")}</Link>
              <span>|</span>
              <Link to="/about">{t("about")}</Link>
            </>
          ) : (
            <>
              <span className="auth-links-user">
                {user?.full_name || user?.name || 'User'}
              </span>
              <span>|</span>
              <Link to="/" onClick={handleLogout}>
                {t("Log Out")}
              </Link>
              <span>|</span>
              <Link to="/about">{t("about")}</Link>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default TopBar;
