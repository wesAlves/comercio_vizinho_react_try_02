import {PageTitleBar} from "../../components/pageTitleBar.tsx";
import {useContext, useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import cv_api from "../../apis/cv_api.ts";
import {Box, Button, Card, CardContent, CardMedia, IconButton, Input, Typography} from "@mui/material";
import {Add, PlusOne, Remove, ShoppingCart, ShoppingCartOutlined, TextIncrease} from "@mui/icons-material";
import {ShopCart} from "../../contexts/shopCart/shopCart.ts";

const ProductDetails = () => {

    const {productId} = useParams();
    const [product, setProduct] = useState(); //TODO: add inStock quantity in BE
    if (product) {
        product["inStock"] = 10;
    }

    const shopCart = useContext(ShopCart);


    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        cv_api.get(`/goods/products/${productId}`).then((res) => {
            setProduct(res.data);
        })
    }, [productId])


    const findIndexById = (productId: number | string) => shopCart.findIndex(product => product.id === productId)


    const addToCart = () => {
        // #TODO: Create a find funtcion to replace here
        console.log(findIndexById(product?.id))
        if (findIndexById(product?.id) === -1) {
            const {id, price} = product;

            const shopCartDTO = {
                quantity: 1,
                id, price
            }
            shopCart.push(shopCartDTO)
        }
        console.log(shopCart)

    }

    return (
        <>
            <PageTitleBar title={`Detalhe do produto: ${product?.name}`} isDetail={true}/>

            <Box sx={{p: "32px"}}>
                <Card sx={{mt: "32px", border: "1px solid #d9d9d9", borderRaidus: "16px", width: 1200, mx: "auto"}}>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <CardMedia
                            component={"img"} sx={{width: 600}}
                            image="/images/bicycle.png"
                            alt="Live from space album cover"

                        />

                        {/*TODO:Loop that block*/}
                        <CardContent>
                            <Box sx={{color: "#d9d9d9"}} component={'h3'}>Id: {product?.id}</Box>
                            <Box sx={{fontSize: "1em"}} component={'h3'}>
                                <Typography component={"span"}
                                            sx={{fontSize: '.8em'}}>Nome:</Typography> {product?.name}
                            </Box>
                            <Box sx={{fontSize: "1em"}} component={'h3'}>
                                <Typography component={"span"}
                                            sx={{fontSize: '.8em'}}>Descrição:</Typography> {product?.description}
                            </Box>
                            <Box sx={{fontSize: "1em"}} component={'h3'}>
                                <Typography component={"span"}
                                            sx={{fontSize: '.8em'}}>Tipo:</Typography> {product?.goodsType}
                            </Box>

                            <Box sx={{fontSize: "1em"}} component={'h3'}>
                                <Typography component={"span"}
                                            sx={{fontSize: '.8em'}}>Venddido por:</Typography> {product?.user.name}
                            </Box>
                            <Box sx={{fontSize: "1em"}} component={'h3'}>
                                <Typography component={"span"}
                                            sx={{fontSize: '.8em'}}>Telefone:</Typography> {product?.user.phoneNumber}
                            </Box>
                            <Box sx={{fontSize: "1em"}} component={'h3'}>
                                <Typography component={"span"}
                                            sx={{fontSize: '.8em'}}>E-mail:</Typography> <a
                                href={`mailto:${product?.user.email}`}>{product?.user.email}</a>
                            </Box>

                            <Box sx={{mt: "32px"}} component={'h3'}>
                                <Box sx={{fontSize: "1em"}}>
                                    <Typography component={"span"}
                                                sx={{fontSize: '.8em'}}>Preço:</Typography> {product?.price}
                                </Box>
                                <Box sx={{fontSize: "1em"}}>
                                    <Typography component={"span"}
                                                sx={{fontSize: '.8em'}}>Avaliability:</Typography> {product?.inStock}
                                </Box>

                                <Box>
                                    <IconButton onClick={() => {
                                        if (quantity > 0) {
                                            setQuantity(quantity - 1)
                                        }
                                        return
                                    }}><Remove/></IconButton>
                                    <Input type={"text"} value={quantity} onChange={(e) => {
                                        if (Number(e.target.value) > product?.inStock) {
                                            setQuantity(Number(product?.inStock))
                                            return
                                        }
                                        setQuantity(Number(e.target.value))
                                    }}/>
                                    <IconButton onClick={() => {
                                        if (quantity < product?.inStock) {
                                            setQuantity(quantity + 1)
                                        }

                                    }}><Add/></IconButton>
                                    <Button onClick={addToCart}>
                                        <ShoppingCartOutlined/>
                                        Add to cart
                                    </Button>
                                </Box>


                            </Box>

                        </CardContent>

                    </Box>
                </Card>

                <Box sx={{mt: "64px"}}>
                    <Typography component={"h5"}>Related products</Typography>

                    <Box sx={{display: "flex", gap: 16, justifyContent: "center"}} component={"ul"}>

                        <li>Produto</li>
                        <li>Produto</li>
                        <li>Produto</li>
                        <li>Produto</li>
                        <li>Produto</li>
                        <li>Produto</li>

                    </Box>
                </Box>

                <Box>
                    <Typography component={"h5"}>Products from same seller</Typography>

                    <Box sx={{display: "flex", gap: 16, justifyContent: "center"}} component={"ul"}>

                        <li>Produto</li>
                        <li>Produto</li>
                        <li>Produto</li>
                        <li>Produto</li>
                        <li>Produto</li>
                        <li>Produto</li>

                    </Box>
                </Box>

            </Box>
        </>

    )
}

export {ProductDetails};