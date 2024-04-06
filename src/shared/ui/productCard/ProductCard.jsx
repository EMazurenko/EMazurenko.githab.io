import React, { useState } from "react";
import { ShortProductCard } from "./short/ShortProductCard";
import { InCartProductCard } from "./inCart/InCartProductCard";
import { FullProductCard } from "./full/FullProductCard";
import photo_stub from './stub.png'

export const ProductCard = ({
    type = 'Short',
    category = 'Категория', 
    title = 'Продукт', 
    description = 'Описание', 
    price = 99.99, 
    initCountItems = 1,
    photo_urls=[photo_stub, photo_stub]
}) => {
    const [sum, setSum] = useState(price * initCountItems)

    const changeSum = (newCountItems) => {
        setSum(price * newCountItems)
    }
    
    let productCard = null;
    switch(type) {
        case 'Short':
            productCard = 
                <ShortProductCard
                    title={title}
                    description={description}
                    sum={sum}
                    initCountItems={initCountItems}
                    photo_url={photo_urls[0]}
                    handlerCountItem={changeSum}    
                />
                break

            case 'InCart':
                productCard = 
                    <InCartProductCard
                        title={title}
                        sum={sum}
                        initCountItems={initCountItems}
                        photo_url={photo_urls[0]}
                        handlerCountItem={changeSum}    
                    />
                    break

            case 'Full':
                productCard = 
                    <FullProductCard
                        category={category}
                        title={title}
                        description={description}
                        sum={sum}
                        initCountItems={initCountItems}
                        photo_urls={photo_urls}
                        handlerCountItem={changeSum}    
                    />
                    break
    }
    return (
        <>
            {productCard}
        </>
    )
}