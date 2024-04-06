import React, { useState } from "react";
import s from './ImageList.module.scss'


export const ImageList = ({images}) => {
    const imagesCount = images.length
    const [currentImageIdx, setCurrentImageIdx] = useState(0)

    const lastImageButton = imagesCount > 1 && currentImageIdx > 0 ? 
        <button className={s.last_image_button} onClick={() => setCurrentImageIdx(currentImageIdx - 1)}/> : null

    const nextImageButton = imagesCount > 1 && currentImageIdx < imagesCount - 1 ? 
        <button className={s.next_image_button} onClick={() => setCurrentImageIdx(currentImageIdx + 1)}/> : null

    return (
        <div className={s.root}>
            {lastImageButton}
            <img className={s.product_image} src={images[currentImageIdx]} alt="Фото товара"/>
            {nextImageButton}
        </div>
    )
}