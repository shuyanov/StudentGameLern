import React from "react";
import headerSrc from '../../../Product/Header.png'
import { HeaderBar } from "../../Mulecule/HeaderBar";
import { Image } from "../../Atoms/Image";
import { FlexContainer } from "../../Common";
import { HeaderBarFooter } from "../../Mulecule/HeaderBarFooter/HeaderBarFooter";

export const Header = () => {
    return(
        <FlexContainer height={"100%"} flexDirection="column">
            <Image src={headerSrc}/>
            <HeaderBar />
            <HeaderBarFooter />
        </FlexContainer>
    )
} 
