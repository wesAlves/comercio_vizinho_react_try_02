import {useState} from 'react'
import './App.css'
import {Box,} from "@mui/material";
import {CustomAppBar} from "./components/CustomAppBar.tsx";
import {MainMenu} from "./components/MainMenu.tsx";
import {MainContent} from "./components/MainContent.tsx";


function App() {

    const [drawerWidth, setDrawerWidth] = useState<number>(240)

    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
        setDrawerWidth(drawerWidth === 240 ? 64 : 240);
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", height: "100vh"}}>
            <CustomAppBar onClick={handleOpen}/>

            <Box style={{position: "relative"}} sx={{display: "flex", height: "100%"}}>
                <MainMenu width={drawerWidth} open={open}/>
                <MainContent/>
            </Box>

        </Box>
    )
}

export default App
