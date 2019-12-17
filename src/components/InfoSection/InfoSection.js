import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import colors from "../../Colors";

const Main = () => {

    const StartOrderProcess= ()=>{
        console.log("starting the process")
    }

    return (
        <MainContent className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                            <h5 className="center">100% Plant-Based</h5>

                            <p className="light center ">Info coming soon</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                            <h5 className="center">All Natural Ingredients</h5>
                            <p className="light center ">Info coming soon</p>

                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                            <h5 className="center">100% Delicious</h5>

                            <p className="light center">Info coming soon</p>
                        </div>
                    </div>
                </div>

            </div>
        </MainContent>
    );
};

export default Main;

const MainContent = styled.div`
color : ${colors.secondaryTwo};
background-repeat: no-repeat;
background-size:  cover;
grid-area: info;
//height: 300px;
background-color: #51a0fa;
`

const StartButton = styled.button`
color : white;
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}
`
