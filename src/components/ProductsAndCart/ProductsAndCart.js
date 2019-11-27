import React, {useState} from 'react';
import styled from "styled-components";
import Product from "../Product/Product";
import emailjs from 'emailjs-com';
import {meals} from '../../data'

const stuff = meals



const Main = () => {


    const [windowWidth, setWidth] = useState(getWidth);
    const [chosenItems, setFavs] = useState( []);
    const [userinfo, setUser] = useState({"name":"theName","email":"theEmail"});
    const [seeInfo, showInfo] = useState(true);
    const [siderOpen, openSider] = useState(windowWidth < 850 ? false : true);
    const [infoValidated, validateInfo] = useState(false);

    const handleResize = ()=>{
        console.log("window resize")
        setWidth(getWidth());
    };
    window.addEventListener('resize', handleResize);

    function getWidth() {
        return window.innerWidth
    }

    const addToFavs=(item)=> {
        // chosenItems.push(<li>{item.name}</li>)

        let items = []
        chosenItems.includes(item.name) ? items = chosenItems : items = chosenItems.concat(item.name);
        console.log(items)
        setFavs(items)
    };
    // console.log("chosenItems: ", chosenItems)

    const toggleFav= (fav) =>{

        setFavs(chosenItems.filter(item => item !== fav));
    }


    const emailSelection = (chosenItems) => {

        const Info = userinfo

        const theSubmitInfo = {"chosen_items":chosenItems,"name":Info["name"],"email":Info["email"]}
        Info['message'] ? theSubmitInfo['message'] = Info['message'] : Info['message'] = null;
        console.log("favs submitted", Info)


        emailjs.send('gmail', 'template_VM9IlcIJ', theSubmitInfo, "user_ii2HeUxvMKEfOyePRTfc8")
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Thank you! We will reach out to you soon to discuss the next steps")

            }, function(error) {
                console.log('FAILED...', error);
            });

    }
    const handleInputChange = (e) => {
        let emailVal = null
        let nameVal = null
        // console.log("input changed", e.target.value)
        // console.log("input id", e.target.id)
        console.log(userinfo["email"], userinfo["name"])
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (e.target.id === "uName"){
            userinfo["name"] = e.target.value;
            e.target.value.length < 2 ? nameVal = false : nameVal = true


        }
        else if (e.target.id === "uEmail"){

            userinfo["email"]= e.target.value;

            e.target.value.match(mailformat)  ? emailVal = false : emailVal = true
        }
        else{
            userinfo["message"]= e.target.value
        }
        setUser(userinfo)

        if (userinfo["name"].length >= 2 && userinfo["email"].match(mailformat) ) {
            console.log(userinfo['name'], nameVal, userinfo['email'], emailVal)
            validateInfo(true)
        }
        else {validateInfo(false) }


    }

    const productList = stuff.map((item) => {
            return  <Product addToFavs={()=>addToFavs(item)} windowWidth={windowWidth} item={item}/>
        }
    );

    const toggleInfo=()=>{
        console.log("toggle info")
        showInfo(!seeInfo)
    }
    const toggleSider=()=>{
        console.log("toggle sider")
        openSider(!siderOpen)
    }



    return (
        <TheMainContent width={windowWidth}>
            <ExitIcon seeInfo={seeInfo} onClick={()=>toggleInfo()} >
                {seeInfo ? 'close' : 'see instructions'}
            </ExitIcon>

            {seeInfo ?  <ProductsHeader>
                <PHeaderInfo>

                    Welcome to The Tasty Plant Based Kitchen, thanks for stopping by!
                    Below is a collection of meals for you to choose from. Once you pick your meals don't forget to enter the necessary information (name and email).
                     The meals you choose will show up onn the left sidebar, simple tap or click a meal to remove it from your list. Once you submit,
                    you will you will recieve an email from The Tasty Plant Based Kitchen to get you started with a plan.<br/>
                    We will use your selected meals as a reference point for creating your meals, of course we will run everything by you first!
                    <br/>
                    <b>Note: </b>Please choose at least one salad, all meal orders come with a 16oz salad of your choice. <br/>


                    <b>Disclaimer:</b> We do not own these photos, they are accurate depictions of the meals we prepare, these photos will be updated overtime.
                </PHeaderInfo>
                <input id="uName" placeholder={"Your Name (required)"} onChange={handleInputChange}/>
                <input id="uEmail"  type="email" pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/" placeholder={"Your Email (required)"}  onChange={handleInputChange}/>
                <MessageArea id="uMessage"  width={windowWidth} onChange={handleInputChange} placeholder={"Type a message here if you would like to give any more info about yourself, and you're here."}/>
                <SubmitFavsBuuton   width={windowWidth} className={`btn ${infoValidated?"":"disabled"}`} onClick={()=>emailSelection(chosenItems)}>Submit</SubmitFavsBuuton>

            </ProductsHeader>
                :null}

            <Products width={windowWidth}  >
                {productList}
            </Products>

            <Favs isOpen={siderOpen} width={windowWidth}>
                {windowWidth < 851 ? <ToggleSiderButton isOpen={siderOpen} onClick={()=>toggleSider()} className="small material-icons">{siderOpen ? "arrow_backward" : "arrow_forward"}</ToggleSiderButton> : null}

                {chosenItems.length > 0 && (windowWidth > 850 || siderOpen) ?
                    <FavHeader>
                        <span>{chosenItems.length} </span> {chosenItems.length !==1 ? "Meals Selected" : "Meal Selected"}
                        <br/>
                        <span style={{fontSize:12}}>{chosenItems.length > 0 && siderOpen ?"click meal to remove":null}</span>
                    </FavHeader>
                    :
                    <h5>{chosenItems.length > 0 ? chosenItems.length : null}</h5>}
                {siderOpen ? <FavList>
                    {chosenItems.map((fav)=>
                        <Fav onClick={()=>toggleFav(fav)}>
                            {fav}
                            {/*<DelFav className="tiny material-icons">clear</DelFav>*/}
                        </Fav>
                    )}

                    <br/>

                </FavList>:null}

            </Favs>
        </TheMainContent>
    );
};

const TheMainContent = styled.div`
  display: grid;
  overflow: scroll;
  grid-template-rows:${props => props.width > 850 ? "'15% auto auto'" : "'10% 75% 15%'"};
  grid-template-areas:${props => props.width > 850 ? 
    "'cart pheader'" +
    "'cart products'" +
    "'cart products'" 
    : 
    "'cart pheader pheader' " +
    "'cart products products' " +
    "'cart products products'"
};
  //grid-gap: .5% ;
  height: 90%;
  
  grid-template-columns: ${props => {
      return(props.width > 850 ? "15% 85%" : "50px auto auto")
      }
    };
`;


const ToggleSiderButton = styled.i`
  display: flex;
  justify-content: center;
  background-color: darkblue;
  width: 100%;
  //margin-bottom: auto;
  grid-area: toggle;
`;


const PHeaderInfo = styled.p`
max-height: 70%;
overflow: scroll;
`;


const ExitIcon = styled.span`
position: absolute;
font-size: 14px;
padding: 1px 3px;
top: 11%;
right: 2em;
background-color: ${props => props.seeInfo ? 'red' : 'green'};
border-radius: 50px;
`;

const MessageArea = styled.textarea`
  width:${props => props.width > 850 ? '77%' : '90%'};
  height: ${props => props.width > 850 ? '75px' : '75px'};
`;
const ProductsHeader = styled.div`
  grid-area: pheader;
  padding: .5em 1em;
  height: 100% ;
  
`;
const SubmitFavsBuuton = styled.button`
  width:${props => props.width > 850 ? '20%' : '80%'};
  //height:50px;
  float: ${props => props.width > 850 ? 'right' : 'center'};
  
  
`;

const FavHeader = styled.h5`
  grid-area: head;
   width: 100%;
=`;
const Fav = styled.li`
  width: 100%;
  font-size: 1em;
  font-weight: bold;
  margin: 12px 0;

`;

const FavList = styled.ol`
  margin: 0;
  text-align: left;
  grid-area: list;
  width: 100%;
`;

const Products = styled.div`
  //border: 1px solid orangered;
  grid-area: products;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Favs = styled.div`
  background-color: #333333 ;
  color: white ;
  grid-area: cart;
  grid-column: ${props => props.isOpen && props.width < 850 ? '1 / span 2' : ""};
  z-index: 2;
  flex-direction:column ;
  display: grid;
  grid-template-areas: 'toggle''head' 'list';
  grid-template-rows: 5% 15% auto;
  width: 100%;
  //padding-left: 25px;

`;

export default Main;
