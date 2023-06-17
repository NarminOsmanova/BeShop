import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface propType {
    children: any
}

type AppContextType = {}

export const ProductContext = createContext<AppContextType | any>(null);

export const ProductProvider = (props: propType) => {
    const [product, setProduct] = useState<any[]>([]);

    useEffect(() => {
        axios.get('https://mocki.io/v1/277279fa-88d6-43b2-8606-240957f8bdde')
            .then((res: any) => { setProduct(res.data) })
    }, [])


    return <ProductContext.Provider value={[product, setProduct]}>
        {props.children}
    </ProductContext.Provider>
}
