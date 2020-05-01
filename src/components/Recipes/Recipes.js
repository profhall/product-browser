import React, {useState, useContext,useEffect} from 'react';
import styled from "styled-components";
import app from "../../fbase"
import * as firebase from "firebase/app";
import 'firebase/firestore';
import {NutriModal,RecipeModal} from "../shared_comps/Modals";
import {AuthContext} from "../../Auth/Auth";



const Recipe =({item})=>{
    const [avail, setAvail] = useState(item.available ? "checked": "")
    const [meal, setMeal] = useState(item)
    const {updateMenu, adminStuff } =  useContext( AuthContext)

    useEffect(()=>{
        // console.log(item.name, "is", avail ==="checked"? "available" : "not available")
    }, [avail, adminStuff])

    const handleCheckbox = (e, meal) => {
        const checkbox = e.target;
        if (checkbox.checked===true ) {
            updateMenu({item: {...item, available: true}})

            setAvail('checked')
        } else {
            setAvail('')
            updateMenu({item: {...item, available: false}})

        }


    };
    return(
    <div style={{height:250,minWidth:250, margin: '0 10px'}}>
        <div className="card small" >

            <div style={{height:300}}  className="card-image  waves-effect waves-block " >
                <CardImage pic={item.photo}  className="activator center" >


                    <span className={`badge black-text ${avail ==="checked" ? "green":"red"}`}>{avail ==="checked" ? "":"Not"} Available</span>
                    {/*<i className="material-icons right" style={{color:"white", backgroundColor:item.available ? }}>check</i>*/}
                </CardImage>
            </div>

            <div className="card-content center row col s12" style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
                alignItems:"center",
                padding: "12px",
                height:"100%"
            }}>
                <span style={{marginBottom:0, lineHeight:"18px", fontSize:18}} className="card-title flow-text activator grey-text text-darken-4">
                    {item.name}
                </span>
                <p>
                    <label>
                        <input onChange={handleCheckbox} id="gluten" type="checkbox" checked={avail}/>

                        <span>available</span>
                    </label>
                </p>
                <RecipeModal item={item}/>

            </div>

            <div className="card-reveal">
                <h6 className="grey-text card-title text-darken-4"><i className="material-icons right ">close</i>{item.name}</h6>
                <NutriModal item={item}/>

                <span className="grey-text text-darken-4" >{item.description}</span>

                <div style={{height: 150,width:"100%",display:"flex"}}>
                    {item.side ? <SideImage pic={ item.side[1].pic}>

                    </SideImage>:null}
                    {item.side ? <SideImage pic={item.side[2].pic}>

                    </SideImage>:null}
                </div>

            </div>
        </div>
    </div>)}

const Recipes = ({recipes}) => {
    const RecipeList = recipes.map((recipe,i)=><Recipe key={i} item={recipe}/>)



    return (
        <RecipesContainer className={"row"} >
            {RecipeList}
        </RecipesContainer>
    );
};

export default Recipes;

const  RecipesContainer = styled.div`
  display: flex;
  overflow-x: auto;
    min-height: 325px ;
`


const SideImage = styled.div`
    background-image:url(${props => props.pic});
    background-repeat: no-repeat ;
    background-size:  cover ;
    background-position: center;
    height: 100%;
    width: 50%;
    
`;
const CardImage = styled.div`
    background-image:url(${props => props.pic});
    background-repeat: no-repeat ;
    background-size:  cover ;
    background-position: center;
    height: 100%;
    width: 100%;
    
`;