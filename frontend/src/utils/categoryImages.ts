// utils/categoryImages.ts
// Ваши категории из БД
const categories = [
  {"category_id": 1, "category_name": "shoes"},
  {"category_id": 2, "category_name": "pants"},
  {"category_id": 3, "category_name": "shirt"}
];

export const getCategoryNameById = (categoryId: number): string => {
  const category = categories.find(cat => cat.category_id === categoryId);
  return category?.category_name || 'default';
};

export const getCategoryImageByCategoryId = (categoryId: number): string => {
  const categoryName = getCategoryNameById(categoryId);
  return `/images/categories/default/${categoryName}.jpg`;
};

export const getProductImage = (product: any): string => {
  if (product.image_URL && product.image_URL !== '') {
    return product.image_URL;
  }
  
  if (product.product_image && product.product_image !== '') {
    return product.product_image;
  }
  
  if (product.image && product.image !== '') {
    return product.image;
  }
  
  return getCategoryImageByCategoryId(product.category_id);
};