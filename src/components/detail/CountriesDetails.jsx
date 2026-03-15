import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa"
import useCountriesFunctionalities from '../../hooks/coutriesFunctionalities';
import { useCountries } from '../../CountryContext/countrycontext';

const CountryDetail = () => {
    const {extender} = useCountries()

    const location = useLocation()
    const navigate = useNavigate()
    const {flag,alt,name,nativename,population,region,subRegion,capital,topLevelDomain,currencies,languages, borderCountries} = location.state

    const nativeName = Object.values(nativename || {})[0]?.common;
    const currencyList = Object.values(currencies || {}).map(c => c.name).join(', ');
    const languageList = Object.values(languages || {}).join(', ');
    
    const {handleClick} = useCountriesFunctionalities()

  return (
    <div className="bg-white min-h-screen text-gray-900 px-10 py-12 font-sans">
      {/* Back Button */}
      <button className="mb-16 px-8 py-2 bg-white shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={() => navigate(-1)}
      >
        <span className="text-xl "><FaArrowLeft /></span> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Flag Section */}
        <div className="w-full max-w-xl">
          <img 
            src={flag} 
            alt={alt} 
            className="w-full h-auto shadow-md rounded-sm"
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-3xl font-extrabold mb-8">{name}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4 mb-14 text-sm">
            {/* Left Stats */}
            <div className="space-y-3">
              <p><span className="font-semibold">Native Name:</span> {nativeName}</p>
              <p><span className="font-semibold">Population:</span> {population}</p>
              <p><span className="font-semibold">Region:</span> {region}</p>
              <p><span className="font-semibold">Sub Region:</span> {subRegion} </p>
              <p><span className="font-semibold">Capital:</span> {capital}</p>
            </div>

            {/* Right Stats */}
            <div className="space-y-3">
              <p><span className="font-semibold">Top Level Domain:</span>{topLevelDomain}</p>
              <p><span className="font-semibold">Currencies:</span>{currencyList}</p>
              <p className="leading-relaxed">
                <span className="font-semibold">Languages:</span>{languageList}
              </p>
            </div>
          </div>

          {/* Border Countries */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 text-sm">
            <h3 className="font-semibold whitespace-nowrap">Border Countries:</h3>
            <div className="flex flex-wrap gap-2">
              {borderCountries ? borderCountries.map((country) => (
                <span 
                  key={country} 
                  className="px-6 py-1 bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] border border-gray-100 rounded-sm text-xs cursor-pointer"
                  onClick={() => {
                    const pickborder = extender.find((element) => element.name.common === country)
                    handleClick(pickborder)
                  }}
                >
                  {country}
                </span>
              )) : <span 
                  className="px-6 py-1 bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] border border-gray-100 rounded-sm text-xs cursor-default"
                >No border Countries</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
