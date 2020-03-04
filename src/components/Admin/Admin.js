import React, {useContext,useState, useEffect} from 'react';
import styled from "styled-components";
import Sidebar from "../SideBar/SideBar";
import {AuthContext} from "../../Auth/Auth";
import {useRoutes, navigate} from "hookrouter";
import Routes from "../../Routes";
import Orders from "../Orders/Orders";
import Recipes from "../Recipes/Recipes";
import colors from "../../Colors";
import {createRecipesCollection} from "../../workers/createCollection";
import {Anchor} from "../shared_comps/Styles";

// createRecipesCollection()

const Admin = () => {
    const {currentUser,currentUserProfile, adminStuff, getDimensions} =  useContext( AuthContext)

    const [windowWidth, setWidth] = useState(getDimensions()["width"]);
    const [windowHeight, setHeight] = useState(getDimensions()["height"]);
    const routeResult = useRoutes(Routes);

    useEffect(()=>{

    },[windowWidth])
    useEffect(() => {
        // console.log(currentUser)
        // console.log(adminStuff)


    }, [currentUser,currentUserProfile,adminStuff]);

    const newRecipe = () => {
        console.log("add recipe")
    }

    return (
        <Dashboard className={""}>
            <div  className='container'>
                <Anchor href={"#orders"} name={"orders"}><h1> Orders</h1></Anchor>
                <Orders  width={windowWidth} orders={adminStuff ? adminStuff.orders : null}/>
            </div>

            <div className='container'>
                <Anchor href={"#recipes"} name={"recipes"}><h1> Recipes <a className="btn-floating btn-small waves-effect waves-light red"><i onClick={newRecipe}
                    className="material-icons">add</i></a>
                </h1></Anchor>
                <Recipes width={windowWidth} recipes={adminStuff ? adminStuff.recipes : null}/>
            </div>

            <div className='container'>
                <Anchor href={"#users"} name={"users"}><h1> Users</h1></Anchor>
            </div>
        </Dashboard>
    );
};

export default Admin;

const Dashboard = styled.div`
width: 100%;
color:${colors.bright};
grid-area: content;
display: flex;
overflow: auto;
flex-direction: column;
// border: ${colors.bright} 2px solid !important;
`;


