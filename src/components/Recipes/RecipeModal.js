import React from 'react';
import {Button as But, Modal} from "react-materialize";
import {Button} from "../Styles";
import styled from "styled-components";

const RecipeModal =({item})=>{
    return (
        <Modal
            actions={[
                <But flat waves="light" modal="close" node="button">
                    <i className="material-icons top" >close</i>
                </But>
            ]}
            bottomSheet={true}
            fixedFooter={false}
            header={`Recipe for ${item.name}`}
            id="modal-0"
            options={bottomM}
            trigger={<Button  className={"btn col s10"} style={{margin:0}}><b>Recipe</b></Button>}>

            <ol>
                {item.recipe ?
                    item.recipe.map((step)=><li><h6>{step}</h6></li>)

                    : "No Recipe Available"
                }
            </ol>

</Modal>)};

export default RecipeModal;

const RecipeStep = styled.li`

`
