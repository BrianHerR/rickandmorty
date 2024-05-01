import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import { removeFav, addFav } from '../../features/characters/charactersSlice'

function Card(props) {
    const location = useLocation()

    const { onClose, id, origin, name, status, species, gender, image } = props

    const characters = useSelector((state) => state.characters.characters)

    const dispatch = useDispatch()

    const favorites = useSelector((state) => state.characters.myFavorites)

    const isFav = favorites.some((fav) => fav.id === id)

    const handleFavorite = () => {
        if (isFav) {
            dispatch(removeFav(id))
        } else {
            dispatch(addFav(props))
        }
    }

    useEffect(() => {
        characters.forEach((fav) => {
            if (fav.id === id.toString()) {
                setIsfav(true)
            }
        })
    }, [characters])
    return (
        <div className="flex h-2/3 flex-col items-center justify-center rounded-md bg-purple-600 text-neutral-300 dark:bg-purple-900 dark:text-white">
            <div className="flex w-full justify-around p-1">
                <button className='md:btn' onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
                {location.pathname !== '/favorites' && (
                    <button className=' text-lg' onClick={() => onClose(id)}>x</button>
                )}
            </div>

            <Link to={`/detail/${id}`}>
                <h2 className="p-2  text-lg rounded-lg hover:bg-purple-400">{name}</h2>
            </Link>
            <div className="py-1">
                <h2>{status}</h2>
                <h2>{species}</h2>
                <h2>{gender}</h2>
                <h3>{origin.name}</h3>
                <p>id: {id}</p>
            </div>

            <img className="w-11/12 rounded-lg pb-2" src={image} alt="" />
        </div>
    )
}

export default Card
