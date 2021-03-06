import React, {useCallback,useState,useEffect, useContext} from 'react';
import styled from "styled-components";
import {A } from 'hookrouter';
import colors from "../../Colors";
import app from "../../fbase"
import {AuthContext} from "../../Auth/Auth";
function getWidth() {
    return window.innerWidth
}
const Login = () => {
    const [windowWidth, setWidth] = useState(getWidth);
    const {currentUser,formValidation,userLogin,infoValidated,gotoPage} = useContext(AuthContext);
    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);

    useEffect(()=>
    {
        if(currentUser)gotoPage('/')

    }, [currentUser]);



    const handleLogin = useCallback(
        async () => {
            const {email, password} = {...userLogin}
            try{
                await app.auth()
                    .signInWithEmailAndPassword(email,password).then(()=>{
                        console.log(`User Logged In!`);
                        gotoPage(`/`)
                    });
            } catch (error){
                alert(error)
            }

        },[]
    );

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
                            <FormInput onChange={formValidation} id="email" placeholder={"Email"} type="email"  className="validate"/>
                        </div>

                        <div className="input-field col s12 m6">
                            <FormInput onChange={formValidation} id="password" placeholder={"Password"} type="password" />
                        </div>

                    </div>
                    <div className="row">

                    <LoginButton onClick={handleLogin} className={`btn-large col s12 m6 offset-m3 ${infoValidated?"":"disabled"}`}>
                        Login
                    </LoginButton>
                    </div>
                </form>
            </div>
            {windowWidth < 650? <h6 className=" center " style={{fontWeight: "bolder" ,bottom: "25px", alignSelf:"center", position: "absolute" }}>Scroll Down To Learn More</h6> : null }


        </LoginForm>
    );
};

export default Login;

const LoginButton = styled.div`
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}

`;
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