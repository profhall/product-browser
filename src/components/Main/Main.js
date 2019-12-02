import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import colors from "../../Colors";
import foodPic from './veganBowl.jpeg'
import Product from "../Product/Product";

const Main = ({ToggleMeals,chosenMeals,setMeals}) => {
    const [windowWidth, setWidth] = useState(getWidth);

    const [currentSlide, changeSlide] = useState(0);
    const [mealsValidated, validateMeals] = useState(false);
    const [infoValidated, validateInfo] = useState(false);
    const [restrictionsValidated, validateRestrictions] = useState(false);
    const [startDate, setDate] = useState(null);
    const [mealCount, changeMealCount] = useState(0);
    useEffect(()=>{
        console.log("component mounted..")
        setWidth(getWidth())

    });

    const handleResize = ()=>{
        console.log("window resize")
        setWidth(getWidth());
    };
    window.addEventListener('resize', handleResize);

    function getWidth() {
        return window.innerWidth
    }

    const selectButton = (e) => {
        console.log(e.target.classList)
        e.target.classList.contains("mc") ? changeMealCount(e.target.id) : changeMealCount(mealCount)
        // if( e.target.classList.contains("dr")){
        //     console.log(e.target.name)
        //     if (restrictions.includes(e.target.name)) {
        //         updateRestrictions(restrictions.filter((res)=>res!==e.target.name))
        //     }
        //     else{
        //         updateRestrictions(restrictions.concat(e.target.name))
        //     }
        // }

    };

    const StartOrderProcess= (e)=>{
        e.preventDefault()
        console.log("starting the process");
        changeSlide(currentSlide+1)
        if( e.target.id === "mealSelect") {ToggleMeals()}

    };

    const GoBack = (e)=>{
        e.preventDefault()
        console.log("starting the process");
        changeSlide(currentSlide-1)
    };

    const Submit= ()=>{
        console.log("Order Sent")
    };
    const deleteMeal= (fav) =>{

        setMeals(chosenMeals.filter(item => item !== fav));
    };
    return (
        <MainContent className="" currentSlide={currentSlide}>
            <Slide id={0} name={"user_info"}  className="container" style={{display: currentSlide===0?"":"none"}}>
                <div className="container" >
                    <br/>
                    <h4 className="header center ">Healthy Delicious Plant-Based Meals Prepared Just For You!</h4>
                    <div className="row center">
                        <p className="header col s12 light">
                            Provide your information to get started.
                        </p>
                        <form className="col s12" >
                            <div className="row">
                                <div className="input-field col s6">
                                    <FormInput style={{color:"white"}} id="name" placeholder={"Your Name"} type="text" />
                                </div>

                                <div className="input-field col s6">
                                    <FormInput id="email" placeholder={"Email Address"} type="email" className="validate"/>
                                </div>
                            </div>
                            <div className="row center">
                                <StartButton onClick={StartOrderProcess}  className="btn-large">Get Started</StartButton>
                            </div>
                        </form>
                    </div>

                </div>
            </Slide>
            <Slide id={1} name={"mealCount"}  className="" style={{display: currentSlide===1?"":"none"}}>
                    <br/>
                    <h4 className="header center ">{mealCount !==0 ?`You Selected ${mealCount} Meals`: `How Many Meals?`}</h4>
                    <HorizontalButtons className="row " >
                        <SquareButton id={4} className="mc btn  s2 "  onClick={(e)=>selectButton(e)} >
                            4 MEALS<br/>
                            $13.75 / MEAL <br/>
                           $55 TOTAL
                        </SquareButton>
                        <SquareButton id={6} className={"mc btn  s2"}  onClick={(e)=>selectButton(e)} >
                            6 MEALS<br/>
                            $12 / MEAL <br/>
                            $72 TOTAL
                        </SquareButton>
                        <SquareButton id={10} className={"mc btn  s2 "}  onClick={(e)=>selectButton(e)} >
                            10 MEALS<br/>
                            $11 / MEAL <br/>
                            $110 TOTAL
                        </SquareButton>
                        <SquareButton id={12} className={"mc btn  s2 "}  onClick={(e)=>selectButton(e)} >
                            12 MEALS<br/>
                            $10/ MEAL <br/>
                            $120 TOTAL
                        </SquareButton>
                    </HorizontalButtons>
                <div className="row center">
                    <BackButton onClick={GoBack}  className="btn-large">Back</BackButton>
                    <StartButton onClick={StartOrderProcess}  className="btn-large">Choose Delivery Date</StartButton>
                </div>

            </Slide>
            <Slide id={2} name={"delivery"} className="" style={{display: currentSlide===2?"":"none"}}>
                <br/>
                <h4 className="header center "> Choose A Delivery Date</h4>
                <div className="row center">
                    <StartButton onClick={GoBack}  className="btn-large">Back</StartButton>
                    <StartButton onClick={StartOrderProcess}  className="btn-large">Set Dietary Restrictions</StartButton>
                </div>

            </Slide>
            <Slide id={3} name={"dietary_restrictions"} className="" style={{display: currentSlide===3?"":"none"}}>
                <br/>
                <h4 className="header center "> Dietary Restrictions? </h4>
                    <div className="row center">
                        <BackButton onClick={GoBack}  className="btn-large">Back</BackButton>
                        <StartButton onClick={StartOrderProcess} className="btn-large" id={"mealSelect"}>Select Meals</StartButton>
                    </div>
            </Slide>


            <Slide id={4} name={"meal_section"} className="" style={{display: currentSlide===4?"":"none"}}>
                <br/>
                <div className="row center">
                    <h4 className="header center"> All meals are 100% Plant-Based. No animals products are used!</h4>

                    <div  className={`col ${windowWidth>600 ?"s8":"s12"} center`}>
                        <h6>Pick your {mealCount} meals</h6>
                        {
                            chosenMeals.length > 0 ? <ul>
                                {chosenMeals.map((fav)=> <li onClick={()=>deleteMeal(fav)}>{fav}</li>)} </ul>:null
                        }
                    </div>

                    <div className={`col ${ windowWidth>600 ?"s4":"s12"} center`}>
                        <BackButton onClick={GoBack}  className="btn-large">Back</BackButton>
                        <StartButton onClick={StartOrderProcess}  className="btn-large">Checkout</StartButton>
                    </div>
                </div>

            </Slide>


            <Slide id={5} name={"checkout"} className="" style={{display: currentSlide===5?"":"none"}}>
                <br/>
                <h4 className="header center "> Checkout</h4>
                <div className="row center">
                    <BackButton onClick={GoBack}  className="btn-large">Back</BackButton>
                    <StartButton onClick={StartOrderProcess}  className="btn-large">Get Started</StartButton>
                </div>

            </Slide>

        </MainContent>
    );
};

export default Main;

const MainContent = styled.div`
color : ${colors.bright};
background:linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${foodPic});
background-repeat: no-repeat ;
background-size:  cover ;
background-position: center;
height: ${props=> props.currentSlide===4?"350px":"500px"};
`;

const BackButton = styled.button`
color : white;
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}
margin: 12px;
`;
const StartButton = styled.button`
color : white;
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}
margin: 12px;

`;

const Slide = styled.div`
height: 75%;
display: flex;
flex-direction: column;
align-items: center ;
justify-content: space-between;
`;

const FormInput = styled.input`
color:black;
`;


const HorizontalButtons = styled.div`
margin: 15px auto;
width: 85%;
  // background-color: ${colors.secondaryTwo};
display: flex;
justify-content: space-evenly;

`;
const SquareButton = styled.button`
border-radius: 5%;
width: 24%;
margin-left: 0;
height: 150px;
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}
`;

const Products = styled.div`
  border: 1px solid orangered;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;