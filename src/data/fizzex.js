import bodies from './bodies'
//mass
//radius
//inital_velocity
//current_velocity

const start_fizzex =( bodies )=> ( bodies.forEach( ( body ) => body.set_init_velocity_to_velocity() ) )

const update_all_velocities =( bodies, epoch )=> (
     bodies.forEach( ( body ) => body.set_init_velocity_to_velocity() )
     let sqrDistance = 0

    )