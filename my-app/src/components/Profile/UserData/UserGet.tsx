
import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    height:15px;
    margin-right:20px;
    display:flex;
    cursor: pointer;
    
`;

const Img = styled.img`
    width:12px;
    height:12px;
    margin-right:5px;
`;

const Text = styled.span`
    font-size: ${fontSize[16]};
    font-weight:600;
    color: ${Colors.blue};
`;

interface IUserGet{
    icon:string;
    text:string;
}

export const UserGet: FC<IUserGet> = (props) =>{
    return(
        <Wrapper>
            <Img src={props.icon} alt="Icon"/>
            <Text>{props.text}</Text>
        </Wrapper>
    );
};
