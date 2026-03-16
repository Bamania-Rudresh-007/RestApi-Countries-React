import ThemeButton from "../ThemeButton.jsx";
import { useCountries } from "../../CountryContext/countrycontext.jsx";

function Nav() {
  const { theme } = useCountries();
  const isDark = theme === "Dark";

  return (
    <div 
      className={`flex justify-between items-center px-4 py-4 shadow-md sm:px-16 sm:py-6 transition-colors duration-300
        ${isDark ? 'bg-[#2b3945] text-white shadow-black/20' : 'bg-white text-black shadow-gray-100'}`}
    >
      <div>
        <h1 className="text-lg font-extrabold sm:text-xl md:text-2xl tracking-tight">
          Where in the world?
        </h1>
      </div>
      
      <div className="flex items-center">
        <ThemeButton />
      </div>
    </div>
  )
}

export default Nav;
