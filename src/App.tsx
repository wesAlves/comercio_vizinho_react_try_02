import React, {useState} from 'react'
import './App.css'
import {
    AppBar, Avatar, Box,
    Button,
    Drawer,
    IconButton, Paper,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {SearchOutlined, Shop, ShoppingCart, ShoppingCartOutlined} from "@mui/icons-material";


const homeCards = [
    {
        "name": "Foods and drinks",
        borderColor: "#749A44",
        bgColor: "#D5FFA0",
        bgImage: "fresh.png",
        widthSize: 4,
        heightSize: 2
    },
    {
        "name": "Beauty shop",
        borderColor: "#670044",
        bgColor: "#FBBEEA",
        bgImage: "bauty_shop.png",
        widthSize: 4,
        heightSize: 2
    },
    {
        "name": "Gardner",
        borderColor: "#053DCE",
        bgColor: "#A0B5FF",
        bgImage: "gardner.png",
        widthSize: 2,
        heightSize: 2
    },
    {
        "name": "Barber shop",
        borderColor: "#392600",
        bgColor: "#FFCEA0",
        bgImage: "barber_shop.png",
        widthSize: 2,
        heightSize: 2
    },
    {
        "name": "Second hand",
        borderColor: "#8D581A",
        bgColor: "#FFD9A0",
        bgImage: "bicycle.png",
        widthSize: 2,
        heightSize: 4
    },
    {
        "name": "Building",
        borderColor: "#ffbb00",
        bgColor: "#FFD9A0",
        bgImage: "construction.png",
        widthSize: 2,
        heightSize: 4
    },
    {
        "name": "Car maintenance",
        borderColor: "#737373",
        bgColor: "#bcbcbc",
        bgImage: "car_maintenance.png",
        widthSize: 4,
        heightSize: 2
    }
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
                        gridTemplateRows: "repeat(8, 96px)",
                        gridTemplateColumns: "repeat(8, 96px) ",
                        gridGap: "16px",
                        maxWidth: "960px",
                        mx: "auto"
                    }}>

                        {homeCards.map((card, index) => {
                            let startingCol = 1;
                            const spanCol = card.widthSize;
                            let startingRow = index * 2 + 1;
                            const spanRow = card.heightSize;

                            if (index > 3) {
                                startingCol = 5;
                                startingRow = (index - 4) * 2 + 1;
                            }
                            if (index === 3 || index === 5) {
                                startingRow -= 2;
                                startingCol += 2;
                            }


                            return (
                                <Box sx={{
                                    border: `4px solid ${card.borderColor}`,
                                    backgroundColor: card.bgColor,
                                    backgroundImage: card.bgImage ? `url(/images/${card.bgImage})` : "url(/images/bicycle.png)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundBlendMode: "multiply",
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "32px",
                                    padding: "16px",
                                    boxSizing: "border-box",
                                    gridColumn: `${startingCol} / span ${spanCol}`,
                                    gridRow: `${startingRow} / span ${spanRow}`,
                                    position:"relative",
                                    overflow: "hidden",
                                }}
                                     key={card.name}
                                >
                                    <Box sx={{position:"absolute", top: 0, bottom:0, left:0, right:0, background:"#00000044"}}></Box>

                                    <Typography variant={"h3"} sx={{
                                        fontSize: "2.5rem",
                                        fontWeight: "bold",
                                        color: "white",
                                        boxShadow: "var(--Paper-shadow)",
                                        position:"relative",
                                        zIndex:"1"
                                    }}>
                                        {card.name}
                                    </Typography>

                                </Box>

                            )
                        })}
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default App
