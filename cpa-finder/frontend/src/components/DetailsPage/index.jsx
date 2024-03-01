import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CommentSection from '../CommentSection'


export default function DetailsPage() {
    const [cpa, setCpa] = useState(null)
    const {id} = useParams()

useEffect(() => {
    // Query the API if a Card component was not clicked on
    
        async function getCpaFromAPI() {
            const res = await fetch(`https://api.geoapify.com/v2/places?api_key=${import.meta.env.VITE_CPA_KEY}&categories=office.accountant&filter=place:${id}`)
            const data  = await res.json() // destructure the JSON response
            // console.log(data)
            setCpa(data.features[0])
        }
        getCpaFromAPI()
    
}, [id])

// console.log(cpa)

if (cpa) {
    return (
        <>
        <div className="w-4/5 mx-auto min-h-[300px] border-2 border-black rounded-lg">
            <h1>{cpa.properties.name}</h1>
            <p>{cpa.properties.address_line2}</p>
            <p>{cpa.properties.datasource.raw.phone}</p>
            <br />
            <p>{cpa.properties.opening_hours}</p>
        </div>
        <CommentSection cpaId={cpa.properties.name} />
        </>
    )
} else {
    return (
        <p>No details available</p>
    )
}
}
