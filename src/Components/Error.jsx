import { useRouteError, Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Error() {
   //React Router hook to catch errors from routes
  const err = useRouteError();

  return (
    <div className="bg-gradient-to-br from-[#E0F7FA] to-[#FFFFFF] text-center w-full min-h-screen">
      <Header />
       {/* Show the HTTP error status code when something went wrong */}
      <div className="p-8 w-full max-w-md mx-auto h-80">
        <h1 className="text-5xl font-bold text-[#E23C84] mb-4"> {err.status}</h1>

        <h3 className="text-xl text-teal-600 font-semibold mb-2">
        Page {err.statusText || "Unexpected Error"}
        </h3>
        <h2>Oops!.The Page You are looking for does not Exist.</h2>

        {err.data && (
          <p className="text-md text-gray-600 italic mb-6">{err.data}</p>
        )}

        <Link
          to="/"
          className="inline-block mt-4 bg-[#E23C84] hover:bg-[#e23ca8] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
