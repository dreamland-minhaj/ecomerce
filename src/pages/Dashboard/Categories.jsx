const Categories = () => {
  return (
    <>
  <div className="min-h-screen flex flex-col">
    {/* Header */}
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-700">
          All Categories
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add New Category
        </button>
      </div>
    </header>
    {/* Main Section */}
    <main className="container mx-auto px-6 py-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        Your Categories
      </h2>
      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Example Category Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Electronics</h3>
            <div className="flex items-center space-x-2">
              <button className="text-sm text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600">
                Edit
              </button>
              <button className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
          <p className="text-gray-600 mt-2">25 products</p>
        </div>
        {/* Add Category Card */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col justify-center items-center p-6 rounded-lg cursor-pointer hover:border-blue-500">
          <span className="text-gray-500 text-2xl">+</span>
          <p className="text-gray-500 mt-2">Add New Category</p>
        </div>
        {/* Additional Category Cards */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Clothing</h3>
            <div className="flex items-center space-x-2">
              <button className="text-sm text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600">
                Edit
              </button>
              <button className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
          <p className="text-gray-600 mt-2">15 products</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              Home Appliances
            </h3>
            <div className="flex items-center space-x-2">
              <button className="text-sm text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600">
                Edit
              </button>
              <button className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
          <p className="text-gray-600 mt-2">10 products</p>
        </div>
      </div>
    </main>
  </div>
</>
  )
}

export default Categories