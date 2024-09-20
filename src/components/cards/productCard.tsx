import {Box, Card, CardActions, CardContent, Chip, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const ProductCard = (props: { id: string | number, bg?: string, chipLabel: string, name: string, seller?: string }) => {

    return (
        <Link to={`${props.id}`}>
            <Card sx={{
                borderRadius: "32px",
                width: 256,
                height: 244,
                backgroundImage: "url('/images/peach.png')",
                display: "flex",
                flexDirection: "column"
            }}
                  elevation={3}>
                <CardActions>
                    <Chip label={"Produto da estação"} sx={{
                        border: "2px solid #59B121",
                        background: "#dff2d23c",
                        height: "32px",
                        lineHeight: "32px",
                        fontSize: ".75em",
                        color: "#59b121", marginTop: "8px", marginLeft: "8px"
                    }}/>
                </CardActions>
                <CardContent sx={{mt: "auto", mb: 0,}}>
                    <Box>
                        <Typography variant={"body1"} sx={{
                            m: "0",
                            p: "0",
                            fontSize: ".75rem",
                            color: "#868686"
                        }}>{props.seller}</Typography>
                        <Typography variant={"h3"} sx={{fontSize: "1rem"}}>{props.name}</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    )
}

export {ProductCard};