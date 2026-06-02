import type { Product }
from "../types/product.types";

interface Props {
  product: Product;
}

const ProductCard = ({
  product,
}: Props) => {
  return (
    <div>
      <h3>{product.name}</h3>

      <p>
        {product.description}
      </p>

      <p>
        ${product.price}
      </p>
    </div>
  );
};

export default ProductCard;