import { createRoot } from 'react-dom/client'
import { CountryProvider } from './CountryContext/countrycontext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <CountryProvider>
        <App />
    </CountryProvider>
)
