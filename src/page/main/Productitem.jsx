import React from 'react';
import styled from 'styled-components';
import Info from '../Info';
import Navbar from '../Navbar';

const Container = styled.div`
`;
const FilterWrap = styled.div`
`;
const Filter = styled.div `
`;
const Title = styled.div `
`;

const Productitem = () => {
  return (
    <Container>
      <Navbar/>
      <Info/>
      <Title>NEW COLLECTIONS</Title>
      <FilterWrap>
        <Filter>Filter</Filter>
        <Filter>Filter</Filter>
        <Filter>Filter</Filter>
      </FilterWrap>
    </Container>
  )
}

export default Productitem