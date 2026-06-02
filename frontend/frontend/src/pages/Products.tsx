import {
  useEffect,
  useState,
} from "react";

import {
  getProducts,
} from "../services/product.service";

import ProductCard
from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] =
    useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts =
    async () => {
      const data =
        await getProducts();

      setProducts(data);
    };

  return (
    <div>
      <h1>Products</h1>

      {products.map((product: any) => (
        <ProductCard
          key={product.product_id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;