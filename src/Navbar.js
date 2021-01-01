import React,{ useState } from 'react'
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons'
import './Navbar.css';

function Navbar() { 

    const [ sidebar, setSidebar ] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)

    return (
       <div className="mainbody">
       <IconContext.Provider value={{color: 'white'}}>
       <div className="navbar">
            <Link to="#" className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'} >
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                   <Link to="#" className='menu-bar'>
                       <AiIcons.AiOutlineClose />
                   </Link>
                </li>

                <div className="makesname"> 
                Made by Aditya Paul
                <div className="collname">IIIT Surat CSE</div>
            </div>
                <div className="list">
                {SidebarData.map((item,index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <a href={item.path} >
                                {item.icon}
                                <span>{item.title}</span>
                            </a>
                        </li>
                    )
                } )}
                </div>
            <div className="lower"></div>
            </ul>
        </nav>
       
       </IconContext.Provider >
       </div>
    )
}

export default Navbar
