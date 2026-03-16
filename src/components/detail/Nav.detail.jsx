import ThemeButton from "../ThemeButton";
import { useCountries } from "../../CountryContext/countrycontext.jsx"; 

const Navbar = () => {
    const { theme } = useCountries();
    const isDark = theme === "Dark";

  return (
    <nav className={`flex justify-between items-center px-6 py-6 sm:px-16 shadow-md transition-colors duration-300 
      ${isDark ? 'bg-[#2b3945] border-none text-white' : 'bg-white border-b border-gray-100 text-gray-900'}`}>
      
      <h1 className="text-lg font-extrabold sm:text-2xl tracking-tight">
        Where in the world?
      </h1>
      
      <div className="flex items-center">
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
