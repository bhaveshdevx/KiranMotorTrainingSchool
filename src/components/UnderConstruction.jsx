export default function UnderConstruction() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">

                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    🚧 Under Construction
                </h1>

                <p className="text-gray-600 mb-6">
                    We're working hard to bring you something amazing.
                    Please check back soon!
                </p>

                <div className="flex justify-center">
                    <span className="animate-pulse bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-medium">
                        Coming Soon
                    </span>
                </div>

                <p className="text-xs text-gray-400 mt-6">
                    © {new Date().getFullYear()} Kiran Motor Training School
                </p>

            </div>
        </div>
    );
}
