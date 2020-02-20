import React from 'react';
import {NutriModal} from "../Modals";
import {Button} from "../Styles";
import styled from "styled-components";

const MealList = ({thisWeeksMeals, selected, windowWidth, addDish}) => {

    return (
        thisWeeksMeals.filter(item => item.available && selected !== "all" ? item.available && item.type === selected : item.available && item.type !== "all" ).map((item) =>
            <div className="col s12 m4 ">
                <div className="card medium" >
                    <div style={{height:"60%"}} className="card-image  waves-effect waves-block " >
                        <CardImage pic={item.photo}  className="activator center" >
                            <i className="material-icons right" style={{color:"white"}}>info</i></CardImage>
                    </div>
                    <div className="card-content center row col s12" style={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"space-between",
                        alignItems:"center",
                        padding: "5px 0",
                        height:"100%"
                    }}>
                        <span style={{marginBottom:0, lineHeight:"22px", fontSize:24}} className="card-title flow-text activator grey-text text-darken-4">{item.name}</span>


                        <NutriModal item={item}/>

                        <Button onClick={()=>addDish(item )} width={windowWidth}  className={"btn-large col s10"} style={{margin:0}}><b>Add</b></Button>

                    </div>
                    <div className="card-reveal">
                        <h4 className="grey-text card-title text-darken-4"><i className="material-icons right ">close</i>{item.name}</h4>
                        <span className="grey-text text-darken-4" >{item.description}</span>
                        <div style={{height: 150,width:"100%",display:"flex"}}>
                            {item.side ? <SideImage pic={ item.side[1].pic}>

                            </SideImage>:null}
                            {item.side ? <SideImage pic={item.side[2].pic}>

                            </SideImage>:null}
                        </div>

                    </div>
                </div>
            </div>
        )

);
};

export default MealList;


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