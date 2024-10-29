import {PageTitleBar} from "../../components/pageTitleBar.tsx";
import {Box, Typography} from "@mui/material";
import {ProductCard} from "../../components/cards/productCard.tsx";
import {useEffect, useState} from "react";
import cv_api from "../../apis/cv_api.ts";

const ProductsPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        cv_api.get("/goods/products").then((res) => {
            setProducts(res.data);
        })
    }, [])

    return (
        <>
            <PageTitleBar title={"Produtos"}/>

            <Box sx={{padding: "32px 16px",}}>
                <Typography variant={"h2"} fontSize={24} sx={{p: "0", m: 0, mb: "8px"}}>Frutas e verduras</Typography>
                <Box sx={{display: "flex", gap: "16px", width: "100%", justifyContent: "center", mt: "16px"}}>
                    {products.map((product) => {
                        return (
                            <ProductCard chipLabel={`${product.price}`} name={product.name}
                                         seller={product.user.name} id={product.id}/>
                        )
                    })
                    }
                </Box>
            </Box>

        </>
    )
}

export {ProductsPage};