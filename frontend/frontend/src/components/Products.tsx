import { useEffect, useState } from "react";
import { getProducts } from "../services/product.service";
import type { Product } from "../types/product.types";
import ProductCard from "./ProductCard";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        {t("loading_products")}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        {t("no_products")}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((p) => (
        <ProductCard key={p.product_id} product={p} />
      ))}
    </div>
  );
}
