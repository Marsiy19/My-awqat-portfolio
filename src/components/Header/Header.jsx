import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { headerMenus } from '../../assets/data/headerMenus'
import { useRef } from 'react'

const Header = () => {

  const mobileMenu = useRef(null)

  const menuToggle = () => mobileMenu.current.classList.toggle('active__menu')

  const removeMenu = () => mobileMenu.current.classList.remove('active__menu')


  return (
      <div className='w-full px-[10%] py-[20px] shadow-md bg-white z-50 sticky top-0 flex items-center justify-between header'>
          <Link to={"/"}>
            <h1 className='logo text-slate-600 text-xl font-bold uppercase'>
            My <span className='text-red-800'>Awqat</span>
            </h1>
          </Link>
          

              <ul className='flex gap-6 menus '  ref={mobileMenu} > 
              
                {headerMenus.map((menu) => (
                  <li className='menu__text' key={menu.id}>
                  <Link onClick={removeMenu} className="font-semibold  text-slate-600 text-xl uppercase transition duration-200 hover:text-red-800" to={menu.path}>
                    {menu.label}
                  </Link>

                  </li>
                ))}
              </ul>

          <div  ref={mobileMenu} onClick={menuToggle} className="icon__menu">
          <i className='bx bx-menu text-2xl hover:text-orange-500'></i>
          </div>
      </div>

  )
  
}

export default Header