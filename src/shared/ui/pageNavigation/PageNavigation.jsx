import React from "react";
import s from './PageNavigation.module.scss'

export const PageNavigation = () => {
    return (
        <div className={s.root}>
            <ul>
                <li>Раздел 1</li>
                <li>Раздел 2</li>
                <li>Раздел 3</li>
            </ul>
        </div>
    )
}