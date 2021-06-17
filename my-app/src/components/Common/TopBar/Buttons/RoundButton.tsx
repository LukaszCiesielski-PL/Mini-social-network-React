import React,{ FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';
import {CircleNotify} from '../../../../styledHelpers/Components';

interface NotifyButton{
    image: string;
    altText: string;
    notifyCount: string;
};

const NotifyCount = styled.div`
    min-width:15px;
    width:auto;
    height:15px;
    border-radius: 15px;
    background-color: ${Colors.blue};
    color: ${Colors.white};
    font-size:12px;
    position: absolute;
    top:2px;
    right:0px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
`;



export const RoundButton: FC<NotifyButton> = (props) =>{
    return(
        <CircleNotify>
            <img src={props.image} alt={props.altText}/>
            <NotifyCount>{props.notifyCount}</NotifyCount>
        </CircleNotify>
    );
};

export default RoundButton;