import { useState } from "react"
import Gallery from '../Gallery'

export default function HomePage({cpas, refreshQueue, updateDetails}) {
    const [query, setQuery] = useState("")
// console.log(import.meta.env.VITE_CPA_KE, "HomePage")
    function handleSubmit(event) {
        // prevent the form from reloading the page
        event.preventDefault()
        // print what the user typed into the form
        refreshQueue(`https://api.geoapify.com/v2/places?api_key=${import.meta.env.VITE_CPA_KEY}&categories=office.accountant&filter=place:516233e79eb51d54c0591a95fdf9b68e3940f00101f9014479120000000000c002099203114d69616d692d4461646520436f756e7479&q=${query}`)
    }
    
    return (
        <>
            <h1 className="mt-5 text-center md:text-3xl text-2xl font-bold">Welcome</h1>
            <h2 className="text-center md:text-xl text-lg font-semibold italic">Find, compare and book with highly-rated CPAs</h2>
            <br />
            <h3 className="text-center text-lg font-bold">Browse CPAs below!</h3>


            <div className="pb-10">
    <form onSubmit={handleSubmit} className="mt-4 text-center">
        <input
            className="box-border p-2 w-3/5 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
            name="search"
            placeholder="Location" 
            value={query} 
            onChange={event => setQuery(event.target.value)}  />
        <button
            type="submit"
            className="box-border mx-1 px-3 py-[6px] text-lg border-2 border-gray-700 rounded-lg font-semibold hover:bg-gray-700 hover:opacity-70 transition-all duration-200 ease-in-out">
            Search
        </button>
    </form>
</div>


            <Gallery 
            cpas={cpas}
            refreshQueue={refreshQueue}
            updateDetails={updateDetails}
            />
        </>
    )
}
