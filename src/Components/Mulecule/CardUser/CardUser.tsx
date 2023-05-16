import React from "react";
import { FlexContainer } from "../../Common";

import styles from './CardUser.module.scss';
import { ItemUsers, ItemUsersProps } from "../../Atoms/ItemUsers/ItemUsers";

export type CardProps = {
    TemeHeader: string,
    ItemArrs: ItemUsersProps[]
}

export const CardUser: React.FC<CardProps> = ({ TemeHeader, ItemArrs }) => {
    return (
        <FlexContainer flexDirection="column">
            <FlexContainer alignItems="center" height={50} className={styles.CardTeme}>
                <h2 style={{ marginLeft: 15, alignItems: "center" }} >{TemeHeader}</h2>
            </FlexContainer>
            <FlexContainer className={styles.Items} flexDirection="column">
                {
                    ItemArrs.map(card => (
                        <ItemUsers Teme={card.Teme} src={card.src} UserName={card.UserName} DataPost={card.DataPost} />
                    ))}
            </FlexContainer>
        </FlexContainer>
    )
}
