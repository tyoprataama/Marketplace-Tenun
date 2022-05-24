import React from 'react';
import styled from 'styled-components';
import Info from '../Info';
import Navbar from '../Navbar';
import Products from '../Products';
import News from '../News';
import Footer from '../Footer';
import Copyright from '../Copyright';
import { mobile } from '../responsive';

const Container = styled.div`

`;
const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div `
  margin: 20px;
  ${mobile({width: '0px 20px', display: 'flex', flexDirection: 'column'})}
`;
const FilterTxt = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-right: 20px;
   ${mobile({marginRight: '0px'})}

`;
const Title = styled.h1 `
  margin: 20px;
  font-size: 30px;
  font-weight: 400;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
   ${mobile({margin: '10px 0px'})}
`;
const Options = styled.option`
`;

const Productitem = () => {
  return (
    <Container>
      <Navbar/>
      <Info/>
      <Title>New Collections</Title>
      <FilterWrap>
        <Filter>
          <FilterTxt>Filter Product:</FilterTxt>
          <Select>
            <Options disabled selected>Color</Options>
            <Options>White</Options>
            <Options>Black</Options>
            <Options>White</Options>
            <Options>Brown</Options>
            <Options>Green</Options>
            <Options>Blue</Options>
          </Select>
           <Select>
            <Options disabled selected>Size</Options>
            <Options>XS</Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterTxt>Sort Product:</FilterTxt>
          <Select>
            <Options disabled selected>Newest</Options>
            <Options>Price (Low to High)</Options>
            <Options>Price (High to Low)</Options>
          </Select>
        </Filter>
      </FilterWrap>
      <Products/>
      <News/>
      <Footer/>
      <Copyright/>
    </Container>
  )
}

export default Productitem