import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { userContext } from "../../../../AuthContext/AuthContext";

const Checkout = () => {
  const data = useLoaderData();

  const { user } = useContext(userContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const img = data?.img;
    const serviceName = form.serviceName.value;
    const servicePrice = form.price.value;
    const serviceCategory = form.serviceCategory.value;
    const serviceDescription = form.description.value;
    const email = form.email.value;

    const placeOrderData = {
      img: img,
      userEmail: email,
      serviceName: serviceName,
      servicePrice: servicePrice,
      serviceCategory: serviceCategory,
      serviceDescription: serviceDescription,
    };

    fetch("http://localhost:5000/insert/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(placeOrderData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          alert("Your data has successfully submited to Mongodb Database");
        }
      });
  };
  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-md shadow-md my-10">
      <h2 className="text-lg font-medium mb-4">Checkout</h2>
      <form onSubmit={handlePlaceOrder}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="service_name"
          >
            Service Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="service_name"
            type="text"
            defaultValue={data?.title}
            placeholder="Enter service name"
            name="serviceName"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="service_name"
          >
            Enter Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="service_name"
            type="email"
            defaultValue={user.email}
            placeholder="Enter service name"
            name="email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="service_price"
          >
            Service Price
          </label>
          <input
            name="price"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="service_price"
            type="number"
            defaultValue={data?.price}
            placeholder="Enter service price"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="service_type"
          >
            Service Type
          </label>
          <select
            name="serviceCategory"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="service_type"
          >
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="ultimate">Ultimate</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="product_description"
          >
            Product Description
          </label>
          <textarea
            name="description"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product_description"
            placeholder="Enter product description"
            defaultValue={""}
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            id="agree_to_terms"
          />
          <label className="text-gray-700 font-bold" htmlFor="agree_to_terms">
            I agree to the{" "}
            <Link to="#" className="text-blue-500 hover:underline">
              terms and conditions
            </Link>
          </label>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Checkout;
