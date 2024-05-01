import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'

function Navbar({ onSearch }) {
    const [theme, setTheme] = useState('light')

    useEffect(()=>{
        if(theme==='dark'){
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    },[theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }


    return (
        <div className="md:block md:space-y-2 dark:bg-purple-950 pb-4 dark:text-white bg-purple-600 text-neutral-200">
            <Link to='/' >
            <p className="font-bold p-4 text-2xl">Rick and morty</p>
            </Link>
            <div className="flex justify-around">
                <Link to="/home">
                    <button className=" lg:border-solid lg:border-2 lg:hover:border-purple-900  lg:hover:bg-purple-700 focus:bg-purple-500 rounded-md p-1" >Personajes</button>
                </Link>

                <Link to="/about">
                    <button className="lg:border-solid lg:border-2 lg:hover:border-purple-900  lg:hover:bg-purple-700 rounded-md p-1 focus:bg-purple-500">Sobre mi</button>
                </Link>

                <Link to="/favorites">
                    <button className="lg:border-solid lg:border-2 lg:hover:border-purple-900  lg:hover:bg-purple-700 rounded-md p-1 focus:bg-purple-500">Favoritos</button>
                </Link>

                <button className="lg:border-solid lg:border-2 lg:hover:border-purple-900  lg:hover:bg-purple-700 rounded-md p-1 focus:bg-purple-500" onClick={handleChangeTheme}>🌙 Dark</button>
            </div>

            <Searchbar onSearch={onSearch} />
        </div>
    )
}

export default Navbar
