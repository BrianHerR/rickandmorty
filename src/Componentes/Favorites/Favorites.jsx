import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Card/Card'
import { order, filter } from '../../features/characters/charactersSlice'

function Favorites({ onClose }) {
    const [aux, setAux] = useState(false)

    const myFavorites = useSelector((state) => state.characters.myFavorites)
    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(order(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filter(event.target.value))
    }

    return (
        <div>
            <div className='flex justify-evenly p-4'>
                <div>
                    <select className='py-2 px-4 rounded-xl bg-purple-600 text-white outline' onChange={handleOrder}>
                        <option value="A">Ascendente</option>
                        <option value="D">Descendente</option>
                    </select>
                </div>
                <div>
                    <select className='py-2 px-4 rounded-xl bg-purple-600 text-white outline' onChange={handleFilter}>
                        <option value="ALL">Todos</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="Unknown">Unknown</option>
                    </select>
                </div>
            </div>
            <div className='mx-auto flex h-full w-2/3 flex-row flex-wrap justify-center gap-2 p-4'>
                {myFavorites?.map((favorite) => {
                    return (
                        <Card
                            key={favorite.id}
                            id={favorite.id}
                            name={favorite.name}
                            status={favorite.status}
                            origin={favorite.origin}
                            species={favorite.species}
                            gender={favorite.gender}
                            image={favorite.image}
                            onClose={onClose}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Favorites
