import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <a
        href="/Naveen Yadav.pdf"
        download="NaveenYadav.pdf"
        className="mb-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
      >
        Download Resume
      </a>

      <iframe
        src="/Naveen Yadav.pdf"
        // className="w-full max-w-3xl h-[80vh] border-2 border-gray-300 shadow-lg rounded-lg"
        className="w-[355px] h-[500px] md:w-[826px] md:h-[1160px] rounded-xl"
      />

      <a
        href="/Naveen Yadav.pdf"
        download="NaveenYadav.pdf"
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
      >
        Download Resume
      </a>
    </div>
  )
}

export default Page