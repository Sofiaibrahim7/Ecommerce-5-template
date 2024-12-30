import { useState } from 'react';

const LoginButton = () => {
  // State to manage showing the login form
  const [showLogin, setShowLogin] = useState(false);

  // State for login form input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission (for login)
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on form submission
    // Add your login logic here (e.g., API call)
    console.log('Logging in with', email, password);
    // Optionally, redirect user after successful login
    setShowLogin(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        {/* Login / Register Button */}
        <button
          onClick={() => setShowLogin(!showLogin)} // Toggle showing the form
          className="px-6 py-2 bg-blue-600 text-white rounded-md">
          {showLogin ? 'Cancel' : 'Login / Register'}
        </button>
      </div>

      {/* Conditional Rendering of the Login Form */}
      {showLogin && (
        <div className="mt-6 max-w-sm mx-auto p-4 border rounded-md shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label className="block text-sm text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md">
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
