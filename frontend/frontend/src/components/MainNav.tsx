const navItems = [
  'Главная', 'Каталог', 'Мужское', 'Женское', 'Детское',
  'Обувь', 'Аксессуары', 'Бренды', 'Акции', 'Новинки', 'О нас'
];

const MainNav = () => {
  return (
    <nav className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap gap-4 md:gap-5 justify-start">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="inline-block py-4 text-gray-700 font-medium text-sm hover:text-red-600 border-b-2 border-transparent hover:border-red-600 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;