import React from 'react';
import {meals} from "../../data";
import colors from "../../Colors";
import {RecipeModal} from "../shared_comps/Modals";

const OrderList = ({orders}) => {
    const todaysDate = new Date();

    return (
        <ul className="collapsible popout">
            {orders ? orders.sort((order) => Date.parse(todaysDate) - Date.parse(order.deliver_date)).map((order,i) => {
                var d = new Date(order.order_time_stamp);
                const DeliveryDate = Date.parse(order.deliver_date);
                const badge_color = DeliveryDate > Date.parse(todaysDate) ? "red" : "green";
                const delivered = DeliveryDate <= Date.parse(todaysDate);

                return(
                    <li key={i}>

                        <div className={`collapsible-header `}><i className="material-icons">schedule</i>

                            <h5> <b>{order.meal_count} meals on {order.deliver_date}</b></h5>

                            <span className={`badge black-text ${badge_color}`}>{delivered ? "":"Not"} Fulfilled</span>

                        </div>
                        <div className="collapsible-body row center white">

                            <h5>Address: {order.address.street} {order.address.city}, {order.address.zip}</h5>
                            <h6>Delivery Date: {order.deliver_date}</h6>
                            <h6>Charges: ${order.price}.00</h6>
                            <p>Dietary Restrictions: {order.restrictions}</p>
                            <p>Order Date: { d.toDateString()}</p>

                            {
                                order.meals.map((meal,i)=> <a href="#!">
                                    <div key={i} className="card" >
                                        <div className="col s12 m4 l3 ">
                                            <div className="card-image" >
                                                <img alt={meal} style={{maxHeight: 150, objectFit:"cover"}} src={meals.filter((m)=> m.name === meal  )[0].photo}/>

                                            </div>
                                            <div className="card-content white " style={{padding:12}} >
                                                <p style={{color:colors.bright}}>{meal}</p>
                                                <RecipeModal item={meal} trigger={<h6>Recipe</h6>}/>
                                            </div>
                                        </div>
                                    </div>
                                </a>)
                            }

                        </div>
                    </li>
                )})
                : null}
        </ul>
    );
};

export default OrderList;
