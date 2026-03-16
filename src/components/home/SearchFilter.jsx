import { FaSearch } from "react-icons/fa";
import { useCountries } from "../../CountryContext/countrycontext.jsx";
import useCountriesFunctionalities from "../../hooks/coutriesFunctionalities";

function SearchFilter() {
    const { handleSearchByCountryName, handleFilterByRegion } = useCountriesFunctionalities();
    const { theme } = useCountries();
    const isDark = theme === "Dark";

    const handleChange = (e) => {
        handleSearchByCountryName(e)
    }

    // Custom CSS for the dropdown arrow color based on theme
    const arrowColor = isDark ? "%23FFFFFF" : "%236B7280";

    return (
        <div className={`flex flex-col gap-4 px-4 py-7 sm:flex-row sm:justify-between sm:items-center sm:px-16 transition-colors duration-300 ${isDark ? 'bg-[#202c37]': ''}`}>
            
            {/* Search Input Container */}
            <div className="w-full max-w-md"> 
                <div className={`flex items-center gap-4 px-6 py-3 rounded-md shadow-md transition-all duration-300 
                    ${isDark ? 'bg-[#2b3945] text-white' : 'bg-white text-gray-900'}`}>
                    <FaSearch className={`${isDark ? 'text-white' : 'text-gray-400'}`} /> 
                    <input 
                        type="text" 
                        placeholder="Search for a country..." 
                        className="w-full focus:outline-none bg-transparent placeholder:text-inherit opacity-80"
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </div>
            </div>

            {/* Filter Dropdown Container */}
            <div className="w-52">
                <select 
                    className={`w-full px-6 py-3 rounded-md shadow-md cursor-pointer appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1rem] transition-all duration-300 focus:outline-none
                        ${isDark ? 'bg-[#2b3945] text-white' : 'bg-white text-gray-900'}`}
                    style={{
                        backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22${arrowColor}%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")`
                    }}
                    onChange={(e) => handleFilterByRegion(e.target.value)}
                >
                    <option value="" hidden>Filter by Region</option>
                    <option value="None" className={isDark ? "bg-[#2b3945]" : ""}>All</option>
                    <option value="Africa" className={isDark ? "bg-[#2b3945]" : ""}>Africa</option>
                    <option value="Americas" className={isDark ? "bg-[#2b3945]" : ""}>Americas</option>
                    <option value="Asia" className={isDark ? "bg-[#2b3945]" : ""}>Asia</option>
                    <option value="Europe" className={isDark ? "bg-[#2b3945]" : ""}>Europe</option>
                    <option value="Oceania" className={isDark ? "bg-[#2b3945]" : ""}>Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default SearchFilter;
