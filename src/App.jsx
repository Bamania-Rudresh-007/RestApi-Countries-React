import React from 'react'
import Nav from './components/home/Nav'
import SearchFilter from './components/home/SearchFilter'
import Cards from './components/home/Cards';
import CountriesDetail from './components/detail/CountriesDetails';

function App() {
  return (
    <div>
        {/* <Nav />
        <SearchFilter />
        <Cards /> */}
        <CountriesDetail />
    </div>
  )
}

export default App
