import type { Product } from "../types/Product";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="border p-4 rounded">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h2>{product.name}</h2>
      <p>{product.price} €</p>

      <Link to={`/product/${product.id}`}>
        View
      </Link>
    </div>
  );
}