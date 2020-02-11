import React, {useEffect,useState, useContext} from 'react';
import styled from "styled-components";
import colors from "../../Colors"
import {AuthContext} from "../../Auth/Auth";
import {navigate } from 'hookrouter';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import {Button, ButtonContainer} from "../Styles";
import deliciousPhoto from '../media/foodIcons/delicious.png'

const Icon = styled.img`
width: 75px;
margin: 25px 0 0 0;
`;
const steps_content = [
    `<b>Login/Sign Up</b><br/> <br/>  If you don't have an account with <b>The Tasty Plant-Based Kitchen</b>, register for a new account by pressing the <b>Sign Up</b> button on the header menu.`,
    "<b>Start Ordering Process On The Homepage.</b> <br/><br/> You can go back and edit your order at any point in the ordering process. <br/><br/>  Keep in mind that we update the menu on Tuesday. <br/><br/> The ordering system will be down and will be back up on the following day (Wednesday).",
    "<b>Choose Meal Quantity</b> <br/><br/>  The price you pay per meal goes down as the more meals you get. <br/><br/> Starting at $55 ($13.75/meal) for 4 meals and $120 ($10/meal) for 12 meals. <br/><br/> New Clients are asked to pay a one time conainer fee of $15.00.",
    "<b>Choose Delivery Date</b> <br/><br/> We currently deliver on Sundays and Wednesdays. <br/><br/> A delivery fee of $8.00 is added to every order. <br/><br/> In the future clients will have the option to pick up their orders to avoid this fee.",
    "<b>Choose Meals & Salads</b> <br/><br/>  Client receive a 24oz salad for every 4 meals they have in their order, salads are chosen at the same time as meals, they are usually listed after all the meals.",
    "<b>Review & Submit</b><br/><br/> Review and submit your order to <b>The Tasty Plant-Based Kitchen</b>. <br/><br/> Remember you can go back and make changes if necessary.",
    "<b>Send Your Payment</b> <br/><br/> The final and most important step is to send your payment. <br/><br/> At the moment, we accept Venmo, Paypal & Cash App. <br/><br/> No orders are final until payment is recieved."
];

function getDimensions() {
    return {"width":window.innerWidth, "height":window.innerHeight}
};


const Slide2 = ({id, currentSlide, step,windowWidth,currentUser}) =>{
    return (
        <Slider className="carousel-item white-text" href={`#${id +1}!`}>
            <h1 style={{margin:"auto"}}>Step {id +1}</h1>
            <SlideTextContainer>
            <SlideText dangerouslySetInnerHTML={{__html: step }}/>
            {currentSlide === 6 ?<Button className={"btn-large"} onClick={()=> navigate(currentUser === 6 ? "/":"/signup")}>Get Started! </Button>:null}

            </SlideTextContainer>
        </Slider>)

};


const Steps = () => {
    const {currentUser} = useContext(AuthContext);

    const [windowWidth, setWidth] = useState(getDimensions()["width"]);
    const [windowHeight, setHeight] = useState(getDimensions()["height"]);
    const [currentSlide, setSlide]=useState(0);
    const [carInstance, setInstance]=useState(null);
    var instance = null

    useEffect(() => {
        setWidth(getDimensions()["width"]);
    }, [currentSlide,windowHeight,carInstance]);

    useEffect(() => {

        var elem = document.querySelector(".carousel");
        instance = M.Carousel.init(elem,{
            fullWidth: true,
            indicators: false,
            noWrap:true,
            duration:50
        });
        setInstance(instance)
        // console.log(elem.style)
    },[])


    const handleResize =()=> {
        setWidth(getDimensions()["width"]);
        setHeight(getDimensions()["height"]);
    };
    window.addEventListener('resize', handleResize);

    const SlideList = steps_content.map((step, index)=><Slide2 currentUser={currentUser} windowWidth={windowWidth} key={index} id={index} step={step} currentSlide={currentSlide}/>)

    return (
        <Wrapper windowWidth={windowWidth}>

            <CarWrapper className="carousel carousel-slider center">
                {SlideList}
            </CarWrapper>
            <ButtonContainer>
                <Button border="none"  bgcolor={"transparent"} onClick={carInstance ? ()=>carInstance.prev(): ()=>console.log("no instance yet")}><i
                    className="material-icons large">keyboard_arrow_left</i></Button>

                <Button border="none"   bgcolor={"transparent"} onClick={carInstance ? ()=>carInstance.next(): ()=>console.log("no instance yet")}><i
                    className="material-icons large">keyboard_arrow_right</i></Button>
            </ButtonContainer>

        </Wrapper>
    );
};

export default Steps;

const CarWrapper = styled.div`
height: 90% !important;
 width: 100%;
    `;

const Wrapper = styled.div`
grid-area: content;
height: ${props => props.windowWidth < 650 ?"100%":"65% "};
 width: ${props => props.windowWidth < 650 ?"99%":"50%"};
 display: flex;
 justify-content: center;
 align-items: center;
 margin:auto;
 flex-direction: column;
    `;

const Slider = styled.div`
height: 100%;
    `;

const SlideTextContainer = styled.div`
max-height: 80% ;
overflow-y: auto;
    `;



const SlideText = styled.h5`
color: white;
margin-top: 25px;
    `;


