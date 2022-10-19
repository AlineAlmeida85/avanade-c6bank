import React from 'react'
import styled from '@emotion/styled';
import Profile from '../Profile';
import Balance from '../Balance';
import Menu from '../Menu';

const SideBarContainer = styled.div`
display: flex;
flex-direction: column;
width: 360px;
`


export default function SideBar() {
  return (
    <SideBarContainer>
      <Profile name="Aline Almeida" role="Software Engineer" agency='001' accountNumber='123456789' />
      <Balance amount={1900000}/>
      <Menu />
    </SideBarContainer>
  )
}
