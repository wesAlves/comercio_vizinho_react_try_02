import React, {useState} from 'react'
import './App.css'
import {Box,} from "@mui/material";
import {CustomAppBar} from "./components/CustomAppBar.tsx";
import {MainMenu} from "./components/MainMenu.tsx";
import {Outlet} from "react-router-dom";


function App() {


    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", height: "100vh"}}>
            <CustomAppBar onClick={handleOpen}/>

            <Box style={{position: "relative"}} sx={{display: "flex", height: "100%"}}>
                <MainMenu open={open}/>
                <Box as={Outlet} sx={{flex:1}} />
            </Box>

        </Box>
    )
}

export default App
