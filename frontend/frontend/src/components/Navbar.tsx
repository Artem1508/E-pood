import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/products" style={{ marginRight: 10 }}>Products</Link>
      <Link to="/cart" style={{ marginRight: 10 }}>Cart</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}