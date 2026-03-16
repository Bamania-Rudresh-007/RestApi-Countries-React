import { useCountries } from "../CountryContext/countrycontext.jsx"
import Nav from "./home/Nav.jsx";
function CardsShimmerEffect() {
    const {theme} = useCountries()
    const isDark = theme === "Dark";

    const dummy = Array.from({length: 12}).map((_, index) => (
    <div 
        key={index} 
        className={`w-full h-72 rounded-md shadow-md animate-pulse
            ${isDark ? 'bg-[#2b3945]' : 'bg-gray-200'}`}
    >
        {/* Optional: Add inner boxes to look like a real card */}
        <div className={`h-40 w-full ${isDark ? 'bg-[#364553]' : 'bg-gray-300'}`}></div>
        <div className="p-4 space-y-3">
            <div className={`h-4 w-3/4 rounded ${isDark ? 'bg-[#364553]' : 'bg-gray-300'}`}></div>
            <div className={`h-4 w-1/2 rounded ${isDark ? 'bg-[#364553]' : 'bg-gray-300'}`}></div>
        </div>
        </div>
    ));

  return (
    <>
        <Nav />
        <div className={isDark ? 'bg-[#202c37]' : 'bg-gray-50'}>
            <div className={`p-8 min-h-screen ${isDark ? 'bg-[#202c37]' : 'bg-gray-50'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {
                        dummy
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default CardsShimmerEffect
