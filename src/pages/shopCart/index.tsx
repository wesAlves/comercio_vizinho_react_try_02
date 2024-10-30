import {PageTitleBar} from "../../components/pageTitleBar.tsx";
import {useContext} from "react";
import {ShopCart, ShopCartType} from "../../contexts/shopCart/shopCart.ts";
import {Box, Button, Card, CardContent, Typography} from "@mui/material";

const ShopCartPage = () => {

    const shopCart = useContext(ShopCart)

    // TODO: isolate that function in some place that could be accessed to other components
    const findIndexById = (productId: number | string) => shopCart.findIndex(product => product.id === productId)

    const removeCart = (id: number | string, quantity: number) => {
        const productToRemoveIndex = findIndexById(id);

        if (productToRemoveIndex < 0) {
            return
        }

        if (quantity <= 0) {
            shopCart.splice(productToRemoveIndex, 1)
            return;
        }
        shopCart.splice(productToRemoveIndex, 1)
    }

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

                            <Button>Remove from cart</Button>
                        </Card>
                    )

                })}
            </div>
        </>
    )
}

export {ShopCartPage}