interface HeaderProps {
  cartCount: number;
}

const Header = ({ cartCount }: HeaderProps) => {
  return (
    <header className="bg-white py-5 border-b shadow-sm">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
        {/* Логотип */}
        <div className="font-['Playfair_Display'] text-3xl font-extrabold tracking-wide">
          <a href="/" className="text-black hover:text-red-600 transition">ABM</a>
        </div>

        {/* Поиск */}
        <div className="flex-1 max-w-md flex border rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-red-200 focus-within:border-red-500">
          <input
            type="text"
            placeholder="Search for shoes, clothes, brands..."
            className="flex-1 px-4 py-2 outline-none text-sm"
          />
          <button className="px-4 text-gray-500 hover:text-red-600 transition">
            🔍
          </button>
        </div>

        {/* Корзина */}
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition">
          <span className="text-xl">🛒</span>
          <span className="bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full inline-flex items-center justify-center">
            {cartCount}
          </span>
          <span className="font-medium">Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;