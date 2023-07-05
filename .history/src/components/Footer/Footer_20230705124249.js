import React from 'react'
import SocialIconsList from '../SocialIconsList'

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  CopyRight,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:aminase991@gmail.com'>aminase991@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <SocialIconsContainer>
            <SocialIconsList />
          </SocialIconsContainer>
        </LinkColumn>
      </LinkList>
      <CopyRight>Copyright 2023 © All rights Reserved</CopyRight>
    </FooterWrapper>
  )
}

export default Footer
