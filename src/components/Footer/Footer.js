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
                        <p className="grey-text text-lighten-4">Thank You For Visiting!</p>


                    </div>
                    <div className="col l3 s12">
                        <h5 >Connect</h5>
                        <ul>
                            <li><a className="white-text" href="https://www.instagram.com/thetastyplantbased.kitchen/" target="_blank">Instagram</a></li>
                            {/*<li><a className="white-text" href="#!">Youtube</a></li>*/}
                            {/*<li><a className="white-text" href="#!">Facebook</a></li>*/}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <p>Made by <a className="brown-text text-lighten-3" href="#">PJ The Developer</a></p>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </div>
        </TheFooter>
    );
};

export default Footer;

const TheFooter = styled.footer`
  width: 100%;
  background-color: ${colors.secondaryTwo} !important ;
  color: ${colors.bright} !important;
  bottom: 0;
  position: relative ;
  grid-area: footer;
`;