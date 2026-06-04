import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
}

export default function ProductDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      // Replace with your actual API call
      // const response = await api.get(`/products/${id}`);
      
      // Example with real images - REPLACE WITH YOUR ACTUAL IMAGES
      const mockProduct: Product = {
        id: Number(id),
        name: 'Nike Air Max 270',
        price: 150,
        originalPrice: 180,
        description: 'The Nike Air Max 270 delivers comfort and style with its large Max Air unit. Perfect for everyday wear. The shoe features a breathable mesh upper, foam midsole, and rubber outsole for durability.',
        images: [
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
          'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600',
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600',
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600',
        ],
        colors: ['Black', 'White', 'Red', 'Blue'],
        sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
        rating: 4.5,
        reviews: 128,
        inStock: true,
      };
      
      setProduct(mockProduct);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = () => {
    console.log('Added to cart:', { product, quantity, selectedSize, selectedColor });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C17B5E]"></div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-[#C17B5E]">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/category/men/shoes" className="hover:text-[#C17B5E]">Shoes</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images Gallery */}
        <div className="lg:w-1/2">
          {/* Main Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-contain"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 ${
                  selectedImage === index ? 'border-[#C17B5E]' : 'border-transparent'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="mb-4">
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-lg mr-2">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-3xl font-bold text-[#C17B5E]">${product.price}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Color: {selectedColor || 'Select'}</h3>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg transition ${
                      selectedColor === color
                        ? 'border-[#C17B5E] bg-[#C17B5E] text-white'
                        : 'border-gray-300 hover:border-[#C17B5E]'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Size: {selectedSize || 'Select'}</h3>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border rounded-lg transition ${
                      selectedSize === size
                        ? 'border-[#C17B5E] bg-[#C17B5E] text-white'
                        : 'border-gray-300 hover:border-[#C17B5E]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Quantity</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border rounded-lg hover:bg-gray-100"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border rounded-lg hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            disabled={!product.inStock}
            className="w-full bg-[#C17B5E] text-white py-3 rounded-lg font-semibold hover:bg-[#A35C3A] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>

          {!selectedSize && product.sizes.length > 0 && (
            <p className="text-sm text-red-500 mt-2">Please select a size</p>
          )}
        </div>
      </div>
    </div>
  );
}