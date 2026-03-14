import { useCountries } from "../CountryContext/countrycontext"
import { useNavigate } from "react-router-dom";

function useCountriesFunctionalities(){

    const {countries} = useCountries()
    const navigate = useNavigate();


    const handleClick = (country) => {

        const targetCountry = countries.filter((ele) => ele.name.common == country.name.common)

        console.log(targetCountry)
            navigate("/detail", {
                state: {
                    flag: targetCountry[0].flags.svg,
                    alt: targetCountry[0].flags.alt,
                    name: targetCountry[0].name.common,
                    nativename: targetCountry[0].name.nativeName,
                    population: targetCountry[0].population,
                    region: targetCountry[0].region,
                    subRegion: targetCountry[0].subregion,
                    capital: targetCountry[0].capital,
                    topLevelDomain: targetCountry[0].tld,
                    currencies: targetCountry[0].currencies,
                    languages: countries.languages,
                    borderCountries: targetCountry[0].borders

                }
        })
    }
    return {handleClick}
}

export default useCountriesFunctionalities;