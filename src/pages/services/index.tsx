import {PageTitleBar} from "../../components/pageTitleBar.tsx";
import {Box, Typography} from "@mui/material";

const ServicesPage = () => {
    return (
        <>
            <PageTitleBar title={"Serviços"}/>

            <Box>
                <Typography variant={"h1"} fontSize={24} sx={{p: "0", m: 0}}>Jaca</Typography>
            </Box>

        </>
    )
}

export {ServicesPage}