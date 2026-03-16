import { useCountries } from '../../CountryContext/countrycontext'
import useCountriesFunctionalities from '../../hooks/coutriesFunctionalities';

function Cards() {
    const { extender, theme} = useCountries()
    const { handleClick } = useCountriesFunctionalities()
    
    const isDark = theme === "Dark";

    return (
        <>
            <div className={isDark ? 'bg-[#202c37]' : 'bg-gray-50'}>
                <div className={`p-8 min-h-screen ${isDark ? 'bg-[#202c37]' : 'bg-gray-50'}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {extender.map((country) => (
                        <div 
                            key={country.name.common} 
                            className={`shadow-lg rounded-md overflow-hidden transition-shadow duration-300 cursor-pointer 
                                ${isDark ? 'bg-[#2b3945] text-white shadow-none' : 'bg-white text-black shadow-gray-200 hover:shadow-xl'}`}
                            onClick={() => handleClick(country)}
                        >
                            {/* Image container */}
                            <div className="h-40 w-full overflow-hidden">
                            <img 
                                src={country.flags.svg} 
                                alt={country.flags.alt} 
                                className="w-full h-full object-cover"
                            />
                            </div>

                            <div className="p-6">
                            <h2 className="text-lg font-extrabold mb-4">{country.name.common}</h2>

                            <div className="space-y-1 text-sm">
                                <p>
                                    <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
                                </p>
                                <p>
                                    <span className="font-semibold">Region:</span> {country.region}
                                </p>
                                <p>
                                    <span className="font-semibold">Capital:</span> {country.capital?.[0]}
                                </p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;
