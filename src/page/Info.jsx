import styled from 'styled-components';
import React from 'react';
import MovingText from 'react-moving-text';

const Container = styled.div`
    height: 30px;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;
const Info = () => {
  return (
    <Container>
        <MovingText
    type='fadeIn'
    duration='1000ms'
    delay='0s'
    direction='normal'
    timing='ease'
    iteration='infinite'
    fillMode='none'>
        Super Deal! Free Shipping on Orders over Rp.100.000
    </MovingText>
    </Container>
  )
}

export default Info