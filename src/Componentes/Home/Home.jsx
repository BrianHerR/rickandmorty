import React from 'react'
import Card from '../Card/Card'

function Home({ characters, onClose }) {
    return (
        <div className="mx-auto flex h-full w-2/3 flex-row flex-wrap justify-center gap-2 p-4">
            {characters?.map((character) => (
                <Card
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    origin={character.origin}
                    species={character.species}
                    gender={character.gender}
                    image={character.image}
                    onClose={onClose}
                />
            ))}
        </div>
    )
}

export default Home
