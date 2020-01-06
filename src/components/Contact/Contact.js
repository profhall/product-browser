import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import colors from "../../Colors";
import basketPhoto from "../media/foodIcons/harvest.png";
import {AuthContext} from "../../Auth/Auth";
function getDimensions() {
    return {"width":window.innerWidth, "height":window.innerHeight}
}

const Contact = () => {
    const [windowWidth, setWidth] = useState(getDimensions()["width"]);
    const [windowHeight, setHeight] = useState(getDimensions()["height"]);

    useEffect(() => {
        setWidth(getDimensions()["width"]);

    }, [windowWidth]);

    const handleResize =()=> {
        setWidth(getDimensions()["width"]);
        setHeight(getDimensions()["height"]);
    };

    window.addEventListener('resize', handleResize);

    return (
        <TheContactSection className="container">
            <div className="section">

                <div className="row center ">
                    <div className="col s12 ">
                        <h4>
                            <Icon className="responsive-img" src={basketPhoto}/>
                            Why Plant-Based?
                            <Icon className="responsive-img" src={basketPhoto}/>

                        </h4>
                        <h5 className=" left-align ">
                            Plant-based diets are often shown to be good for health. Plant-based diets are high in vegetables, whole grains bread, legumes and whole fruits, yet can still contain <b>small amounts of lean meats and reduced-fat dairy products.</b> Studies have shown that eliminating meat and dairy products altogether can be very beneficial to an individuals overall health.
                        </h5>

                        <h5 className=" left-align ">
                            Plants are rich sources of many nutrients that are important for good health, including unsaturated fats, vitamins (such as folate), minerals (such as potassium), fibre and protein.
                        </h5>
                        <h5 className=" left-align ">
                            Plant-based diets have been linked to lower risk of obesity and many chronic diseases, such as heart disease, type 2 diabetes, inflammation and cancer. Eating a variety of unprocessed fruits, vegetables, whole grains and legumes is key when it comes to maintaining a healthy, balanced diet.
                        </h5>
                        <h5 className=" left-align ">
                            We do our best to inform you on the nutritional content of all our ingredients. To see our meals along with their nutritional content go to the <a href={"#"}>meals page</a>.
                        </h5>
                    </div>
                </div>

            </div>
        </TheContactSection>
    );
};

export default Contact;

const TheContactSection = styled.div`
color:${colors.secondaryTwo}
grid-area:contact;
height: 100%;
`;

const Icon = styled.img`
width: 75px;
margin: 0 20px;
display: ${props=> props.width > 650 ? "":"none"}
`;