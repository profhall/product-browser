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
                            <h5 className="center">Delicious Meals Made With Love.</h5>

                            <p className="light">We did most of the heavy lifting for you to provide a default stylings
                                that incorporate our custom components. Additionally, we refined animations and
                                transitions to provide a smoother experience for developers.</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                            <h5 className="center">Why Plant-Based?</h5>

                            <p className="light">By utilizing elements and principles of Material Design, we were able
                                to create a framework that incorporates components and animations that provide more
                                feedback to users. Additionally, a single underlying responsive system across all
                                platforms allow for a more unified user experience.</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                            <h5 className="center">All Natural Ingredients</h5>

                            <p className="light">We have provided detailed documentation as well as specific code
                                examples to help new users get started. We are also always open to feedback and can
                                answer any questions a user may have about Materialize.</p>
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
`

const StartButton = styled.button`
color : white;
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}
`
