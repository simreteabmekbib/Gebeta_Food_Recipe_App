import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Sidebar.css';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar);
        document.getElementById('toggle').classList.add('new');
    }
    return (
        <>
        <div className="navbar1">
            <Link to="#" className='menu-bars'>
                <FaIcons.FaBars className='new1' onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <h1 className="h1">Gebeta</h1>
            <ul className = 'nav-menu-items' onClick={showSidebar}>
                <li  className="navbar-toggle">
                    <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars id="toggle" />
                    </Link>
                </li>
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
        </>
        
    );
}

export default Sidebar;
