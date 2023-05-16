import React from "react";
import { FlexContainer } from "../../Common";
import { Image } from "../../Atoms/Image";

import FaceBook from '../../../Product/FaceBook.png';
import Insta from '../../../Product/Mask-Inst.png';
import Watcahp from '../../../Product/Mask-Watcahp.png';
import VK from '../../../Product/Mask-VK.png';
import Telegram from '../../../Product/Mask-Telegram.png';

import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <FlexContainer className={styles.Footer} gap={50} justifyContent="center" alignItems="center" height={140}>
            <a href="#">
                <Image src={FaceBook} />
            </a>
            <a href="#">
                <Image src={Insta} />
            </a>
            <a href="#">
                <Image src={Watcahp} />
            </a>
            <a href="#">
                <Image src={VK} />
            </a>
            <a href="#">
                <Image src={Telegram} />
            </a>
        </FlexContainer>
    )
} 
