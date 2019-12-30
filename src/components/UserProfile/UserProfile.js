import React, {useContext} from 'react';
import {AuthContext} from "../../Auth/Auth";
import styled from "styled-components";

const UserProfile = () => {
    const {currentUserProfile,nextPage, prevPage} = useContext(AuthContext)

    return (
        <UserProfileContainer>
            {currentUserProfile.name}
            {currentUserProfile.email}
            {currentUserProfile.dietary_restrictions}
            {currentUserProfile.container_fee_paid}
            {currentUserProfile.name}
        </UserProfileContainer>
    );
};

export default UserProfile;
const UserProfileContainer = styled.div`
  flex-direction: column;
  height: 100%;
  width: 85%;
  max-width:95vw;
  grid-area: content;
  align-items: center;
  justify-self: center;
  padding-top: 10px;
`;