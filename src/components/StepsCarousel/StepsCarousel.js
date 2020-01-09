import React, {useEffect,useState, useContext} from 'react';
import styled from "styled-components";
import colors from "../../Colors"
import {AuthContext} from "../../Auth/Auth";

import {navigate } from 'hookrouter';


const steps_content = [
    "Login if you have an account with TPBK, if not register your new account.",
    "Once you're logged-in, start the order process.",
    "Step 3",
    "Step 4",
    "Step 5",
    "Step 6",
    "Step 7"
];

function getDimensions() {
    return {"width":window.innerWidth, "height":window.innerHeight}
}


const Steps = () => {
    const {currentUser,formValidation,userLogin,infoValidated,gotoPage} = useContext(AuthContext);

    const [windowWidth, setWidth] = useState(getDimensions()["width"]);
    const [windowHeight, setHeight] = useState(getDimensions()["height"]);
    const [currentSlide, setSlide]=useState(1);
    useEffect(() => {
        console.log(currentSlide)
        setWidth(getDimensions()["width"]);
    }, [currentSlide,windowHeight]);


    const handleResize =()=> {
        setWidth(getDimensions()["width"]);
        setHeight(getDimensions()["height"]);
    };
    window.addEventListener('resize', handleResize);

    return (
        <Wrapper windowWidth={windowWidth}>
            <Slide id={1} currentSlide={currentSlide} background={"red"}>
                <SlideTextContainer className={"container"}>
                <h1>Step {currentSlide}</h1>
                <SlideText>{steps_content[0]}</SlideText>
                </SlideTextContainer>
            </Slide>
            <Slide id={2} currentSlide={currentSlide} background={"red"}>
                <SlideTextContainer className={"container"}>
                <h1>Step {currentSlide}</h1>
                <SlideText>{steps_content[0]}</SlideText>
                </SlideTextContainer>
            </Slide>
            <Slide id={3} currentSlide={currentSlide}  background={"blue"}>
                <SlideTextContainer className={"container"}>

                <h1>Step {currentSlide}</h1>
                <SlideText>{steps_content[2]}</SlideText>
                </SlideTextContainer>

            </Slide>
            <Slide id={4} currentSlide={currentSlide} background={"darkbrown"}>
                <SlideTextContainer className={"container"}>

                <h1>Step {currentSlide}</h1>
                <SlideText>{steps_content[3]}</SlideText>
                </SlideTextContainer>
            </Slide>
            <Slide id={5} currentSlide={currentSlide} background={"green"}>
                <SlideTextContainer className={"container"}>

                <h1>Step {currentSlide}</h1>
                <SlideText>{steps_content[4]}</SlideText>
                </SlideTextContainer>

            </Slide>
            <Slide id={6} currentSlide={currentSlide}  background={"brown"}>
                <SlideTextContainer className={"container"}>

                <h1>Step {currentSlide}</h1>
                <SlideText>{steps_content[5]}</SlideText>
                </SlideTextContainer>

            </Slide>
            <Slide id={7} currentSlide={currentSlide}  background={"orange"}>
                <SlideTextContainer className={"container"}>

                <h1>Step {currentSlide}</h1>
                <SlideText>{steps_content[6]}</SlideText>
                <Button className={"btn-large"} onClick={()=> currentUser ? navigate("/"):navigate("/signup")}>
                    Lets Get Started!
                </Button>
                </SlideTextContainer>

            </Slide>
            <ButtonContainer grisArea={"next"} >
                <a href={"#"} onClick={()=>setSlide(currentSlide < 7 ? currentSlide+1:currentSlide)}>
                    <i style={{color:colors.bright}}  className="material-icons large">chevron_right</i>

                </a>
            </ButtonContainer>
            <ButtonContainer grisArea={"prev"} >

                <a href={"#"} onClick={()=>setSlide(currentSlide > 1 ? currentSlide-1:currentSlide)}>
                    <i style={{color:colors.bright}} className="material-icons large">chevron_left</i>

                </a>
            </ButtonContainer>
        </Wrapper>
    );
};

export default Steps;

const Wrapper = styled.div`
grid-area: content;
//height: 75%;
width: ${props => props.windowWidth < 650 ?"98%":"65%"};
display: grid;
grid-template-columns:10% auto 10% ;
grid-template-areas: 'prev card next';
margin:auto;
    `;


const Slide = styled.div`
// background-color:${props => props.background};
grid-area: card;
width: ${props => props.id === props.currentSlide ? "100%":"0px"};
opacity: ${props => props.id === props.currentSlide ? 1:0};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
 background:linear-gradient(0deg,rgba(255,255,255,.3),rgba(255,255,255,.3));

  transition: all .5s linear;
    `;

const ButtonContainer = styled.div`
//background-color:${colors.primaryTwo};
border-radius: 75%;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: center;
grid-area: ${props => props.grisArea};
height: 25%;
width: 100%;
display: flex;
    `;

const SlideTextContainer = styled.div`
color: white;
margin-top: 25px;
    `;
const SlideText = styled.h5`
color: white;
margin-top: 25px;
    `;

const Button = styled.div`
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}
    `;

