import React from 'react';

const CountryDetail = () => {
  const borderCountries = ["Botswana", "Mozambique", "South Africa", "Zambia"];

  return (
    <div className="bg-white min-h-screen text-gray-900 px-10 py-12 font-sans">
      {/* Back Button */}
      <button className="mb-16 px-8 py-2 bg-white shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors">
        <span className="text-xl">←</span> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Flag Section */}
        <div className="w-full max-w-xl">
          <img 
            src="https://flagcdn.com" 
            alt="Flag of Zimbabwe" 
            className="w-full h-auto shadow-md rounded-sm"
          />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-3xl font-extrabold mb-8">Zimbabwe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4 mb-14 text-sm">
            {/* Left Stats */}
            <div className="space-y-3">
              <p><span className="font-semibold">Native Name:</span> Zimbabwe</p>
              <p><span className="font-semibold">Population:</span> 14,862,927</p>
              <p><span className="font-semibold">Region:</span> Africa</p>
              <p><span className="font-semibold">Sub Region:</span> Southern Africa</p>
              <p><span className="font-semibold">Capital:</span> Harare</p>
            </div>

            {/* Right Stats */}
            <div className="space-y-3">
              <p><span className="font-semibold">Top Level Domain:</span> .zw</p>
              <p><span className="font-semibold">Currencies:</span> Zimbabwean dollar</p>
              <p className="leading-relaxed">
                <span className="font-semibold">Languages:</span> Chibarwe, English, Kalanga, Khoisan, Ndau, Northern Ndebele, Chewa, Shona, Sotho, Tonga, Tswana, Tsonga, Venda, Xhosa, Zimbabwean Sign Language
              </p>
            </div>
          </div>

          {/* Border Countries */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 text-sm">
            <h3 className="font-semibold whitespace-nowrap">Border Countries:</h3>
            <div className="flex flex-wrap gap-2">
              {borderCountries.map((country) => (
                <span 
                  key={country} 
                  className="px-6 py-1 bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] border border-gray-100 rounded-sm text-xs cursor-default"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
