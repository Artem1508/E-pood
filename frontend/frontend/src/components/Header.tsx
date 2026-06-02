interface HeaderProps {
  cartCount: number;
}

const navItems = [
  'Men', 'Women', 'Kids', 'Brands', 'New & Trending'
];

const Header = ({ cartCount }: HeaderProps) => {
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
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT */}
        <div className="header-right">

          <div className="search">
            <input type="text" placeholder="Search..." />
            <span>🔍</span>
          </div>

          <div className="cart">
            <span>🛒</span>
            <span className="count">{cartCount}</span>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;