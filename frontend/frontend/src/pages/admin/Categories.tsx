// Purpose: Manage product categories (CRUD operations). 

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Category {
  id: number;
  name: string;
  description: string;
  productCount: number;
}

export default function AdminCategories() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      // Replace with actual API call
      // const response = await api.get('/admin/categories');
      // setCategories(response.data);
      
      // Demo data
      setCategories([
        { id: 1, name: 'Men', description: 'Men clothing', productCount: 45 },
        { id: 2, name: 'Women', description: 'Women clothing', productCount: 52 },
        { id: 3, name: 'Kids', description: 'Kids clothing', productCount: 28 },
      ]);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingCategory) {
        // Update category
        // await api.put(`/admin/categories/${editingCategory.id}`, formData);
        console.log('Update category:', editingCategory.id, formData);
      } else {
        // Create category
        // await api.post('/admin/categories', formData);
        console.log('Create category:', formData);
      }
      setIsModalOpen(false);
      setEditingCategory(null);
      setFormData({ name: '', description: '' });
      fetchCategories(); // Refresh list
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm(t('admin.confirm_delete'))) {
      try {
        // await api.delete(`/admin/categories/${id}`);
        console.log('Delete category:', id);
        fetchCategories(); // Refresh list
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  const openEditModal = (category: Category) => {
    setEditingCategory(category);
    setFormData({ name: category.name, description: category.description });
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C17B5E]"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{t('admin.categories')}</h1>
        <button
          onClick={() => {
            setEditingCategory(null);
            setFormData({ name: '', description: '' });
            setIsModalOpen(true);
          }}
          className="bg-[#C17B5E] text-white px-4 py-2 rounded-lg hover:bg-[#A35C3A] transition"
        >
          + {t('admin.add_category')}
        </button>
      </div>

      {/* Categories Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('admin.id')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('admin.name')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('admin.description')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('admin.products')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('admin.actions')}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4">{category.id}</td>
                <td className="px-6 py-4 font-medium">{category.name}</td>
                <td className="px-6 py-4">{category.description}</td>
                <td className="px-6 py-4">{category.productCount}</td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => openEditModal(category)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">
              {editingCategory ? t('admin.edit_category') : t('admin.add_category')}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">{t('admin.name')}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C17B5E]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">{t('admin.description')}</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C17B5E]"
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  {t('admin.cancel')}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#C17B5E] text-white rounded-lg hover:bg-[#A35C3A]"
                >
                  {editingCategory ? t('admin.update') : t('admin.create')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}