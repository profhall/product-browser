import React from 'react';
import colors from "../../Colors";
import styled from "styled-components"

const Footer = () => {
    return (
        <TheFooter className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5>PJ's Plant-Based Kitchen</h5>
                        <p className="grey-text text-lighten-4">Thanks</p>


                    </div>
                    <div className="col l3 s12">
                        <h5 >Connect</h5>
                        <ul>
                            <li><a className="white-text" href="#!">Instagram</a></li>
                            <li><a className="white-text" href="#!">Youtube</a></li>
                            <li><a className="white-text" href="#!">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Made by <a className="brown-text text-lighten-3" href="#">PJ The Developer</a>
                </div>
            </div>
        </TheFooter>
    );
};

export default Footer;

const TheFooter = styled.footer`
  width: 100%;
  background-color: ${colors.primaryTwo} ;
  color: ${colors.bright};
  bottom: 0;
  position: relative ;
  grid-area: footer;
`;