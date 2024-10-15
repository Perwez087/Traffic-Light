import React from 'react'
import TrafficLight from './TrafficLight'

const App = () => {
  const TrafficLights = {
    red:{
      duration:4000,
      backgroundColor:"red",
      next: "green"
    },
    yellow:{
      duration:500,
      backgroundColor:"yellow",
      next: "red"
    },
    green:{
      duration:3000,
      backgroundColor:"green",
      next: "yellow"
    },
    
  }
  return (
    <div className='flex flex-col items-center justify-center p-5'>
      <h1 className='text-2xl mb-4 font-semibold'>Traffic Light</h1>
       <TrafficLight data={TrafficLights}/>
    </div>
  )
}

export default App
