import React, {useContext,useEffect, useState} from 'react';
import styled from "styled-components";
import colors from "../../Colors";
import {AuthContext, AuthProvider} from "../../Auth/Auth";

import {meals, salads, mains, sides} from '../../data'

function getWidth() {
    return window.innerWidth
}


const Menu = () => {
    const [currentSlide, setSlide]=useState(0);
    const [selected, setSelected]=useState("meals");

    const [windowWidth, setWidth] = useState(getWidth);
    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);

    useEffect(()=>{
        console.log(currentSlide)
        console.log(meals.length)

    },[windowWidth, currentSlide])
    const mealList = meals.map((item,i) => {
        return  (
            <Meal key={i} id={i} className={"container"} >
                <Title>
                    <h4>{item.name}</h4>
                </Title>
                <Photos>
                    <PhotoGrid windowWidth={windowWidth} full={!!item.side}>
                        <MainPhoto photo={item.photo} />
                        {item.side?
                            <SidePhoto photo={item.side ? item.side[1].pic : null} num={1}/>
                            :null}
                        {item.side && item.type!=="salad"?
                            < SidePhoto  photo={item.side ? item.side[2].pic:null} num={2}/>
                            :null}
                    </PhotoGrid>
                </Photos>
                <Desc>
                    <h5>{item.description}</h5>
                </Desc>
                <Buttons>

                    <a onClick={()=>setSlide(currentSlide-1)} href={"#"}>
                        <i  style={{color: colors.bright,display:currentSlide === 0?  "none":""}} className="material-icons large">chevron_left</i>

                    </a>

                    <a onClick={()=>setSlide(currentSlide+1)} href={"#"} >
                        <i style={{color: colors.bright,display:currentSlide < meals.length-1?  "":"none"}}  className="material-icons large">chevron_right</i>

                    </a>
                </Buttons>

            </Meal>

        )


    });
    const {gotoPage} = useContext(AuthContext)

    return (
        <TheMenu windowWidth={windowWidth}>
            <h3> This Weeks Menu</h3>
            <h6>Nutritional Information Coming Soon...</h6>

            <Meals>
                {mealList[currentSlide]}

            </Meals>
            {/*<ButtonContainer className={"row "}>*/}
            {/*    <Button className={`btn-large col m5 ${0<1?"":"disabled"}`} onClick={()=>selected("salads")}>Salads</Button>*/}
            {/*    <Button className={`btn-large col  m5 ${selected==="meals"?"":"disabled"}`} onClick={()=>setSelected("meals")}>Meals</Button>*/}
            {/*</ButtonContainer>*/}
        </TheMenu>
    );
};

export default Menu;


const TheMenu = styled.div`
height:100%;
width: ${ props=>props.windowWidth > 650 ?
    '65%'
    :
    '100%'
    };;
grid-area: content;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
    `

const Meals = styled.div`
height:100%;
width: 100%;

    `;
const Meal = styled.div`
height:100%;
grid-area: content;
display: grid;
grid-template-rows: 10% 50% 30% 10%;
grid-template-areas: 
  'title'
  'photos'
  'desc'
  'buttons'
;
    `;

const Title = styled.div`

height:100%;
width: 100%;
grid-area: title;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Photos = styled.div`
height:100%;
width: 100%;
grid-area: photos;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Desc = styled.div`
height:100%;
width: 100%;
overflow: auto;
grid-area: desc;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Buttons = styled.div`
height:100%;
width: 100%;
grid-area: buttons;
display: flex;
justify-content: center;
align-items: center;

`


const SidePhoto = styled.div`
  grid-area: ${props=>props.num ===1 ? "side1":"side2"};
  height: 100%;
  margin: auto;
  width: 100%;
  background:url(${props=> props.photo ? props.photo:"https://cdn.pixabay.com/photo/2018/02/13/09/06/sea-3150196_1280.jpg"});
  background-repeat: no-repeat ;
  background-size:  cover ;
  background-position: center;
`;
const MainPhoto = styled.div`
  grid-area: main;
  
  height: 100%;
  margin: auto;
  width: 100%;
  background:url(${props=> props.photo ? props.photo:"https://cdn.pixabay.com/photo/2018/02/13/09/06/sea-3150196_1280.jpg"});
  background-repeat: no-repeat ;
  background-size:  cover ;
  background-position: center;
`;
const PhotoGrid = styled.div`
  grid-area: photo;
  height: 95%;
  grid-template-rows: ${ props=>props.windowWidth > 650 ?
    '50% 50%'
    :
    '70% 30%'
    };
  border-radius: 5px;
  margin: auto;
  width: 100%;
  grid-gap: 2px;
  display: grid;
  grid-template-areas:${ props=>props.windowWidth < 650 ?
    '"main main" "side1 side2"'
    :
    '"main side1" "main side2"'
    };
  
`;


/*
Buttons Styling
 */

const Button = styled.button`
    color:white;
    margin: 7px !important;
    height: ${props=> props.height ? props.height:" "};
    background-color: ${colors.bright};
    &:hover {
      background-color: ${colors.secondaryTwo};
    }
`

const ButtonContainer = styled.div`
  grid-area: button;  
  display: flex;
  width: 100%;
  justify-content:center;

`;

