import React,{useState} from 'react';
import {Box, useMediaQuery } from "@mui/material";
import { Outlet } from 'react-router-dom';
import "./Layout.css";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = () => {
    const  isNoneMobile = useMediaQuery("min-width: 400px");
    const [isSidebarOpen,setIsSidebarOpen] = useState(true);
  return (
    <Box display={isNoneMobile ? "flex" : "block"} width='100%' height='100%'>
        <Sidebar isNoneMobile={isNoneMobile}
        drawerWidth = "250px"
        isSidebarOpen = {isSidebarOpen}
        setIsSidebarOpen = {setIsSidebarOpen}
        />
        <Box>
            <Navbar isSidebarOpen = {isSidebarOpen}
        setIsSidebarOpen = {setIsSidebarOpen}/>
            <Outlet/>
        </Box>
    </Box>
  )
}

export default Layout