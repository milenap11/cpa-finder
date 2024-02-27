import Card from '../Card'

export default function Gallery({ cpas, refreshQueue }) {
    return (
        <div className="w-4/5 mt-10 mx-auto xl:columns-4 lg:columns-3 md:columns-2">
            {cpas.length > 0 ? cpas.map(cpa => <Card key={cpa.properties.name} cpa={cpa} />) : <p>CPAs are loading...</p>}
        </div>
    )
}
