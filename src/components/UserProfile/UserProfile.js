import React, {useEffect,useCallback,useContext, useState} from 'react';
import {AuthContext} from "../../Auth/Auth";
import styled from "styled-components";
import colors from "../../Colors";
import * as firebase from "firebase/app";
import app from "../../fbase";
import 'firebase/firestore';import {navigate} from "hookrouter";

const UserProfile = () => {
    const {currentUserProfile,setUserProfile,nextPage, prevPage} = useContext(AuthContext);
    const {name, phone, address, dietary_restrictions,container_fee_paid} = currentUserProfile
    const [userName, setUserName] = useState("")
    const [containerFeePaid, setcontainerFeePaid] = useState("")
    const [city, setCity] = useState("")
    const [zip, setZip] = useState("")
    const [street, setStreet] = useState("")
    const [userPhone, setPhone] = useState("")
    const [restrictions, setRestrictions] = useState([]);

    useEffect(() => {

        console.log(currentUserProfile)
        console.log(userName)


    }, [ userName, zip, city, phone, street, restrictions]);

    useEffect(() => {
    }, [ ]);





    const handleSubmit = useCallback(
        async () => {

            // let address = {"street":street,"zip":zip, "city":city}
            // console.log(userName,address, phone, restrictions)
            // console.log(userName,address, phone, restrictions)
            const db = firebase.firestore(app);
            try{
                let userDB = db.collection(`users`)
                console.log(userName)

                userDB.doc(currentUserProfile.uid).set(currentUserProfile);

                console.log(`updated: ${currentUserProfile.name}`)
                navigate("/profile")

            } catch (error){
                alert(error)
            }

        },[])

    const handleRestriction = (e) => {
        const checkbox = e.target;
        let DRs = checkbox.checked===true ?
            restrictions.concat(checkbox.id)
            :
            restrictions.filter((res)=> res !== checkbox.id)

        setRestrictions(DRs)

    };
    return (
        <UserProfileContainer >
            <h4>
               Update Your Account Information

            </h4>

            <div className="row container">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <FormInput autoFocus id="name" type="text" onChange={(e) => setUserName(e.target.value)} value={`${!!currentUserProfile.name?name:null}`} className="validate"/>
                                <Label htmlFor="name">Name</Label>
                        </div>
                        <div className="input-field col s12 m6">
                            <FormInput autoFocus id="phone" type="text" onChange={(e) => setPhone(e.target.value)} value={`${!!currentUserProfile.name?phone:null}`}/>
                            <Label htmlFor="phone">Phone</Label>
                        </div>
                        <div className="input-field col s12">
                            <FormInput autoFocus id="street" type="text" onChange={(e) => setStreet(e.target.value)} value={`${!!currentUserProfile.name?address.street:null}`} />
                                <Label htmlFor="street">Street</Label>
                        </div>
                        <div className="input-field col s12 m6">
                            <FormInput autoFocus id="city" type="text" onChange={(e) => setCity(e.target.value)} value={`${!!currentUserProfile.name?address.city:null}`} />
                                <Label htmlFor="city">City</Label>
                        </div>
                        <div className="input-field col s12 m6">
                            <FormInput autoFocus id="zip" type="text" onChange={(e) => setZip(e.target.value)} value={`${!!currentUserProfile.name?address.zip:null}`} />
                            <Label htmlFor="zip">Zip</Label>
                        </div>
                        <div className="input-field col s12 m6">
                            <FormInput autoFocus type="text" id="container_fee"  value={container_fee_paid? "Yes":"No"  }/>
                            <Label htmlFor="container_fee">Container Fee Paid</Label>
                        </div>
                        <div className="input-field col s12">
                            <h5>Dietary Restrictions</h5>
                            <p>
                                <Label>
                                    <input onClick={handleRestriction} checked={dietary_restrictions.includes("gluten")? true:false  }  id="gluten" type="checkbox"/>
                                    <span style={{marginRight:5}}>Gluten-Free</span>
                                </Label>
                                <Label>
                                    <input onClick={handleRestriction}  checked={dietary_restrictions.includes("nut")? true:false  } id="nut" type="checkbox" />
                                    <span style={{marginRight:5}}>Nut-Free</span>
                                </Label>
                                <Label>
                                    <input onClick={handleRestriction} id="wheat" checked={dietary_restrictions.includes("wheat")? true:false  } type="checkbox"/>
                                    <span style={{marginRight:5}}>Wheat-Free</span>
                                </Label>
                                <Label>
                                    <input onClick={handleRestriction} checked={dietary_restrictions.includes("soy")? true:false  } id="soy" type="checkbox"/>
                                    <span>Soy-Free</span>
                                </Label>
                            </p>
                        </div>

                    </div>

                </form>
            </div>
            <ButtonContainer className={"row center"}>
                <Button className={"btn-large col  s12"} onClick={handleSubmit}>Update Profile</Button>
                {/*<Button className={"btn-large col  m5"} onClick={handleSubmit }>Submit Order</Button>*/}

            </ButtonContainer>
        </UserProfileContainer>
    );
};

export default UserProfile;
const UserProfileContainer = styled.div`
  color: white;
  margin:auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width:95vw;
  grid-area: content;
  align-items: center;
  justify-self: center;
  justify-content: space-evenly;
  padding-top: 10px;
`;


const Label = styled.label`
font-weight: bolder;
font-size:x-large !important;
color:${colors.bright} !important;

`;
const FormInput  = styled.input`
color:white!important;

`;


/*
Buttons Styling
 */

const Button = styled.button`
    color:white;
    margin: 7px !important;
    height: ${props=> props.height ? props.height:" "};
    background-color: ${colors.bright};
    &:hover {
      background-color: ${colors.secondaryTwo};
    }
`

const ButtonContainer = styled.div`
  grid-area: button;  
  display: flex;
  width: 65%;
  justify-content:center;

`;