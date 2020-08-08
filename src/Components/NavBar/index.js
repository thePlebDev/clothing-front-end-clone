import React from 'react';
import styled from 'styled-components'

import SearchForm from '../SearchForm';

const Container = styled.div`

    display:flex;
    justify-content:space-between;
    border-bottom:1px solid #062944;
`

const SubContainer = styled.div`
  display:flex;
  padding:5px;
  align-items:center;
  justify-content:center;

`

const Item= styled.div`
  font-size:25px;
  padding:.5em;
`

const Hamburger = styled.div`
  background-color:black;
  width:33px;
  height:4px;
  border-radius:3px;
  margin:5px 0;
`

const SearchItem = styled.div`
    font-size:25px;
    padding:.5em;
`

const CartItem = styled.div`
  font-size: 30px;
  margin:10px;
`







const NavBar = ()=>{
  return(
    <div style={{border:'1px solid red'}}>
      <Container>
          <SubContainer>
            <Item>
              <Hamburger></Hamburger>
              <Hamburger></Hamburger>
              <Hamburger></Hamburger>
            </Item>
            <SearchItem><i className="fa fa-search"></i></SearchItem>
          </SubContainer>

          <div>
              <Item>Logo</Item>
          </div>

          <SubContainer>
              <CartItem><i className="fa fa-id-badge"></i></CartItem>
              <CartItem><i className="fa fa-cart-plus"></i></CartItem>
          </SubContainer>
      </Container>
      <SearchForm />
    </div>
  )
}


export default NavBar
