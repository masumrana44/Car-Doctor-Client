import { Link, useLocation, useNavigate } from "react-router-dom";
import loginimg from "../../assets/images/login/login.svg";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { userContext } from "../../AuthContext/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { loginWithGoogle, logOut, loginWithEmPass } = useContext(userContext);
  const from = location.state?.from?.pathname || "/";

  // Login With Email Pasword
  const handleLoginEmPass = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password =form.password.value;
 
    loginWithEmPass(email, password)
      .then((res) => {
        const user = res.user;
        form.reset();
      })
      .catch((err) => console.log(err.message));
  };

  // Login With Goole
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.stack(error);
      });
  };
  return (
    <div className="flex flex-col lg:flex-row mt-10   ">
      <div className="bg-gray-200 h-screen lg:w-1/2 bg-cover bg-center">
        {/* Replace the image URL with your own */}
        <img
          className="h-full w-full object-cover  "
          src={loginimg}
          alt="Login image"
        />
      </div>
      <div className="bg-white p-10 lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleLoginEmPass} className="login-form-container">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <Link
              to=""
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </Link>
          </div>
        </form>

        <p>OR Login With</p>
        <button onClick={handleGoogleLogin}>
          {" "}
          <FaGoogle className="text-2xl font-bold" />
        </button>
        <p>
          OR not member please <Link to="/register">Register</Link>
        </p>

        <button onClick={handleLogOut} className="btn btn-primary">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Login;
