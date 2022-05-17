import { Badge } from '@material-ui/core';
import { Search, WorkOutlineSharp } from '@material-ui/icons';
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
    text-align: center;
`
const Right = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Language = styled.span`
    font-size: 14;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid white;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
`
const ItemMenu = styled.div`
    font-size: 14;
    cursor: pointer;
    margin-left: 25px;
    align-items: center;
`

//  Our Navbar
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            {/* Left sections */}
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{ color: 'white', fontSize: 20 }} />
                </SearchContainer>
            </Left>
            {/* Center sections */}
            <Center>
                <Logo>
                    Tenun.
                </Logo>
            </Center>
            {/* Right sections */}
            <Right>
                <ItemMenu>SIGN UP</ItemMenu>
                <ItemMenu>LOG IN</ItemMenu>
                <ItemMenu>
                    <Badge badgeContent={4} color='primary'>
                    <WorkOutlineSharp/>
                    </Badge>
                </ItemMenu>
            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar