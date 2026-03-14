import React from 'react';
import Navbar from './Nav.detail';

const CountriesDetail = () => {
  const borderCountries = ["Botswana", "Mozambique", "South Africa", "Zambia"];

  return (
    <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-8 md:px-16 py-10">
        {/* Back Button */}
        <button className="mb-16 px-8 py-2 bg-white dark:bg-gray-800 shadow-lg rounded-md flex items-center gap-2 hover:opacity-80 transition">
            <span>&larr;</span> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Flag Image */}
            <div className="w-full">
            <img 
                src="https://flagcdn.com" 
                alt="Flag of Zimbabwe" 
                className="w-full h-auto shadow-md"
            />
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
            <h2 className="text-3xl font-extrabold mb-8">Zimbabwe</h2>
            
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
                {/* Left Column */}
                <div className="space-y-2">
                <p><span className="font-semibold">Native Name:</span> Zimbabwe</p>
                <p><span className="font-semibold">Population:</span> 1,70,73,087</p>
                <p><span className="font-semibold">Region:</span> Africa</p>
                <p><span className="font-semibold">Sub Region:</span> Southern Africa</p>
                <p><span className="font-semibold">Capital:</span> Harare</p>
                </div>

                {/* Right Column */}
                <div className="space-y-2">
                <p><span className="font-semibold">Top Level Domain:</span> .zw</p>
                <p><span className="font-semibold">Currencies:</span> Zimbabwean dollar</p>
                <p className="max-w-xs">
                    <span className="font-semibold">Languages:</span> English, Shona, Northern Ndebele, and 13 others
                </p>
                </div>
            </div>

            {/* Border Countries Section */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h3 className="font-semibold whitespace-nowrap">Border Countries:</h3>
                <div className="flex flex-wrap gap-3">
                {borderCountries.map((country) => (
                    <span 
                    key={country} 
                    className="px-6 py-1 bg-white dark:bg-gray-800 shadow-md rounded-sm text-sm border border-gray-100 dark:border-none"
                    >
                    {country}
                    </span>
                ))}
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  );
};

export default CountriesDetail;
