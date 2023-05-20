import React, { useState } from 'react'
import character from './data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
const People = () => {
    const [i, setI] = useState(0)
    const { id, name, image, about } = character[i]
    const setIndex=(id)=>{
       if(id<=5)
           setI(id + 1)
        else 
           setI(0)
    }

    return (
        <div className=' bg-slate-500/30 rounded-lg p-5 shadow-2xl  w-[500px] grid gap-3 place-items-center ' key={id}>
            <img className='rounded-full' src={image} alt='' />
            <p className='text-3xl font-bold text-black'>{name}</p>
            <p className='text-lg'>{about}</p>
          <div className='flex'>
                < FaChevronLeft  />
                <FaChevronRight onClick={() => setIndex(id)} />
          </div>
        </div>
    )
}

export default People
