import React, { useState } from 'react'
import character from './data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
const People = () => {
    const [i, setI] = useState(0)
    const { id, name, image, about } = character[i]
    const setPrev = () => {

        setI((i) => {
            if (i - 1 < 0)
                return 4
            else
                return i - 1
        })

    }
    const setNext = () => {
        setI((i) => {
            if (i + 1 < character.length)
                return i + 1
            else
                return 0
        })
    }

    return (
        <div className=' bg-orange-500 rounded-lg p-5 shadow-xl  w-[500px] grid gap-3 text-white place-items-center ' key={id}>
            <img className='rounded-full w-[200px] ' src={image} alt='' />
            <p className='text-3xl font-bold '>{name}</p>
            <p className='text-lg'>{about}</p>
            <div className='flex space-x-3 text-xl'>
                < FaChevronLeft className='cursor-pointer' onClick={() => setPrev()} />
                <FaChevronRight className='cursor-pointer' onClick={() => setNext()} />
            </div>
        </div>
    )
}

export default People
