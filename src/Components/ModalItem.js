import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from './ButtonAdd';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1000;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`;

const NameBlock = styled.div`
    display: flex;
    align-items: center;
    margin-left: 37px;
`;

const PriceBlock = styled.div`
    display: flex;
    align-items: center;
    margin-right: 53px;
`;

const ModalBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NameItem = styled.h2`
    font-size: 30px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e) {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if (!openItem) return null;
    return (
    <Overlay id="overlay" onClick={ closeModal }>
        <Modal>
            <Banner img={openItem.img}/>
            <ModalBlock>
                <NameBlock>
                    <NameItem>
                    {openItem.name}
                    </NameItem>
                </NameBlock>
                <PriceBlock>
                    <NameItem>
                    {openItem.price.toLocaleString('by-BY', 
                    {style: 'currency', currency: 'BYN'})}
                    </NameItem>
                </PriceBlock>
            </ModalBlock> 
            <ButtonAdd/>
        </Modal>
    </Overlay>
    )
};