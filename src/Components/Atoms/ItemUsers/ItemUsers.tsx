import React from "react";
import { FlexContainer } from "../../Common";
import { Image } from "../Image";
import { DiveLine } from "../DiveLine";

import styles from './ItemUsers.module.scss'

export type ItemUsersProps = {
    Teme: string,
    src: string,
    UserName: string,
    DataPost: string,
}

export const ItemUsers: React.FC<ItemUsersProps> = ({ DataPost, UserName, Teme, src }) => {
    return (
        <div style={{ marginBottom: 10 }}>
            <FlexContainer className={styles.ItemTeme} alignItems="center">
                <div style={{ marginLeft: 30 }}>
                    <FlexContainer alignItems="center" gap={10}>
                        <a href="#">
                            <Image src={src} />
                        </a>
                        <div>
                            <a href="#">
                                <h2 style={{ marginBottom: 0 }}>{Teme}</h2>
                            </a>
                            <FlexContainer justifyContent="space-between" alignItems="center">
                                <h3>{UserName}</h3>
                                <h3>{DataPost}</h3>
                            </FlexContainer>
                        </div>
                    </FlexContainer>
                </div>
            </FlexContainer>
            <div style={{ marginLeft: '5%', marginRight: '10%', }}>
                <DiveLine />
            </div>
        </div>
    )
}
