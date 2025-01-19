import { useSelector } from "react-redux"
import DashHeader from "../../components/DashboardTitle/DashHeader"

const ListView = () => {
    const {products} = useSelector((state)=>state.product);
  return (
    <>
    <div className="min-h-screen flex flex-col">
        {/* Header */}
        <DashHeader title={"All Products"}  buttonTitle={"Add New Product"}/>
        {/* Main Section */}
        <div className="container mx-auto px-4 w-[100%] py-4">
        <div className="overflow-x-auto bg-white shadow rounded-lg">
            <table className="min-w-full border-collapse border border-gray-200">
            <thead>
                <tr className="bg-gray-100">
                <th className="text-left px-6 py-3 border-b border-gray-200 text-gray-600 text-sm uppercase">
                    #
                </th>
                <th className="text-left px-6 py-3 border-b border-gray-200 text-gray-600 text-sm uppercase">
                    Name
                </th>
                <th className="text-left px-6 py-3 border-b border-gray-200 text-gray-600 text-sm uppercase">
                    Price
                </th>
                <th className="text-left px-6 py-3 border-b border-gray-200 text-gray-600 text-sm uppercase">
                    Stock
                </th>
                <th className="text-left px-6 py-3 border-b border-gray-200 text-gray-600 text-sm uppercase">
                   Photo
                </th>
                <th className="text-left px-6 py-3 border-b border-gray-200 text-gray-600 text-sm uppercase">
                    Actions
                </th>
                </tr>
            </thead>
            <tbody>
               {products.map((item,index)=>{
                return (                
                <tr key={item.id} className="hover:bg-gray-50 odd:bg-white even:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                        <div className="text-sm text-gray-900">{index+1}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                        <div className="text-sm text-gray-900">{item.productName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                        <div className="text-sm text-gray-900">{item.productPrice}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                        <div className="text-sm text-gray-900">{item.stock}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                        <div className="text-sm text-gray-900"><img style={{width:"50px", height:"50px", borderRadius:"50%", objectFit:"cover"}} src={item.photo} alt="" /></div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                        <div className="text-sm text-gray-900 flex items-center">

                        </div>
                    </td>
                </tr> 

                )
                })}            
            </tbody>
            </table>
        </div>
    </div>
      </div>
    </>
  )
}

export default ListView