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
`;
const Detail = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
const Button = styled.button `
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