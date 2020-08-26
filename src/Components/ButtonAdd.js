import React from 'react';
import styled from 'styled-components';

const SectionBtn = styled.div`
    justify-content: center;
    padding-bottom: 43px;
    bottom: 0px;
    position: inherit;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
`;

const Button = styled.button`
    background-color: #299B01;
    border-color: transparent;
    color: white;
    font-size: 21px;
    width: 250px;
    height: 65px;
`;

export const ButtonAdd = ({ setOpenItem }) => (
<SectionBtn>
    <Button>
        <p>Добавить</p>
    </Button>
</SectionBtn>
);