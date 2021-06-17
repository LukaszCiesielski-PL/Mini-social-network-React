import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import pen from '../../icons/pen.svg';
import UserInfoName from '../Profile/UserData/UserInfoName'
import MoreUserData from '../Profile/MoreUserData/MoreUserData'
import Amount from './PanelAmount/AmountGet';
import Review from './Review/Review'
import PanelInfo from './PanelInfo/PanelInfo';
import Proposal from './Proposal/Proposal'

const Wrapper = styled.div`
    width:1000px;
    background-color:${Colors.white};
    position:relative;
`;

const EditBtn = styled.button`
    width:40px;
    height:40px;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:transparent;
    outline:none;
    border:none;
    cursor: pointer;
    right:15px;
    top:140px;
`;

const ButtonImg = styled.img`
    width:20px;
    height:20px;
`;

export const Profile: FC = () =>{

    const [isEdit, isEditHandler] = useState(false);
    const handleSubmit = () => { isEditHandler(!isEdit) }   

    return(
        <Wrapper>
            <UserInfoName></UserInfoName>
            <EditBtn onClick={() => handleSubmit()}><ButtonImg src={pen}/></EditBtn>
            <MoreUserData  isEditable={isEdit}></MoreUserData>
            <PanelInfo isEditable={isEdit}></PanelInfo>
            <Proposal isEditable={isEdit}></Proposal>
            <Review isEditable={isEdit}></Review>
            <Amount isEditable={isEdit}></Amount>
        </Wrapper>
    );
};

export default Profile;