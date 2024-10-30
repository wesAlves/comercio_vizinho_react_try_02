import {PageTitleBar} from "../../components/pageTitleBar.tsx";
import {useContext} from "react";
import {ShopCart, ShopCartType} from "../../contexts/shopCart/shopCart.ts";
import {Box, Card, CardContent, Typography} from "@mui/material";

const ShopCartPage = () => {

    const shopCart = useContext(ShopCart)

    console.log(shopCart)
    return (
        <>
            {/*Create flags to remove unecessary actions*/}
            <PageTitleBar title={"Shop Cart"}/>

            <div>
                {shopCart.map(product => {
                    return (
                        // TODO: Use the card component and make some changes there to fit that case
                        <Card sx={{
                            borderRadius: "32px",
                            maxWidth: "75%",
                            height: 244,
                            // backgroundImage: "url('/images/peach.png')",
                            backgroundRepeat: "no-repeat",
                            // backgroundSize: "cover",
                            display: "flex",
                            flexDirection: "column",

                        }}>
                            <CardContent>
                                <Box>
                                    <Typography variant={"h3"} sx={{fontSize: "1rem"}}>{product.name}</Typography>
                                    <Typography variant={"h3"} sx={{fontSize: "1rem"}}>{product.quantity}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    )

                })}
            </div>
        </>
    )
}

export {ShopCartPage}