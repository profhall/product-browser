import React from 'react';
import styled from "styled-components";
import colors from "../../Colors";

const Contact = () => {
    return (
        <TheContactSection className="container">
            <div className="section">

                <div className="row">
                    <div className="col s12 center">
                        <h3><i className="mdi-content-send brown-text"></i></h3>
                        <h4>Why Go Plant-Based?</h4>
                        <p className="left-align light">
                            More info coming soon
                        </p>
                    </div>
                </div>

            </div>
        </TheContactSection>
    );
};

export default Contact;

const TheContactSection = styled.div`
color:${colors.secondaryTwo}
`
