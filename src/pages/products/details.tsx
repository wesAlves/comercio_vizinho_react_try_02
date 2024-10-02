import {PageTitleBar} from "../../components/pageTitleBar.tsx";
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import cv_api from "../../apis/cv_api.ts";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";

const ProductDetails = () => {

    const {productId} = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        cv_api.get(`/goods/products/${productId}`).then((res) => {
            setProduct(res.data);
            console.log(res.data)
        })
    }, [productId])


    return (
        <>
            <PageTitleBar title={`Detalhe do produto: ${product?.name}`} isDetail={true}/>
            <Box sx={{p: "32px"}}>
                <div>Controllers</div>
                <Card sx={{mt: "32px", border: "1px solid #d9d9d9", borderRaidus: "16px", width: 1200, mx: "auto"}}>
                    <Box sx={{display: "flex", alignItems:"center"}}>
                        <CardMedia
                            component={"img"} sx={{width: 600}}
                            image="/images/bicycle.png"
                            alt="Live from space album cover"

                        />
                        <CardContent>
                            <Box sx={{color: "#d9d9d9"}}>Id: {product?.id}</Box>
                            <Box sx={{fontSize: "1.6em"}}>
                                <Typography component={"span"}
                                            sx={{fontSize: '.8em'}}>Nome:</Typography> {product?.name}
                            </Box>
                            <Box sx={{fontSize: "1.6em"}}>
                                <Typography component={"span"}
                                            sx={{fontSize: '.8em'}}>Descrição:</Typography> {product?.description}
                            </Box>
                            <Box sx={{fontSize: "1.6em"}}>
                                <Typography component={"span"}
                                            sx={{fontSize: '.8em'}}>Tipo:</Typography> {product?.goodsType}
                            </Box>
                            <Box sx={{fontSize: "1.6em"}}>
                                <Typography component={"span"}
                                            sx={{fontSize: '.8em'}}>Preço:</Typography> {product?.price}
                            </Box>
                            <Box sx={{fontSize: "1.6em"}}>
                                <Typography component={"span"}
                                            sx={{fontSize: '.8em'}}>Venddido por:</Typography> {product?.user.name}
                            </Box>
                            <Box sx={{fontSize: "1.6em"}}>
                                <Typography component={"span"}
                                            sx={{fontSize: '.8em'}}>Telefone:</Typography> {product?.user.phoneNumber}
                            </Box>
                            <Box sx={{fontSize: "1.6em"}}>
                                <Typography component={"span"}
                                            sx={{fontSize: '.8em'}}>E-mail:</Typography> {product?.user.email}
                            </Box>
                        </CardContent>

                    </Box>
                </Card>
            </Box>
        </>

    )
}

export {ProductDetails};