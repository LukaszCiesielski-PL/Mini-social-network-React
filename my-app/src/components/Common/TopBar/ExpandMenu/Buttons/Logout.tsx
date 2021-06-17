import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../../styledHelpers/Colors';
import logoutImg from '../../../../../icons/logout.svg';

const LogoutButton = styled.button`
    width:100%;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:transparent;
    outline:none;
    border:none;
    border-top:1px solid ${Colors.lightGray};
    cursor: pointer;
`;
export const Logout: FC = props => {
    return(
        <LogoutButton>
            <img src={logoutImg}></img>
            Logout
        </LogoutButton>
    );
};

export default Logout;