import {AppBar, Avatar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {ShoppingCartOutlined} from "@mui/icons-material";

export function CustomAppBar(props: { onClick: () => void }) {
    return <AppBar elevation={0}
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
                onClick={props.onClick}
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
    </AppBar>;
}