import {Box, Button, IconButton, Typography} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";

const PageTitleBar = (props:{title:string}) => {
    return <Box sx={{
        height: "64px",
        borderBottom: "1px solid #c2c2c2",
        paddingX: "16px",
        display: "flex",
        alignItems: "center"
    }}>
        <Typography variant={"h1"} fontSize={24} sx={{p: "0", m: 0}}>{props.title}</Typography>
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
    </Box>;
}

export {PageTitleBar}