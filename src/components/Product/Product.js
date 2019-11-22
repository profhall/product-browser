import React from 'react';
import styled from "styled-components";

const Product = ({item}) => {
    return (
        <TheProduct>
            <p>{item.name}</p>
            <ProductPhoto src={item.photo}/>
            <TheButtons>
                <SelectProdButton>
                    Details
                </SelectProdButton>

                <SelectProdButton>
                    Add
                </SelectProdButton>
            </TheButtons>
        </TheProduct>
    );
};

const TheProduct = styled.div`
  height: 200px;
  width: 30%;
  border: #282c34 solid 1px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`

const SelectProdButton = styled.button`
  width: 30%;
  border: red solid 1px;
  margin: auto;
`

const TheButtons = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
`

const ProductPhoto = styled.img`
  height: 50%;
  border: red solid 1px;
  margin: auto;
`
export default Product;
