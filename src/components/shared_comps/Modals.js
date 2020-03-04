import React, {useState,useEffect} from 'react';
import {Button as But, Modal} from "react-materialize";
import colors from "../../Colors";
import {ChosenMealsList} from "../Meals/Styles";
import {Button} from "./Styles";
const bottomModalOptions = {
    dismissible: true,
    endingTop: '10%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: false,
    startingTop: '4%'
}
const closeModalButton = <But flat waves="light" modal="close" node="button">Close</But>

export const RecipeModal =({item, trigger})=>{
    const[seeIngredients, showIngredients] = useState(!!(item.ingredients && item.ingredients.length > 0))

    const IngredientsButton = item.ingredients && item.ingredients.length > 0 && item.recipe && item.recipe.length > 0  ?
        <But flat waves="light" onClick={()=>showIngredients(!seeIngredients)} node="button">
            See {seeIngredients ? "Instructions":"Ingredients"}
        </But>
        : null ;

    useEffect(()=>{


    },[seeIngredients]);

    return (
        <Modal
            actions={[IngredientsButton, closeModalButton]}
            bottomSheet={false}
            fixedFooter={true}
            header={`Recipe for ${item.name}`}
            id="modal-0"
            options={bottomModalOptions}
            trigger={trigger ? trigger:<Button  className={"btn-small col s10"} style={{margin:0}}><b>Recipe</b></Button>}>

            <div>

                <ol>
                    {
                        seeIngredients && item.ingredients && item.ingredients.length > 0 ?
                            item.ingredients.map((ing,i)=>
                                <li key={i}>
                                    <h5 style={{fontWeight:i%2===0? "bolder":""}}>{ing}</h5>
                                </li>)
                        :
                            item.recipe ?
                                item.recipe.map((step,i)=>
                                    <li key={i}>
                                        <h5 style={{fontWeight:i%2===0? "bolder":""}}>{step}</h5>
                                    </li>)
                                :
                                "No Recipe Available"

                    }
                </ol>
            </div>


        </Modal>)};

export const NutriModal = ({item}) => {
    return (
        <Modal
            actions={[closeModalButton]}
            bottomSheet={true}
            fixedFooter={false}
            header="Nutritional Information"
            id="modal-0"
            options={bottomModalOptions}
            trigger={
                item.nutrition && item.nutrition["Calories"] !== "" ?
                    <a>
                        <h6>Nutritional Info</h6>
                    </a>
                    : null
            }>

            {item.nutrition ?
                Object.keys(item.nutrition).map((nut,i)=><h6 key={i}>{nut}: {item.nutrition[nut]} </h6> )
                : null
            }

        </Modal>
    );
};

export const SelectionModal = (
    {mainsList, deleteMeal}) =>
        <Modal
            actions={[closeModalButton]}
            bottomSheet={true}
            fixedFooter={false}
            header="Selected Meals"
            id="modal-0"
            options={bottomModalOptions}
            trigger={
                <h5 style={{color:colors.bright, margin: 0}}>
                    <b>Edit Your Selection</b>
                </h5>
            }>

            {
                mainsList.length > 0?
                    <ChosenMealsList  className={`col s12 center`}>
                        {<ol>
                            {mainsList.map((fav,i)=>
                                <li key={i} id={i}   onClick={()=>deleteMeal(fav,i)}>
                                    <h5>{fav} <i className="material-icons red" >close</i></h5>
                                </li>
                            )} </ol>
                        }
                    </ChosenMealsList>: null
            }
        </Modal>