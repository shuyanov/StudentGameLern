import React from "react";
import { FlexContainer } from "../../Common";
import styles from './HeaderBar.module.scss'

export const HeaderBar = () => {
    return (
        <div className={styles.HeaderBar}>
            <FlexContainer height={'100%'} alignItems="center" className={styles.positinElement} justifyContent="space-between" >
                <FlexContainer gap={10}>
                    <a href="#">Сервисы </a>
                    <a href="#">Центр поддержки </a>
                </FlexContainer>
                <FlexContainer  gap={10}>
                    <a href="#">Войти </a>
                    <a href="#">Cоздать аккаунт </a>
                </FlexContainer>
            </FlexContainer>
        </div>
    );
}
