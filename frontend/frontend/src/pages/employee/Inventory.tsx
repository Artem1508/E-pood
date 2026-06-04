// Purpose: Manage product inventory (stock levels).

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface InventoryItem {
  id: number;
  name: string;
  sku: string;
  stock: number;
  minStock: number;
  maxStock: number;
  location: string;
  status: 'in_stock' | 'low_stock' | 'out_of_stock';
}

export default function EmployeeInventory() {
  const { t } = useTranslation();
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      // Replace with actual API call
      // const response = await api.get('/employee/inventory');
      // setInventory(response.data);
      
      // Demo data
      setInventory([
        { id: 1, name: 'Classic T-Shirt', sku: 'TS-001', stock: 45, minStock: 10, maxStock: 100, location: 'A1', status: 'in_stock' },
        { id: 2, name: 'Summer Dress', sku: 'DR-002', stock: 8, minStock: 10, maxStock: 50, location: 'B2', status: 'low_stock' },
        { id: 3, name: 'Kids Sneakers', sku: 'SN-003', stock: 0, minStock: 5, maxStock: 30, location: 'C3', status: 'out_of_stock' },
      ]);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStock = async (id: number, newStock: number) => {
    try {
      // await api.patch(`/employee/inventory/${id}`, { stock: newStock });
      console.log('Update stock:', id, newStock);
      fetchInventory(); // Refresh
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_stock': return 'bg-green-100 text-green-800';
      case 'low_stock': return 'bg-yellow-100 text-yellow-800';
      case 'out_of_stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
      <h1 className="text-2xl font-bold mb-6">{t('employee.inventory_management')}</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm">{t('employee.total_products')}</p>
          <p className="text-2xl font-bold">{inventory.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm">{t('employee.low_stock_items')}</p>
          <p className="text-2xl font-bold text-yellow-600">
            {inventory.filter(i => i.status === 'low_stock').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-sm">{t('employee.out_of_stock')}</p>
          <p className="text-2xl font-bold text-red-600">
            {inventory.filter(i => i.status === 'out_of_stock').length}
          </p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('employee.product')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('employee.sku')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('employee.current_stock')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('employee.min_stock')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('employee.location')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('employee.status')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('employee.actions')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {inventory.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 font-medium">{item.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{item.sku}</td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      value={item.stock}
                      onChange={(e) => updateStock(item.id, parseInt(e.target.value))}
                      className="w-20 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#C17B5E]"
                    />
                  </td>
                  <td className="px-6 py-4">{item.minStock}</td>
                  <td className="px-6 py-4">{item.location}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(item.status)}`}>
                      {item.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => updateStock(item.id, item.minStock * 2)}
                      className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                    >
                      {t('employee.restock')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}