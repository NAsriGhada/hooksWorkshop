import React from 'react'
import PetCard from './PetCard'

const PetList = ({pets}) => {
  return (
      <div>
          {pets.map((el, key) => (
              <PetCard el={el} key={ key} />
          ))}
    </div>
  )
}

export default PetList