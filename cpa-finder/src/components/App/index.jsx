import { useState, useEffect } from 'react'
import './styles.css'

export default function App() {
  // Store API data here
  const [cpas, setCpas] = useState([])

  // Query the API on component mount
  useEffect(() => {

    // Define an async function to JSONify the query response  
    async function getData() {
      const res = await fetch(`https://api.geoapify.com/v2/places?api_key=${import.meta.env.VITE_CPA_KEY}&categories=office.accountant&filter=place:516233e79eb51d54c0591a95fdf9b68e3940f00101f9014479120000000000c002099203114d69616d692d4461646520436f756e7479`)
      const data = await res.json()
      setCpas (data.features)
    }

    // Call the async function
    getData()
  }, [])
console.log(cpas)

  if (cpas.length > 0) {
  return (
    <>
    <h1>CPA Finder</h1>
    <p>{cpas[1].properties.name}</p>
    </>
  )
  } else {
  return (
  <>
    <h1>CPA Finder</h1>
    <p>CPAs are loading...</p>
  </>
)
}
}