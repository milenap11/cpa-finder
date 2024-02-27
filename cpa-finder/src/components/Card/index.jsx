export default function Card({ cpa }) {
    return (
        <figure className="relative mb-4 break-inside-avoid-column border-2 border-black rounded-lg bg-[#b6c2d4] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer">
            <figcaption className="py-2 pr-4 pl-2">
                <h1 className="text-lg font-bold">{cpa.properties.name}</h1>
                <p>{cpa.properties.address_line2}</p>
                <br />
                <p>{cpa.properties.opening_hours}</p>
            </figcaption>
        </figure>
    )
}
