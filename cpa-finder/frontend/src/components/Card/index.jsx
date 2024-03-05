import { Link } from "react-router-dom"
import './styles.css'

export default function Card({ cpa, updateDetails }) {
    // console.log(cpa.properties.name)
    
    return (
        <figure className="relative mb-4 break-inside-avoid-column rounded-md bg-[white] border border-gray-300 hover:shadow-[0px_0px_70px_-30px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-in-out cursor-pointer">
            <Link to={"/details/" + cpa.properties.place_id} onClick={() => updateDetails(cpa)}>
            <figcaption className="py-8 px-4">
                <h1 className="text-xl font-medium">{cpa.properties.name}</h1>
                <p className="mt-1 font-light">{cpa.properties.suburb}</p>
                <p className="font-light">{cpa.properties.state}</p>
                
                <p className="mt-4">{cpa.properties.opening_hours}</p>
               
            </figcaption>
            </Link>
        </figure>
    )
}
