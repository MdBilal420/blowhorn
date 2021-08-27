import React from 'react'

const TeamCard = ({ item }) => {
    return (

        <div className="mt-5">
            <img src={item.src} height="100" alt="" className="flex rounded-full ring-2 ring-white items-center" />
            <div className="flex flex-col text-center items-center">
                <div className="text-center text-xl mb-2">{item.name}</div>
                <div className="text-center text-indigo-600 mb-6">{item.post}</div>
            </div>

        </div>

    )
}

export default TeamCard
