import React, {useCallback,useState, useContext} from 'react';
import styled from "styled-components";
import { navigate,A } from 'hookrouter';
import colors from "../../Colors";
import app from "../../fbase"
import {AuthContext} from "../../Auth/Auth";
function getWidth() {
    return window.innerWidth
}
const Login = ({FormValidation, infoValidated, userLogin, userOrder}) => {
    const [windowWidth, setWidth] = useState(getWidth);

    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);
const goToSignup = () =>{
    navigate('/signup')
}
    const handleLogin = useCallback(

        async () => {
            const {email, password} = {...userLogin}
            try{
                await app.auth()
                    .signInWithEmailAndPassword(email,password).then(()=>{
                        console.log(`Login: ${email} : ${password}`)
                        // navigate(`/`, true, {userId:"0000"})
                    });
                // history.push("/")
            } catch (error){
                alert(error)
            }

        },[]

    );
    const {currentUser} = useContext(AuthContext);
    console.log(currentUser?currentUser.uid:"No user")
    return (
        <LoginForm className="container" >
            <h1 className="header center ">Delicious Plant-Based Meals Prepared For You.</h1>
            <div className="row center">
                <h5 className="header col s12 light">
                    <b> Login or <span onClick={goToSignup} ><A href={"#"}>Sign Up</A></span ></b>
                </h5>
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
            {windowWidth < 650? <h6 className=" center ">Scroll Down To Learn More</h6>:null}


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