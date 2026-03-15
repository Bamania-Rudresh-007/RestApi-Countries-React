import { FaSearch } from "react-icons/fa";
import useCountriesFunctionalities from "../../hooks/coutriesFunctionalities";;
import { useCountries } from "../../CountryContext/countrycontext";
import { useState, useEffect } from "react";
function SearchFilter() {
    const {countries, extender, setExtender} = useCountries()
    const {handleSearchByCountryName, handleFilterByRegion} = useCountriesFunctionalities();

    const handleChange = (e) => {
        handleSearchByCountryName(e)
    }


  return (
    <div className='flex flex-col gap-4 px-4 py-7 sm:flex-row sm:justify-between sm:items-center sm:px-15'>
        <div className="max-w-md"> {/* Container to control width */}
            <div className="flex items-center gap-3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white">
                <FaSearch className="text-gray-400" /> 
                <input 
                type="text" 
                placeholder="Search for country" 
                className="w-full focus:outline-none text-gray-900 bg-transparent"
                onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </div>

        <div className="max-w-xs">
            <select className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10"
            onChange={(e) => {
                handleFilterByRegion(e.target.value)
            }}
            >
                <option value="" hidden>Filter by Region</option>
                <option value="None">None</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>

    </div>

  )
}

export default SearchFilter
