import React from "react";
import cn from 'clsx'
import logo from './e-market.svg'
import s from './Logo.module.scss'

export const Logo = ({size = 'small'}) => {
    return (
        <img src={logo} className={cn(s.logo, s[size])} alt='Логотип интернет-магазина E-Market'/>
    )
}