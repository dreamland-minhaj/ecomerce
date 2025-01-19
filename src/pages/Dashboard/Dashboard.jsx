import { NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <>
  <div className="flex min-h-screen">
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-4 text-center text-xl font-bold border-b border-gray-700">
      <NavLink
        to="overview"
        className="flex items-center p-2 rounded"
        >
              <span className="material-icons">Dashboard</span>
            </NavLink>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-3">
            <NavLink
              to="products"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <span className="material-icons">All Products</span>
            
            </NavLink>
          </li>
          <li>
            <NavLink
              to="categories"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <span className="material-icons">Categories</span>
              
            </NavLink>
          </li>
          <li>
            <NavLink
              to="brands"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <span className="material-icons">Brands</span>
              
            </NavLink>
          </li>
          <li>
            <NavLink
              to="tags"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <span className="material-icons">Tags</span>
              
            </NavLink>
          </li>
          <li>
            <NavLink
              to="settings"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <span className="material-icons">Settings</span>
              
            </NavLink>
          </li>
          <li className="fixed bottom-0 left-4">
            <a
              href="#"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <span className="material-icons">LogOut</span>
              
            </a>
          </li>
        </ul>
      </nav>
    </aside>
    {/* Main Content */}
    <div className="flex-1 p-6">
      {<Outlet/>}
    </div>
  </div>
    </>
  )
}

export default Dashboard