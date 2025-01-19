import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "../../App/Feature/productApiSlice";

const Shop = () => {
  const {products} = useSelector((state)=>state.product);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getAllProduct())
    },[dispatch]);
  return (
    <>
  <div className="min-h-screen flex">
  <aside className="w-64 bg-gray-100 shadow-md py-6 px-4">
    <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Categories</h3>
      <ul className="space-y-2">
        <li>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600 mr-2"
            />
            Electronics
          </label>
        </li>
        <li>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600 mr-2"
            />
            Clothing
          </label>
        </li>
        <li>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600 mr-2"
            />
            Home &amp; Living
          </label>
        </li>
        <li>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600 mr-2"
            />
            Beauty Products
          </label>
        </li>
      </ul>
    </div>
 
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Price Range</h3>
      <input type="range" min={0} max={1000} className="w-full" />
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>0 TK</span>
        <span>1000 TK</span>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Ratings</h3>
      <ul className="space-y-2">
        
        <li key="{rating}">
          <label className="flex items-center">
            <input
              type="radio"
              name="rating"
              className="form-radio text-blue-600 mr-2"
            />
            <span className="flex items-center">
              <span className="text-gray-400 ml-1">and up</span>
            </span>
          </label>
        </li>
      </ul>
    </div>

    <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
      Apply Filters
    </button>
  </aside>

  <main className="flex-grow bg-white py-6 px-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((item)=>{
      return(
        <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={item.photo}
        alt="Product Image"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{item.productName}</h3>
        <p className="text-gray-600">Price: {item.productPrice}</p>
        <div className="mt-4 flex justify-between items-center">
          <button className="text-sm text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600">
            Add to Cart
          </button>
          <button className="text-sm text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
            Details
          </button>
        </div>
      </div>
    </div>
      )
    })}
    </div>
    
  </main>
</div>


    </>
  )
}
export default Shop