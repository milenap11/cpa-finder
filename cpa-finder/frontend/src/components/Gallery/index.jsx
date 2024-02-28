import Card from "../Card"

export default function Gallery({ cpas, refreshQueue, updateDetails }) {
    
    // console.log(cpas, "Gallery")
    
        const galleryContent = cpas
        .map(cpa => (<Card key={cpa.properties.name} cpa={cpa} updateDetails={updateDetails} />))   
        
    // console.log(galleryContent, "Gallery Content")
     
    return (
        <div className="w-4/5 mt-10 mx-auto xl:columns-4 lg:columns-3 md:columns-2">
            {cpas.length === 0? <p>CPAs are loading...</p> : galleryContent }
        </div>
    )
    }