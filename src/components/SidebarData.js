import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Foods',
        path:'/foods',
        icon: <GiIcons.GiFoodTruck/>,
        cName: 'nav-text'
    },
    {
        title: 'Drinks',
        path:'/drinks',
        icon: <BiIcons.BiDrink/>,
        cName: 'nav-text'
        
    },
    {
        title: 'SignUp',
        path:'/signup',
        cName: 'nav-text'
       
    },
    {
        title: 'Login',
        path:'/signin',
        cName: 'nav-text sin-log'
       
    },
]