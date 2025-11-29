import './App.css'
import { Canvas } from '@react-three/fiber'

function App() {

  return (
    <>
      <Canvas>
        <mesh rotation={[0, 10, 0]}>
          <boxGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={"#6be092"} />
        </mesh>
      </Canvas>
    </>
  )
}

export default App
