import { Link } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaUser, FaChartBar, FaMoneyBillWave, FaComments, FaCogs } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md h-screen p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          🚀 Crowdfund
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
            <Link to="/" className="flex items-center gap-3">
              <FaHome />
              Home
            </Link>
          </li>
          <li className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
            <Link to="/campaigns" className="flex items-center gap-3">
              <FaProjectDiagram />
              My Campaigns
            </Link>
          </li>
          <li className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
            <Link to="/Profile" className="flex items-center gap-3">
              <FaUser />
              Profile
            </Link>
          </li>
          <li className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
            <Link to="/analytics" className="flex items-center gap-3">
              <FaChartBar />
              Analytics
            </Link>
          </li>
          <li className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
            <Link to="/donations" className="flex items-center gap-3">
              <FaMoneyBillWave />
              Donations
            </Link>
          </li>
          <li className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
            <Link to="/messages" className="flex items-center gap-3">
              <FaComments />
              Messages
            </Link>
          </li>
          <li className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer">
            <Link to="/settings" className="flex items-center gap-3">
              <FaCogs />
              Settings
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-gray-800">Welcome to Your Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Track your campaigns, contributions, and insights in one place.
        </p>

        {/* Analytics Section */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700">Total Campaigns</h3>
            <p className="text-3xl font-bold text-indigo-600">8</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700">Active Donations</h3>
            <p className="text-3xl font-bold text-green-600">$12,540</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700">Supporters</h3>
            <p className="text-3xl font-bold text-orange-500">1,245</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300">
            Start a New Campaign
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
