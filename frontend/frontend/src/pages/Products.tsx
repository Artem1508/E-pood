import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import type { Product } from "../types/Product";
import ProductCard from "./ProductPage";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}