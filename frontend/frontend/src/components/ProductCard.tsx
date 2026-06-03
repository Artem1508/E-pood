import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Product } from "../types/product.types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { t } = useTranslation();

  return (
    <div className="w-[280px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer border border-gray-200"
        style={{
          width: '280px',
          borderRadius: '32px',
          overflow: 'hidden',
          transition: 'all 0.2s ease',
          border: '1px solid #e5e7eb'
        }}
    >
      
      {/* IMAGE - жёстко фиксируем размеры */}
      <div  
        className="product-card-img-container"
        style={{ width: '260px', margin: '0 auto', height: '260px' }}
      >

        <img
          src={product.image_URL}
          alt={product.name}
          className="product-card-img"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 border-t border-gray-100">
        <h3 className="font-semibold text-lg mb-1 text-black"
        style={{ paddingLeft: '10px', paddingRight: '20px' }}>
          {product.name}
        </h3>

        <p className="font-bold text-xl mb-3 text-black"
        style={{ paddingLeft: '10px', paddingRight: '20px' }} >
          {product.price} €
        </p>
      </div>

    </div>
  );
}