import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Product } from "../types/product.types";
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { useAuth } from '../contexts/AuthContext';
import { getProductImage } from '../utils/categoryImages';



export default function ProductCard({ product }) {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { isAuthenticated } = useAuth();
  const imageUrl = getProductImage(product);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert(t('please_login_first'));
      return;
    }
    addToCart(product, 1);
    alert(t('added_to_cart'));
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert(t('please_login_first'));
      return;
    }
    toggleFavorite(product);
  };

  const isProductFavorite = isFavorite(product.product_id);
  console.log('Product category:', product.category);
  console.log('Image URL:', imageUrl);
  return (
    <Link to={`/product/${product.product_id}`} className="w-[220px] min-w-[220px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer border border-gray-200"
        style={{
          width: '280px',
          borderRadius: '32px',
          overflow: 'hidden',
          transition: 'all 0.2s ease',
          border: '1px solid #e5e7eb'
        }}
    >
      
      <div  
        className="product-card-img-container"
        style={{ width: '260px', margin: '0 auto', height: '260px' }}
      >

        <img
          src={imageUrl}
          alt={product.name}
          className="product-card-img"
        />
      </div>

        <div style={{ padding: '16px', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          gap: '8px',
          marginBottom: '12px'
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '600', 
            color: 'black',
            margin: 0,
            flex: 1,
            lineHeight: '1.3'
          }}>
            {product.name}
          </h3>
          <button
            onClick={handleToggleFavorite}
            style={{
              flexShrink: 0,
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {isProductFavorite ? (
              <span style={{ fontSize: '20px', color: '#ef4444' }}>❤️</span>
            ) : (
              <span style={{ fontSize: '20px', color: '#9ca3af' }}>🤍</span>
            )}
          </button>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '8px'
        }}>
          <p style={{ 
            fontWeight: 'bold', 
            fontSize: '20px', 
            color: '#111827',
            margin: 0
          }}>
            {product.price} €
          </p>
          <button
            onClick={handleAddToCart}
            style={{
              flexShrink: 0,
              backgroundColor: '#111827',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <span>🛒</span>
            <span style={{ display: 'inline' }}>{t('buy')}</span>
          </button>
        </div>
      </div>
    </Link>
  );
}