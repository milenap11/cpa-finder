import Gallery from '../Gallery'

export default function HomePage(props) {
    return (
        <>
            <h1 className="mt-5 text-center md:text-3xl text-2xl font-bold">Welcome</h1>
            <h2 className="text-center md:text-xl text-lg font-semibold italic">Find, compare and book with highly-rated CPAs</h2>
            <br />
            <h3 className="text-center text-lg font-bold">Browse CPAs below!</h3>


            <div className="pb-10">
    <form className="mt-4 text-center">
        <input
            className="box-border p-2 w-3/5 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
            name="search"
            placeholder="Location" />
        <button
            type="submit"
            className="box-border mx-1 px-3 py-[6px] text-lg border-2 border-gray-700 rounded-lg font-semibold hover:bg-gray-700 hover:opacity-70 transition-all duration-200 ease-in-out">
            Search
        </button>
    </form>
</div>


            <Gallery {...props}/>
        </>
    )
}
