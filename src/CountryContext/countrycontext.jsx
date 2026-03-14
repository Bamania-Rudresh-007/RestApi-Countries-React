import { createContext, useState, useEffect, useContext } from "react";


const CountryContext = createContext();


export function CountryProvider({ children }) {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const API = "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,flags,currencies,languages,population,borders,tld";


    useEffect(() => {
       
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching countries:", err));
    }, []); 

    const value = {
        countries,
        setCountries,
        loading
    };

    return (
        <CountryContext.Provider value={value}>
            {children}
        </CountryContext.Provider>
    );
}

export function useCountries() {
    const context = useContext(CountryContext);
    if (!context) {
        throw new Error("useCountries must be used within a CountryProvider");
    }
    return context;
}
