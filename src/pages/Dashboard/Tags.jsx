const Tags = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col">
  {/* Header */}
  <header className="bg-white shadow-sm">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-700">
        Product Tags Dashboard
      </h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Add New Tag
      </button>
    </div>
  </header>
  {/* Main Section */}
  <main className="container mx-auto px-6 py-8">
    <h2 className="text-xl font-semibold text-gray-700 mb-6">Your Tags</h2>
    {/* Tags Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Example Tag */}
      <div className="bg-white shadow rounded-lg px-4 py-3 flex justify-between items-center">
        <span className="text-gray-800 font-medium">Summer Sale</span>
        <div className="flex items-center space-x-2">
          <button className="text-sm text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600">
            Edit
          </button>
          <button className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
      {/* Additional Tags */}
      <div className="bg-white shadow rounded-lg px-4 py-3 flex justify-between items-center">
        <span className="text-gray-800 font-medium">Best Sellers</span>
        <div className="flex items-center space-x-2">
          <button className="text-sm text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600">
            Edit
          </button>
          <button className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg px-4 py-3 flex justify-between items-center">
        <span className="text-gray-800 font-medium">New Arrivals</span>
        <div className="flex items-center space-x-2">
          <button className="text-sm text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600">
            Edit
          </button>
          <button className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
      {/* Add New Tag */}
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col justify-center items-center p-6 rounded-lg cursor-pointer hover:border-blue-500">
        <span className="text-gray-500 text-2xl">+</span>
        <p className="text-gray-500 mt-2">Add New Tag</p>
      </div>
    </div>
  </main>
</div>

    </>
  )
}

export default Tags