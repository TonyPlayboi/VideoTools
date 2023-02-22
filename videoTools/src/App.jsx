import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import  { Cube} from './Cube'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas>
      <Cube></Cube>
    </Canvas>
  )
}

export default App
