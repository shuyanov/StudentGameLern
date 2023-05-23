import React from 'react'
import { FlexContainer } from '../../Common'
import style from './PageOne.module.scss'
import { CardPost } from '../../Mulecule/CardPost/CardPost'
import backButton from '../../../Product/buttonBack.png'


// export interface Topic {
//     id: number
//     link: string
//     authorId: number
//     created_at: Date
//     updated_at: Date
//     view: number
// }

// export interface Comment {
//     id: number
//     author_id: number;

// }

export const PagePost = () => {
    return (
        <FlexContainer className={style.PageOne} height={1600} gap={50}>
            <a href='/'>
                <img src={backButton} />
            </a>
            <CardPost Date={''} UserName={''} MassageCount={''} />
        </FlexContainer>
    )
}
