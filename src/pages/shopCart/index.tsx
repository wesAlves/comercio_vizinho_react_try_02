import {PageTitleBar} from "../../components/pageTitleBar.tsx";
import {useContext} from "react";
import {ShopCart, ShopCartType} from "../../contexts/shopCart/shopCart.ts";

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
                        <p>
                            {product.id}
                        </p>
                    )

                })}
            </div>
        </>
    )
}

export {ShopCartPage}