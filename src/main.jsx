import { createRoot } from 'react-dom/client'
import { CountryProvider } from './CountryContext/countrycontext.jsx'
import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import Home from './components/home/home.jsx';
import Detail from './components/detail/Detail.jsx';
import App from './App.jsx';
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/detail",
                element: <Detail />
            }
        ]
    },
])

createRoot(document.getElementById('root')).render(
    <CountryProvider>
        <RouterProvider router={router} />
    </CountryProvider>
)
