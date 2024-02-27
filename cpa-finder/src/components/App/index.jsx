import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './styles.css'
import Card from '../Card'
import Gallery from '../Gallery'
import DetailsPage from '../DetailsPage'
import NotFoundPage from '../NotFoundPage'
import HomePage from '../HomePage'


export default function App() {
  // Store API data here
  const [cpas, setCpas] = useState([])
  const [detailsData, setDetailsData] = useState({})

  // Query the API on component mount
  

    // Define an async function to JSONify the query response  
    async function getData(url) {
      const res = await fetch(url)
      const data = await res.json()
      setCpas (cpas.concat(data.features))
    }

    useEffect(() => {
    // Call the async function
    getData(`https://api.geoapify.com/v2/places?api_key=${import.meta.env.VITE_CPA_KEY}&categories=office.accountant&filter=place:516233e79eb51d54c0591a95fdf9b68e3940f00101f9014479120000000000c002099203114d69616d692d4461646520436f756e7479`)
  }, [])

// console.log(cpas)

  return (
    <>
      <nav className="flex items-center justify-between h-16 bg-gray-800 shadow-lg lg:px-9 md:px-6 px-3">
        <Link to="/">
            <h1 className="text-white font-bold md:text-3xl sm:text-2xl">CPA Finder</h1>
        </Link>
        <Link to="/about">
            <h2 className="text-white md:text-lg sm:text-md">About Us</h2>
        </Link>
      </nav>

      <Routes>
      <Route path="/" element={
        <HomePage
        cpas={cpas} 
        refreshQueue={getData} 
        updateDetails={setDetailsData}
      />}
      />

      <Route path="/details/:id" element={<DetailsPage cpa={detailsData} />} />
      <Route path="/*" element={<NotFoundPage />} />

      </Routes>
    </>
  )
}