import React, { useEffect, useState } from "react";

const TrafficLight = ({data}) => {
  const [currentColor, setCurrentColor] = useState("green");

  useEffect(()=>{
   const {duration,next} = data[currentColor];

   const timerId = setTimeout(()=> {
    setCurrentColor(next);
   },duration);

   return () =>{
    clearTimeout(timerId);
   }

  },[currentColor])

  return (
    <div className="bg-black text-white w-max flex flex-col gap-4 items-center p-8 rounded-3xl">
      {
        Object.keys(data).map((color)=>(
          <div className={`w-28 h-28 rounded-full mt-2 bg-zinc-500`} style={{backgroundColor: color === currentColor && data[color].backgroundColor}}></div>
        ))
      }
    </div>
  );
};

export default TrafficLight;
