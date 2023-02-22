import { OrbitControls } from "@react-three/drei"


export const Cube = () =>
{


    return (
    <>
        <OrbitControls></OrbitControls>
    <mesh>
        <boxGeometry></boxGeometry>
        <meshNormalMaterial></meshNormalMaterial>
    </mesh>

    </>
    
    
   )
}