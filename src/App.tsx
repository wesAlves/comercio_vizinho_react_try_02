import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
    AppBar, Box,
    Button,
    Container,
    Drawer,
    IconButton,
    styled,
    Toolbar,
    Typography,
    useScrollTrigger
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function App() {

    const [drawerWidth, setDrawerWidth] = useState<number>(240)

    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
        setDrawerWidth(drawerWidth === 240 ? 64 : 240);
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", height: "100vh"}}>
            <AppBar
                sx={{position: "relative", top: 0, left: 0, right: 0}}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={handleOpen}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            <Box style={{position: "relative"}} sx={{display: "flex", height: "100%", background: "#f00"}}>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        position: "relative !important",
                        flexShrink: 0,
                        transitionDuration: "300ms",
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        }
                    }}
                    open={open} variant={"persistent"}
                    PaperProps={{
                        elevation: 100,
                        sx: {position: "relative", top: "0px", left: 0, bottom: 0, height: "100%"}
                    }}
                >

                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Produtos</li>
                            <li>Serviços</li>
                        </ul>
                    </nav>
                </Drawer>

                <div style={{width: "100%", flex: 1, background: "yellow"}}>content</div>
            </Box>
        </Box>
    )
}

export default App
