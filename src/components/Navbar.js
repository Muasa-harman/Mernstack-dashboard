import React,{useState} from 'react'
import "./Navbar.css"
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FlexBetween from '../components/FlexBetween';
import { AppBar, IconButton, InputBase, Toolbar } from '@mui/material';

const Navbar = ({isSidebarOpen,setIsSidebarOpen}) => {
  return (
    <AppBar sx={{position:"static",
    background:"#ffeb39",
    boxShadow:"none",
    }}>
        <Toolbar sx={{justifyContent:"space-between",color:'#555'}} >
            {/* left-side */}
            <FlexBetween>
                <IconButton sx={{color:'#555'}} onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuOutlinedIcon color='#555'/>
                </IconButton>
                <FlexBetween backgroundColor="#ffeb39" sx={{color:'#555'}} borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
                    <InputBase sx={{color:'#555'}} placeholder='Search...'/>
                    <IconButton>
                        <SearchOutlinedIcon sx={{color:'#555'}}/>
                    </IconButton>
                </FlexBetween>
            </FlexBetween>
            {/* Right-side */}
            <FlexBetween gap="1.5rem" color='#555'>
                <IconButton sx={{color:'#555'}} onClick={()=>console.log('dark/light mode')}>
                    <DarkModeOutlinedIcon color='#555' sx={{fontSize:"25px"}}/> : <LightModeOutlinedIcon color='#555' sx={{fontSize:"25px"}}/>
                </IconButton>
                <IconButton sx={{color:'#555'}}>
                    <SettingsOutlinedIcon  onClick={()=>console.log('dark/light mode')} sx={{fontSize:"25px"}}/>
                </IconButton>
                    <AccountCircleOutlinedIcon color='#555' sx={{fontSize:"30px"}}/>
            </FlexBetween>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar