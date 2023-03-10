import React,{useEffect,useState} from 'react'
import "./Sidebar.css"
import { Box,Divider,Drawer,IconButton,List,ListItem,
    ListItemButton,ListItemIcon,ListItemText,Typography } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'; 
import { useLocation,useNavigate } from 'react-router-dom'; 
import FlexBetween from './FlexBetween';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const navItem = [
    {
        text:"Dashboard",
        icon:<HomeOutlinedIcon/>
    },
    {
        text:"Client Facing",
        icon:null,
    },
    {
        text:"Products",
        icon:<ShoppingCartOutlinedIcon/>
    },
    {
        text:"Customers",
        icon:<Groups2OutlinedIcon/>
    },
    {
        text:"Transactions",
        icon:<ReceiptLongOutlinedIcon/>
    },
    {
        text:"Geography",
        icon:<PublicOutlinedIcon/>
    },
    {
        text:"Sales",
        icon:null,
    },
    {
        text:"Overview",
        icon:<PointOfSaleOutlinedIcon/>
    },
    {
        text:"Daily",
        icon:<TodayOutlinedIcon/>
    },
    {
        text:"Monthly",
        icon:<CalendarMonthOutlinedIcon/>
    },
    {
        text:"BreakDown",
        icon:<PieChartOutlinedIcon/>
    },
    {
        text:"Management",
        icon:null,
    },
    {
        text:"Admin",
        icon:<AdminPanelSettingsOutlinedIcon/>
    },
    {
        text:"Perfomance",
        icon:<TrendingUpOutlinedIcon/>
    },
    
]

const Sidebar = ({drawerWidth,isSidebarOpen,setIsSidebarOpen,isNoneMobile}) => {
    const {pathname} = useLocation();
    const [active,setActive] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        setActive(pathname.substring(1));
    },[pathname])
  return (
    <Box component="nav">
        {isSidebarOpen && (<Drawer open={isSidebarOpen} onClose={()=>setIsSidebarOpen(false)}
         variant="persistent" anchor='left' sx={{width: drawerWidth,
         "& .MuiDrawer-paper":{color:"#555555",backgroundColor:"#ffeb39",boxSizing:"border-box",
         borderWidth: isNoneMobile ? 0 : "2px",width:drawerWidth}
         }}><Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
                <FlexBetween sx={{color:"#555555"}}>
                    <Box display="flex" alignItems="center" gap="0.5rem">
                        <Typography variant='h5' fontWeight="bold">
                            H@rtman
                        </Typography>
                    </Box>
                    {!isNoneMobile && (<IconButton onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
                        <ChevronLeftOutlinedIcon/>
                    </IconButton>)}
                </FlexBetween>
            </Box>
            <List>{navItem.map(({text,icon}) =>{
                if(!icon){
                    return(
                        <Typography key={text} sx={{m: "2.25rem 0 1rem 3rem",fontSize:"10px"}}>
                            {text}
                        </Typography>
                    )
                }
                const lcText = text.toLowerCase();

                return(
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={()=>{navigate(`/${lcText}`);
                        setActive(lcText);
                    }}
                    sx={{backgroundColor:active === lcText ? "#ffeb39" : "transparent",
                    color:active === lcText ? "#555":"#555555"}}
                    >
                        <ListItemIcon sx={{ml:"2rem", color:active === lcText ? "#555":"#555555" }}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                        {active === lcText && (<ChevronRightOutlinedIcon sx={{ml: "auto"}}/>)}
                    </ListItemButton>
                    </ListItem>
                )
            })}</List>
         </Box>
            </Drawer>)}
    </Box>
  )
}

export default Sidebar