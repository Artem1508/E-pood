import { useState, useRef } from "react";
import { megaMenuData } from "../data/menuData";
import MegaMenu from "./MegaMenu";

const navItems = ["Men", "Women", "Kids", "Brands", "New & Trending"];

export default function Header({ cartCount, favoritesCount }: any) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const openMenu = (item: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(item);
  };

  const closeMenu = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 150); // 🔥 задержка решает ВСЁ
  };

  return (
    <header className="header">
      <div className="header-inner">

        {/* LEFT */}
        <div className="header-left">
          <a href="/" className="logo">ABM</a>
        </div>

        {/* CENTER */}
        <nav className="header-center">
          <ul>
            {navItems.map((item) => (
              <li
                key={item}
                className="nav-item"
                onMouseEnter={() => openMenu(item)}
                onMouseLeave={closeMenu}
              >
                <a href="#">{item}</a>

                {activeMenu === item && megaMenuData[item] && (
                  <div
                    className="mega-menu"
                    onMouseEnter={() => openMenu(item)}
                    onMouseLeave={closeMenu}
                  >
                    <MegaMenu sections={megaMenuData[item]} />
                  </div>
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
}