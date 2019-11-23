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
            {meal.description && meal.description !=="..." ? meal.description : "Meal Information will go here"}

        </ModalInfo>
            <ModalExit onClick={close}>close</ModalExit>
    </Modal>)

};

const Product = ({item,windowWidth,addToFavs}) => {

    return (
        <TheProduct width={windowWidth}>
            <ProductPhoto src={item.photo}/>
            <p>{item.name}</p>

            <TheButtons>
                <Popup modal trigger={<SelectProdButton >Details</SelectProdButton>}>
                    {close => <Content close={close} meal={item} />}
                </Popup>

                <SelectProdButton onClick={()=>addToFavs(item)}>
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

const ModalHeader = styled.div`
  font-size: 90%;
  margin: 1%;
`;

const ModalInfo = styled.div`
  font-size: 85%;
  margin: 1%;
`;

const TheProduct = styled.div`
  height: 200px;
  width:${props => props.width > 749 ? "30%" : "'100%'"};
  //min-width: 30%;
  border: #282c34 solid 1px;
  margin: 10px 0;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;

const SelectProdButton = styled.button`
  width: 30%;
  margin: auto;
`;

const TheButtons = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
`;

const ProductPhoto = styled.img`
  height: 50%;
  margin: auto;
  border-radius: 5px;
`;

const ModalImg = styled.img`
  width: 40%;
  float: left;
  border-radius: 5px;
`;

export default Product;
