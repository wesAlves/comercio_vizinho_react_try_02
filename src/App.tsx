import {useState} from 'react'
import './App.css'
import {Box,} from "@mui/material";
import {CustomAppBar} from "./components/CustomAppBar.tsx";
import {MainMenu} from "./components/MainMenu.tsx";
import {Outlet} from "react-router-dom";
import {ShopCartType, ShopCart} from "./contexts/shopCart/shopCart.ts";


function App() {


    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    }
    const [shopCart, setShopCart] = useState<ShopCartType[]>([{id: "0"}, {id:"1"}]);



    return (
        <ShopCart.Provider value={shopCart}>
        <Box sx={{display: "flex", flexDirection: "column", height: "100vh"}}>
            <CustomAppBar onClick={handleOpen}/>

            <Box style={{position: "relative"}} sx={{display: "flex", height: "100%"}}>
                <MainMenu open={open}/>

                <div style={{flex: 1}}>
                    <Outlet/>
                </div>

            </Box>

        </Box>
        </ShopCart.Provider>
    )
}

export default App
