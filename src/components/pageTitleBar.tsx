import {Box, Button, IconButton, Typography} from "@mui/material";
import {ArrowBack, ExitToApp, SearchOutlined} from "@mui/icons-material";
import {Link, useLocation, useNavigate} from "react-router-dom";

const PageTitleBar = (props: { title: string, isDetail?: boolean }) => {

    const location = useLocation();

    return <Box sx={{
        height: "64px",
        borderBottom: "1px solid #c2c2c2",
        paddingX: "16px",
        display: "flex",
        alignItems: "center"
    }}>
        {props.isDetail &&
            <IconButton as={Link} to={`/${location.pathname.split("/").slice(1, -1)}`}><ArrowBack/></IconButton>}


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