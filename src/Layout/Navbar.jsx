import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const Navbarr = ["home", "product", "contact", "services", "contact"]
  return (

    <div className=" bg-red-500">
    <ul className='flex flex-col items-center md:flex-row justify-around'> 
    {Navbarr.map((navData,i)=>{
        return(
            <div key={i}>
           <li className='p-4 font-[500] text-[18px] capitalize'>{navData}</li> 
            </div>
        )
      })}</ul>
    </div>
     
  
  )
}

export default Navbar
