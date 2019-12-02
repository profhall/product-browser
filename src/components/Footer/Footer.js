import React from 'react';
import colors from "../../Colors";
import styled from "styled-components"

const Footer = () => {
    return (
        <TheFooter className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">PJ's Plant-Based Kitchen</h5>
                        <p className="grey-text text-lighten-4">We are a team of college students working on this
                            project like it's our full time job. Any amount would help support and continue
                            development on this project and is greatly appreciated.</p>


                    </div>
                    <div className="col l3 s12">
                        <h5 >Connect</h5>
                        <ul>
                            <li><a className="white-text" href="#!">Link 1</a></li>
                            <li><a className="white-text" href="#!">Link 2</a></li>
                            <li><a className="white-text" href="#!">Link 3</a></li>
                            <li><a className="white-text" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                </div>
            </div>
        </TheFooter>
    );
};

export default Footer;

const TheFooter = styled.footer`
  //width: 100%;
  background-color: ${colors.secondaryOne} ;
  color: ${colors.bright};
`;