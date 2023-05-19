import people from "./data";
import React from 'react'

const character = () => {
  return (
    <div>
          <div className="flex text-2x">
              {people.map((i) => {
                  const { id, name, image, about } = i;
                  return (
                      <div >
                          < p > {name}</p>
                          <img className=" " src={image} alt="pic" />
                          <p>{about}</p>
                      </div>
                  )
              })
              }
          </div>
    </div>
  )
}

export default character
