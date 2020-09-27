import { nanoid } from 'nanoid'

let bodies = new Set()

class Body {
    constructor( name, mass, position, init_velocity, textures){
        this.id = nanoid()
        this.name = name
        this.mass = mass
        this.position = position
        this.init_velocity = init_velocity
        this.velocity = 0
        this.textures = textures
        this.body_set = bodies.add(this)
    }
    // get
    get id(){ return this.id }
    get name(){ return this.name }
    get mass(){ return this.mass }
    get position(){ return this.position }
    get init_velocity(){ return this.init_velocity }
    get velocity(){ return this.velocity }
    get textures(){ return this.textures }
    // set
    set id(x){ this.id = x }
    set name(x){ this.name = x }
    set mass(x){ this.mass = x }
    set position(x){ this.position = x }
    set init_velocity(x){ this.init_velocity = x }
    set velocity(x){ this.velocity = x }
    set textures(x){ this.textures = x }
    // method override
    toString() { return this.name }
    // methods
    set_init_velocity_to_velocity(){ this.velocity = this.init_velocity }
 }

 //let s1 = new Student(101,'Sachin','Tendulkar')

 let earth = new Body( 
    'Earth',
    'mass',
    'position',
    'init_velocity',
    {
        color:'https://live.staticflickr.com/2521/3884071286_0b6ddb55dd_h.jpg',
        normal:'none :('
    }
)


export default {

    earth:{
      textures: {
        color:'https://live.staticflickr.com/2521/3884071286_0b6ddb55dd_h.jpg',
        normal:'none :('
      },
      dimensions:[1,50,50],
      position:[0,1,0],
    },

    moon:{
      textures: {
        color:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06a094a4-7bd7-4bb9-b998-6c1e17f66c08/ddgkj0e-cef8beda-42a6-48b0-aa9d-d108d472318b.jpg/v1/fill/w_1024,h_512,q_75,strp/moon_texture_map_16k_by_fargetanik_ddgkj0e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8wNmEwOTRhNC03YmQ3LTRiYjktYjk5OC02YzFlMTdmNjZjMDhcL2RkZ2tqMGUtY2VmOGJlZGEtNDJhNi00OGIwLWFhOWQtZDEwOGQ0NzIzMThiLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.QxaPGudwXKjvihxJrxEZ6Uo7F8hKYy8ADMvvkaJyBQ0',
        normal:'none :('
      },
      dimensions: [.27,50,50],
      position:[1,1,0],
    },
}