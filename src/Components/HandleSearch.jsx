import { useState } from "react";
import { useNavigate,useLocation} from "react-router-dom";

const HandleSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const queryFromUrl = params.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(queryFromUrl);
 //Search function
  const handleSubmit= (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    } else {
      navigate(`/`);
    }
    setSearchQuery('');
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="flex items-center rounded-lg w-full sm:w-72 md:w-80 lg:w-82 relative"
>
  {/* Search Input - Visible only on large screens (lg) */}
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="hidden sm:block flex-grow py-1 px-3 bg-white shadow-md rounded-full text-gray-700 focus:outline-none"
    placeholder="Search..."
  />
  
  {/* Search Icon - Visible only on mobile screens (sm) */}
  <button
    type="submit"
    className=" text-gray-900 rounded-lg cursor-pointer transition sm:p-3"
  >
    🔍
  </button>
</form>
  );
};

export default HandleSearch;
