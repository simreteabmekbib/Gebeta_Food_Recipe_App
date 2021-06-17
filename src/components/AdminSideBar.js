import React, {useState}  from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import {SidebarData} from './AdminSidebarData';
import './admin_side.css';
import { IconContext } from 'react-icons';

function AdminSideBar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{ color: 'brown'}}>
        <div className='navbar'>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            {/* <div className='h1style'>
                <h1> Dash Board</h1>
            </div> */}
             
        </div>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className="nav-menu-items">
                <li className="navbar-toggle"  onClick={showSidebar}>
                    <Link t="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose/>
                    </Link> 
                </li>
                <h1 className='h1style'> Gebeta</h1>
                {SidebarData.map((item,index) => {
                    return (
                        <li key={index} className={item.cName} >
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                            
                        </li>
                        
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default AdminSideBar
