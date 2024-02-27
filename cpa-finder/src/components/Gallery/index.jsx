import Card from '../Card'

export default function Gallery({ cpas, refreshQueue, updateDetails }) {
    
    let galleryContent = <p>CPAs are loading...</p>

    if (cpas.length > 0) {
        galleryContent = cpas
        .map(cpa => <Card key={cpa.properties.name} cpa={cpa} updateDetails={updateDetails} />)   
    }
    
    return (
        <div className="w-4/5 mt-10 mx-auto xl:columns-4 lg:columns-3 md:columns-2">
            {galleryContent}
        </div>
    )
}
