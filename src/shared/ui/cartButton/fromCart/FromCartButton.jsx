import React from "react";
import s from './FromCartButton.module.scss'
import basket from './basket.svg'

export const FromCartButton = ({countItems, addItem, removeItem, setCountItems}) => {
    
    const basketButton = <button className={s.decrease_button}><img src={basket} alt="Убрать из корзины" /></button>
    const deacreaseButton = <button className={s.decrease_button} onClick={removeItem}>-</button>
    return (
        <>
            {countItems <= 1 ? basketButton : deacreaseButton}
            <input className={s.count_input} value={countItems} onChange={setCountItems}/>
            <button className={s.increase_button} onClick={addItem}>+</button>
        </>
    
    )
}