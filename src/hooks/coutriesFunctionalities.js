import { useCountries } from "../CountryContext/countrycontext"
import { useNavigate } from "react-router-dom";

function useCountriesFunctionalities(){

    const {countries} = useCountries()
    const navigate = useNavigate();


    // In handleClick - fetch border names by codes
    const handleClick = (country) => {
        if (country.borders?.length > 0) {
            const codes = country.borders.join(',');
            fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name,cca3`)
                .then(res => res.json())
                .then(borderData => {
                    console.log(borderData)
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

    return {handleClick}
}

export default useCountriesFunctionalities;