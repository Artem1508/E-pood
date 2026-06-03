import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Product } from "../types/Product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-200 hover:-translate-y-1 cursor-pointer">
      
      {/* IMAGE */}
      <div className="bg-gray-100 p-4 flex justify-center">
        <img
          src={product.image}
          alt={t("product_image_alt", { name: product.name })}
          className="h-48 w-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>

        <p className="text-red-600 font-bold text-xl mb-3">
          {product.price} €
        </p>

        <Link
          to={`/product/${product.id}`}
          className="block text-center bg-black text-white py-2 rounded-full hover:bg-red-600 transition"
        >
          {t("view_details")}
        </Link>
      </div>
    </div>
  );
}
