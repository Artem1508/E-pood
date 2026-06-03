import { useState, useRef, useEffect } from "react";
import { megaMenuData } from "../data/menuData";
import MegaMenu from "./MegaMenu";

interface HeaderProps {
  cartCount: number;
  favoritesCount: number;
}

const navItems = ["Men", "Women", "Kids", "Brands", "New & Trending"];

const Header = ({ cartCount, favoritesCount }: HeaderProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // Закрытие при клике вне навигации
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (item: string) => {
    setActiveMenu(activeMenu === item ? null : item);
  };

  const handleLinkClick = () => {
    setActiveMenu(null); // закрываем после клика по ссылке внутри меню
  };

  return (
    <header className="header">
      <div className="header-inner">
        {/* LEFT */}
        <div className="header-left">
          <a href="/" className="logo">ABM</a>
        </div>

        {/* CENTER навигация */}
        <nav className="header-center" ref={navRef}>
          <ul>
            {navItems.map((item) => (
              <li key={item} className="nav-item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu(item);
                  }}
                >
                  {item}
                </a>
                {activeMenu === item && megaMenuData[item] && (
                  <MegaMenu sections={megaMenuData[item]} onLinkClick={handleLinkClick} />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT */}
        <div className="header-right">
          <div className="search">
            <input type="text" placeholder="Search..." />
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
};

export default Header;