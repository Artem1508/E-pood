import { useEffect, useState } from "react";
import { getProducts } from "../services/product.service";
import type { Product } from "../types/product.types";
import ProductCard from "./ProductCard";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getRandomProducts = (allProducts: Product[], count: number) => {
    // Перемешиваем массив и берем первые `count` элементов
    const shuffled = [...allProducts];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    getProducts()
      .then((data) => {
      const randomProducts = getRandomProducts(data, 5);
      setProducts(randomProducts);
    })
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
    <div className="products-grid">
      {products.map((p) => (
        <ProductCard key={p.product_id} product={p} />
      ))}
    </div>
  );
}