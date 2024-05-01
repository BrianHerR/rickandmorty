import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="flex flex-col items-center h-full dark:text-white  justify-center pt-80">
            <h1 className="font-bold text-2xl">Rick and Morty</h1>
            <Link to="/home">
                <button className="mx-1 mt-6 
                rounded-lg bg-purple-400 dark:bg-purple-800 px-4 py-2 dark:text-white text-neutral-700 hover:bg-purple-500">
                    Iniciar
                </button>
            </Link>
        </div>
    )
}

export default Welcome
