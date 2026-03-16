import { useCountries } from "../CountryContext/countrycontext";
import { useNavigate } from "react-router-dom";

function useCountriesFunctionalities(){

    const {countries, extender,setExtender} = useCountries()

    const navigate = useNavigate();


    const handleClick = (country) => {
        if (country.borders?.length > 0) {
            const codes = country.borders.join(',');
            fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name,cca3`)
                .then(res => res.json())
                .then(borderData => {
                    navigate("/detail", {
                        state: {
                            ...buildState(country),
                            borderCountries: borderData.map(b => b.name.common)
                        }
                    })
                })
        } else {
            navigate("/detail", {
                state: {
                    ...buildState(country),
                    borderCountries: null
                }
            })
        }
    }

    const buildState = (country) => ({
        flag: country.flags.svg,
        alt: country.flags.alt,
        name: country.name.common,
        nativename: country.name.nativeName,
        population: country.population,
        region: country.region,
        subRegion: country.subregion,
        capital: country.capital,
        topLevelDomain: country.tld,
        currencies: country.currencies,
        languages: country.languages,
    })
    
    // let filterRegion = [];

    const handleSearchByCountryName = (searchName) => {
        const searchedResult = countries.filter((ele) => ele.name.common.toLowerCase().includes(searchName.toLowerCase()))
       setExtender(searchedResult);
    }

    const handleFilterByRegion =  (region) => {
        // console.log(countries)
        // console.log(region)
        // filterRegion = [];
        const filteredRegionResult = countries.filter((ele) => ele.region.toLowerCase() == region.toLowerCase())

        if(region.toLowerCase() == "none"){
            setExtender(countries);
            return;
        }
        setExtender(filteredRegionResult);
    }

    return {handleClick, handleSearchByCountryName, handleFilterByRegion}
}

export default useCountriesFunctionalities;