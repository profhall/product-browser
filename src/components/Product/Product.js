import React from 'react';
import styled from "styled-components";
import Popup from "reactjs-popup";



const Content = ({close, meal}) => {
    console.log(meal)
    return(
        <Modal>
        {/*<ModalExit className="close" onClick={close}>*/}
        {/*    &times;*/}
        {/*</ModalExit>*/}
        <ModalHeader> {meal.name} </ModalHeader>
        <ModalInfo className="content">
           {/*<ModalImg src={meal.photo}/>*/}
            {meal.ingredients && meal.ingredients !=="..." ? meal.ingredients.map((ing)=><Ingredient>{ing}</Ingredient>) : "Ingredients coming soon..."}

        </ModalInfo>
            <ModalExit className={'btn'} onClick={close}>close</ModalExit>
    </Modal>)

};

const Product = ({item,windowWidth,addToFavs}) => {

    return (
        <TheProduct width={windowWidth}>
            <h6 style={{padding:0,margin:0}}><b>{item.name}</b></h6>

            <ProductContent width={windowWidth}>
                <PhotoContainer theWidth={windowWidth} >
                <ProductPhoto  src={item.photo}/>
                </PhotoContainer>
                <ProductInfo width={windowWidth}>
                    <p >{item.description}</p>

                </ProductInfo>
            </ProductContent>

            <TheButtons>
                <Popup modal trigger={<SelectProdButton className={"btn"} >Ingredients</SelectProdButton>}>
                    {close => <Content close={close} meal={item} />}
                </Popup>

                <SelectProdButton className={"btn"} onClick={()=>addToFavs(item)}>
                    Add
                </SelectProdButton>
            </TheButtons>
        </TheProduct>
    );
};

const ModalExit = styled.button`
  bottom:0;
  margin: 1em;
  position: static;
  width:50%;

`;
const Modal = styled.div``;

const ModalHeader = styled.h6`
  margin: 1%;
`;
const Ingredient = styled.p`
`;

const ModalInfo = styled.div`
  font-size: 1em;
  margin: 1%;
  font-weight: bold;
`;
const PhotoContainer = styled.div`
width: ${props => props.width > 860 ? "60%" : "90%"};
height: ${props => props.width > 860 ? '80%': '65%'};
  margin: 1%;
  // border: ${props => props.width > 860 ? 'red solid 2px':'yellow solid 1px'};
`;

const TheProduct = styled.div`
  height:${props => props.width > 860 ? "50%" : "75%"};
  width:${props => props.width > 860 ? "45%" : "100%"};
  //border: lightgray solid 1px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-bottom: 2em;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductInfo = styled.div`
  height: ${props => props.width > 860 ? "65%" : "100%"};
  text-align: left;
  overflow: scroll;
  
`;

const ProductContent = styled.div`
  height:80%;
  width:100%;
  //min-width: 30%;
  display: flex;
  flex-direction: ${props => props.width > 860 ? "row":"column"};
  align-items: center;
  margin: 10px;
  //justify-content: flex-start;
`;

const SelectProdButton = styled.button`
  width: 45%;
  margin: auto;
`;

const TheButtons = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  margin-bottom: 5px;
`;

const ProductPhoto = styled.img`
  max-height:100%;
  max-width: 100%;
  border-radius: 5px;
  margin: 0 5px;
  
`;

const ModalImg = styled.img`
  width: 40%;
  float: left;
  border-radius: 5px;
`;

export default Product;
