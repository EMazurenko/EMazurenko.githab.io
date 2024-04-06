import React from 'react'
import cn from 'clsx'
import { ModalHeader } from './modalHeader/ModalHeader'
import { ModalContent } from './modalContent/ModalContent'
import s from './ModalWindow.module.scss'

export const ModalWindow = ({title, visible, children}) => {
    return (
        <div className={cn(s.mask, !visible && s['hidden'])}>
            <div className={s.root}>
                <ModalHeader title={title}/>
                <ModalContent>
                    {children}
                </ModalContent>
            </div>
        </div>
    )
}