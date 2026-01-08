import React, { useState } from 'react'
import AddCategory from './AddCategory'
import EditCategory from './EditCategory'
import CategoryList from './CategoryList'

const MainCategorys = () => {
  const [view, setView] = useState('list');
  const [editingCategory, setEditingCategory] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAddSuccess = () => {
    setView('list');
    setRefreshKey(prev => prev + 1);
  };

  const handleEditSuccess = () => {
    setView('list');
    setRefreshKey(prev => prev + 1);
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setView('edit');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Category Management</h1>
        {view === 'list' && (
          <button
            onClick={() => setView('add')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            + Add Category
          </button>
        )}
      </div>
      
      {view === 'add' && (
        <div className="bg-white rounded-lg shadow p-6">
          <AddCategory onSuccess={handleAddSuccess} onBack={() => setView('list')} />
        </div>
      )}

      {view === 'edit' && (
        <div className="bg-white rounded-lg shadow p-6">
          <EditCategory category={editingCategory} onSuccess={handleEditSuccess} onBack={() => setView('list')} />
        </div>
      )}

      {view === 'list' && (
        <CategoryList key={refreshKey} onEdit={handleEdit} />
      )}
    </div>
  )
}

export default MainCategorys
