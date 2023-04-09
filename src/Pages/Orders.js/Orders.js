import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../AuthContext/AuthContext";

const Orders = () => {
  const { user } = useContext(userContext);
  const [orders, setOrders] = useState({});

 
  const handleOrderDelete=()=>{
    
  }


  console.log(orders);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  return (
    <div>
      <h3>User order {orders.length}</h3>
      <table className="border-collapse w-full my-40">
        <thead>
          <tr>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Order Name
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Order Price
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Pending
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Delete
            </th>
          </tr>
        </thead>
        {orders.map((order) => (
          <tbody>
            <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10"></div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      <h1>{order?.serviceName}</h1>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                ${order?.servicePrice}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  />
                  <span className="relative text-xs">Pending</span>
                </span>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <button  className="flex items-center justify-center bg-tomato hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Orders;
