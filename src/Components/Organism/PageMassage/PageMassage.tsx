import React from 'react'
import chatAnswrs from '../../../Product/chatAnswrs.png'

import { FlexContainer } from '../../Common'
import style from './PageMassage.module.scss'

import { CardMassage } from '../../Mulecule/CardMassage/CardMassage'
import { ItemsMassagesProps } from '../../Atoms/ItemsMassages/ItemsMassages'
import backButton from '../../../Product/buttonBack.png'

const Massage: ItemsMassagesProps[] = [
    {
        src: chatAnswrs,
        Teme: 'Последняя тема F',
        UserName: "sweet62",
        Data: '12-341-11',
        CountAnswer: '12',
        href: '/uiey'
    },
    {
        src: chatAnswrs,
        Teme: 'Последняя тема',
        UserName: "sweet62",
        Data: '12-341-11',
        CountAnswer: '12'
    },
    {
        src: chatAnswrs,
        Teme: 'Последняя тема',
        UserName: "sweet62",
        Data: '12-341-11',
        CountAnswer: '12'
    },
    {
        src: chatAnswrs,
        Teme: 'Последняя тема',
        UserName: "sweet62",
        Data: '12-341-11',
        CountAnswer: '12'
    },
]

export const PageMassage = () => {
    return (
        <FlexContainer className={style.PageOne} height={1600} gap={10}>
            <a href='/'>
                <img src={backButton} />
            </a>
            <FlexContainer flexDirection='column' gap={50}>
                <CardMassage TemeHeader='Новости' ItemArrs={Massage} />
            </FlexContainer>
        </FlexContainer>
    )
}
