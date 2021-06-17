import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height:20px;
    background-color: #e6f0f3;
    color:#44c7df;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:2px 10px;
    border-radius:2px;
    margin-right:8px;
    margin-top:2px;
    
`;

interface IMoreGet{
    text: string;
}

export const MoreGet: FC<IMoreGet> = (props) =>{
    return(
        <Wrapper>
            {props.text}
        </Wrapper>
    );
};

export default MoreGet;