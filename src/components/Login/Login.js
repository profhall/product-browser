import React, {useCallback,useState,useEffect, useContext} from 'react';
import styled from "styled-components";
import {A } from 'hookrouter';
import colors from "../../Colors";
import {Button} from "../Styles";

import app from "../../fbase"
import {AuthContext} from "../../Auth/Auth";
function getWidth() {
    return window.innerWidth
}
const Login = () => {
    const [windowWidth, setWidth] = useState(getWidth);
    const [email, setEmail] = useState(null);
    const [password, setPW] = useState(null);
    const [infoValidated, setinfoValidated] = useState(false);
    const {currentUser,formValidation,userLogin,gotoPage} = useContext(AuthContext);
    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);

    useEffect(()=>
    {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(currentUser)gotoPage('/')
        // console.log(email, password)
        email && password && email.match(mailformat) && password.length > 5 ? setinfoValidated(true):setinfoValidated(false)

    }, [currentUser,email,password]);

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePW = (e) => {
        setPW(e.target.value)
    }

    const handleLogin =
        async (e) => {
            e.preventDefault()
            // const {email, password} = {...userLogin}
            console.log(email, password)

            try{

                await app.auth()
                    .signInWithEmailAndPassword(email,password).then(()=>{
                        console.log(`User Logged In!`);
                        gotoPage(`/`)
                    });
            } catch (error){
                alert(error)
            }

        };

    return (
        <LoginForm  >
            <h2 style={{margin:0}} className="header center ">Delicious Plant-Based Meals Prepared For You.</h2>
            <div className="row center">
                <h6 className="header col s12 light" >
                    <b> <span onClick={()=>gotoPage("/steps")} style={{color:`${colors.bright}`, fontWeight:"bold"}} >Click Here To See How The Process Works</span ></b>
                </h6>
                <h5 className="header col s12 light" >
                    <b> <span onClick={()=>gotoPage("/menu")} style={{color:`${colors.bright}`, fontWeight:"bold"}} >This Weeks Menu</span ></b>
                </h5>
                <h5 className="header col s12 light">
                    <b> Login or <span onClick={()=>gotoPage("/signup")} style={{color:`${colors.bright}`, fontWeight:"bolder"}} >Sign Up</span ></b>
                </h5>
                <form className="col s12" >
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <FormInput onChange={handleEmail} id="email" placeholder={"Email"} type="email"  className="validate"/>
                        </div>

                        <div className="input-field col s12 m6">
                            <FormInput onChange={handlePW} id="password" placeholder={"Password"} type="password" />
                        </div>

                    </div>
                    <div className="row" style={{display:"flex", justifyContent:"center"}}>

                    <Button onClick={handleLogin} className={`btn-large col s12 m6 offset-m3 ${infoValidated?"":"disabled"}`}>
                        Login
                    </Button>
                    </div>
                </form>
            </div>
            {windowWidth < 650? <h6 className=" center " style={{fontWeight: "bolder" ,bottom: "25px", alignSelf:"center", position: "absolute" }}>Scroll Down To Learn More</h6> : null }


        </LoginForm>
    );
};

export default Login;


const LoginForm = styled.div`
color:white;
margin: auto;
grid-area: content;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`;
const FormInput = styled.input`
color:white;
`;