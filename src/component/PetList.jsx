import React from 'react'
import PetCard from './PetCard'

const PetList = ({pets, query}) => {
  return (
      <div>
      {pets.filter((post) => {
        if (query === '') {
              return post
        } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
          return post
        }
        return false
          }).map((el, key) => (
              <PetCard el={el} key={ key} />
          ))}
    </div>
  )
}

export default PetList