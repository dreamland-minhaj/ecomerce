const Brands = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col">
  {/* Header */}
  <header className="bg-white shadow-sm">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-700">Brands</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Add New Brand
      </button>
    </div>
  </header>
  {/* Main Section */}
  <main className="container mx-auto px-6 py-8">
    <h2 className="text-xl font-semibold text-gray-700 mb-6">Your Brands</h2>
    {/* Brand Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Example Brand Card */}
      <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Brand Logo"
          className="w-20 h-20 object-cover rounded-full mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">Brand Name</h3>
        <div className="mt-4 flex items-center justify-between space-x-2">
          <button className="text-sm text-white bg-green-500 px-4 py-1 rounded hover:bg-green-600">
            Edit
          </button>
          <button className="text-sm text-white bg-red-500 px-4 py-1 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
      {/* Add Brand Card */}
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col justify-center items-center p-6 rounded-lg cursor-pointer hover:border-blue-500">
        <span className="text-gray-500 text-2xl">+</span>
        <p className="text-gray-500 mt-2">Add New Brand</p>
      </div>
      {/* Additional Brand Cards */}
      <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Brand Logo"
          className="w-20 h-20 object-cover rounded-full mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">Another Brand</h3>
        <div className="mt-4 flex items-center justify-between space-x-2">
          <button className="text-sm text-white bg-green-500 px-4 py-1 rounded hover:bg-green-600">
            Edit
          </button>
          <button className="text-sm text-white bg-red-500 px-4 py-1 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Brand Logo"
          className="w-20 h-20 object-cover rounded-full mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">Third Brand</h3>
        <div className="mt-4 flex items-center justify-between space-x-2">
          <button className="text-sm text-white bg-green-500 px-4 py-1 rounded hover:bg-green-600">
            Edit
          </button>
          <button className="text-sm text-white bg-red-500 px-4 py-1 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  </main>
    </div>
    </>
  )
}

export default Brands