import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Detail from './Componentes/Detail/Detail'
import About from './Componentes/About/About'
import Favorites from './Componentes/Favorites/Favorites'
import axios from 'axios'
import Home from './Componentes/Home/Home'
import React, { useState } from 'react'
import Welcome from './Componentes/Welcome/Welcome'
import Navbar from './Componentes/Navbar/Navbar'

function App() {
    const location = useLocation()

    const [characters, setCharacters] = useState([])

    const onSearch = async (characterID) => {
        try {
            const response = await axios.get(
                `https://rickandmortyapi.com/api/character/${characterID}`
            )

            const { data } = response

            if (data.name) {
                setCharacters((previoEstado) => [...previoEstado, data])
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    const onClose = (id) => {
        setCharacters((previoEstado) =>
            previoEstado.filter((ch) => ch.id !== +id)
        )
    }
    return (
        <div className="dark:bg-black bg-slate-300 min-h-svh mx-auto">
            
                {location.pathname !== '/' ? (
                    <Navbar onSearch={onSearch} />
                ) : undefined}
                <Routes>
                    <Route
                        path="/home"
                        element={
                            <Home characters={characters} onClose={onClose} />
                        }
                    />

                    <Route path="/about" element={<About />} />

                    <Route path="detail/:id" element={<Detail />} />

                    <Route path="/" element={<Welcome />} />

                    <Route
                        path="/favorites"
                        element={<Favorites onClose={onClose} />}
                    />
                </Routes>
            </div>
        
    )
    
}

export default App
