import React, { PropsWithChildren } from 'react'

import { FlexContainer } from '../FlexContainer'

const Header = ({ children }: PropsWithChildren<object>) => {
  return (
    <FlexContainer
      position="sticky"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height={350}
      top={'auto'}
      zIndex={10}
    >
      {children}
    </FlexContainer>
  )
}

const Body = ({ children }: PropsWithChildren<object>) => {
  return (
    <FlexContainer justifyContent='center'>
      {children}
    </FlexContainer>
  )
}

const Footer = ({ children }: PropsWithChildren<object>) => {
  return (
    <FlexContainer
      flexDirection="row"
      top={0}
      position="sticky"
      alignItems="center"
      justifyContent="center"
      bottom={"auto"}
    >
      {children}
    </FlexContainer>
  )
}

export const Layout = ({ children }: PropsWithChildren<object>) => {
  return <FlexContainer flexDirection="column">{children}</FlexContainer>
}

Layout.Header = Header
Layout.Body = Body
Layout.Footer = Footer
