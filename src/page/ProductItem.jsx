import { FavoriteBorder, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

//  Styled sections
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Round = styled.div`
  width: 200px;
  height: 200px
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;
const Details = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #B6B2B2;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.div`
  width: 60px
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #F3F2F2;
    transform: scale(1.1);
  }
`;
const Image = styled.img`
  height: 75%;
  object-fit: cover;
  z-index: 2;
  border-radius: 50%;
  background-color: #F3F2F2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

`;

const ProductItem = ({item}) => {
  return (
    <Container>
      <Round/>
        <Image src={item.img}/>
        <Details>

          <Icon>
            <ShoppingCartOutlined/>
          </Icon>

          <Icon>
            <Search/>
          </Icon>

          <Icon>
            <FavoriteBorder/>
          </Icon>

        </Details>
    </Container>
  )
}

export default ProductItem
