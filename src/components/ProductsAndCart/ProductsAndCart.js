import React, {useState} from 'react';
import styled from "styled-components";
import Product from "../Product/Product";

const stuff =
    [
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },{
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },{
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        },
        {
            "name": "Quinoa & Bean Bowl with BBQ Jerked Jackfruit",
            "sides": ["Fried Plantains", "Salad"],
            "description": "...",
            "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg"
        }
    ]



const Main = () => {
    const handleResize = ()=>{
        console.log("window resize")
        setWidth(getWidth());
    };
    function getWidth() {
        return window.innerWidth
    }

    const [windowWidth, setWidth] = useState(getWidth);
    const [chosenItems, setFavs] = useState([]);


    console.log(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const addToFavs=(item)=> {
        // chosenItems.push(<li>{item.name}</li>)
        setFavs(chosenItems.concat(<li>{item.name}</li>))
    };



    const productList = stuff.map((item) => {
            return  <Product addToFavs={()=>addToFavs(item)} windowWidth={windowWidth} item={item}/>
        }
    );

    return (
        <TheMainContent width={windowWidth}>
            <ProductsHeader>
                <h2>Meals</h2>
                <p>This is where the instructions will go...</p>
            </ProductsHeader>
            <Products width={windowWidth}  >
                {productList}
            </Products>
            <Favs>
                <h2>
                    Your Picks
                </h2>
                <ul>
                {chosenItems}
                </ul>
            </Favs>
        </TheMainContent>
    );
};

const TheMainContent = styled.div`
  display: grid;
  overflow: scroll;
  grid-template-rows:${props => props.width > 749 ? "'15% auto'" : "'100%'"};
  grid-template-areas:${props => props.width > 749 ? "'pheader cart''products cart''products cart'" : "'products'"};
  grid-gap: 1% ;
  height: 90%;
  grid-template-columns: ${props => {
      return(props.width > 749 ? "65% 35%" : "100%")
      }
    };
`;

const ProductsHeader = styled.div`
  grid-area: pheader;
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
`;

export default Main;
