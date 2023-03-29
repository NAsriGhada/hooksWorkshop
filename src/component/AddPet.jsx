import React, { useState } from 'react'

const AddPet = ({ addPet }) => {
    const [name, setName] = useState('')
    const [race, setRace] = useState('')
    const [type, setType] = useState('')
    const [location, setLocation] = useState('')
    const [photo, setPhoto] = useState('')
    const [status, setStatus] = useState('')

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        console.log(e)
        setInputValue(e.target.value)
    }
  return (
    <div>
      <hr />
      <div>
        <label>Type something:</label>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>You typed: {inputValue}</p>
      </div>
      <hr />
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label>Race</label>
          <input
            type="text"
            onChange={(e) => setRace(e.target.value)}
            value={race}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Type</label>
          <input
            type="text"
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Location</label>
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Photo</label>
          <input
            type="text"
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            placeholder="type the status"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          />
        </div>
        <button
          className="btn btn-success"
          onClick={(e) => {
            e.preventDefault();
            addPet({ name, race, type, location, photo });
          }}
        >
          Add Pet
        </button>
      </form>
    </div>
  );
}

export default AddPet