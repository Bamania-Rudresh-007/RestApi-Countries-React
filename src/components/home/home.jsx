import React from 'react'
import Nav from '../home/Nav'
import SearchFilter from '../home/SearchFilter'
import Cards from './Cards'

function Home() {
  return (
    <div>
        <Nav />
        <SearchFilter />
        <Cards />
    </div>
  )
}

export default Home
