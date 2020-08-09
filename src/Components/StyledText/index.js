import React from 'react';
import styled from 'styled-components';


const Container =styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  font-family: 'Fjalla One';
`

const H1 = styled.h1`
 color:#062944;
 text-align:center;
 font-size:64px;
 letter-spacing:3px;
 font-family: 'Fjalla One';
 font-weight:400;
 margin-bottom:20px;

`

const SmallText = styled.div`
color:#062944;
text-align:center;
margin-bottom:20px;
letter-spacing: 1px;
text-transform:uppercase;
font-family: 'Fjalla One';
`
const Description = styled.div`
  text-align:center;
  color:#062944;
  font-size:20px;
  padding:10px;
  font-weight:400;
`

const H2 = styled.div`
  font-family: 'Fjalla One';
  text-transform:uppercase;
  font-size:32px;
  text-align:center;
  color:#062944;
  font-weight:bold;
  maring:10px auto;
`
const SubContainer = styled.div`
  display:flex;
  justify-content:space-around;
  width:55%;
  margin:0 auto;
  font-size:20px;
`




const Text = ()=>{


  return(
    <div>
      <H1>Men's Vintage</H1>
      <SmallText>Shop 1000 of new items added every day</SmallText>
      <Description>
          We have the biggest range of men's vintage fashion in the UK, including jackets, shirts and jeans from brands like Levi's,
           Wrangler,Dior and Ralph Lauren.
           <br/>
           We bring you clothes across the eras, from the 50s to the 90s, but we're up to date with all of the latest trends in streetwear
           and we only ever source the best one-off items for that for that perfect vintage style.
      </Description>
      <H2>Popular categories</H2>
      <SubContainer>
          <div>
            <div style={{padding:'10px'}}>SHIRTS</div>
            <div style={{padding:'10px'}}>JEANS</div>
            <div style={{padding:'10px'}}>ACCESSORIES</div>
          </div>
          <div>
            <div style={{padding:'10px'}}>JACKETS</div>
            <div style={{padding:'10px'}}>T-SHIRTS</div>
            <div style={{padding:'10px'}}>TRAINERS</div>
          </div>
      </SubContainer>
    </div>
  )
}

export default Text
