import React, {useState} from 'react';
import styled from "styled-components";
import Product from "../Product/Product";
import emailjs from 'emailjs-com';

const stuff =
    [
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "A tasty bowl combining jerked jackfruit quinoa and red beans cooked in coconut milk. We use spices and herbs to create a Caribbean taste.",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg",
            "type": "main",
            "ingredients": ["scallion","onion","coconut milk", "red beans", "jackfruit", "plantains", "seasonings & herbs"]
        },
        {
            "name": "Jackfruit Wraps",
            "sides": ["Fried Plantains", "Salad"],
            "description": "These vegan burritos are filled with red beans, brown rice, cilantro, tomato, jackfruit seasoned with mexican spices with avocado spread.",
            "photo": "http://www.veganricha.com/wp-content/uploads/2016/05/jamaican-jerk-jackfruit-caribbean-black-bean-tacos-4875.jpg",
            "ingredients": [],
            "type": "main"
        },
        {
            "name": "Lentil Spinach BurritoS",
            "sides": ["Fried Plantains", "Salad"],
            "description": "These vegan burritos are filled with red beans, brown rice, cilantro, jerked jackfruit, and sauteed mixed veggies",
            "photo": "https://www.thegardengrazer.com/wp-content/uploads/2012/03/lentilspinach-burrito.webp",
            "ingredients": [],
            "type": "main"
        },
        {
            "name": "Jackfruit Stir Fry",
            "sides": ["Sesame Roasted Sweet Potatoes", "Roasted Brussel Brussels Sprouts"],
            "description": "A little simple recipe to start off the weekend, Jackfruit Stir Fry. Everyone loves a good stir fry and even though its a pretty simple dish to make there are a few things you want to keep in mind before making one.",
            "photo": "https://i2.wp.com/www.aboutthatfood.com/wp-content/uploads/2017/05/Jackfruit-Stir-Fry-4.jpg?zoom=2&resize=1034%2C770&ssl=1",
            "type": "main",
            "ingredients": []
        },
        {
            "name": "Jackfruit Crab Cakes with Lemon Dill Sauce",
            "sides": ["Sauteed Veggies", "Cranberry and Cilantro Quinoa Salad" ],
            "description": "Our version of a classic seafood dish made with the versatile Jackfruit. These cakes come with Sauteed veggies and a cranberry cilantro quinoa salad ",
            "ingredients": [],
            "photo": "https://dizzybusyandhungry.com/wp-content/uploads/2018/09/crab-cakes-3862-2.jpg",
            "type": "main"
        },
        {
            "name": "Jambalaya",
            "sides": ["Cornbread", "Southern Style Collard Greens"],
            "description": "A super nutritious recipe containing a great amount of plant protein, carbohydrates, this Louisiana classic will surely fill you up. Served with Cornbread and Southern Style Collard Greens   ",
            "ingredients": [],
            "photo": "https://simpleveganblog.com/wp-content/uploads/2018/09/Simple-vegan-jambalaya-3.jpg",
            "type": "main"
        },
        {
            "name": "Carolina Style Vegan 'Pulled BBQ' and Coleslaw",
            "sides": ["Chickpea Baked BBQ Beans","Roasted Sweet Potatoes" ],
            "description": "For the barbecue lovers we have a Carolina Classic! Served with Chickpea Baked BBQ Beans & Roasted Sweet Potatoes ",
            "ingredients": [],
            "photo": "https://i.pinimg.com/originals/d7/c7/53/d7c753890cf30de32505bb4e8835afbf.jpg",
            "type": "main"
        },
        {
            "name": "The Holiday Dinner",
            "sides": [
                "Cornbread Dressing", "Jackfruit Turkey", "Rice a& Gravy", "Cranberry Sauce"
            ],
            "description": "For a limited time only, the holiday dinner comes with jackfruit in the style of turkey with brown rice and gravy, cornbread dressing and squash casserole.",
            "ingredients": [],
            "photo": "https://karmabaker.com/app/uploads/2017/11/B7B893BE-199F-41DF-8010-FEB4F906EC76-600x600.jpeg",
            "type": "main"
        },
        {
            "name": "Caribbean Curry Jackfruit",
            "sides": ["Brown Rice & Beans", "Sauteed Greens"],
            "description": "A Caribbean Classic prepared with jackfruit instead of traditional meat. This is served with brown rice and beans & sauteed cabbage",
            "ingredients": [],
            "photo": "https://noeggsorham.files.wordpress.com/2017/09/img_2469.jpg?w=1720",
            "type": "main"
        },
        {
            "name": "Quinoa & Lentil Stuffed Peppers",
            "sides": ["Sauteed Sweet Potatoes", "Roasted Brussel Sprouts"],
            "description": "Bell peppers packed full of a flavorful quinoa, lentil vegetable mixture! This recipe is gluten-free, full of fiber and protein and big on flavor! It's served with Sauteed Sweet Potatoes & Roasted Brussel Sprouts,",
            "ingredients": [],
            "photo": "http://ripe-life.com/wp-content/uploads/2015/08/lentilandquinoastuffedpeppers7.jpg"
        },
        {
            "name": "Lemon Herb Couscous Salad",
            "description": null,
            "url": "https://www.bbcgoodfood.com/recipes/2303651/sweet-potato-salad",
            "photo": "https://www.inspiredtaste.net/wp-content/uploads/2017/12/Easy-Couscous-Salad-Recipe-2-1200.jpg"
        },
        {
            "name": "Black Bean Sweet Potato Salad",
            "description": null,
            "photo": "https://32lxcujgg9-flywheel.netdna-ssl.com/wp-content/uploads/2011/06/black_bean_salad_sweet_potatoes-10.jpg"
        },
        {
            "name": "Kale Apple Salad with Lemon Vinaigrette",
            "description": null,
            "photo": "https://www.spendwithpennies.com/wp-content/uploads/2018/07/massaged-kale-salad-recipe-1515.jpg"
        },
        {
            "name": "Mixed Green Salad with Sesame-Ginger Vinaigrette",
            "description": null,
            "photo": "https://irepo.primecp.com/2015/06/224093/Creamy-Italian-Dressing_ExtraLarge1000_ID-1038789.jpg?v=1038789"
        },
        {
            "name": "Cranberry and Cilantro Quinoa Salad" ,
            "description": null,
            "photo": "http://images.brandpointcontent.s3.amazonaws.com/1034393639_wide.jpg"
        }

    ];



const Main = () => {


    const [windowWidth, setWidth] = useState(getWidth);
    const [chosenItems, setFavs] = useState( []);
    const [userinfo, setUser] = useState({"name":"theName","email":"theEmail"});

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
        console.log("input changed", e.target.value)
        console.log("input id", e.target.id)
        if (e.target.id === "uName"){
            userinfo["name"] = e.target.value
        }
        else if (e.target.id === "uEmail"){
            userinfo["email"]= e.target.value
        }
        else{
            userinfo["message"]= e.target.value
        }
        setUser(userinfo)


    }

    const productList = stuff.map((item) => {
            return  <Product addToFavs={()=>addToFavs(item)} windowWidth={windowWidth} item={item}/>
        }
    );

    return (
        <TheMainContent width={windowWidth}>
            <ProductsHeader>
                <p>
                    Welcome to The Tasty Plant Based Kitchen, thanks for stopping by!
                    Below are meals for you to choose that we will use as a reference collection when preparing your meals.
                    Please choose at least one salad, all meal orders come with a 16oz salad of your choice. <br/>
                    <b>Disclaimer: We do not own these photos, they are accurate depictions of the meals we prepare, these photos will be updated overtime.</b>
                </p>
                <input id="uName" placeholder={"Your Name (required)"} onChange={handleInputChange}/>
                <input id="uEmail" placeholder={"Your Email (required)"}  onChange={handleInputChange}/>
                <MessageArea id="uMessage"  width={windowWidth} onChange={handleInputChange} placeholder={"Type a message here if you would like to give any more info about yourself, and you're here."}/>
                <SubmitFavsBuuton  width={windowWidth} className={"btn"} onClick={()=>emailSelection(chosenItems)}>Submit</SubmitFavsBuuton>

            </ProductsHeader>

            <Products width={windowWidth}  >
                {productList}
            </Products>

            <Favs>
                <FavHeader>
                    Your Picks <span>{chosenItems.length}</span>
                </FavHeader>
                <FavList>
                    {chosenItems.map((fav)=>
                        <Fav onClick={()=>toggleFav(fav)}>
                            {fav}
                            <i className="tiny material-icons">clear</i>

                        </Fav>
                    )}
                </FavList>
            </Favs>
        </TheMainContent>
    );
};

const TheMainContent = styled.div`
  display: grid;
  overflow: scroll;
  grid-template-rows:${props => props.width > 850 ? "'15% auto auto'" : "'10% 75% 15%'"};
  grid-template-areas:${props => props.width > 850 ? "'pheader cart''products cart''products cart'" : "'pheader' 'products' 'cart'"};
  //grid-gap: .5% ;
  height: 90%;
  
  padding: 0 7px;
  grid-template-columns: ${props => {
      return(props.width > 850 ? "85% 15%" : "100%")
      }
    };
`;


const MessageArea = styled.textarea`
  width:${props => props.width > 850 ? '77%' : '90%'};
  height: ${props => props.width > 850 ? '75px' : '75px'};;
`;
const ProductsHeader = styled.div`
  grid-area: pheader;
  padding: 0 6em 1em 6em;
  height: 100% ;
`;
const SubmitFavsBuuton = styled.button`
  width:${props => props.width > 850 ? '20%' : '80%'};
  //height:50px;
  float: ${props => props.width > 850 ? 'right' : 'center'};;
  
  
`;

const FavHeader = styled.h5`
  flex-grow: 1 ;
`;
const Fav = styled.li`
  width: 100%;
  font-size: 1em;
  font-weight: bold;
`;

const FavList = styled.ul`
  margin: 0;
  padding:0;
  flex-grow: 14 ;
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
  //border: 1px solid orangered;
  grid-area: cart;
  flex-direction:column ;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;

`;

export default Main;
