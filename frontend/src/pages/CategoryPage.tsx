import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
  isSale?: boolean;
  rating?: number;
}

export default function CategoryPage() {
  const { category, subcategory } = useParams();
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  useEffect(() => {
    // Fetch products from your API or use local images
    fetchProducts();
  }, [category, subcategory]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // Replace with your actual API call
      // const response = await api.get(`/products?category=${category}&subcategory=${subcategory}`);
      
      // Example with local images - REPLACE WITH YOUR ACTUAL IMAGES
      const mockProducts: Product[] = [
        {
          id: 1,
          name: 'Nike Air Max 270',
          price: 150,
          originalPrice: 180,
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
          hoverImage: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500',
          isNew: true,
          rating: 4.5
        },
        {
          id: 2,
          name: 'Jordan Retro 1 High',
          price: 170,
          image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500',
          hoverImage: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500',
          isSale: true,
          rating: 4.8
        },
        {
          id: 3,
          name: 'Adidas Ultraboost',
          price: 180,
          originalPrice: 200,
          image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500',
          isNew: true,
          rating: 4.7
        },
        {
          id: 4,
          name: 'Basketball Shoes Pro',
          price: 120,
          image: 'https://images.unsplash.com/photo-1608227352584-52a9a3e2b6c8?w=500',
          rating: 4.3
        },
        {
          id: 5,
          name: 'Nike Air Force 1',
          price: 110,
          originalPrice: 130,
          image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500',
          isSale: true,
          rating: 4.6
        },
        {
          id: 6,
          name: 'Puma RS-X',
          price: 95,
          image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500',
          rating: 4.4
        },
      ];
      
      setProducts(mockProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C17B5E]"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-[#C17B5E]">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">
          {category?.charAt(0).toUpperCase() + category?.slice(1)}
          {subcategory && ` / ${subcategory}`}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-64 space-y-6">
          <div>
            <h3 className="font-semibold mb-3">{t('category.filter_by_price')}</h3>
            <div className="space-y-2">
              {['all', 'under50', '50-100', '100-200', '200+'].map(price => (
                <label key={price} className="flex items-center gap-2">
                  <input type="radio" name="price" className="text-[#C17B5E]" />
                  <span className="text-sm">
                    {price === 'all' ? 'All Prices' :
                     price === 'under50' ? 'Under $50' :
                     price === '50-100' ? '$50 - $100' :
                     price === '100-200' ? '$100 - $200' : '$200+'}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              {category?.charAt(0).toUpperCase() + category?.slice(1)} 
              {subcategory && ` ${subcategory}`} Collection
            </h1>
            <p className="text-gray-500">{products.length} products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={hoveredProduct === product.id && product.hoverImage ? product.hoverImage : product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.isNew && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                    {product.isSale && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        SALE
                      </span>
                    )}
                  </div>
                  
                  {/* Quick View Button */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
                  
                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex text-yellow-400">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                      </div>
                      <span className="text-xs text-gray-500">({product.rating})</span>
                    </div>
                  )}
                  
                  {/* Price */}
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.originalPrice}
                      </span>
                    )}
                    <span className="text-[#C17B5E] font-bold text-xl">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}