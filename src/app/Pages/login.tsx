import LoginButton from '../components/LoginButton'; // Import LoginButton component

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-4">Login</h1>
        <LoginButton /> {/* This will render the Login/Register button */}
      </div>
    </div>
  );
}
