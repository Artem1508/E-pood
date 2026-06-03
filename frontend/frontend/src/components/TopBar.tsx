const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">

        <select
          className="language-select"
          defaultValue="en"
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="et">ET</option>
          <option value="ar">AR</option>
        </select>

        <div className="auth-links">
          <a href="#">Sign In</a>
          <span>|</span>
          <a href="#">Sign Up</a>
          <span>|</span>
          <a href="#">About us</a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;