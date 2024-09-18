import {useState} from 'react'
import './App.css'
import {AppBar, Avatar, Box, Button, IconButton, MenuItem, Toolbar, Typography,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {HomeOutlined, SearchOutlined, ShoppingCartOutlined} from "@mui/icons-material";
import {HomeCard} from "./components/homeCard.tsx";


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
                        Comercio vizinho
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
                <Box sx={{
                    width: drawerWidth,
                    transitionDuration: "300ms",
                    borderRight: "1px solid #c2c2c2",
                    overflow: "hidden"
                }}>
                    <nav>
                        <ul style={{listStyle: "none", margin: 0, padding: 0,}}>
                            <MenuItem style={{
                                display: "flex",
                                gap: "8px",
                                alignItems: "center",
                                justifyContent: "start",
                                height: "48px",
                                // padding: "16px",
                                boxSizing: "border-box",
                                width: "100%",
                            }}>
                                    <HomeOutlined/>
                                    <Typography sx={{display: open ? "block" : "none"}}>
                                        Home
                                    </Typography>

                            </MenuItem>
                            <MenuItem selected={true} style={{
                                display: "flex",
                                gap: "8px",
                                alignItems: "center",
                                justifyContent: "start",
                                height: "48px",
                                padding: "16px",
                                boxSizing: "border-box",
                                width: "100%",
                            }}>
                                <HomeOutlined/>
                                <Typography sx={{display: open ? "block" : "none"}}>
                                    Produtos
                                </Typography>

                            </MenuItem>
                            <MenuItem style={{
                                display: "flex",
                                gap: "8px",
                                alignItems: "center",
                                justifyContent: "start",
                                height: "48px",
                                padding: "16px",
                                boxSizing: "border-box",
                                width: "100%",
                            }}>
                                <HomeOutlined/>
                                <Typography sx={{display: open ? "block" : "none"}}>
                                    Serviços
                                </Typography>

                            </MenuItem>
                        </ul>
                    </nav>
                </Box>
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
                        gridTemplateRows: "repeat(6, 96px)",
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
                                startingCol += 2;
                                startingRow -= 2;
                            }


                            return (
                                <HomeCard key={card.name} card={card} startingCol={startingCol} spanCol={spanCol}
                                          startingRow={startingRow} spanRow={spanRow}/>

                            )
                        })}
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default App
