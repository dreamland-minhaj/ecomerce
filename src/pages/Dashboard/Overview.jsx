const Overview = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col">
  {/* Main Section */}
  <main className="container mx-auto px-6 py-8">
    {/* Metrics Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {/* Card 1 */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-gray-700 text-lg font-semibold">Total Sales</h2>
        <p className="mt-2 text-3xl font-bold text-blue-600">$15,340</p>
        <p className="mt-1 text-sm text-gray-500">This month</p>
      </div>
      {/* Card 2 */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-gray-700 text-lg font-semibold">New Customers</h2>
        <p className="mt-2 text-3xl font-bold text-green-600">245</p>
        <p className="mt-1 text-sm text-gray-500">This month</p>
      </div>
      {/* Card 3 */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-gray-700 text-lg font-semibold">Products Sold</h2>
        <p className="mt-2 text-3xl font-bold text-purple-600">1,098</p>
        <p className="mt-1 text-sm text-gray-500">This month</p>
      </div>
      {/* Card 4 */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-gray-700 text-lg font-semibold">Revenue Growth</h2>
        <p className="mt-2 text-3xl font-bold text-red-600">+12%</p>
        <p className="mt-1 text-sm text-gray-500">Compared to last month</p>
      </div>
    </div>
    {/* Chart and Recent Activity */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Chart Placeholder */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-gray-700 text-lg font-semibold mb-4">
          Sales Overview
        </h2>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
          <span>Chart Placeholder</span>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-gray-700 text-lg font-semibold mb-4">
          Recent Activity
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
              <i className="fas fa-shopping-cart" />
            </div>
            <div>
              <p className="text-gray-700 font-medium">Order #1234 completed</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </li>
          <li className="flex items-center">
            <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
              <i className="fas fa-user" />
            </div>
            <div>
              <p className="text-gray-700 font-medium">
                New customer registered
              </p>
              <p className="text-sm text-gray-500">5 hours ago</p>
            </div>
          </li>
          <li className="flex items-center">
            <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
              <i className="fas fa-box" />
            </div>
            <div>
              <p className="text-gray-700 font-medium">New product added</p>
              <p className="text-sm text-gray-500">1 day ago</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</div>

    </>
  )
}

export default Overview