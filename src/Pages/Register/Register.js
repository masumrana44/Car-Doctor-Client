import React, { useContext } from "react";
import { userContext } from "../../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, updasteUser } = useContext(userContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updasteUser(name);
        navigate("/");
        form.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full px-6 py-8 md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-700">
              Create an Account
            </h2>
            <p className="mt-2 text-gray-600">
              Sign up to get access to exclusive features
            </p>
            {/* Registration form */}
            <form
              onSubmit={handleRegister}
              className="mt-4"
              action="#"
              method="POST"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
            {/* /Registration form */}
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1607472380761-d12cf8b7f22b"
              alt="Registration Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
