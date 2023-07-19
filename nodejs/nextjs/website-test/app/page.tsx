
export default function Home() {
  return (
    <main className="home">
      <div className="container flex flex-wrap bg-gray-800 border border-gray-700 rounded-lg mx-auto my-4 p-2 w-1/2">
        <div className="w-full flex justify-center mb-2">
          <h1 className="text-2xl text-white">Home (WIP)</h1>
        </div>
        <div className="w-full flex justify-center mt-4">
          <a className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" href="/about">
            <span className="flex text-sm text-white px-5 py-2.5 transition-all ease-in duration-75 bg-gray-800 rounded-md group-hover:bg-opacity-0">
              Go to about page
              <svg className="w-3.5 h-2.0 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </main>
  )
}
