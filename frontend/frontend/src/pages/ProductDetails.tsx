import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getProductById } from "../services/product.service";
import type { Product } from "../types/Product";

export default function ProductDetails() {
  const { id } = useParams();
  const { t } = useTranslation();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);

      getProductById(Number(id))
        .then(setProduct)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-12 text-gray-500">
        {t("loading_product")}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12 text-gray-500">
        {t("product_not_found")}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">

        {/* IMAGE */}
        <div className="md:w-1/2 bg-gray-100 rounded-2xl p-8 flex justify-center items-center">
          <img
            src={product.image}
            alt={t("product_image_alt", { name: product.name })}
            className="max-w-full h-auto max-h-96 object-contain"
          />
        </div>

        {/* DETAILS */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-2xl text-red-600 font-bold mb-4">
            {product.price} €
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-red-600 transition">
            {t("add_to_cart")}
          </button>
        </div>

      </div>
    </div>
  );
}