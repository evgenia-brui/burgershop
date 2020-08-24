import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import signImg from '../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    hight: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
`;
const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const SignImg = styled.img`
    width: 35pxpx;
`;

const P = styled.p`
    font-size: 12px;
    margin-right: 10px;
`;
const Sign = styled.div`
    display: column;
    align-items: center;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>BoorgerShop</H1>
        </Logo>
        <Sign>
            <SignImg src={signImg} alt="sign"/>
            <P>Войти</P>
        </Sign>
    </NavBarStyled>
);
