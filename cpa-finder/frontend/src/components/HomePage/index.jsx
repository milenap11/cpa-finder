import { useState, useEffect } from "react"
import Gallery from '../Gallery'
import { Link } from "react-router-dom"

export default function HomePage({ cpas, refreshQueue, updateDetails }) {
    const [query, setQuery] = useState("")
    const [postcodeResults, setPostcodeResults] = useState([])

    async function apiRequest(url) {
        const res = await fetch(url);
        const data = await res.json();
        return data
      }

    async function handleSubmit(event) {
        // prevent the form from reloading the page
        event.preventDefault()

            // console.log(query)

        const postcodePlaceId = await apiRequest(`https://api.geoapify.com/v1/geocode/search?lang=en&type=postcode&postcode=${query}&api_key=${import.meta.env.VITE_CPA_KEY}`)

            // console.log(postcodePlaceId)

        const placeId = postcodePlaceId.features[0].properties.place_id

        refreshQueue (`https://api.geoapify.com/v2/places?api_key=${import.meta.env.VITE_CPA_KEY}&categories=office.accountant&filter=place:${placeId}`)

            // console.log(postcodeQueryResults, "postcodeResults")
    }
    

    if (cpas.length > 0) {
    return (
        <>
        <div className="bg-[#d6e5f3] mt-24">
            <h1 className="text-center md:text-4xl text-3xl">Find a CPA near you</h1>
            <h1 className="text-center md:text-lg sm:text-md mt-4 font-light">Find, compare and book with highly-rated CPAs</h1>
            <br />
            {/* <h3 className="text-center text-lg font-bold">Browse CPAs below!</h3> */}


            <div>
    <form onSubmit={handleSubmit} className="mt-4 text-center">
            <input
            className="box-border p-2 w-3/5 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
            name="postcode"
            placeholder="zipcode: 11201" 
            required
            type="text"
            pattern="^\d{5}"
            value={query} 
            onChange={event => setQuery(event.target.value)}  />
        <button
            type="submit"
            className="box-border mx-1 px-3 py-[6px] text-lg border-2 border-gray-700 rounded-lg font-semibold hover:bg-gray-700 hover:opacity-70 transition-all duration-200 ease-in-out">
            Search
        </button>
    </form>
            <p className="mt-20 mb-4 mx-[10%]">{cpas.length} results</p>
            </div>
        </div>
        <div className="bg-[#ffffff]">
            <Gallery 
            cpas={cpas}
            refreshQueue={refreshQueue}
            updateDetails={updateDetails}
            />
        </div>
        </>
    )

    } else {
        return (
        <>
            <h1 className="mt-5 text-center md:text-3xl text-2xl font-bold">Find a CPAs near you</h1>
            <h2 className="text-center md:text-xl text-lg mt-4">Find, compare and book with highly-rated CPAs</h2>
            <br />


            <div className="pb-10">
    <form onSubmit={handleSubmit} className="mt-4 text-center">
        <input
            className="box-border p-2 w-3/5 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
            name="postcode"
            placeholder="zipcode: 11201" 
            required
            type="text"
            pattern="^\d{5}"
            value={query} 
            onChange={event => setQuery(event.target.value)}  />
        <button
            type="submit"
            className="box-border mx-1 px-3 py-[6px] text-lg border-2 border-gray-700 rounded-lg font-semibold hover:bg-gray-700 hover:opacity-70 transition-all duration-200 ease-in-out">
            Search
        </button>
    </form>
            </div>

            <p>No CPAs available in this area</p>
        
        </>
        )
    }
}

