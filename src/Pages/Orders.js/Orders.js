import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../AuthContext/AuthContext";

const Orders = () => {
  const { user,  } = useContext(userContext);
  const [orders, setOrders] = useState([]);

  const handleOrderDelete = (or) => {
    const agree = window.confirm(
      `Are you sure delete ${or?.serviceName}  order?`
    );

    if (agree) {
      fetch(`https://car-doctor-server-seven.vercel.app/delete/order/${or?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainingOrders = orders.filter(
            (order) => order._id !== or._id
          );
          setOrders(remainingOrders);
        });
    }
  };

  useEffect(() => {
    fetch(`https://car-doctor-server-seven.vercel.app/orders?email=${user?.email}`,{
      headers:{
        authorization:`Bearer ${localStorage.getItem('CarDoctorToken')}`
      }
    })
      .then((res) => {
        if(res.status===401 ||res.status===403){
          //  return logOut().then().catch(err=>console.log(err))
          return console.log('logOuting')
        }
        return res.json()
      })
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleStatusUpdate = (id) => {
    fetch(`https://car-doctor-server-seven.vercel.app/update/${id}`, {
        method: "PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({status:'Approved'})
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.acknowledged){
        const remaining=orders.filter(odr=>odr._id!==id);
        const approving=orders.find(odr=>odr._id===id);
        const newOrder=[approving,...remaining];
        approving.status='Approved';
        setOrders(newOrder)
        }
      })
  };
     // console.log(orders)
  return (
    <div>
      <h3>User order {orders?.length}</h3>
      
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
        {orders?.map((order) => (
          <tbody key={order?._id}>
            <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10"></div>
                  <div className="ml-4">
                    <div className="flex items-center  gap-1.5 text-sm font-medium text-gray-900">
                      <img src={order?.img} alt="" className="w-1/5 " />
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
                  <button onClick={()=>handleStatusUpdate(order?._id)} className="relative text-xs">
                    {order?.status ? order?.status : "Pending"}
                  </button>
                </span>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <button
                  onClick={() => handleOrderDelete(order)}
                  className="flex items-center justify-center bg-tomato hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
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
