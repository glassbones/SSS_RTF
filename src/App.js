import * as THREE from 'three'
import * as tf from '@tensorflow/tfjs'
import React, {useRef, useMemo} from 'react'
import './App.scss'

import { Canvas, useFrame } from "react-three-fiber"
import { Box, softShadows, OrbitControls, PointerLockControls, FlyControls } from "drei"


const my = {
  earth:{
    textures: {
      color:'https://live.staticflickr.com/2521/3884071286_0b6ddb55dd_h.jpg',
      normal:'none :('
    },
    dimensions: [ 1,50,50 ],
    position:[0,1,0],
  },
  earth2:{
    textures: {
      color:'https://live.staticflickr.com/2521/3884071286_0b6ddb55dd_h.jpg',
      normal:'none :('
    },
    dimensions: [ 1,50,50 ],
    position:[-31.1,1,0],
  },
  earth3:{
    textures: {
      color:'https://live.staticflickr.com/2521/3884071286_0b6ddb55dd_h.jpg',
      normal:'none :('
    },
    dimensions: [ 1,50,50 ],
    position:[31.1,1,0],
  },
  earth4:{
    textures: {
      color:'https://live.staticflickr.com/2521/3884071286_0b6ddb55dd_h.jpg',
      normal:'none :('
    },
    dimensions: [ 1,50,50 ],
    position:[0,1,-31],
  },
  earth5:{
    textures: {
      color:'https://live.staticflickr.com/2521/3884071286_0b6ddb55dd_h.jpg',
      normal:'none :('
    },
    dimensions: [ 1,50,50 ],
    position:[0,1,31.1],
  },
  moon:{
    textures: {
      color:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06a094a4-7bd7-4bb9-b998-6c1e17f66c08/ddgkj0e-cef8beda-42a6-48b0-aa9d-d108d472318b.jpg/v1/fill/w_1024,h_512,q_75,strp/moon_texture_map_16k_by_fargetanik_ddgkj0e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8wNmEwOTRhNC03YmQ3LTRiYjktYjk5OC02YzFlMTdmNjZjMDhcL2RkZ2tqMGUtY2VmOGJlZGEtNDJhNi00OGIwLWFhOWQtZDEwOGQ0NzIzMThiLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.QxaPGudwXKjvihxJrxEZ6Uo7F8hKYy8ADMvvkaJyBQ0',
      normal:'none :('
    },
    dimensions: [ .27,50,50 ],
    position:[1,1,0],
  },
}

const number_of_bodies = 1

/*

function calcA(x){
  const unstackedX= tf.unstack(x)
  const accelerations = Array(number_of_bodies).fill(tf.tensor1d([0,0,0]))

  for (let i=0; i < number_of_bodies; i++){
    const iX = unstackedX[i]
    for (let j=i + 1; i < number_of_bodies; j++){
      const jX = unstackedX[j]
      const vector = tf.sub(jX,iX)
      const r = tf.norm(vector)

      const force = G.mul(masses[i])
        .mul(masses[j])
        .div(tf.pow(r,3 ))
        accelerations[i] = accelerations[i].add(force)
        accelerations[j] = accelerations[j].add(force)
    }
    accelerations[i] = accelerations[i].add(force).div(masses[i])
  }
  return tf.stack(accelerations)
}
*/

const cam_props = {
  position: [0, 10, 0],
  rotation: [10, 0],
  fov: 60
}
let coleNum = 0
let switchY = false

var countey = 0;
var inc = Math.PI *2 / 100  ;



function counter(pos, type){
  //let {x, z} = pos
  

  console.log(` x = ${pos.x} y = ${pos.z} distance = ${Math.sqrt( Math.abs(pos.x^2-0^2 - pos.y^2-0^2))}`)
  let x = -Math.cos( countey )  / 2 + .5
  let y = Math.sin( countey )  / 2 + .5
  //let distance = ( (Math.abs(pos.x)) ) + ( Math.abs((pos.z)) )
  if(type == 'x'){
    countey += inc
    //console.log(distance)
    return x;
  }
  else{
    //console.log(distance)
    return y
  }


  /*
  if (type === 'x'){
    swapper = switchX
    if (x >= 30.1 || x <= -30.1){switchX = !switchX}
    if (!switchX){ return Math.sin(Math.PI, pos.x)  }
    else{ return Math.sin(Math.PI, pos.x) }
  }else{
    swapper = switchY
    if (z >= 30.1 || z <= -30.1){switchY = !switchY}
    if (!switchY){ return Math.cos(Math.PI, pos.z) }
    else{ return Math.cos(Math.PI, pos.z) }
  }
  */
}

function Sphere( { props } ){
  const { dimensions, position , textures: {color, normal}} = props
  //props = JSON.stringify(props).substring(13).slice(0, -2)
  const mesh = useRef( null )
  useFrame( ()=> (mesh.current.rotation.y += 0.01) )
  const texture = useMemo(() => new THREE.TextureLoader().load(color), [color])
  return(
    <mesh ref={mesh} position={position}>                     
      <sphereBufferGeometry attach='geometry' args={ dimensions } />
      <meshPhongMaterial attach='material' transparent>
      <primitive attach="map" object={texture} />
      </meshPhongMaterial>
    </mesh>
  )
}

function Sphere2( { props } ){
  const { dimensions, position, textures: {color, normal}} = props
  const texture = useMemo(() => new THREE.TextureLoader().load(color), [color])
  const mesh = useRef( null )
  useFrame(()=>{
    mesh.current.rotation.y += 0.01
    mesh.current.position.x += counter(mesh.current.position, 'x')
    mesh.current.position.z += counter(mesh.current.position, 'z')  
  })

  return(
    <mesh ref={mesh} position={position}>                    
      <sphereBufferGeometry attach='geometry' args={ dimensions } />
      <meshPhongMaterial attach='material' transparent>
        <primitive attach="map" object={texture} />
      </meshPhongMaterial>
    </mesh>
  )
}

function Axis( { props } ){
  const color = ['red','blue']
  const dimensions = [ [.01,.01,10], [10,.009,.01] ]
  return(
    <mesh>                       
      <boxBufferGeometry attach='geometry' args={dimensions[props]} />
      <meshBasicMaterial attach='material' color={color[props]} />
    </mesh>
  )
}

const light_level = 0

const App =()=> (
  <>
    <Canvas colorManagement camera={ cam_props }>
    <ambientLight intensity={ light_level }/> {/* got this puppy turned off */}
    <pointLight position={ [0, 0, -20] } intensity={ 1 } />
    
    <group>
      <Sphere props={my.earth}/>
      <Sphere props={my.earth2}/>
      <Sphere props={my.earth3}/>
      <Sphere props={my.earth4}/>
      <Sphere props={my.earth5}/>
      <Sphere2 props={my.moon}/>
    </group>

    <group>
      <Axis props={0}/>
      <Axis props={1}/>
    </group>
      {/* 
      <mesh>                       
        <boxBufferGeometry attach='geometry' args={[.01,.01,10]} />
        <meshBasicMaterial attach='material' color='red' />
      </mesh>
      <mesh>                       
        <boxBufferGeometry attach='geometry' args={[10,.009,.01]} />
        <meshBasicMaterial attach='material' color='blue' />
      </mesh>
      */}
      {/* render a preset shape with drei
      <Box> <meshStandardMaterial/> </Box>
      */}
      
      <FlyControls movementSpeed={10} />
      <PointerLockControls/>
    </Canvas>
  </>
)


export default App;
