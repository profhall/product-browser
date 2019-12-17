import React,{useCallback,useContext} from 'react';
import {A, navigate} from "hookrouter";
import app from "../../fbase";
import styled from "styled-components";
import colors from "../../Colors";
import {AuthContext} from "../../Auth/Auth";

const SignUp = ({formValidator,userSignUp}) => {

    // const handleSignUp = useCallback(
    //
    //     async () => {
    //         // const {email, password} = {...userSignUp}
    //         try{
    //             // await app.auth().createUserWithEmailAndPassword(email,password);
    //             // console.log(`created: ${email} : ${password}`)
    //             navigate("/")
    //             // history.push("/")
    //         } catch (error){
    //             alert(error)
    //         }
    //
    //     },[]
    //
    // );
     const {currentUser} =  useContext(AuthContext)
      if(currentUser) navigate('/')

    return (
        <SignUpForm>
            <h4 className="header center ">Please fill out the form below to get started.</h4>
            <div className="row center">
                <p className="header col s12 light">
                    We will not share any of your information.
                </p>
                <form className="col s12" >
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <FormInput onChange={formValidator} id="email" placeholder={"Email"} type="email"  className="validate"/>
                        </div>

                        <div className="input-field col s12 m6">
                            <FormInput onChange={formValidator} id="password" placeholder={"Password"} type="password" />
                        </div>

                        <div className="input-field col s12">
                            <FormInput onChange={formValidator} id="street" placeholder={"Number & Street"} />
                        </div>


                        <div className="input-field col s6">
                            <FormInput onChange={formValidator} id="city" placeholder={"City"} />
                        </div>

                        <div className="input-field col s2">
                            <FormInput onChange={formValidator} id="state" placeholder={"State"} />
                        </div>


                    </div>
                    <div className="row">
                        <LoginButton  className={`btn-large col s12 m6 offset-m3 `}>
                            Sign Up
                        </LoginButton>
                    </div>
                </form>
            </div>
        </SignUpForm>
    );
};

export default SignUp;

const LoginButton = styled.div`
margin: auto;
background-color: ${colors.bright};
&:hover {
  background-color: ${colors.secondaryTwo};
}

`;
const SignUpForm = styled.div`
color:white;
margin: auto;
grid-area: content;

`;
const FormInput = styled.input`
color:white;
`;