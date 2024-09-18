import {Box, MenuItem, Typography} from "@mui/material";
import {HomeOutlined} from "@mui/icons-material";
import {useEffect, useState} from "react";

export function MainMenu(props: { open: boolean }) {

    const [drawerWidth, setDrawerWidth] = useState<number>(240)

    useEffect(() => {
        setDrawerWidth( props.open ? 240: 64);
    }, [props.open])

    return <Box sx={{
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
                    <Typography sx={{display: props.open ? "block" : "none"}}>
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
                    <Typography sx={{display: props.open ? "block" : "none"}}>
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
                    <Typography sx={{display: props.open ? "block" : "none"}}>
                        Serviços
                    </Typography>

                </MenuItem>
            </ul>
        </nav>
    </Box>;
}