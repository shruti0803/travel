import React from 'react'
import { Link } from 'react-router-dom'

export const Ok = () => {
  return (
    <div>
         <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
        <h1 className="text-2xl font-bold text-center text-green-600">Booking Confirmed!</h1>
        <p className="mt-4 text-center text-gray-700">
          Your booking has been successfully confirmed. We look forward to hosting you!
        </p>
        <div className="mt-6 text-center">
          <Link to='/' className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none">
            Home
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}
