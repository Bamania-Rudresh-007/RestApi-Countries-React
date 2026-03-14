import { createRoot } from 'react-dom/client'
import { CountryProvider } from './CountryContext/countrycontext.jsx'
import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Detail from './components/detail/Detail.jsx';

import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/detail",
        element: <Detail />
    }
])

createRoot(document.getElementById('root')).render(
    <CountryProvider>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </CountryProvider>
)
