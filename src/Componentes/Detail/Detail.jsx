import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Detail() {
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
            ({ data }) => {
                if (data.name) {
                    setCharacter(data)
                } else {
                    window.alert(`No se encontro el personaje${id}`)
                }
            }
        )
        return setCharacter({})
    }, [id])

    return (
        <div className='lg:flex dark:bg-purple-950 bg-purple-600 flex-row-reverse justify-between p-4 m-2 rounded-md text-white'>
            <div className='leading-loose w-1/2 flex-col justify-center pb-1'>
            <h2>Nombre : {character?.name}</h2>
            <h2>Genero : {character?.gender}</h2>
            <h2>Especie : {character?.species}</h2>
            <h2>Estado : {character?.status}</h2>
            
            </div>
            <div>

            <img className='rounded-lg' src={character?.image} alt="" />
            </div>
        </div>
    )
}

export default Detail
