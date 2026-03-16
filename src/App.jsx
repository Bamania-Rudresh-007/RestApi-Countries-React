import { useCountries } from "./CountryContext/countrycontext.jsx";
import CardsShimmerEffect from './components/CardsShimmerEffect.jsx';
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';

function App() {

    const { loading } = useCountries();
    
    useEffect(() => {
        console.log(loading)
    }, [loading])
    
    return (
        <div>
            {loading ? <CardsShimmerEffect /> : <Outlet />}
        </div>
    );
}

export default App;
