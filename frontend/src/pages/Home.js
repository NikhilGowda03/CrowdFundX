import { Link } from "react-router-dom";
import { 
  FaSearch, FaUser, FaRocket, 
  FaFacebook, FaTwitter, FaInstagram 
} from "react-icons/fa";

const categories = [
  "Art", "Comics", "Crafts", "Design", "Fashion",
  "Film", "Food", "Games", "Music", "Technology"
];

const featuredProjects = [
  { id: 1, title: "AI-Powered Healthcare", funded: "85%" },
  { id: 2, title: "Solar Energy for Rural Areas", funded: "92%" },
  { id: 3, title: "Next-Gen Smart Home Tech", funded: "75%" },
];

const trendingCampaigns = [
  { id: 1, title: "Clean Water Initiative", raised: "₹80,000", goal: "₹1,00,000" },
  { id: 2, title: "AI-based Personal Tutor", raised: "₹1,20,000", goal: "₹1,50,000" },
  { id: 3, title: "Sustainable Fashion Startup", raised: "₹95,000", goal: "₹1,20,000" },
];

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center">
      
      {/* Header */}
      <header className="w-full flex justify-between items-center px-10 py-5 bg-white shadow-md">
        <h1 className="text-green-600 text-2xl font-bold">CrowdFundX</h1>
        
        <div className="flex items-center bg-gray-200 px-4 py-2 rounded-lg">
          <input type="text" placeholder="Search projects, creators..." 
            className="bg-transparent outline-none w-64"
          />
          <FaSearch className="text-gray-600" />
        </div>
        
        <div className="flex gap-5">
          <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-indigo-600">
            <FaUser className="mr-2" /> Dashboard
          </Link>
          <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            <FaRocket className="mr-2" /> Start a Campaign
          </button>
        </div>
      </header>

      {/* Categories */}
      <nav className="w-full flex justify-center flex-wrap gap-3 p-5 bg-white shadow-sm">
        {categories.map((category, index) => (
          <Link key={index} to={`/category/${category.toLowerCase()}`} 
            className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 text-sm">
            {category}
          </Link>
        ))}
      </nav>

      {/* Featured Projects */}
      <section className="w-11/12 max-w-6xl mt-8">
        <h2 className="text-2xl font-bold text-gray-800">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">Funded: {project.funded}</p>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Campaigns */}
      <section className="w-11/12 max-w-6xl bg-white p-6 rounded-lg shadow-lg border-l-8 border-orange-500 mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">Trending Campaigns</h3>
        <ul className="mt-6 space-y-5">
          {trendingCampaigns.map((campaign) => (
            <li key={campaign.id} className="bg-gray-50 p-5 rounded-md shadow-md flex justify-between items-center border-l-4 border-gray-300 hover:border-orange-500 transition-all">
              <span className="font-semibold text-lg">{campaign.title}</span>
              <span className="text-green-600 font-medium">
                Raised {campaign.raised} / Goal {campaign.goal}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="w-11/12 max-w-5xl bg-indigo-700 text-white py-16 text-center mt-10 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold">Turn Your Vision into Reality</h2>
        <p className="text-lg mt-4 max-w-xl mx-auto">
          Whether you're a creator, supporter, or dreamer, our platform is here to help you
          achieve your goals. Start your journey with us today!
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-700 font-bold rounded-full hover:bg-gray-200 transition duration-300">
          Start a Campaign 
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white text-center py-12 mt-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold">About Our Platform</h2>
          <p className="mt-2 text-gray-400">
            We are dedicated to empowering innovators and dreamers by connecting them
            with a passionate community of supporters. Let's build something amazing together!
          </p>

          <div className="mt-6 flex justify-center space-x-6">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 text-2xl">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 text-2xl">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 text-2xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
