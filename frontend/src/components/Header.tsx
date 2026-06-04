import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { megaMenuData } from "../data/menuData";
import MegaMenu from "./MegaMenu";
import { useTranslation } from "react-i18next";
import { getCurrentUser, isAuthenticated, logout } from "../services/auth.service";

interface HeaderProps {
  cartCount: number;
  favoritesCount: number;
}

// translation keys
const navItems = ["men", "women", "kids", "brands", "new"];

export default function Header({ cartCount, favoritesCount }: HeaderProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const userMenuRef = useRef<HTMLDivElement | null>(null);

  // Проверяем авторизацию при загрузке
  useEffect(() => {
    setIsAuthenticatedState(isAuthenticated());
    setUser(getCurrentUser());
  }, []);

  // close user menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // hover open with delay (smooth UX)
  const openMenu = (item: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(item);
  };

  const closeMenu = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  // click toggle (useful for mobile)
  const toggleMenu = (item: string) => {
    setActiveMenu(activeMenu === item ? null : item);
  };

  const handleLinkClick = () => {
    setActiveMenu(null);
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticatedState(false);
    setUser(null);
    setIsUserMenuOpen(false);
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-inner">

        {/* LEFT */}
        <div className="header-left">
          <Link to="/" className="logo">{t("logo")}</Link>
        </div>

        {/* CENTER */}
        <nav className="header-center" ref={navRef}>
          <ul>
            {navItems.map((item) => (
              <li
                key={item}
                className="nav-item"
                onMouseEnter={() => openMenu(item)}
                onMouseLeave={closeMenu}
              >
                <Link
                  to={`/category/${item}`}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu(item);
                  }}
                >
                  {t(item)}
                </Link>

                {activeMenu === item && megaMenuData[item] && (
                  <MegaMenu
                    sections={megaMenuData[item]}
                    onLinkClick={handleLinkClick}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT */}
        <div className="header-right">
          <div className="search">
            <input type="text" placeholder={t("search")} />
            <span>⚲</span>
          </div>

          {/* User Menu - НОВАЯ ЧАСТЬ */}
          {isAuthenticatedState ? (
            <div className="user-menu" ref={userMenuRef}>
              <button
                className="user-menu-btn"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <div className="user-avatar">
                  {user?.full_name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <span className="user-name">
                  {user?.full_name?.split(' ')[0] || 'User'}
                </span>
                <span className="user-arrow">▼</span>
              </button>

              {isUserMenuOpen && (
                <div className="user-dropdown">
                  <div className="user-info">
                    <p className="user-fullname">{user?.full_name}</p>
                    <p className="user-email">{user?.email}</p>
                  </div>
                  <div className="dropdown-divider"></div>
                  <Link to="/profile" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                    👤 {t("profile")}
                  </Link>
                  <Link to="/orders" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                    📦 {t("orders")}
                  </Link>
                  <Link to="/favorites" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                    ❤ {t("favorites")}
                  </Link>
                  {user?.role_id === 1 && (
                    <>
                      <div className="dropdown-divider"></div>
                      <Link to="/dashboard" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                        ⚙️ {t("admin_panel")}
                      </Link>
                    </>
                  )}
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item logout" onClick={handleLogout}>
                    🚪 {t("logout")}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="auth-btn login-btn">
                {t("sign_in")}
              </Link>
              <Link to="/register" className="auth-btn register-btn">
                {t("sign_up")}
              </Link>
            </div>
          )}

          <Link to="/cart" className="cart">
            <span>🛍</span>
            <span className="count">{cartCount}</span>
          </Link>

          <Link to="/favorites" className="favorites">
            <span>❤</span>
            <span className="count">{favoritesCount}</span>
          </Link>
        </div>

      </div>
    </header>
  );
}