import React, {useState} from 'react';
import styled from "styled-components";

const About = () => {
    const [hidden,setDisplay] = useState(true)

    const toggleDisplay = () =>{

        console.log("toggle About display")
        setDisplay(!hidden )
    };
    if (hidden){
        return (
           <TheAbout>

               {/*<TheAboutWelcome> Welcome!! </TheAboutWelcome>*/}
               <TheAboutDesc>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                   magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                   irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </TheAboutDesc>
               <Toggle onClick={toggleDisplay}> hide </Toggle>

           </TheAbout>
        );
    }else{
        return (
            <TheHiddenAbout onClick={toggleDisplay}>
                Click Here To See Instructions
            </TheHiddenAbout>
        );
    }
};

const TheHiddenAbout = styled.div`
  height: 5%;
  width: 95%;
  margin: auto;
  background-color: #999999;
`;

const TheAboutWelcome = styled.span`
  font-size: 2em;
`;

const TheAboutDesc = styled.h3`
  font-size: 1em;
`;

const TheAbout = styled.div`
  height:15%;
  width: 95%;
  margin: auto;
  background-color: #999999;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const Toggle = styled.button`
  float:right;
`;

export default About;
