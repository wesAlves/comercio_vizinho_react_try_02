import {PageTitleBar} from "../../components/pageTitleBar.tsx";
import {Box, Button, Card, CardActions, CardContent, Chip, Typography} from "@mui/material";
import {ProductCard} from "../../components/cards/productCard.tsx";

const ProductsPage = () => {
    return (
        <>
            <PageTitleBar title={"Produtos"}/>

            <Box sx={{padding: "32px 16px",}}>
                <Typography variant={"h2"} fontSize={24} sx={{p: "0", m: 0, mb: "8px"}}>Frutas e verduras</Typography>
                <Box sx={{display: "flex", gap:"16px", width:"100%", justifyContent: "center", mt:"16px" }}>
                    <ProductCard chipLabel={"Produto da estação"} name={"Pessêgo dos grandes"} seller={"Phillip do gaio"} />
                    <ProductCard chipLabel={"Produto da estação"} name={"Pessêgo dos grandes"} seller={"Phillip do gaio"} />
                    <ProductCard chipLabel={"Produto da estação"} name={"Pessêgo dos grandes"} seller={"Phillip do gaio"} />
                    <ProductCard chipLabel={"Produto da estação"} name={"Pessêgo dos grandes"} seller={"Phillip do gaio"} />
                </Box>
            </Box>

        </>
    )
}

export {ProductsPage};