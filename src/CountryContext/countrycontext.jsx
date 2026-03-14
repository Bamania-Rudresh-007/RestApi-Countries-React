import { createContext, useState, useEffect, useContext } from "react";

// 1. Create the context
const CountryContext = createContext();

// 2. Create the provider component
export function CountryProvider({ children }) {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const API = "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,currency,language,population";

    useEffect(() => {
        // Fetch data inside useEffect, not at the top level of the component
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching countries:", err));
    }, []); // Empty array means this runs once when the component mounts

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

// 3. Create a custom hook to use the context
export function useCountries() {
    const context = useContext(CountryContext);
    if (!context) {
        throw new Error("useCountries must be used within a CountryProvider");
    }
    return context;
}
