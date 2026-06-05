import { useFavorites } from '../contexts/FavoritesContext';
import ProductCard from '../components/ProductCard';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const { favorites } = useFavorites();
  const { t } = useTranslation();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">{t('favorites')}</h1>
        <p className="text-gray-500 mb-8">{t('no_favorites')}</p>
        <Link 
          to="/products" 
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition"
        >
          {t('continue_shopping')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t('favorites')}</h1>
      <div className="products-grid">
        {favorites.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
}