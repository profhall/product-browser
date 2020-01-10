import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import colors from "../../Colors";
import basketPhoto from '../media/foodIcons/vegetarian.png'
import deliciousPhoto from '../media/foodIcons/delicious.png'
import cerealPhoto from '../media/foodIcons/cereal.png'

const Main = () => {

    const StartOrderProcess= ()=>{
        console.log("starting the process")
    }

    return (
        <MainContent className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12 m4">
                        <div className="center icon-block">
                            <Icon className="responsive-img" src={basketPhoto}/>
                            <h5><b>100% Plant-Based</b></h5>

                            <h5 className={"light"}  >A plant-based diet is a diet consisting mostly or entirely of foods derived from plants, including vegetables, grains, nuts, seeds, legumes/beans and fruits, and with few or no animal products. We use no animal products.
                            </h5>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block center">
                            <Icon className="responsive-img" src={cerealPhoto}/>
                            <h5> <b>Natural Organic Ingredients</b></h5>
                            <h5 className={"light"} >Over 95%  of the foods used are organic and do not contain any artificial ingredients or preservatives with minimally processed ingredients.</h5>

                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="center icon-block">
                            <Icon className="responsive-img" src={deliciousPhoto}/>
                            <h5 ><b>100% Delicious</b></h5>

                            <h5 className={"light"}  >Who says plant-based cant be delicious! Our meals leave you with a happy palate and tummy. Packed with minerals and nutirients from plants and seasoned to perfection.</h5>
                        </div>
                    </div>
                </div>

            </div>
        </MainContent>
    );
};

export default Main;

const MainContent = styled.div`
color : ${colors.secondaryTwo};
background-repeat: no-repeat;
background-size:  cover;
grid-area: info;
//height: 300px;
`

const Icon = styled.img`
width: 75px;
margin: 25px 0 0 0;
`;
