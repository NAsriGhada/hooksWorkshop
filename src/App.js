import { useState } from "react";
import PetList from './component/PetList.jsx'


function App() {
  const [name, setName] = useState('Pet Store')
  const [pets, setPets] = useState([
    {
      id: 0,
      name: "Buddy",
      race: "Dog",
      type: "Hound",
      location: "California",
      photo: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSqBxhZ7_-vJ7-611CrRPwevycxdQ-ONuCRlnympvCUF18qzy-BFa6D7QOR8LqX3SXKi9VcwcyAUuLZxg0",
      status: 'available'
    },
  ]);
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={() => setName('Welcome to our shop')}>Click</button>
      <PetList pets={pets} />
    </div>
  );
}

export default App;
