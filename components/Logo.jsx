import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {useRef} from "react"


export default function Logo()
{
    const logo = useGLTF('./logo3d.gltf')
    
    useFrame(() => (logo.scene.rotation.y += 0.01))
    
    

    return <primitive
        object={ logo.scene }
        scale={ 0.040 }
        position={ [0,-1,-10] }
        rotation-x={0 }
        
    />
}
