import React, {useEffect,useContext, useState} from 'react';
import styled from 'styled-components'
import plateIcon from './assets/lunch-box.svg';
import colors from "../../Colors";
import Routes from "../../Routes"
import {AuthContext} from "../../Auth/Auth";
import app from "../../fbase";
import {navigate, A} from "hookrouter";
import Sidebar from "../SideBar/SideBar";
import Logo from "../media/logo-01.png";
import {Button} from "../shared_comps/Styles";
import {Button as But, Modal} from "react-materialize";



const Navi = ({windowWidth}) => {
    const [url,setUrl] =useState(window.location.href)
    const {currentUser,currentUserOrder} = useContext(AuthContext);

    useEffect(()=>
    {
        setUrl(window.location.href)

        console.log("in header")
    }, [])


    return (
        <div className="navbar-fixed">
            {windowWidth<990?
        <TheNav className="nav-wrapper  ">
            <a  href="/"  className=""><img style={{height:55}} src={Logo}/></a>

            {!url.includes("mealselection") && currentUserOrder && currentUserOrder.meals.length > 0  ? <Modal
                actions={[
                    <But flat waves="light" modal="close" node="button" ><i className="material-icons" >close</i></But>
                ]}
                bottomSheet={true}
                fixedFooter={false}
                header="Selected Meals"
                id="modal-0"
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                trigger={<Button className={`btn`} style={{color:colors.bright, marginLeft:25}}>Your Meals</Button>}>
                {
                    currentUserOrder.meals.length > 0?
                        <div  className={`col s12 center`}>
                            {<ol>
                                {currentUserOrder.meals.map((fav,i)=>
                                    <li id={i}  ><h5>{fav} </h5> </li>
                                )} </ol>
                            }
                        </div>: null
                }
            </Modal>:null}

        </TheNav>:null}
        </div>
    );
};

const TheNav = styled.nav`
  width: 100%;
  padding: 0;
  background-color:white;
  color: ${colors.bright} ;
  grid-area: head;
  display: flex;
  flex-direction: row;
`;

const I = styled.i`
//align-self: flex-end;
//right: 0;
`;

export default Navi;
