import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';
import { UserShortcut } from '../../../../styledHelpers/Components';
import  networkImg  from '../../../../icons/people.svg';
import publicationButtonImg  from '../../../../icons/user-plus.svg';

const NetworkImage = styled.img`
    margin-right:10px;
    width:25px;
`;

const AddNetwork = styled.div`
    width:25px;
    height:20px;
    border: 1px solid ${Colors.darkBlue};
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 1px 1px 1px ${Colors.lightGray};
    right:0px;
    &:hover{
        background-color: ${Colors.darkBlue};
    }
`;

const LeftText = styled.div`
    width:180px;
    display:flex;
    align-items:center;
`;

export const UserNetwork: FC = () => {
    return(
        <UserShortcut>
            <LeftText>
            <NetworkImage src={networkImg}/>
            Your network
            </LeftText>
            <AddNetwork>
                <img src={publicationButtonImg}/>
            </AddNetwork>
        </UserShortcut>
    );
};

export default UserNetwork;