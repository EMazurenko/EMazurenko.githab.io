import React from "react";
import s from './InCartButtons.module.scss'
import cart from './cart.svg'

export const InCartButtons = ({countItems, addItem, removeItem, setCountItems}) => {
    return (
        <>
            <button className={s.cart_button}><img src={cart} alt="Корзина" /></button>
            <button className={s.decrease_button} onClick={removeItem}>-</button>
            <input className={s.count_input} value={countItems} onChange={setCountItems}/>
            <button className={s.increase_button} onClick={addItem}>+</button>
        </>
    )
}