import {PageTitleBar} from "../../components/pageTitleBar.tsx";
import {useState} from "react";
import {useLocation, useParams} from "react-router-dom";

const ProductDetails = () => {

    const {productId} = useParams();
    const [product, setProduct] = useState({name: `produto ${productId}`});


    return (
        <>
            <PageTitleBar title={`Detalhe do produto: ${product.name}`} isDetail={true}/>
            <div>
                detalhe do produto
            </div>
        </>

    )
}

export {ProductDetails};