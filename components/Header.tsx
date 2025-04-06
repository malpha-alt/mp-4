export default function Header() {

    return (
        <header className="flex flex-col items-center w-[80%] m-auto bg-gray-800 rounded-lg shadow-2xl mt-4">
            <h2 className="text-4xl font-semibold p-4 text-white">
                Random Dog Viewer
            </h2>
            <h3 className="text-xl p-4 text-blue-300">
                Powered by Dogs as a Service API
            </h3>
        </header>
    )
}