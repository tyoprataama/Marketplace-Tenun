import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

//  Styled sections
const Container = styled.div`
    height: 60px;
    background-color: #131921;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    color: white;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div `
    flex: 1;   
`
const Right = styled.div `
    flex: 1;
`
const Language = styled.span`
    font-size: 14;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align - items: center;
    
`

//  Our Navbar
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>INA</Language>
                <SearchContainer>
                    Input
                    <Search/>
                </SearchContainer>
            </Left>
            <Center>Center</Center>
            <Right>Right</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar