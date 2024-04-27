import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'

function Navbar({ onSearch }) {
    return (
        <div className="md:block md:space-y-2 bg-purple-950 pb-4 text-white">
            <Link to='/' >
            <p className="p-4 text-2xl">Rick and morty</p>
            </Link>
            <div className="flex justify-around">
                <Link to="/home">
                    <button className="md:btn rounded-md p-1 focus:bg-purple-500" >Personajes</button>
                </Link>

                <Link to="/about">
                    <button className="md:btn rounded-md p-1 focus:bg-purple-500">Sobre mi</button>
                </Link>

                <Link to="/favorites">
                    <button className="md:btn rounded-md p-1 focus:bg-purple-500">Favoritos</button>
                </Link>

                <button className="md:btn rounded-md p-1 focus:bg-purple-500">🌙 Dark</button>
            </div>

            <Searchbar onSearch={onSearch} />
        </div>
    )
}

export default Navbar
