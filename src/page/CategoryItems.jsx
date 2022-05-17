import React from 'react'
import styled from 'styled-components';

//  Styled sections
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Title = styled.h1 `
    color: #fff;
    margin-bottom: 20px;
`;
const Detail = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button `
    border: none;
    padding: 10px;
    background-color: white;
    color: black;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItems = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Detail>
            <Title>{item.title}</Title>
            <Button>EXPLORE</Button>
        </Detail>
    </Container>
  )
}

export default CategoryItems