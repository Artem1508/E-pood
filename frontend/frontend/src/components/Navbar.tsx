import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation();

  // Read token from localStorage (real authentication)
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload(); // refresh UI
  };

  return (
    <nav>
      <Link to="/about">
        {t("about")}
      </Link>

      {token ? (
        <>
          <span>{t("hello")}, Baddar</span>

          <Link to="/dashboard">
            {t("dashboard")}
          </Link>

          <button onClick={logout}>
            {t("logout")}
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            {t("signin")}
          </Link>

          <Link to="/register">
            {t("signup")}
          </Link>
        </>
      )}
    </nav>
  );
}
