import { useCountries } from "../CountryContext/countrycontext"
import { useNavigate } from "react-router-dom";



function useCountriesFunctionalities(){

    const {countries} = useCountries()
    const navigate = useNavigate();


    const handleClick = (country) => {
        // const targettedCountry = countries.filter((ele) => ele.name.common != country.name.common) 
        // navigate("/detail")
        // console.log(targettedCountry)
        // console.log("Filtered list:", targettedCountry);
        const API = `https://restcountries.com/v3.1/name/${country.name.common}`;

        fetch(API).then((res) => res.json()).then((data) => {
            console.log(data);
        })
        console.log(country)
    }
    return {handleClick}
}

export default useCountriesFunctionalities;