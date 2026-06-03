import { useState, useRef, useEffect } from "react";
import { megaMenuData } from "../Data/menuData";
import MegaMenu from "./MegaMenu";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  cartCount: number;
  favoritesCount: number;
}

// translation keys
const navItems = ["men", "women", "kids", "brands", "new"];

export default function Header({ cartCount, favoritesCount }: HeaderProps) {
  const { t } = useTranslation();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

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

  return (
    <header className="header">
      <div className="header-inner">

        {/* LEFT */}
        <div className="header-left">
          <a href="/" className="logo">{t("logo")}</a>
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
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu(item);
                  }}
                >
                  {t(item)}
                </a>

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

          <div className="cart">
            <span>🛍</span>
            <span className="count">{cartCount}</span>
          </div>

          <div className="favorites">
            <span>❤</span>
            <span className="count">{favoritesCount}</span>
          </div>
        </div>

      </div>
    </header>
  );
}
