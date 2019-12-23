import React from 'react';
import styled from "styled-components";
import Popup from "reactjs-popup";
import colors from "../../Colors";



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
        <TheProduct width={windowWidth} className={""}>
            <h6 style={{padding:0,margin:0}}><b>{item.name}</b></h6>

            <ProductContent width={windowWidth} className={"row col s12"}>
                <div className={` row col s12`} style={{height:"100%"}}>
                    <PhotoContainer bg={item.photo} className={`col ${windowWidth>600 && item.side ?"s6":"s6"}`} theWidth={windowWidth} >

                    </PhotoContainer>
                    {item.side && item.side[1].pic? <div className={`col ${windowWidth>600?"s5":"s5"}`} style={{ minHeight:175,height:"100%",display:"flex",flexDirection:"column"}}>

                            <PhotoContainer bg={item.side && item.side[1].pic !== "" ? item.side[1].pic: "none"} align={"flex-end"} className={`col s12`} theWidth={windowWidth} >
                                <p>{ item.side && item.side[1].pic === ""? item.side[1].name: null}</p>
                            </PhotoContainer>
                            <PhotoContainer bg={item.side && item.side[2].pic !== "" ? item.side[2].pic: "none"} align={"flex-end"} className={`col s12`} theWidth={windowWidth} >
                                <p>{ item.side && item.side[2].pic === ""? item.side[2].name: null}</p>
                            </PhotoContainer>
                        </div>
                        : null
                    }
                </div>

                <ProductInfo className={`col ${windowWidth>600?"s7":"s12"}`} width={windowWidth}>
                    <p >{item.description}</p>

                </ProductInfo>
            </ProductContent>

            <TheButtons  className={"col s12"}>
                <Popup modal trigger={<SelectProdButton width={windowWidth} className={"btn"} >Ingredients</SelectProdButton>}>
                    {close => <Content close={close} meal={item} />}
                </Popup>
                <br/>
                <SelectProdButton  className={`btn ${item.type}`} width={windowWidth} onClick={()=>addToFavs(item)}>
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
width: ${props => props.width > 775 ? "100%" : "100%"};
height: ${props => props.width > 775 ? '90%': '100%'};
min-height: 175px !important;
align-self: ${props => props.align ? props.align: ''};
 margin: 1% !important;
 background:url(${props =>props.bg});
 border-radius: 5px;
background-repeat: no-repeat ;
background-size:  cover ;
background-position: center;
justify-self: flex-start;

`;

const TheProduct = styled.div`
  height:75%;
  width:${props => props.width > 775 ? "50%" : "99%"};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-bottom: 2em;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductInfo = styled.div`
  height: ${props => props.width > 775 ? "65%" : "100%"};
  text-align: left;
  overflow: scroll;
   margin-left:0 !important;
  
`;

const ProductContent = styled.div`
  height:100%;
  width:100%;
  display: flex;
  flex-direction: ${props => props.width > 775 ? "row":"column"};
  align-items: flex-start;
  margin: 10px;
`;

const SelectProdButton = styled.button`
  width: ${props => props.width > 775 ? "45%":"100%"};
  margin: auto;
background-color: ${colors.primaryTwo} ;
&:hover {
  background-color: ${colors.secondaryOne};
}
`;

const TheButtons = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  margin-bottom: 5px;
  height: 20%;
`;

const ProductPhoto = styled.img`
  max-height:100%;
  max-width: 100%;
  border-radius: 5px;
  margin: 0 5px;
  
`;


export default Product;
