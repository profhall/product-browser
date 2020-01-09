import React, {useEffect,useState, useContext} from 'react';
import styled from "styled-components";
import colors from "../../Colors"
import {AuthContext} from "../../Auth/Auth";

import {navigate } from 'hookrouter';



const steps_content = [
    "<b>Login/Sign Up</b><br/><br/>  If you don't have an account with <b>The Tasty Plant-Based Kitchen</b>, register for a new account by pressing the <b>Sign Up</b> button on the header menu.",
    "<b>Start Ordering Process On The Homepage.</b> <br/><br/> You can go back and edit your order at any point in the ordering process. <br/><br/>  Keep in mind that we update the menu on Tuesday. <br/><br/> The ordering system will be down and will be back up on the following day (Wednesday).",
    "<b>Choose Meal Quantity</b> <br/><br/>  The price you pay per meal goes down as the more meals you get. <br/><br/> Starting at $55 ($13.75/meal) for 4 meals and $120 ($10/meal) for 12 meals. <br/><br/> New Clients are asked to pay a one time conainer fee of $15.00.",
    "<b>Choose Delivery Date</b> <br/><br/> We currently deliver on Sundays and Wednesdays. <br/><br/> A delivery fee of $8.00 is added to every order. <br/><br/> In the future clients will have the option to pick up their orders to avoid this fee.",
    "<b>Choose Meals & Salads</b> <br/><br/>  Client receive a 24oz salad for every 4 meals they have in their order, salads are chosen at the same time as meals, they are usually listed after all the meals.",
    "<b>Review & Submit</b><br/><br/> Review and submit your order to <b>The Tasty Plant-Based Kitchen</b>. <br/><br/> Remember you can go back and make changes if necessary.",
    "<b>Send Your Payment</b> <br/><br/> The final and most important step is to send your payment. <br/><br/> At the moment, we accept Venmo, Paypal & Cash App. <br/><br/> No orders are final until payment is recieved."
];

function getDimensions() {
    return {"width":window.innerWidth, "height":window.innerHeight}
}


const Slide = ({id, currentSlide, step,windowWidth,currentUser}) =>{
    return (<StyledSlide windowWidth={windowWidth}  id={id} currentSlide={currentSlide}>
        <SlideTextContainer className={"container "}>
            <h1 style={{margin:"auto"}}>Step {currentSlide +1}</h1>
            <SlideText dangerouslySetInnerHTML={{__html: step }}/>
            {currentSlide === 6 ?<Button className={"btn-large"} onClick={()=> navigate(currentUser === 6 ? "/":"/signup")}>Get Started! </Button>:null}
        </SlideTextContainer>
    </StyledSlide>)
}


const Steps = () => {
    const {currentUser,formValidation,userLogin,infoValidated,gotoPage} = useContext(AuthContext);

    const [windowWidth, setWidth] = useState(getDimensions()["width"]);
    const [windowHeight, setHeight] = useState(getDimensions()["height"]);
    const [currentSlide, setSlide]=useState(0);
    useEffect(() => {
        console.log(currentSlide)
        setWidth(getDimensions()["width"]);
    }, [currentSlide,windowHeight]);


    const handleResize =()=> {
        setWidth(getDimensions()["width"]);
        setHeight(getDimensions()["height"]);
    };
    window.addEventListener('resize', handleResize);

    const SlideList = steps_content.map((step, index)=><Slide currentUser={currentUser} windowWidth={windowWidth} key={index} id={index} step={step} currentSlide={currentSlide}/>)

    return (
        <Wrapper windowWidth={windowWidth}>
            {SlideList}
            <ButtonContainer grisArea={"next"} >
                <a href={"#"} onClick={()=>setSlide(currentSlide < 6 ? currentSlide+1:currentSlide)}>
                    <i style={{color: colors.bright,display:currentSlide <6?  "":"none"}}  className="material-icons large">chevron_right</i>

                </a>
            </ButtonContainer>
            <ButtonContainer grisArea={"prev"} >

                <a href={"#"} onClick={()=>setSlide(currentSlide > 0 ? currentSlide-1:currentSlide)}>
                    <i style={{color: colors.bright, display:currentSlide > 0 ? "":"none"}} className="material-icons large">chevron_left</i>

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


const StyledSlide = styled.div`
// background-color:${props => props.background};
border-radius: 10px 10px;

grid-area: card;
width: ${props => props.id === props.currentSlide ? "100%":"0px"};
opacity: ${props => props.id === props.currentSlide ? 1:0};
display: flex;
min-height: 80%;
height: ${props =>props.windowWidth > 650 ? "450px":"650px"};
flex-direction: column;
justify-content: flex-start;
align-content: center;
 background:linear-gradient(0deg,rgba(215,185,86,.3),rgba(0,0,0,.3));

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
display: flex;

flex-direction: column;
color: white;
margin-top: 25px;
    `;
const SlideText = styled.h5`
color: white;
margin-top: 25px;
    `;

const Button = styled.div`
width: 75%;
align-self: center;
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}
    `;

