import React from 'react'
import styled from '@emotion/styled';
import Link from 'next/link';

const MenuContainer = styled.nav`
display: flex;
flex-direction: column;
width: 100%;
background-color: #242424;
color: #f8f8f8;
  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    li {
      font-weight: 400;
      font-size: 1.2rem;
      width: 100%;
      display: flex;
      list-style: none;
      line-height: 30px;
      border: solid 4px transparent;
      border-top-right-radius: 5px;
      border-botton-right-radius: 5px;
      &:hover {
        background: #888;
        border-left-color: #fffb19;
        cursor: pointer;
      }
    }
}
`

export default function Menu() {
  return (
    <MenuContainer>
      <ul>
        <Link href="/">
          <a>Início</a>
        </Link>
        <li></li>
        <li>Extrato</li>
        <li>Transferências</li>
        <li>Pagamentos</li>
        <li>Cartões</li>
        <li>Crédito</li>
      </ul>
    </MenuContainer>
  )
}
