import { useState } from "react";
import { megaMenuData } from "../data/menuData";
import MegaMenu from "./MegaMenu";

interface HeaderProps {
  cartCount: number;
  favoritesCount: number;
}

const navItems = ["Men", "Women", "Kids", "Brands", "New & Trending"];

const Header = ({ cartCount, favoritesCount }: HeaderProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="header">
      <div className="header-inner">
        {/* LEFT */}
        <div className="header-left">
          <a href="/" className="logo">ABM</a>
        </div>

        {/* CENTER — навигация с мега-меню */}
        <nav className="header-center">
          <ul>
            {navItems.map((item) => (
              <li
                key={item}
                className="nav-item"
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a href="#">{item}</a>
                {activeMenu === item && megaMenuData[item] && (
                  <MegaMenu sections={megaMenuData[item]} />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT (поиск, корзина, избранное) */}
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