import React from "react";
import { FlexContainer } from "../../Common";
import { Image } from "../Image";
import { DiveLine } from "../DiveLine";

import styles from './ItemsMassages.module.scss'

export type ItemPostProps = {
    Teme: string,
    discription: string,
}


export const ItemPost: React.FC<ItemPostProps> = ({ Teme, discription }) => {
    return (
        <FlexContainer flexDirection="column" width={1300}>
            <h4 style={{marginBottom: 5}}>{Teme}</h4>
            <br />
            <div>{discription}</div>
        </FlexContainer>
    )
}
