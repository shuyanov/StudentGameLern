import React from "react";
import { FlexContainer } from "../../Common";
import { ItemTeme, ItemTemeProps } from "../../Atoms/ItemTeme/ItemTeme";

import styles from './CardMassage.module.scss';
import { ItemsMassages, ItemsMassagesProps } from "../../Atoms/ItemsMassages/ItemsMassages";

export type CardMassageProps = {
    TemeHeader: string,
    ItemArrs: ItemsMassagesProps[]
}

export const CardMassage: React.FC<CardMassageProps> = ({ TemeHeader, ItemArrs }) => {
    return (
        <FlexContainer flexDirection="column">
            <FlexContainer alignItems="center" height={50} className={styles.CardMassage} gap={15} justifyContent="space-between">
                <FlexContainer flexDirection="row" alignItems="center" gap={15}>
                    <h1 style={{ marginLeft: 15, alignItems: "center" }} >{TemeHeader}</h1>
                    <a> Недавно созданные</a>
                    <a> Самые обсуждаемые</a>
                </FlexContainer >
                <div>
                    <a>Страница 1 из 8 </a>
                    <a>1 2 3 ....Последняя</a>
                </div>
            </FlexContainer>
            <div className={styles.Line} />
            <FlexContainer className={styles.Items} flexDirection="column">
                {
                    ItemArrs.map(card => (
                        <ItemsMassages href={card.href} Teme={card.Teme} src={card.src} CountAnswer={card.CountAnswer} Data={card.Data} UserName={card.UserName} />
                    ))
                }
            </FlexContainer>
        </FlexContainer>
    )
}
