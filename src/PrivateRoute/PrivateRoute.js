import React, {useContext} from "react"
import {AuthContext} from "../Auth/Auth";


const PrivateRoute = ({component, ...rest}) => {
    const {currentUser} = useContext(AuthContext)

    return (
        !!currentUser ?
            <div>You Must Login </div>

            :
            <div>You Must Login </div>
    );
};

export default PrivateRoute;
