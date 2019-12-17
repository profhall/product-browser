import React, {useCallback,useState, useContext} from 'react';
import styled from "styled-components";
import { navigate,A } from 'hookrouter';
import colors from "../../Colors";
import app from "../../fbase"
import {AuthContext} from "../../Auth/Auth";

const Login = ({FormValidation, infoValidated, userLogin, history}) => {
const goToSignup = () =>{
    navigate('/signup')
}
    const handleLogin = useCallback(

        async () => {
            const {email, password} = {...userLogin}
            try{
                await app.auth()
                    .signInWithEmailAndPassword(email,password);
                console.log(`Login: ${email} : ${password}`)
                navigate("/")
                // history.push("/")
            } catch (error){
                alert(error)
            }

        },[]

    );
    const {currentUser} = useContext(AuthContext);

    return (
        <LoginForm className="container" >
            <h4 className="header center ">Delicious Plant-Based Meals Prepared For You!</h4>
            <div className="row center">
                <p className="header col s12 light">
                    Login or <span onClick={goToSignup} ><A href={"#"}>Sign Up</A></span >
                </p>
                <form className="col s12" >
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <FormInput onChange={FormValidation} id="email" placeholder={"Email"} type="email"  className="validate"/>
                        </div>

                        <div className="input-field col s12 m6">
                            <FormInput onChange={FormValidation} id="password" placeholder={"Password"} type="password" />
                        </div>

                    </div>
                    <div className="row">

                    <LoginButton onClick={handleLogin} className={`btn-large col s12 m6 offset-m3 ${infoValidated?"":"disabled"}`}>
                        Login
                    </LoginButton>
                    </div>
                </form>
            </div>

        </LoginForm>
    );
};

export default Login;

const LoginButton = styled.div`
margin: auto;
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}

`;
const LoginForm = styled.div`
color:white;
margin: auto;
grid-area: content;

`;
const FormInput = styled.input`
color:white;
`;