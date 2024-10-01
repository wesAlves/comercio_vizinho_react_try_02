import {PageTitleBar} from "../../components/pageTitleBar.tsx";
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import cv_api from "../../apis/cv_api.ts";

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
            <div>
                <div>Id: {product?.id}</div>
                <div>Nome: {product?.name}</div>
                <div>Descrição: {product?.description}</div>
                <div>Tipo: {product?.goodsType}</div>
                <div>Categoria: Categoria</div>
                <div>Preço: {product?.price}</div>
                <div>Nome do vendedor: {product?.user.name}</div>
                <div>Telefone do vendedor: {product?.user.phoneNumber}</div>
                <div>E-mail do vendedor: {product?.user.email}</div>
            </div>
        </>

    )
}

export {ProductDetails};