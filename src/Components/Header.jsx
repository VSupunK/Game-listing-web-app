import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/Images/logo.png'
import { TbSearch } from "react-icons/tb";
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
    const [toggle, setToggle] = useState(true);
    const {theme, setTheme} = useContext(ThemeContext);

    useEffect(()=>{
        console.log("theme", theme)
    },[])

  return (

      <div className='flex items-center p-3'>
          <img src={logo} alt="Logo" width={60} height={60} />
          <div className='flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center'>
              <TbSearch />
              <input type="text" placeholder="Search Games" className='bg-transparent outline-none pl-2 w-full' />
          </div>
          <div>
              {theme == 'light' ? (
                  <HiMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                    onClick={() => {setTheme('dark'); localStorage.setItem('theme','dark')}} />
              ) : (
                  <HiSun className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                      onClick={() => {setTheme('light'); localStorage.setItem('theme','light')}} />
              )}
          </div>
      </div>
  );
}

export default Header