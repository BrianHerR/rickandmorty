import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="flex flex-col items-center h-full text-white justify-center pt-80">
            <h1 className="text-bold text-xl">Rick and Morty</h1>
            <Link to="/home">
                <button className="hover: mx-1 mt-6 rounded-lg bg-purple-800 px-4 py-2 text-white shadow-md shadow-white outline-neutral-50 hover:bg-purple-600 hover:text-black">
                    Iniciar
                </button>
            </Link>
        </div>
    )
}

export default Welcome
