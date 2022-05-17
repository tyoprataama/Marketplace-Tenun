import { ArrowBackIosOutlined, ArrowForwardIosOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

//  Styled sections
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #B7E5DD;
    position: relative;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    margin: auto;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction='left'>
            <ArrowBackIosOutlined/>
        </Arrow>
         <Arrow direction='right'>
            <ArrowForwardIosOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider