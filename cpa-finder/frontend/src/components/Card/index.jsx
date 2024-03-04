import { Link } from "react-router-dom"
import './styles.css'

export default function Card({ cpa, updateDetails }) {
    // console.log(cpa.properties.name)
    
    return (
        <figure className="relative mb-4 break-inside-avoid-column rounded-md bg-[white] border border-gray-300 hover:shadow-md transition-shadow duration-300 ease-in-out cursor-pointer">
            <Link to={"/details/" + cpa.properties.place_id} onClick={() => updateDetails(cpa)}>
            <figcaption className="py-2 pr-4 pl-2">
                <h1 className="text-lg font-bold">{cpa.properties.name}</h1>
                <p>{cpa.properties.suburb} </p>
                <p>{cpa.properties.state} </p>
                <br />
                <p>{cpa.properties.opening_hours}</p>
               
            </figcaption>
            </Link>
        </figure>
    )
}
