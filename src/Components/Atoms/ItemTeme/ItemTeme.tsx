import React from "react";
import { FlexContainer } from "../../Common";
import { Image } from "../Image";
import { DiveLine } from "../DiveLine";

import styles from './ItemTeme.module.scss'

export type ItemTemeProps = {
    Teme: string,
    src: string,
    CountTeme: string,
    CountAnswers: string,
}


export const ItemTeme: React.FC<ItemTemeProps> = ({ Teme, src, CountAnswers, CountTeme }) => {
    return (
        <div style={{ marginBottom: 10 }}>
            <FlexContainer className={styles.ItemTeme} justifyContent="space-between" alignItems="center">
                <div style={{ marginLeft: 30 }}>
                    <FlexContainer alignItems="center" gap={15}>
                        <Image src={src} />
                        <h1>{Teme}</h1>
                    </FlexContainer>
                </div>
                <div style={{ marginRight: 100 }}>
                    <FlexContainer flexDirection="column" >
                        <div>{CountTeme} Тем</div>
                        <div>{CountAnswers} Ответов</div>
                    </FlexContainer>
                </div>
            </FlexContainer>
            <div style={{marginLeft: '5%',marginRight: '10%', }}>
                <DiveLine />
            </div>
        </div>
    )
}
