import { Link } from 'react-router-dom';
import PackageList from '../components/PackageList';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Section */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-blue-600">Travel Explorer</h1>
          <div className="space-x-4">
            <Link
              to="/signin"
              className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <header className="text-center mb-8">
            <h2 className="text-4xl font-bold text-blue-600">Welcome to Travel Packages</h2>
            <p className="text-gray-600 mt-2">Explore the best travel packages for your next adventure!</p>
          </header>

          {/* Package List */}
          <PackageList />
        </div>
      </div>
    </div>
  );
};

export default Home;
