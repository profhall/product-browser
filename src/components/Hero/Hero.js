import React, {useState, useEffect} from 'react';
import foodPic from './veganBowl.jpeg'
import styled from "styled-components";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const slideImages = [
    foodPic,
    foodPic,
    foodPic
];
let currentSlide = 1

const infoValidated = false;

const IntroHero = () => {
    const [mealsValidated, validateMeals] = useState(false);
    const [infoValidated, validateInfo] = useState(false);
    const [restrictionsValidated, validateRestrictions] = useState(false);
    const [currentSlide, changeSlide] = useState(1);
    const [startDate, setDate] = useState(null);
    const [mealCount, changeMealCount] = useState(0);
    const [restrictions, updateRestrictions] = useState([]);

    const selectButton = (e) =>{
        console.log(e.target.classList)
        e.target.classList.contains("mc") ? changeMealCount(e.target.innerText) : changeMealCount(mealCount)
        if( e.target.classList.contains("dr")){
            console.log(e.target.name)
            if (restrictions.includes(e.target.name)) {
                updateRestrictions(restrictions.filter((res)=>res!==e.target.name))
            }
            else{
                updateRestrictions(restrictions.concat(e.target.name))
            }
        }
    };

    useEffect(() => {
        mealCount !== 0 ? validateMeals(true) :  validateMeals(false)
        restrictions.length>0 ? validateRestrictions(true) :  validateRestrictions(false)
        console.log(startDate)
    });

    const slideButton = () => {
        changeSlide(currentSlide+1)
    }



    return (
        <Slideshow>
            <Slide id={1} style={{display: currentSlide===1?"":"none"}}>
                <h4>{mealCount !==0 ?`You've Selected ${mealCount} Meals`: `How Many Meals Would You Like?`}</h4>
                    <HorizontalButtons>
                        <CircleButton className={"mc btn"}  onClick={(e)=>selectButton(e)} >3</CircleButton>
                        <CircleButton className={"mc btn"}  onClick={(e)=>selectButton(e)} >6</CircleButton>
                        <CircleButton className={"mc btn "}  onClick={(e)=>selectButton(e)} >12</CircleButton>
                        <CircleButton className={"mc btn"}  onClick={(e)=>selectButton(e)} >15</CircleButton>
                    </HorizontalButtons>
                <NextButton onClick={()=>slideButton()} className={`btn ${mealsValidated?"":"disabled"}`}> Choose Your Restrictions >> </NextButton>
            </Slide>
            <Slide id={2} style={{display: currentSlide===2?"":"none"}}>
                <h4>Do you have and dietary restrictions? </h4>
                <HorizontalButtons>
                    <CircleButton name={"nut free"} onClick={(e)=>selectButton(e)} className={`btn dr ${restrictions.includes("nut free") ? "yellow teal-text":""}`}>NF</CircleButton>
                    <CircleButton name={"gluten free"} onClick={(e)=>selectButton(e)} className={`btn dr ${restrictions.includes("gluten free") ? "yellow teal-text":""}`}>GF</CircleButton>
                    <CircleButton name={"wheat free"} onClick={(e)=>selectButton(e)} className={`btn dr ${restrictions.includes("wheat free") ? "yellow teal-text":""}`}>WF</CircleButton>
                    <CircleButton name={"soy free"}  onClick={(e)=>selectButton(e)} className={`btn dr ${restrictions.includes("soy free") ? "yellow teal-text":""}`}>SF</CircleButton>
                </HorizontalButtons>
                <NextButton onClick={()=>slideButton()} className={`btn `}> Contact Information >> </NextButton>

            </Slide>
            <Slide id={3} style={{display: currentSlide===3?"":"none" }}>
                <div className="row" style={{width: "80%"}}>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <FormInput id="name" placeholder={"Name"} type="text" className="validate"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <FormInput style={{color:"white"}} id="email" placeholder={"Email Address"} type="email" className="validate"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s4">
                                <DayPickerInput style={{width:"100%"}}  placeholder={"Start Date"} onDayChange={day => setDate(day)} />
                            </div>
                            <div className="input-field col s8">
                                <FormTextArea id="textarea1" placeholder="Anything you'd like us to know?" className="materialize-textarea"/>
                            </div>
                        </div>

                    </form>

                </div>
                <NextButton onClick={()=>slideButton()} className={`btn ${infoValidated?"":"disabled"}`}> Pick Your Meals </NextButton>
            </Slide>
            <Slide id={4} style={{display: currentSlide===4?"":"none"}}>

                <NextButton onClick={()=>slideButton()} className={`btn `}> Submit Information </NextButton>
            </Slide>
        </Slideshow>
    );
};

export default IntroHero;

const HorizontalButtons = styled.div`
display: flex;
margin: 0 auto;
width: 80%;
justify-content: space-evenly;

`;
const CircleButton = styled.button`
border-radius: 100%;
width: 50px;
height: 50px;
background-color: ${props=>props.restrictions.includes(props.name)? "red":""};
`;

const FormTextArea = styled.textarea`
color:white;
`;
const FormInput = styled.input`
color:white;
`;

const NextButton = styled.button`
width: 100%;
margin-top: auto;
`;
const Slideshow = styled.div`
grid-area: hero;
height: 100%;
max-height: 100%;
background-color: white;
`;

const Slide = styled.div`
color: white ;
height: 100%;
background:linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${slideImages[2]});
background-repeat: no-repeat;
background-size:  cover;
display: flex;
flex-direction: column;
align-items: center ;
justify-content: space-evenly;
`;
