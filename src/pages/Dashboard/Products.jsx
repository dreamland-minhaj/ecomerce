import { useDispatch, useSelector } from "react-redux"
import Modal from "../../components/Modals/Modal";
import { loadingStart, modalClose, modalOpen, updateModalClose, updateModalOpen } from "../../App/Feature/productSlice";
import { useEffect, useState } from "react";
import { addNewProduct, deleteProduct, getAllProduct, updateProduct } from "../../App/Feature/productApiSlice";
import { cloudImageUpload } from "../../utils/helper";
import Loader from "../../components/Loader/Loader";
import DashHeader from "../../components/DashboardTitle/DashHeader";
import Swal from "sweetalert2";

const Products = () => {
  const { isModalOpen, updateModal, products, loading } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);

  // Separate states for Create and Update
  const [createInput, setCreateInput] = useState({
    productName: "",
    productPrice: "",
    category: "",
    brand: "",
    stock: "",
  });
  const [updateInput, setUpdateInput] = useState({
    productName: "",
    productPrice: "",
    category: "",
    brand: "",
    stock: "",
    photo: "",
  });

  // Handle inputs for Create Product
  const handleCreateInputChange = (e) => {
    setCreateInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle inputs for Update Product
  const handleUpdateInputChange = (e) => {
    setUpdateInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission for Create Product
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(loadingStart());
    const filedata = await cloudImageUpload({
      fileName: file,
      preset: "webcoder_minhaj",
      cloudName: "webcoder-minhaj",
    });
    dispatch(addNewProduct({ ...createInput, photo: filedata.secure_url }));

    // Reset the create input state
    setCreateInput({
      productName: "",
      productPrice: "",
      category: "",
      brand: "",
      stock: "",
    });

    dispatch(modalClose());
  };

  // Handle Product Edit
  const handleProductEdit = (id) => {
    const productToEdit = products.find((data) => data.id === id);
    if (productToEdit) {
      setUpdateInput(productToEdit); // Populate updateInput with the selected product
      dispatch(updateModalOpen());
    }
  };

  // Handle Product Update
  let photoUrl = createInput.photo;
  const handleProductUpdate = async (e) => {
    e.preventDefault();
    dispatch(loadingStart());
     const fileData = await cloudImageUpload({
          fileName: file,
          preset: "webcoder_minhaj",
          cloudName: "webcoder-minhaj",
        });

        photoUrl = fileData.secure_url;

    dispatch(updateProduct({ ...updateInput, photo:photoUrl }));
    dispatch(updateModalClose());
  };

  // Fetch all products
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const handelProductDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <>
      <Loader isLoadingOn={loading} />

      {/* Create Product Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => dispatch(modalClose())}
        title={"Create Products"}
      >
        <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
  {/* Product Name */}
  <div className="mb-4">
    <label
      htmlFor="productName"
      className="block text-sm font-medium text-gray-700"
    >
      Product Name
    </label>
    <input
      type="text"
      onChange={handleCreateInputChange}
      value={createInput.productName}
      name="productName"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter product name"
      required=""
    />
  </div>
  {/* Product Price */}
  <div className="mb-4">
    <label
      htmlFor="productPrice"
      className="block text-sm font-medium text-gray-700"
    >
      Product Price
    </label>
    <input
      type="number"
      onChange={handleCreateInputChange}
      value={createInput.productPrice}
      name="productPrice"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter product price"
      required=""
    />
  </div>
  {/* Select Category */}
  <div className="mb-4">
    <label
      htmlFor="category"
      className="block text-sm font-medium text-gray-700"
    >
      Category
    </label>
    <select
      onChange={handleCreateInputChange}
      value={createInput.category}
      name="category"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      required=""
    >
      <option value="" disabled="" selected="">
        Select a category
      </option>
      <option value="electronics">Electronics</option>
      <option value="fashion">Fashion</option>
      <option value="home-appliances">Home Appliances</option>
      <option value="books">Books</option>
      <option value="toys">Toys</option>
    </select>
  </div>
  {/* Select Brand */}
  <div className="mb-4">
    <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
      Brand
    </label>
    <select
      onChange={handleCreateInputChange}
      value={createInput.brand}
      name="brand"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      required=""
    >
      <option value="" disabled="" selected="">
        Select a brand
      </option>
      <option value="samsung">Samsung</option>
      <option value="apple">Apple</option>
      <option value="sony">Sony</option>
      <option value="nike">Nike</option>
      <option value="adidas">Adidas</option>
    </select>
  </div>
  {/* Stock */}
  <div className="mb-4">
    <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
      Stock
    </label>
    <input
      type="number"
      onChange={handleCreateInputChange}
      value={createInput.stock}
      name="stock"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter stock quantity"
      required=""
    />
  </div>
  {/* Product Image */}
  <div className="mb-6">
    <label
      htmlFor="productImage"
      className="block text-sm font-medium text-gray-700"
    >
      Product Image
    </label>
    <input
      type="file"
      onChange={(e)=>setFile(e.target.files[0])}
      name="productImage"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      accept="image/*"
      required=""
    />
  </div>
  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Create Product
  </button>
        </form>
      </Modal>

      {/* Update Product Modal */}
      <Modal
        isOpen={updateModal}
        onClose={() => dispatch(updateModalClose())}
        title={"Update Products"}
      >
       <form onSubmit={handleProductUpdate} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
  {/* Product Name */}
  <div className="mb-4">
    <label
      htmlFor="productName"
      className="block text-sm font-medium text-gray-700"
    >
      Product Name
    </label>
    <input
      type="text"
      onChange={handleUpdateInputChange}
      value={updateInput.productName}
      name="productName"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter product name"
      required=""
    />
  </div>
  {/* Product Price */}
  <div className="mb-4">
    <label
      htmlFor="productPrice"
      className="block text-sm font-medium text-gray-700"
    >
      Product Price
    </label>
    <input
      type="number"
      onChange={handleUpdateInputChange}
      value={updateInput.productPrice}
      name="productPrice"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter product price"
      required=""
    />
  </div>
  {/* Select Category */}
  <div className="mb-4">
    <label
      htmlFor="category"
      className="block text-sm font-medium text-gray-700"
    >
      Category
    </label>
    <select
      onChange={handleUpdateInputChange}
      value={updateInput.category}
      name="category"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      required=""
    >
      <option value="" disabled="" selected="">
        Select a category
      </option>
      <option value="electronics">Electronics</option>
      <option value="fashion">Fashion</option>
      <option value="home-appliances">Home Appliances</option>
      <option value="books">Books</option>
      <option value="toys">Toys</option>
    </select>
  </div>
  {/* Select Brand */}
  <div className="mb-4">
    <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
      Brand
    </label>
    <select
      onChange={handleUpdateInputChange}
      value={updateInput.brand}
      name="brand"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      required=""
    >
      <option value="" disabled="" selected="">
        Select a brand
      </option>
      <option value="samsung">Samsung</option>
      <option value="apple">Apple</option>
      <option value="sony">Sony</option>
      <option value="nike">Nike</option>
      <option value="adidas">Adidas</option>
    </select>
  </div>
  {/* Stock */}
  <div className="mb-4">
    <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
      Stock
    </label>
    <input
      type="number"
      onChange={handleUpdateInputChange}
      value={updateInput.stock}
      name="stock"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter stock quantity"
      required=""
    />
  </div>
  {/* Product Image */}
  <div className="mb-6">
    <label
      htmlFor="productImage"
      className="block text-sm font-medium text-gray-700"
    >
      Product Image
    </label>
    <input
      type="file"
      onChange={(e)=>setFile(e.target.files[0])}
      name="productImage"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      accept="image/*"
      required=""
    />
  </div>
  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Update Product
  </button>
        </form>
      </Modal>
      <div className="min-h-screen flex flex-col">
    {/* Header */}
    <DashHeader title={"All Products"} buttonTitle={"Add New Product"}/>
    {/* Main Section */}
    <main className="container mx-auto px-6 py-8">
      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(-1).map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img
              className="w-full h-32 object-cover"
              src={item.photo}
              alt="Product Image"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.productName}
              </h3>
              <p className="text-gray-600">Price: {item.productPrice} TK</p>
              <p className="text-sm text-gray-500 mt-2">Stock: {item.stock} pcs</p>
              <div className="mt-4 flex items-center justify-between">
                <button onClick={()=>handleProductEdit(item.id)} className="text-sm text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600">
                  Edit
                </button>
                <button onClick={()=>handelProductDelete(item.id)} className="text-sm text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        <div onClick={()=>dispatch(modalOpen())} className="bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col justify-center items-center p-6 rounded-lg cursor-pointer hover:border-blue-500">
          <span className="text-gray-500 text-2xl">+</span>
          <p className="text-gray-500 mt-2">Add New Product</p>
        </div>
        {/* Additional Product Cards */}
        {products.slice(0,-1).map((item)=>{
          return(
            <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
          <img
            className="w-full h-32 object-cover"
            src={item.photo}
            alt="Product Image"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.productName}
            </h3>
            <p className="text-gray-600">Price: {item.productPrice} TK</p>
            <p className="text-sm text-gray-500 mt-2">Stock: {item.stock} pcs</p>
            <div className="mt-4 flex items-center justify-between">
              <button onClick={()=>handleProductUpdate(item.id)} className="text-sm text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600">
                Edit
              </button>
              <button onClick={()=>handelProductDelete(item.id)} className="text-sm text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                Delete
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

export default Products