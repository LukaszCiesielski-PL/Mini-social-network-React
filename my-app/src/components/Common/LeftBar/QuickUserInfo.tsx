import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import { UserNetwork } from './UserShortcut/UserNetwork';
import { UserPublications } from './UserShortcut/UserPublications';

const UserBlock = styled.div`
    width:280px;
    min-height: 250px;
    max-height: 250px;
    background-color: ${Colors.white};
    margin-top:25px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px ${Colors.lightGray};
`;

const AboutUserInfo = styled.div`
    width:280px;
    height:150px;
    border-bottom:1px solid ${Colors.lightGray};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const UserAvatar = styled.img`
    width:65px;
    height:65px;
    border-radius: 60px;
    box-shadow: 0px 0px 5px ${Colors.black};
    margin-top:10px;
`;

const UserName = styled.span`
    margin-top:20px;
    font-weight: 600;
    color:${Colors.blue}; 
`;

const UserCompany = styled.span`
    color:${Colors.lightGray};
    font-size: ${fontSize[14]};
    margin: 10px 0px;
`;

const UserShortcuts = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    height:70px;
    padding:5px;
`;

interface ICurrentUser{
    userName: string;
    userCompany: string;
    userAvatar: string; 
}

export const QuickUserInfo: FC<ICurrentUser> = props => {
    return(
        <UserBlock>
            <AboutUserInfo>
                <UserAvatar src={props.userAvatar}/>
                <UserName>{props.userName}</UserName>
                <UserCompany>{props.userCompany}</UserCompany>
            </AboutUserInfo>
            <UserShortcuts>
                <UserNetwork />
                <UserPublications />
            </UserShortcuts>
        </UserBlock>
    );
};

export default QuickUserInfo;