import React, {useEffect} from 'react';

const UserOrders = ({orders}) => {
    useEffect(() => {
        if (orders) console.log(orders)
    }, [orders ]);

    return (
        <div>
            <h2>Orders</h2>
        </div>
    );
};

export default UserOrders;
