import { Suspense } from 'react'
import { Environment, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import Model from './Earth'




const EarthUI = () => {


  return (
    <Suspense fallback={<div>loading</div>}>

        <Model />
    
    </Suspense>
  )
}


export default EarthUI