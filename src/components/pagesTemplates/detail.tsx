import {PageTitleBar} from "../../components/pageTitleBar.tsx";
import {useState} from "react";
import {useLocation, useParams} from "react-router-dom";

const Details = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({name: `produto ${id}`});


    return (
        <>
            <PageTitleBar title={`Detalhe do produto: ${product.name}`} isDetail={true}/>
            <div>
                detalhe do produto
            </div>
        </>

    )
}

export {Details};