const categories = [
  {"category_id": 1, "category_name": "shoes"},
  {"category_id": 2, "category_name": "pants"},
  {"category_id": 3, "category_name": "shirt"}
];

// Функция получения имени категории по ID
export const getCategoryNameById = (categoryId: number): string => {
  const category = categories.find(cat => cat.category_id === categoryId);
  return category?.category_name || 'default';
};

// Функция получения изображения по ID категории
export const getCategoryImage = (categoryId: number): string => {
  const categoryName = getCategoryNameById(categoryId);
  return `/images/categories/default/${categoryName}.jpg`;
};