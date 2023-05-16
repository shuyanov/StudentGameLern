import React from "react";
import { FlexContainer } from "../../Common";
import { ItemTeme, ItemTemeProps } from "../../Atoms/ItemTeme/ItemTeme";

import styles from './CardTeme.module.scss';

export type CardProps = {
    TemeHeader: string,
    ItemArrs: ItemTemeProps[]
}

export const CardTeme: React.FC<CardProps> = ({ TemeHeader, ItemArrs }) => {
    return (
        <FlexContainer flexDirection="column">
            <FlexContainer alignItems="center" height={50} className={styles.CardTeme}>
                <h1 style={{ marginLeft: 15, alignItems: "center" }} >{TemeHeader}</h1>
            </FlexContainer>
            <div className={styles.Line} />
            <FlexContainer className={styles.Items} flexDirection="column">
                {
                    ItemArrs.map(card => (
                        <ItemTeme href={card.href} Teme={card.Teme} src={card.src} CountTeme={card.CountTeme} CountAnswers={card.CountAnswers} />
                    ))}
            </FlexContainer>
        </FlexContainer>
    )
}
