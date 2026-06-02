const TopBar = () => {
  return (
    <div className="bg-black text-gray-300 text-xs py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="space-x-2">
          <a href="#" className="text-white font-semibold">EN</a>
          <span>/</span>
          <a href="#" className="hover:text-white">RU</a>
          <span>/</span>
          <a href="#" className="hover:text-white">ET</a>
        </div>
        <div className="space-x-2">
          <a href="#" className="hover:text-white">Sign In</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;