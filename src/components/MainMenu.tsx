import {Box, MenuItem, Typography} from "@mui/material";
import {HomeOutlined} from "@mui/icons-material";

export function MainMenu(props: { width: number, open: boolean }) {
    return <Box sx={{
        width: props.width,
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