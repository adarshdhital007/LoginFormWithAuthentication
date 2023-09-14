import React , {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function SignUpForm() {
  const navigate = useNavigate();
  const [isUserExists, setIsUserExists] = useState(false); // State for showing user exists popup

  const handleSignUp = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Send a POST request to your backend's signup endpoint
      const response = await axios.post('https://loginformwithauthentication.onrender.com/api/auth/register', {
        name,
        email,
        password,
      });

      // Assuming the response contains a token or a success message
      const responseData = response.data;

      // Handle successful signup (e.g., show a success message)
      console.log('Signup successful:', responseData);

      // Redirect to the login page or perform other actions
      navigate('/login');
    } catch (error) {
      // Handle signup failure (e.g., show an error message)
      console.error('Signup failed:', error);

      // Check if the error message indicates that the user already exists
      if (error.response && error.response.data.error === 'Email already registered') {
        setIsUserExists(true); // Set the state to show the popup
      }
    }
  };


  return (
    <div className='bg-gray-900 min-h-screen flex items-center justify-center'>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign Up
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Firstname Lastname"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</Link>
              </p>
              {isUserExists && (
                <div className="bg-red-100 text-red-800 border border-red-400 rounded p-2 mt-2">
                  User already exists. Please use a different email.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUpForm;
