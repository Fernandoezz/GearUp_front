import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
        Welcome to GearUp!
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl animate-fade-in">
        The ultimate online store for tech products. Browse our latest gadgets and enjoy a seamless shopping experience.
      </p>
      <Link to="/home">
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Welcome;

