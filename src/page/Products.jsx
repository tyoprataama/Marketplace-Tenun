import React from 'react';
import styled from 'styled-components';
import { productsHome } from '../data';
import ProductItem from './ProductItem';
//  Styled sections
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
        {productsHome.map((item)=>(
          <ProductItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products