import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CommentSection from '../CommentSection'
import clockIcon from '../../assets/clock.svg'
import phoneIcon from '../../assets/telephone-fill.svg'
import locationIcon from '../../assets/geo-alt-fill.svg'


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
        <div className=" bg-[#fdfaee] rounded-md mx-[10%] mt-12 px-4 py-8">
            <h1 className="text-2xl font-medium" >{cpa.properties.name}</h1>
            <img src={locationIcon} />
            <p className="mt-2 font-light">{cpa.properties.address_line2}</p>
            <img src={phoneIcon} />
            <p className="mt-2 font-light">{cpa.properties.datasource.raw.phone}</p>
            <img src={clockIcon} />
            <p className="mt-2 font-light">{cpa.properties.opening_hours}</p>
        </div>
        <CommentSection cpaId={cpa.properties.name} />
        </>
    )
} else {
    return (
        <p className="mt-24 mx-[10%]">No details available</p>
    )
}
}
