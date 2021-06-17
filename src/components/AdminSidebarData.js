import React, {useState}  from 'react'
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
    {
    
        title: 'Dashboard',
        path:'/dashboard',
        icon: <FaIcons.FaClipboardList/>,
        cName: 'dashboard nav-text'
    },
    {
        title: 'All Recipes',
        path:'/all_recpie',
        icon: <FaIcons.FaCookie/>,
        cName: 'allRecpie nav-text'
    },

    {
        title: 'New Recipe list',
        path:'/new_recpieList',
        icon: <FaIcons.FaCookieBite/>,
        cName: 'newRecpieList nav-text'
        
    },

    {
        title: 'Update',
        path:'/update',
        icon: <FaIcons.FaCookie/>,
        cName: 'allRecpie nav-text'
    },
    {
        title: 'New Recipe',
        path:'/new_recpie',
        icon: <FaIcons.FaCookieBite/>,
        cName: 'newRecpie nav-text'
        
    },
    {
        title: 'Log Out',
        path:'/',
        icon: <FiIcons.FiLogOut/>,
        cName: 'nav-text log_out'
       
    },
]