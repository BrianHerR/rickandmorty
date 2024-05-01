import React, { useState } from 'react'

function Searchbar({ onSearch }) {
    const [character, setCharacter] = useState('')

    const handleChange = (event) => {
        setCharacter(event.target.value)
    }
    return (
        <div className="flex justify-around pt-4">
            <input
                className="rounded-md px-6 text-center text-xs
                dark:text-black dark:decoration-slate-300 text-neutral-900 bg-slate-200 ring-offset-2 ring "
                placeholder="id de personaje..."
                type="search"
                onChange={handleChange}
                value={character}
            />

            <button
                className="rounded-xl border-2 border-solid dark:border-white dark:bg-purple-700 px-4 py-1 text-sm hover:bg-purple-400"
                onClick={() => {
                    onSearch(character)
                }}
            >
                Agregar 🔍
            </button>
        </div>
    )
}

export default Searchbar
