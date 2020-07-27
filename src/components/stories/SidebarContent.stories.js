import React from 'react';
import '../componentViews/SidebarContent';
import '../../App.scss'
import SidebarContent from '../componentViews/SidebarContent';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {title:'SidebarContent'}

export const sideBarContent = () =>{
    return <SidebarContent renderIcon={<FontAwesomeIcon
        icon={faChartBar} />} content="Dashboard" toRe="/dashboard" />
}

export const sideBarContentWithoutIcon = () =>{
    return <SidebarContent content="Dashboard" toRe="/dashboard" />
}