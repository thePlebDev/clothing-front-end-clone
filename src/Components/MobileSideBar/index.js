import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position:absolute;
  top:19%;
  height:450px;
  width: 200px;
  background-color:white;
  opacity:0.9;
  transition:300ms left ease;
  left:${props=>props.state ? '0px':'-300px'};
  justify-content:space-around;
`
const Item =styled.div`
  padding:10px;
  border-bottom: 1px solid black;
  margin:10px;
  font-size:30px;
  letter-spacing:1px;
`;




const MobileSideBar = ({state})=>{

  return(
    <Container state={state}>
      <Item>Home</Item>
      <Item>Search</Item>
      <Item>Sign In</Item>
      <Item>Register</Item>
      <Item>Jackets</Item>
      <Item>Jeans</Item>

    </Container>
  )
}

export default MobileSideBar
