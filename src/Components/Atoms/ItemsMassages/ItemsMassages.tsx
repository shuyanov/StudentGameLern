import React from "react";
import { FlexContainer } from "../../Common";
import { Image } from "../Image";
import { DiveLine } from "../DiveLine";

import styles from './ItemsMassages.module.scss'

export type ItemsMassagesProps = {
    src: string,
    Teme: string,
    CountAnswer: string,
    UserName: string,
    Data: string,
    href?: string
}


export const ItemsMassages: React.FC<ItemsMassagesProps> = ({href, Teme, src, CountAnswer, UserName, Data }) => {
    return (
        <div style={{ marginBottom: 10 }}>
            <FlexContainer className={styles.ItemTeme} justifyContent="space-between" alignItems="center">
                <div style={{ marginLeft: 30 }}>
                    <FlexContainer alignItems="center" gap={15}>
                        <a href={href}>
                            <Image src={src} />
                        </a>
                        <a href={href}>
                            <h1>{Teme}</h1>
                        </a>
                    </FlexContainer>
                </div>
                <div style={{ marginRight: 100 }}>
                    <FlexContainer gap={20}>
                        <div>{CountAnswer} Ответов</div>
                        <FlexContainer flexDirection="column" gap={10}>
                            <a href="#">{UserName} </a>
                            <div>{Data} </div>
                        </FlexContainer>
                    </FlexContainer>
                </div>
            </FlexContainer>
            <div style={{ marginLeft: '5%', marginRight: '10%', }}>
                <DiveLine />
            </div>
        </div>
    )
}
