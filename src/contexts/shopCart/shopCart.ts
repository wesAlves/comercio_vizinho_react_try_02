import {createContext} from "react";

type ShopCartType = {id: string}

const ShopCart = createContext<ShopCartType[]>([])

export {ShopCart};
export type { ShopCartType };
