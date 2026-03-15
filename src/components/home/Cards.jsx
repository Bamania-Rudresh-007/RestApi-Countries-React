import { useCountries } from '../../CountryContext/countrycontext'
import useCountriesFunctionalities from '../../hooks/coutriesFunctionalities';

function Cards() {
    const {extender} = useCountries()
    const {handleClick} = useCountriesFunctionalities()
  return (
        <div className=''>
            <div className="p-8 bg-gray-50 min-h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {extender.map((country) => (
                    <div 
                        key={country.name.common} 
                        className="bg-white shadow-lg shadow-gray-200 rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        onClick={() => handleClick(country)}
                    >
                        {/* Image container with fixed height for alignment */}
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
                            <p><span className="font-semibold">Population:</span> {country.population}</p>
                            <p><span className="font-semibold">Region:</span> {country.region}</p>
                            <p><span className="font-semibold">Capital:</span> {country.capital[0]}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Cards;