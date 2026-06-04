// Purpose: Manage all users with role assignment.

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'employee' | 'customer';
  status: 'active' | 'blocked';
  createdAt: string;
}

export default function AdminUsers() {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Replace with actual API call
      // const response = await api.get('/admin/users');
      // setUsers(response.data);
      
      // Demo data
      setUsers([
        { id: 1, name: 'Admin User', email: 'admin@store.com', role: 'admin', status: 'active', createdAt: '2024-01-01' },
        { id: 2, name: 'John Employee', email: 'john@store.com', role: 'employee', status: 'active', createdAt: '2024-01-15' },
        { id: 3, name: 'Jane Customer', email: 'jane@mail.com', role: 'customer', status: 'active', createdAt: '2024-02-01' },
      ]);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId: number, newRole: string) => {
    try {
      // await api.patch(`/admin/users/${userId}/role`, { role: newRole });
      console.log('Change role:', userId, newRole);
      fetchUsers(); // Refresh
    } catch (error) {
      console.error('Error changing role:', error);
    }
  };

  const handleStatusToggle = async (userId: number, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'blocked' : 'active';
    try {
      // await api.patch(`/admin/users/${userId}/status`, { status: newStatus });
      console.log('Toggle status:', userId, newStatus);
      fetchUsers(); // Refresh
    } catch (error) {
      console.error('Error toggling status:', error);
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
      <h1 className="text-2xl font-bold mb-6">{t('admin.users')}</h1>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
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
                  {t('admin.email')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('admin.role')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('admin.status')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('admin.created_at')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('admin.actions')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4 font-medium">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      className="border rounded px-2 py-1"
                    >
                      <option value="admin">Admin</option>
                      <option value="employee">Employee</option>
                      <option value="customer">Customer</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{user.createdAt}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleStatusToggle(user.id, user.status)}
                      className={`px-3 py-1 rounded text-sm ${
                        user.status === 'active' 
                          ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {user.status === 'active' ? t('admin.block') : t('admin.unblock')}
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