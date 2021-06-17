import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import Cases from './Cases';


const Wrapper = styled.div`
    width:1000px;
    padding:10px;
    box-sizing:border-box;
    border-bottom: 1px solid ${Colors.lightBackground};
    display:flex;
    flex-direction:column;
`;

const Title = styled.div`
    color:${Colors.blue};
    font-size:${fontSize[18]};
    margin-top:5px;
    margin-left:5px;
    margin-bottom: 20px;
    font-weight: bold;
`;

const SubText = styled.span`
    color:${Colors.blue};
    font-size:${fontSize[18]};
    margin-top:0px;
    cursor: pointer;
    align-self:flex-end;
    margin-right:20px;
    font-weight: bold;
`;

interface IProposal{
    isEditable: boolean;
}

export const Proposal: FC<IProposal> = (props) =>{

    return(
        <Wrapper>
            <Title>Proposals</Title>
            <Cases isEditable={props.isEditable}/>
            <SubText>See more proposals</SubText>
        </Wrapper>
    );
};

export default Proposal;