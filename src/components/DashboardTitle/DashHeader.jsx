import { useDispatch } from "react-redux"
import { modalOpen } from "../../App/Feature/productSlice"
import { CiViewList } from "react-icons/ci";
import { MdOutlineViewModule } from "react-icons/md";

import { NavLink } from "react-router-dom";


const DashHeader = ({title,buttonTitle}) => {
    const dispatch = useDispatch()
  return (
    <>
    <header className="bg-white shadow-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-700 ">{title}</h1>
                <div className="flex justify-center ">
                <NavLink to="/dashboard/listview" className="text-3xl align-middle"><CiViewList/></NavLink>
                <span>/</span>
                <NavLink to="/dashboard/products" className="text-3xl align-middle pr-3"><MdOutlineViewModule/></NavLink>
                
                <button onClick={()=>dispatch(modalOpen())} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                {buttonTitle}
                </button>
                </div>
            </div>
        </header>
    </>
  )
}

export default DashHeader