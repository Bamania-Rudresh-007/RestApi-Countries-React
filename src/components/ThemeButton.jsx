import {useCountries} from "../CountryContext/countrycontext.jsx";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeButton() {
    const { theme ,setTheme } = useCountries()
  return (
    <div>
        <button className="flex items-center gap-2 text-sm font-semibold sm:text-lg cursor-pointer">
            {theme === "Light" ? <FaSun className="text-xs sm:text-base cursor-pointer"/> : <FaMoon className="text-xs sm:text-base cursor-pointer"/>}
            <span onClick={() => {
                console.log(theme)
                theme === "Light" ? setTheme("Dark") : setTheme("Light"); 
            }}>{theme} Mode</span>
        </button>
    </div>
  )
}

export default ThemeButton
