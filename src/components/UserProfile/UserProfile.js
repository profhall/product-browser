import React, {useEffect,useCallback,useContext, useState} from 'react';
import {AuthContext} from "../../Auth/Auth";
import styled from "styled-components";
import colors from "../../Colors";
import * as firebase from "firebase/app";
import app from "../../fbase";
import 'firebase/firestore';import {navigate} from "hookrouter";
function getWidth() {
    return window.innerWidth
}
const UserProfile = () => {
    const {currentUserProfile,setUserProfile,nextPage, prevPage} = useContext(AuthContext);
    const [userProf ,setUserProf] = useState({address:{}})

    const {name, phone, city, zip, street, dietary_restrictions,container_fee_paid} = !!userProf ? userProf : ""
    const [windowWidth, setWidth] = useState(getWidth);
    const handleResize =()=> {
        setWidth(getWidth());
    }
    window.addEventListener('resize', handleResize);

    const [userName, setUserName] = useState("")
    const [containerFeePaid, setcontainerFeePaid] = useState("")
    // const [city, setCity] = useState("")
    // const [zip, setZip] = useState("")
    // const [street, setStreet] = useState("")
    const [userPhone, setPhone] = useState("")
    const [restrictions, setRestrictions] = useState([]);

    useEffect(() => {

        console.log(userProf)
        // console.log(userProf)
        // if(currentUserProfile) {
        //     setUserName(name)
        //     setStreet(address.street)
        //     setZip(address.zip)
        //     setCity(address.city)
        //     setPhone(phone)
        //     setcontainerFeePaid(container_fee_paid)
        // }


    }, [userProf]);



    const FormValidation = (e) => {
        console.log("input id", e.target.id);
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (e.target.id === "phone"){

            userProf["phone"]= e.target.value;
            // setUserProfile(userProf["phone"])
            // console.log(userProf["phone"])

        }
        else if (e.target.id === "name"){

            userProf["name"]= e.target.value;

        }
        else if (e.target.id === "city"){userProf["address"]["city"]= e.target.value;}
        else if (e.target.id === "zip"){userProf["address"]["zip"]= e.target.value;}
        else if (e.target.id === "street"){userProf["address"]["street"]= e.target.value;}


        if (
            (
                userProf["name"] &&
                userProf["email"] &&
                userProf["address"]["city"] &&
                userProf["address"]["street"] &&
                userProf["address"]["zip"]
            )
            &&

            userProf["email"].match(mailformat) &&
            userProf["name"].length > 2 &&
            userProf["address"]["city"].length > 2 &&
            userProf["address"]["street"].length > 4 &&
            userProf["address"]["zip"].length === 5
        )
        {
            console.log(userProf['name'], userProf['email'])
        }

    };

    const handleSubmit = () =>
    {
        console.log(userProf)
        setUserProf(userProf)

    }

    // const handleSubmit = useCallback(
    //     async () => {
    //
    //         console.log(userName)
    //         // console.log(userName,address, phone, restrictions)
    //         const db = firebase.firestore(app);
    //         try{
    //             let userDB = db.collection(`users`)
    //             console.log(userName)
    //
    //             // userDB.doc(currentUserProfile.uid).set(currentUserProfile);
    //
    //             console.log(`updated: ${currentUserProfile.name}`)
    //             navigate("/profile")
    //
    //         } catch (error){
    //             alert(error)
    //         }
    //
    //     },[])

    const handleRestriction = (e) => {
        const checkbox = e.target;
        let DRs = checkbox.checked===true ?
            restrictions.concat(checkbox.id)
            :
            restrictions.filter((res)=> res !== checkbox.id)

        setRestrictions(DRs)

    };
    return (
        <UserProfileContainer  width={windowWidth}>
            {!!currentUserProfile ?
            <div className="row " style={{padding: "0 20px 0 20px"}}>

                <h4>
                    Update Your Account Information

                </h4>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <FormInput autoFocus id="name" type="text" placeholder={"Update Name Here"} onChange={FormValidation} value={name}/>
                            <Label>Name: {currentUserProfile.name}</Label>
                        </div>
                        <div className="input-field col s12 m6">
                            <FormInput autoFocus id="phone" type="text" placeholder={"Update Phone Here"} onChange={FormValidation} value={phone}/>
                            <Label htmlFor="phone">Phone: {currentUserProfile.phone}</Label>
                        </div>
                        <div className="input-field col s12">
                            <FormInput autoFocus id="street" type="text" placeholder={"Update Street Here"} onChange={FormValidation} value={street} />
                                <Label htmlFor="street">Street: {currentUserProfile.address.street}</Label>
                        </div>
                        <div className="input-field col s6">
                            <FormInput autoFocus id="city" type="text" placeholder={"Update City Here"} onChange={FormValidation} value={city} />
                                <Label htmlFor="city">City: {currentUserProfile.address.city}</Label>
                        </div>
                        <div className="input-field col s6">
                            <FormInput autoFocus id="zip" type="text" placeholder={"Update Zip Here"} onChange={FormValidation} value={zip} />
                            <Label htmlFor="zip">Zip: {currentUserProfile.address.zip}</Label>
                        </div>
                        <div className="input-field col s12 m4">
                            <FormInput  type="text" id="container_fee"  value={containerFeePaid ? "Yes":"No"  }/>
                            <Label htmlFor="container_fee">Container Fee Paid</Label>
                        </div>
                        <div className="input-field col s12 m8">
                            <h6>Dietary Restrictions</h6>
                            <p>
                                <Label>
                                    <input onClick={handleRestriction} checked={currentUserProfile.dietary_restrictions.includes("gluten")  } id="gluten" type="checkbox"/>
                                    <span style={{marginRight:5}}>Gluten-Free</span>
                                </Label>
                                <Label>
                                    <input onClick={handleRestriction} checked={currentUserProfile.dietary_restrictions.includes("nut")  } id="nut" type="checkbox" />
                                    <span style={{marginRight:5}}>Nut-Free</span>
                                </Label>
                                <Label>
                                    <input onClick={handleRestriction} id="wheat" checked={currentUserProfile.dietary_restrictions.includes("wheat")? true:false  } type="checkbox"/>
                                    <span style={{marginRight:5}}>Wheat-Free</span>
                                </Label>
                                <Label>
                                    <input onClick={handleRestriction} checked={currentUserProfile.dietary_restrictions.includes("soy")? true:false  } id="soy" type="checkbox"/>
                                    <span>Soy-Free</span>
                                </Label>
                            </p>
                        </div>

                    </div>

                </form>
            </div>
                : <h3>User Loading...</h3>}
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
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  grid-area: content;
  justify-content: space-evenly;
  padding-top:${props=> props.width < 650 ? "100px": ""  };
`;


const Label = styled.span`
font-weight: bolder;
font-size: larger;
margin: 0;
padding: 0;
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