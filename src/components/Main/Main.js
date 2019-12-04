import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import colors from "../../Colors";
import foodPic from './veganBowl.jpeg'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import Product from "../Product/Product";
import emailjs from "emailjs-com";


const Main = ({ToggleMeals,chosenMeals,setMeals, getNumberOfMeals}) => {
    const [windowWidth, setWidth] = useState(getWidth);
    const [currentSlide, changeSlide] = useState(0);
    const [mealsValidated, validateMeals] = useState(false);
    const [infoValidated, validateInfo] = useState(false);
    const [startDate, setDate] = useState(null);
    const [mealCount, changeMealCount] = useState(0);
    const [refreshCount, refresh] = useState(0);
    const [restrictions, updateRestrictions] = useState([]);
    const [userinfo, setUser] = useState({"name":null,"email":null});

    useEffect(()=>{
        console.log("component mounted..")
        mealCount !== 0 ? validateMeals(true) :  validateMeals(false)
        console.log(`Start Date: ${startDate}, Number Of Meals: ${mealCount}, Restrictions: ${restrictions}`)
        setWidth(getWidth())
    });

    const emailSelection = (chosenItems) => {

        const Info = userinfo;

        const theSubmitInfo = {"chosen_items":chosenItems,"name":Info["name"],"email":Info["email"]}
        Info['message'] ? theSubmitInfo['message'] = Info['message'] : Info['message'] = null;
        console.log("favs submitted", Info)


        emailjs.send('gmail', 'template_VM9IlcIJ', theSubmitInfo, "user_ii2HeUxvMKEfOyePRTfc8")
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Thank you! We will reach out to you soon to discuss the next steps")

            }, function(error) {
                console.log('FAILED...', error);
            });

    }
    const handleInputChange = (e) => {
        let emailVal = null
        let nameVal = null
        // console.log("input changed", e.target.value)
        console.log("input id", e.target.id)
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (e.target.id === "name"){
            userinfo["name"] = e.target.value;
            e.target.value.length < 2 ? nameVal = false : nameVal = true


        }
        else if (e.target.id === "email"){

            userinfo["email"]= e.target.value;

            e.target.value.match(mailformat)  ? emailVal = false : emailVal = true
        }
        setUser(userinfo)

        if ((userinfo["name"] && userinfo["email"]) && userinfo["name"].length >= 2 && userinfo["email"].match(mailformat) ) {
            console.log(userinfo['name'], nameVal, userinfo['email'], emailVal)
            validateInfo(true)
        }
        else {validateInfo(false) }
        console.log(userinfo["email"], userinfo["name"])
    };
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

        if (e.target.classList.contains("mc"))
        {
            changeMealCount(e.target.id)
            getNumberOfMeals(Number(e.target.id))

        }
        if( e.target.classList.contains("dr")){
            console.log(e.target.name)
            if (restrictions.includes(e.target.name)) {
                updateRestrictions(restrictions.filter((res)=>res!==e.target.name))
            }
            else{
                updateRestrictions(restrictions.concat(e.target.name))

                console.log(restrictions)
            }
        }

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
        var index = chosenMeals.indexOf(fav);

        if (index > -1) {
            let meals = chosenMeals.splice(index, 1);
            console.log(meals)

            setMeals(chosenMeals);
            refresh(refreshCount+1)
        }


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
                                    <FormInput onChange={handleInputChange} id="name" placeholder={"Your Name"} type="text" />
                                </div>

                                <div className="input-field col s6">
                                    <FormInput onChange={handleInputChange} id="email" placeholder={"Email Address"} type="email" className="validate"/>
                                </div>
                            </div>
                            <div className="row center">
                                <StartButton onClick={StartOrderProcess}  className={`btn-large ${infoValidated?"":"disabled"}`}>Get Started</StartButton>
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
                            $13 / MEAL <br/>
                           $52 TOTAL
                        </SquareButton>
                        <SquareButton id={7} className={"mc btn  s2"}  onClick={(e)=>selectButton(e)} >
                            7 MEALS<br/>
                            $12 / MEAL <br/>
                            $84 TOTAL
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
                    <StartButton onClick={StartOrderProcess}  className={`btn-large ${mealsValidated?"":"disabled"}`}>Choose Delivery Date</StartButton>
                </div>

            </Slide>
            <Slide id={2} name={"delivery"} className="" style={{display: currentSlide===2?"":"none"}}>
                <br/>
                <h4 className="header center "> Choose A Delivery Date</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <DayPickerInput style={{width:"100%"}}  placeholder={"Start Date"} onDayChange={day => setDate(day.toDateString())} />
                    </div>
                </div>
                <div className="row center">
                    <StartButton onClick={GoBack}  className="btn-large">Back</StartButton>
                    <StartButton onClick={StartOrderProcess}  className={`btn-large ${startDate ? "":"disabled"}`}>Set Dietary Restrictions</StartButton>
                </div>

            </Slide>
            <Slide id={3} name={"dietary_restrictions"} className="" style={{display: currentSlide===3?"":"none"}}>
                <br/>
                <h4 className="header center "> Dietary Restrictions? </h4>
                <HorizontalButtons className="row " >
                    <CircleButton name={"wheat"} className="dr btn s2 " restrictions={restrictions}  onClick={(e)=>selectButton(e)} >
                        <ButtText s_width={windowWidth} > Wheat-Free</ButtText>
                    </CircleButton>
                    <CircleButton name={"soy"} className={"dr btn  s2"} restrictions={restrictions}   onClick={(e)=>selectButton(e)} >
                        <ButtText s_width={windowWidth} >Soy-Free</ButtText>
                    </CircleButton>
                    <CircleButton name={"nut"} className={"dr btn  s2"} restrictions={restrictions}   onClick={(e)=>selectButton(e)} >
                        <ButtText s_width={windowWidth} >Nut-Free</ButtText>
                    </CircleButton>
                    <CircleButton name={"gluten"} className={"dr btn  s2 "} restrictions={restrictions}   onClick={(e)=>selectButton(e)} >
                        <ButtText s_width={windowWidth} >Gluten-Free</ButtText>
                    </CircleButton>
                </HorizontalButtons>
                <div className="row center">
                        <BackButton onClick={GoBack}  className="btn-large">Back</BackButton>
                        <StartButton onClick={StartOrderProcess} className="btn-large" id={"mealSelect"}>Select Meals</StartButton>
                    </div>
            </Slide>
            <Slide id={4} name={"meal_section"} className="" style={{display: currentSlide===4?"":"none"}}>
                <div className="row center">
                    <h4 className="header center">100% Plant-Based Me</h4>
                    <h6 style={{margin:0}} >{chosenMeals.length > 0? null:"Pick"} {mealCount-chosenMeals.length} {chosenMeals.length >0? " meals remaining":"meals"} </h6>
                    {
                        chosenMeals.length > 0 && windowWidth > 600?
                            <ChosenMealsList  className={`col ${windowWidth>600 ?"s8":"s12"} center`}>
                            {<ol>
                                {chosenMeals.map((fav)=>
                                    <li  onClick={()=>deleteMeal(fav)}>{fav}</li>
                                )} </ol>
                            }
                            </ChosenMealsList>: null
                        }

                    <div className={`col ${ windowWidth>600 ?"s4":"s12"} center`}>
                        <BackButton onClick={GoBack}  className="btn-large">Back</BackButton>
                        <StartButton onClick={StartOrderProcess}  className={`btn-large ${chosenMeals.length>=mealCount ? "":"disabled"}`}>Checkout</StartButton>
                    </div>
                </div>

            </Slide>


            <Slide id={5} name={"checkout"} className="" style={{display: currentSlide===5?"":"none"}}>
                <h4>Almost done {userinfo.name}! Validate your order information below. </h4>

                <div className="row center">
                </div>
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
height: ${props=> props.currentSlide===4?"250px":"500px"};
`;

const BackButton = styled.button`
color : white;
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}
margin: 12px;
`;

const ButtText = styled.span`
font-size:${ props=>props.s_width >500?"120%":"80%"};
  line-height: normal;
position: absolute;
  top:${ props=>props.s_width >500?"4em":"2em"};
  left: 0;
  right: 0;
  pointer-events: none;
`;

const StartButton = styled.button`
color : white;
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}
margin: 12px;

`;
const HideButton = styled.button`
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
color:white;
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
width: 20%;
margin-left: 0;
height: 150px;
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}
`;
const CircleButton = styled.button`
border-radius: 100%;
  position: relative; /* If you want text inside of it */

width: 20%;
margin-left: 0;
padding-top: 20%;
background-color: ${props => props.restrictions && props.restrictions.includes(props.name)? "red":colors.bright} ;
&:hover {
  background-color: ${colors.secondaryTwo};
}
`;

const ChosenMealsList = styled.div`
  text-align: left;
  padding: 0 30px !important;
  max-width: 300px;
  height: 150px;
  max-height: 150px;
  overflow: auto;
  background-color: rgba(255,255,255, .2);
`;