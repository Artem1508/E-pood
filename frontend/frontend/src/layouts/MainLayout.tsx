import { Outlet, Link, useNavigate } from "react-router-dom";
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { getCurrentUser, isAuthenticated, logout } from '../services/auth.service';

export default function MainLayout() {
  const navigate = useNavigate();
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    // Проверяем авторизацию
    setIsAuthenticatedState(isAuthenticated());
    setUser(getCurrentUser());
    
    // Загружаем корзину и избранное (если есть)
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setCartCount(cart.length);
    setFavoritesCount(favorites.length);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
    window.location.reload(); // Обновляем страницу для обновления состояния
  };

  return (
    <>
      <TopBar />
      <Header 
        cartCount={cartCount}
        favoritesCount={favoritesCount}
      />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}