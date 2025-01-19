import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "../../App/Feature/productApiSlice";

const Home = () => {
  const {products} = useSelector((state)=>state.product);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllProduct())
  },[dispatch]);
  
  return (
    <>
    <div className="min-h-screen flex flex-col">
  
  <section id="home" className="bg-blue-100 py-16 text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Ecommerce
      </h2>
      <p className="text-gray-600 text-lg mb-6">
        Discover the best products at unbeatable prices.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
        Shop Now
      </button>
    </div>
  </section>
  <main className="flex-grow bg-white py-6 px-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">New Arrivals</h2>
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
  <footer id="contact" className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-6 text-center">
      <p className="text-lg">© 2025 Ecommerce. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-white">
          Facebook
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Twitter
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Instagram
        </a>
      </div>
    </div>
  </footer>
</div>

</>
  )
}

export default Home