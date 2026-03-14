import { useCountries } from "../CountryContext/countrycontext"
import { useNavigate } from "react-router-dom";



function useCountriesFunctionalities(){

    const {countries} = useCountries()
    const navigate = useNavigate();


    const handleClick = (country) => {
        const API = `https://restcountries.com/v3.1/name/${country.name.common}`;

        fetch(API).then((res) => res.json()).then((result) => {
            const data = result[0];
            navigate("/detail", {
                state: {
                    flag: data.flags.svg,
                    alt: data.flags.alt,
                    name: data.name.common,
                    nativename: data.name.nativeName,
                    population: data.population,
                    region: data.region,
                    subRegion: data.subregion,
                    capital: data.capital,
                    topLevelDomain: data.tld,
                    currencies: data.currencies,
                    languages: data.languages,
                    borderCountries: data.borders

                }
            })
        })
    }
    return {handleClick}
}

export default useCountriesFunctionalities;