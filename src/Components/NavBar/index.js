import React,{useState} from 'react';
import styled from 'styled-components'

import SearchForm from '../SearchForm';
import MobileSideBar from '../MobileSideBar'

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
  const [sideBarState,setSideBarState] = useState(false)

  const handleClick =()=>{
    setSideBarState(!sideBarState)
    console.log(sideBarState)
  }
  return(
    <div style={{display:'relative'}}>
      <Container>
          <SubContainer>
            <Item onClick={()=>handleClick()}>
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
      <MobileSideBar state={sideBarState} />

    </div>
  )
}


export default NavBar
