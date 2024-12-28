import { useState, useEffect } from "react";
import { getSliders } from "../utils/GlobalApi";
import { FaUserCircle } from "react-icons/fa";
export const Header = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const data = await getSliders();
        setSliders(data || []);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  if (loading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Error : {error}</div>;
  }
  return (
    <header className="bg-green-500 text-white shadow-md">
      <div className=" mx-auto flex justify-between items-center p-4">
        {" "}
        <div className="text-lg font-bold"> MyLogo </div>{" "}
        <nav className="space-x-4">
          {" "}
          <a href="#" className="hover:text-gray-300">
            Home
          </a>{" "}
          <a href="#" className="hover:text-gray-300">
            About
          </a>{" "}
          <a href="#" className="hover:text-gray-300">
            Services
          </a>{" "}
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>{" "}
        </nav>{" "}
        <FaUserCircle className="w-6 h-auto" />
      </div>
    </header>

    // <div>
    //   <ul>
    //     {sliders.map((slider) => (
    //       <li key={slider.id}>
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    //           <p>{slider.name}</p>

    //           <img src={slider.url} alt="pp" className="w-10 h-auto" />

    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Header;
