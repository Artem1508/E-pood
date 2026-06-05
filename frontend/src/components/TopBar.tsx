import { useTranslation } from "react-i18next";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { isAuthenticated, getCurrentUser, logout } from "../services/auth.service";

const TopBar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setIsAuth(isAuthenticated());
    setUser(getCurrentUser());
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleLogout = () => {
    logout();
    setIsAuth(false);
    setUser(null);
    window.location.reload();
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Если мы не на главной странице - сначала переходим на главную
    if (location.pathname !== '/') {
      navigate('/');
      // Даем время на загрузку страницы, затем скроллим
      setTimeout(() => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Если уже на главной - просто скроллим
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
              <a href="#" onClick={handleAboutClick} className="about-link">
                {t("about")}
              </a>
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
              <a href="#" onClick={handleAboutClick} className="about-link">
                {t("about")}
              </a>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default TopBar;