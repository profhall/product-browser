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
width: ${props => props.theWidth > 860 ? "60%" : "50%"};
height: 80%;
  margin: 1%;
`;

const TheProduct = styled.div`
  height:${props => props.width > 860 ? "50%" : "60%"};
  width:${props => props.width > 860 ? "45%" : "100%"};
  border: #282c34 solid 1px;
  margin: 5px 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductInfo = styled.div`
  height: ${props => props.width > 860 ? "65%" : "80%"};
  text-align: left;
  overflow: scroll;
  
`;

const ProductContent = styled.div`
  height:80%;
  width:100%;
  //min-width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
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
`;

const ProductPhoto = styled.img`
  height:80%;
  border-radius: 5px;
  margin: 0 5px;
`;

const ModalImg = styled.img`
  width: 40%;
  float: left;
  border-radius: 5px;
`;

export default Product;
