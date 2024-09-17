import React, {useState} from 'react'
import './App.css'
import {
    AppBar, Avatar, Box,
    Button,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {SearchOutlined, Shop, ShoppingCart, ShoppingCartOutlined} from "@mui/icons-material";


const homeCards = [
    {"name": "Foods and drinks"},
    {"name": "Beauty shop"},
    {"name": "Gardner"},
    {"name": "Barber shop"},
    {"name": "Second hand"},
    {"name": "Building"},
    {"name": "Car maintenance"}
]


function App() {

    const [drawerWidth, setDrawerWidth] = useState<number>(240)

    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
        setDrawerWidth(drawerWidth === 240 ? 64 : 240);
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", height: "100vh"}}>
            <AppBar elevation={0}
                    sx={{
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: 0,
                        background: "white",
                        dropShadow: "none",
                        border: "1px solid #c2c2c2"
                    }}
            >
                <Toolbar sx={{color: "black"}}>
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
                    <IconButton sx={{mr: "8px", border: "2px solid #c2c2c2", background: "#F4F4F4"}}>
                        <ShoppingCartOutlined sx={{color: "#c2c2c2"}}/>
                    </IconButton>
                    <Avatar>
                        WB
                    </Avatar>
                </Toolbar>
            </AppBar>

            <Box style={{position: "relative"}} sx={{display: "flex", height: "100%"}}>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        position: "relative !important",
                        flexShrink: 0,
                        transitionDuration: "300ms",
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                        borderRight: "1px solid #c2c2c2",
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

                <Box sx={{width: "100%"}}>

                    <Box sx={{
                        height: "64px",
                        borderBottom: "1px solid #c2c2c2",
                        paddingX: "16px",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Typography variant={"h1"} fontSize={24} sx={{p: "0", m: 0}}>Home</Typography>
                        <Box sx={{marginLeft: "auto"}}>
                            <Button sx={{
                                mr: "8px",
                                border: "2px solid #c2c2c2",
                                background: "#F4F4F4",
                                borderRadius: "32px"
                            }}>Filtros</Button>
                            <IconButton sx={{mr: "8px", border: "2px solid #c2c2c2", background: "#F4F4F4"}}>
                                <SearchOutlined sx={{color: "#c2c2c2"}}/>
                            </IconButton>
                        </Box>
                    </Box>

                    <Box sx={{
                        padding: "32px 32px 32px 16px",
                        display: "grid",
                        gridTemplateRows: "repeat(12, 80px)",
                        gridTemplateColumns: "repeat(12, 80px)",
                        gridGap: "16px"
                    }}>

                        {homeCards.map((card, index) => {
                            let startingCol = 1;
                            let spanCol = 3;
                            let startingRow = index * 2 + 1;
                            let spanRow = 2;

                            if (index > 3) {
                                startingCol = 7;
                                spanCol = 3;
                                startingRow = (index - 4) * 2 + 1;
                                spanRow = 4
                            }

                            if (index <= 1 && index < 3 || index === 6) {
                                spanCol = 6
                            }

                            if(index === 3){
                                startingCol = 4;
                                startingRow-=2;
                            }

                            if(index === 5){
                                startingRow = 1;
                                startingCol = 10;

                            }

                            if(index === 6){
                                spanRow = 2;
                            }



                            return (
                                <Box sx={{
                                    border: "4px solid #749A44",
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "32px",
                                    padding: "16px",
                                    boxSizing: "border-box",
                                    gridColumn: `${startingCol} / span ${spanCol}`,
                                    gridRow: `${startingRow} / span ${spanRow}`
                                }}
                                     key={card.name}
                                >{card.name}</Box>

                            )
                        })}
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default App
