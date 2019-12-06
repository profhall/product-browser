import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import colors from "../../Colors";
import foodPic from './veganBowl.jpeg'
import DayPickerInput from 'react-day-picker';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Product from "../Product/Product";
import emailjs from "emailjs-com";



function getWidth() {
    return window.innerWidth
}

const Main = ({confirmation, emailSelection,ToggleMeals,chosenMeals,setMeals, getNumberOfMeals}) => {
    const [windowWidth, setWidth] = useState(getWidth);
    const [currentSlide, changeSlide] = useState(0);
    const [mealPrice, setPrice] = useState(0);
    const [mealsValidated, validateMeals] = useState(false);
    const [infoValidated, validateInfo] = useState(false);
    const [startDate, setDate] = useState(null);
    const [mealCount, changeMealCount] = useState(0);
    const [refreshCount, refresh] = useState(0);
    const [restrictions, updateRestrictions] = useState([]);
    const [userinfo, setUser] = useState({"name":null,"email":null});

    const deliveryFee = 7;
    const containerFee = 10;
    useEffect(()=>{

        mealCount !== 0 ? validateMeals(true) :  validateMeals(false);

        console.log(`Start Date: ${startDate}, Number Of Meals: ${mealCount}, Restrictions: ${restrictions}`);

        setWidth(getWidth());
        if(currentSlide !== 4){ToggleMeals(false)}
        else{ToggleMeals(true)}

        console.log("Salad count ", mealCount/4);


    });


    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);

    const NextSlide= (e)=>{
        e.preventDefault();
        changeSlide(currentSlide+1);
    };

    const PrevSlide = (e)=>{
        e.preventDefault();
        changeSlide(currentSlide-1);
    };

    const handleInputChange = (e) => {
        console.log("input id", e.target.id);

        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (e.target.id === "name"){userinfo["name"] = e.target.value;}
        else if (e.target.id === "email"){userinfo["email"]= e.target.value;}
        else if (e.target.id === "state"){userinfo["state"]= e.target.value;}
        else if (e.target.id === "city"){userinfo["city"]= e.target.value;}
        else if (e.target.id === "zip"){userinfo["zip"]= e.target.value;}
        else if (e.target.id === "street"){userinfo["street"]= e.target.value;}

        setUser(userinfo);

        if ((userinfo["name"] && userinfo["email"] && userinfo["city"] && userinfo["street"] && userinfo["state"] && userinfo["zip"])
            && userinfo["name"].length >= 2 && userinfo["email"].match(mailformat) && userinfo["city"].length > 2 && userinfo["street"].length > 4 && userinfo["state"].length === 2 && userinfo["zip"].length === 5)
        {
            console.log(userinfo['name'], userinfo['email'])
            validateInfo(true)
        }
        else { validateInfo(false) }

    };

    const selectButton = (e,price) => {

        if (e.target.classList.contains("mc"))
        {
            changeMealCount(e.target.id);
            setPrice(price);
            getNumberOfMeals(Number(e.target.id))
        }

        if( e.target.classList.contains("dr")){
            console.log(e.target.name);
            if (restrictions.includes(e.target.name)) {
                updateRestrictions(restrictions.filter((res)=>res!==e.target.name))
            }
            else{
                updateRestrictions(restrictions.concat(e.target.name))

                console.log(restrictions)
            }
        }
    };

    const deleteMeal= (fav) =>{
        var index = chosenMeals.indexOf(fav);
        if (index > -1) {
            chosenMeals.splice(index, 1);
            setMeals(chosenMeals);
            refresh(refreshCount+1)
        }
    };

    function handleDayClick(day, { selected, disabled }) {
        if (disabled) {
            console.log("day is disabled")
            return;
        }
        if (selected) {
            // Unselect the day if already selected
            setDate( null );
            return;
        }
        setDate( day.toDateString() );
    }

    return (
        <MainContent className="" currentSlide={currentSlide}>
            <Slide id={0} name={"user_info"}  className="container" style={{display: currentSlide===0?"":"none"}}>
                <br/>
                <br/>
                <br/>

                <div className="container" >
                    <h4 className="header center ">Delicious Plant-Based Meals Prepared For You!</h4>
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

                                <div className="input-field col s12">
                                    <FormInput onChange={handleInputChange} id="street" placeholder={"Number & Street"} />
                                </div>


                                <div className="input-field col s6">
                                    <FormInput onChange={handleInputChange} id="city" placeholder={"City"} />
                                </div>

                                <div className="input-field col s2">
                                    <FormInput onChange={handleInputChange} id="state" placeholder={"State"} />
                                </div>

                                <div className="input-field col s4">
                                    <FormInput onChange={handleInputChange} id="zip" placeholder={"Zip"} />
                                </div>
                                <div className="row center">
                                    <StartButton onClick={NextSlide}  className={`btn-large ${infoValidated?"":"disabled"}`}>Get Started</StartButton>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </Slide>

            <Slide id={1} name={"mealCount"}  className="" style={{display: currentSlide===1?"":"none"}}>
                <br/>

                <h4 className="header center ">
                    {mealCount !==0 ?`You Selected ${mealCount} Meals`: `How Many Meals?`}
                    <br/>
                    You get {Math.floor(mealCount/4)} {Math.floor(mealCount/4)===1 ?"salad":"salads"}
                </h4>
                <h6>
                    <b>For every 4 meals, you receive a free salad</b>
                </h6>

                <HorizontalButtons className="row " >
                    <SquareButton id={4} price={13} className="mc btn  s2 "  onClick={(e)=>selectButton(e,52)} >
                        4 MEALS<br/>
                        $13 / MEAL <br/>
                       $52 TOTAL
                    </SquareButton>
                    <SquareButton id={7} className={"mc btn  s2"}  onClick={(e)=>selectButton(e,84)} >
                        7 MEALS<br/>
                        $12 / MEAL <br/>
                        $84 TOTAL
                    </SquareButton>
                    <SquareButton id={10} className={"mc btn  s2 "}  onClick={(e)=>selectButton(e,110)} >
                        10 MEALS<br/>
                        $11 / MEAL <br/>
                        $110 TOTAL
                    </SquareButton>
                    <SquareButton id={12} className={"mc btn  s2 "}  onClick={(e)=>selectButton(e,120)} >
                        12 MEALS<br/>
                        $10/ MEAL <br/>
                        $120 TOTAL
                    </SquareButton>
                </HorizontalButtons>
                <div className="row center">
                    <BackButton onClick={PrevSlide}  className="btn-large">Go Back</BackButton>
                    <StartButton onClick={NextSlide}  className={`btn-large ${mealsValidated?"":"disabled"}`}>Choose Delivery Date</StartButton>
                </div>

            </Slide>
            <Slide id={2} name={"delivery"} className="" style={{display: currentSlide===2?"":"none"}}>
                <h5 className="header center "> We Deliver On Wednesdays and Saturdays</h5>
                <CalendarContainer className="row">
                        <DayPickerInput
                            disabledDays={{ daysOfWeek: [0,1,2,4,5] }}
                            style={{width:"100%"}}  placeholder={"Start Date"}
                            selectedDays={startDate}
                            onDayClick={handleDayClick} />
                </CalendarContainer>
                <div className="row center">
                    <StartButton onClick={PrevSlide}  className="btn-large">Go Back</StartButton>
                    <StartButton onClick={NextSlide}  className={`btn-large ${startDate ? "":"disabled"}`}>Set Dietary Restrictions</StartButton>
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
                        <BackButton onClick={PrevSlide}  className="btn-large">Go Back</BackButton>
                        <StartButton onClick={NextSlide} className="btn-large" id={"mealSelect"}>Select Meals</StartButton>
                    </div>
            </Slide>
            <Slide id={4} name={"meal_section"} className="" style={{display: currentSlide===4?"":"none"}}>
                <div className="row center">
                    <br/>
                    {windowWidth > 600?"<br/>":null}

                    <h4 className="header center">100% Plant-Based</h4>
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

                        <BackButton onClick={PrevSlide}  className="btn-large">Go Back</BackButton>
                        <StartButton onClick={NextSlide}  className={`btn-large ${chosenMeals.length>=mealCount ? "":"disabled"}`}>Checkout</StartButton>
                    </div>

                </div>

            </Slide>
            <Slide id={5} name={"checkout"} className="center" style={{display: currentSlide===5?"":"none"}}>
<br/>
                <div className="row center">
                    <h5><b>{userinfo.name}</b>, please validate the information below. </h5>

                    <h5>
                        <b>Address</b>: {`${userinfo.street} ${userinfo.city}, ${userinfo.state} ${userinfo.zip}`}
                    </h5>
                    <h5><b>Email</b>: {userinfo.email}</h5>

                    {startDate ?<h5><b>Date</b>: {`${startDate}`}</h5>:null}

                    <h5>{mealCount} Meals & {mealCount/4} Salads</h5>

                    {restrictions.length >0 ? <h5><b>Dietary Restrictions</b>: {`${restrictions}`}</h5>:null}

                </div>
                <div className="row center">
                    <BackButton onClick={PrevSlide}  className="btn-large">Go Back</BackButton>
                    <StartButton onClick={()=>{
                        changeSlide(currentSlide+1)
                        emailSelection(chosenMeals, userinfo)}}  className="btn-large">Submit Order</StartButton>
                </div>

            </Slide>

            <Slide id={6} name={"checkout"} className="" style={{display: currentSlide===6?"":"none"}}>
                <div className="row center" style={{width:"60%"}}>


                {confirmation?
                    <div className="col s12" >
                    <h4>Thanks {userinfo.name}, There's one more step! Send your ${mealPrice+deliveryFee+containerFee}.00 payment to   </h4>
                    </div>
                    :
                    <div className="col s12" >
                        <BackButton onClick={PrevSlide}  className="btn-large">Go Back</BackButton>

                        <h4>Hey {userinfo.name}, there seems to be a problem, your information did not go through. Go back and make sure your info is still correct and try to submit your order again.  </h4>                </div>

                }
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
height: ${props=> props.currentSlide===4?"250px":"600px"};
max-height:600px;
`;

const BackButton = styled.button`
color : white;
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}
margin: 7px;
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
margin: 7px;

`;
const CalendarContainer = styled.div`
margin : 0 !important;

`;

const Slide = styled.div`
height: 75%;
display: flex;
flex-direction: column;
align-items: center ;
justify-content: space-around;
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