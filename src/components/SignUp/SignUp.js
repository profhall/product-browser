import React,{useCallback,useContext,useState, useEffect} from 'react';
import {A, navigate} from "hookrouter";
import app from "../../fbase";
import styled from "styled-components";
import colors from "../../Colors";
import * as firebase from "firebase/app";
import 'firebase/firestore';


import {AuthContext} from "../../Auth/Auth";

const SignUp = ({}) => {
    const [restrictions, setRestrictions] = useState([]);
    const [signupValidated, validateSignUp] = useState(false);
    const [userSignUp, setSignUpInfo] = useState({});
    const [passwordsMatch, setPWMatch] = useState(false);
    const [verifyPW, setPWVerify] = useState("");
    let SignUp={}
    useEffect( () =>  {
        console.log(" signup comp mounted with: \n Restrictions:", restrictions)
        console.log(userSignUp, passwordsMatch, signupValidated)
        // return () => {
        //     effect
        // };
        userSignUp["restrictions"] = restrictions
    }, [ userSignUp,passwordsMatch,signupValidated, restrictions]);

    const FormValidation = (e) => {
        let passwordsMatch =false

        // console.log("input id", e.target.id);
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (e.target.id === "password"){
            userSignUp["password"] = e.target.value;
            console.log(e.target.value ,":",  userSignUp["password"]);

            // e.target.value === userSignUp["password"] ? passwordsMatch=true:passwordsMatch=false
            // setPWMatch(passwordsMatch)
        }
        else if (e.target.id === "email"){userSignUp["email"]= e.target.value;}
        else if (e.target.id === "name"){userSignUp["name"]= e.target.value;}
        else if (e.target.id === "city"){userSignUp["city"]= e.target.value;}
        else if (e.target.id === "zip"){userSignUp["zip"]= e.target.value;}
        else if (e.target.id === "street"){userSignUp["street"]= e.target.value;}
        else if(e.target.id === "password_val"){
            // console.log(e.target.value ,":",  userSignUp["password"], e.target.value === userSignUp["password"]);

            e.target.value === userSignUp["password"] ? passwordsMatch=true:passwordsMatch=false
            // console.log(passwordsMatch)
            setPWMatch(passwordsMatch)
        }

        if (
                (
                    userSignUp["name"] &&
                    userSignUp["email"] &&
                    userSignUp["city"] &&
                    userSignUp["street"] &&
                    userSignUp["zip"]
                )
            &&

                userSignUp["email"].match(mailformat) &&
                userSignUp["name"].length > 2 &&
                userSignUp["city"].length > 2 &&
                userSignUp["street"].length > 4 &&
                userSignUp["zip"].length === 5
        )
        {
            // console.log("Yay!!x"+userSignUp['name'], userSignUp['email'])
            validateSignUp(true)
        }
        else { validateSignUp(false) }

        setSignUpInfo(userSignUp);

    };

    const handlePhone = (e) => {
        setSignUpInfo({...userSignUp, 'phone': e.target.value})
    }

    const handleCity = (e) => {
        setSignUpInfo({...userSignUp, 'address': {"city":e.target.value}})
    }
    const handleStreet = (e) => {
        setSignUpInfo({...userSignUp, 'address': {"street":e.target.value}})
    }
    const handleZip = (e) => {
        setSignUpInfo({...userSignUp, 'address': {"zip":e.target.value}})
    }

    const handlePassword = (e) => {
        setSignUpInfo({...userSignUp, 'password': e.target.value})
        if(verifyPW ===  e.target.value &&  e.target.value !== ""){
            console.log("match")
            setPWMatch(true)
        }else setPWMatch(false)

    }
    const handlePasswordVerify = (e) => {
        console.log(userSignUp['password'], " : ",e.target.value )
        setPWVerify(e.target.value)
        if(e.target.value === userSignUp['password']){
            console.log("match")
            setPWMatch(true)
        }else setPWMatch(false)
    }


    const handleSignUp = useCallback(
        async () => {
            const {email, password,name, zip, city, street, restrictions} = {...userSignUp};
            const db = firebase.firestore(app);
            try{
                await app.auth().createUserWithEmailAndPassword(email,password).then(function(user){
                    // dispatch({type: USER_SIGNUP_SUCCESS}); // I dispatched some message.
                    let userDB = db.collection(`users`)
                    userDB.doc(user.user.uid).set({
                        address: {
                            "street":street,
                            "city":city,
                            "zip": zip,

                        },
                        email: email,
                        dietary_restrictions: restrictions,
                        name: name,
                        container_fee_paid: false
                    });

                    // console.log(user.user)

                });
                console.log(`created: ${email} : ${password}`)
                navigate("/")

            } catch (error){
                alert(error)
            }

        },[]
    );

    const {currentUser} =  useContext(AuthContext);
    if(currentUser) navigate('/');

    const handleRestriction = (e) => {
        const checkbox = e.target;
        let DRs = checkbox.checked===true ?
            restrictions.concat(checkbox.id)
            :
            restrictions.filter((res)=> res !== checkbox.id)

        setRestrictions(DRs)

    };

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
                        <div className="input-field col s12 m6">
                            <FormInput onChange={FormValidation} id="name" placeholder={"Your Name"} type="text" />
                        </div>
                        <div className="input-field col s12 m6">
                            <FormInput onChange={FormValidation} id="email" placeholder={"Email"} type="email"  className="validate"/>
                        </div>

                        <div className="input-field col s12 m6">
                            <FormInput onChange={handlePassword} id="password" placeholder={"Password"} type="password" />
                        </div>

                        <div className="input-field col s12 m6">
                            <FormInput onChange={handlePasswordVerify} id="password_val" placeholder={"Verify Password"} type="password" />
                        </div>

                        <div className="input-field col s12 m6">
                            <FormInput onChange={handleStreet} id="street" placeholder={"Number & Street"} />
                        </div>


                        <div className="input-field col s6 m3 ">
                            <FormInput onChange={handleCity} id="city" placeholder={"City"} />
                        </div>

                        <div className="input-field col s6 m3">
                            <FormInput onChange={handleZip} id="zip" placeholder={"Zip"} />
                        </div>

                        <div className="input-field col s12 m6 offset-m3">
                            <h5>Dietary Restrictions</h5>
                            <p>
                                <label>
                                    <input onClick={handleRestriction} id="gluten" type="checkbox"/>
                                    <span style={{marginRight:5}}>Gluten-Free</span>
                                </label>
                                <label>
                                    <input onClick={handleRestriction} id="nut" type="checkbox" />
                                    <span style={{marginRight:5}}>Nut-Free</span>
                                </label>
                                <label>
                                    <input onClick={handleRestriction} id="wheat" type="checkbox"/>
                                    <span style={{marginRight:5}}>Wheat-Free</span>
                                </label>
                                <label>
                                    <input onClick={handleRestriction} id="soy" type="checkbox"/>
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