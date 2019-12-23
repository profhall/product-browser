import React,{useCallback,useContext,useState, useEffect} from 'react';
import {A, navigate} from "hookrouter";
import app from "../../fbase";
import styled from "styled-components";
import colors from "../../Colors";
import * as firebase from "firebase/app";
import 'firebase/firestore';


import {AuthContext} from "../../Auth/Auth";

const SignUp = ({}) => {
    const [signupValidated, validateSignUp] = useState(false);
    const [userSignUp, setSignUpInfo] = useState({});
    const [passwordsMatch, setPWMatch] = useState(false);
    let SignUp={}
    useEffect( () =>  {
        console.log(" signup comp mounted")
        console.log(userSignUp, passwordsMatch, signupValidated)
        // return () => {
        //     effect
        // };
    }, [ userSignUp,passwordsMatch,signupValidated]);

    const FormValidation = (e) => {
        console.log("input id", e.target.id);
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (e.target.id === "password"){userSignUp["password"] = e.target.value;}
        else if (e.target.id === "email"){userSignUp["email"]= e.target.value;}
        else if (e.target.id === "dietary_restrictions"){userSignUp["dietary_restrictions"]= e.target.value;}
        else if (e.target.id === "city"){userSignUp["city"]= e.target.value;}
        else if (e.target.id === "zip"){userSignUp["zip"]= e.target.value;}
        else if (e.target.id === "street"){userSignUp["street"]= e.target.value;}
        else if(e.target.id === "password_val"){
            console.log(e.target.value ,":",  userSignUp["password"])
            e.target.value === userSignUp["password"] ? setPWMatch(true):setPWMatch(false)

        }
        setSignUpInfo(userSignUp);

        if (
            (
                userSignUp["email"] &&
                userSignUp["city"] &&
                userSignUp["street"] &&
                userSignUp["zip"])
            &&

            userSignUp["email"].match(mailformat) &&
            userSignUp["city"].length > 2 &&
            userSignUp["street"].length > 4 &&
            userSignUp["zip"].length === 5
        )
        {
            console.log(userSignUp['name'], userSignUp['email'])
            validateSignUp(true)
        }
        else { validateSignUp(false) }

    };

    const handleSignUp = useCallback(
        async () => {
            const {email, password} = {...userSignUp}
            const db = firebase.firestore(app);
            try{
                await app.auth().createUserWithEmailAndPassword(email,password).then(function(user){
                    console.log(user.user.uid)
                    // dispatch({type: USER_SIGNUP_SUCCESS}); // I dispatched some message.
                    db.collection(`users`).doc(user.user.uid).set({
                        address: {},
                        email: email,
                        dietary_restrictions: "test",
                    }); // I added user
                    // console.log('uid:',user.uid)

                })
                console.log(`created: ${email} : ${password}`)
                navigate("/")
                // history.push("/")push
            } catch (error){
                alert(error)
            }

        },[]
    );

    const {currentUser} =  useContext(AuthContext);
    if(currentUser) navigate('/');

    return (
        <SignUpForm>
            <h2 className="header center ">Please fill out the form below to get started.</h2>
            <div className="row center">
                <h5 className="header col s12 light">
                    <b> Your information will not be shared.</b>
                </h5>
                <br/>
                <SignUpFormForm className="col s12" >
                    <div className="row">
                        <div className="input-field col s12 m4">
                            <FormInput onChange={FormValidation} id="email" placeholder={"Email"} type="email"  className="validate"/>
                        </div>

                        <div className="input-field col s12 m4">
                            <FormInput onChange={FormValidation} id="password" placeholder={"Password"} type="password" />
                        </div>

                        <div className="input-field col s12 m4">
                            <FormInput onChange={FormValidation} id="password_val" placeholder={"Verify Password"} type="password" />
                        </div>

                        <div className="input-field col s12 m6">
                            <FormInput onChange={FormValidation} id="street" placeholder={"Number & Street"} />
                        </div>


                        <div className="input-field col s6 m3 ">
                            <FormInput onChange={FormValidation} id="city" placeholder={"City"} />
                        </div>

                        <div className="input-field col s6 m3">
                            <FormInput onChange={FormValidation} id="zip" placeholder={"Zip"} />
                        </div>

                        <div className="input-field col s12 m6 offset-m3">
                            <h5>Dietary Restrictions</h5>
                            <p>
                                <label>
                                    <input id="gluten" type="checkbox"/>
                                    <span style={{marginRight:5}}>Gluten-Free</span>
                                </label>
                                <label>
                                    <input id="nut" type="checkbox" />
                                    <span style={{marginRight:5}}>Nut-Free</span>
                                </label>
                                <label>
                                    <input id="wheat" type="checkbox"/>
                                    <span style={{marginRight:5}}>Wheat-Free</span>
                                </label>
                                <label>
                                    <input id="soy" type="checkbox"/>
                                    <span>Soy-Free</span>
                                </label>
                            </p>
                        </div>


                    </div>
                    <div className="row">
                        <LoginButton onClick={handleSignUp}  className={`${signupValidated?"":"disabled"} btn-large col s12 m6 offset-m3 `}>
                            Sign Up
                        </LoginButton>
                    </div>
                </SignUpFormForm>
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
const SignUpFormForm = styled.form`
color:white;

justify-content: center;

`;
const SignUpForm = styled.div`
background-color: rgba(0,0,0,0.4);
color:white;
font-weight: bolder;
margin: auto;
grid-area: content;
width:80%;
justify-content: center;

`;
const FormInput = styled.input`
color:white;
`;