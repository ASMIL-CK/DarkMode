import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_ligth from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toogle_ligth from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'



const Navbar = ({theme, setTheme }) => {
  const toggle_mode = ()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <div className='navbar'>

        <img src={theme == 'light' ? logo_light : logo_dark}
         alt="" className='logo'/>

        
    <ul>
        <li>Home</li>
        <li>products</li>
        <li>Features</li>
        <li>About</li>
    </ul>

    <div className='search-box'>
        <input type="text"  placeholder='Search'/>
        <img src={theme == 'light'? search_icon_ligth : search_icon_dark} 
        alt="" className='search-icon'/>
    </div>

    <img onClick={()=>{toggle_mode()}} src={theme == 'light'?toogle_ligth : toogle_dark} 
    alt="" className='toggle-icon' />
    </div>

  )
}

export default Navbar
