import React, {FC, useState} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

import tile from '../../icons/tile.svg';
import line from '../../icons/line.svg';

const Wrapper = styled.button`
    height:25px;
    display:flex;
    align-items:center;
    outline:none;
    background-color: transparent;
    border:none;
    cursor: pointer;
    color:${Colors.blue};
`;

interface IActiveMenu {
    active: boolean;
};
const Container = styled.div<IActiveMenu>`
    height:100%;
    padding:2px 10px;
    border-radius: 4px;
    border:1px solid ${Colors.lightBackground};
    display:flex;
    align-items:center;
    justify-content:center;
    transition:.1s;
    ${props => {
        if (props.active) {
        return `background: #f0ecf4;`;}
    }}
`;

const DisplayImg = styled.img`
    height:15px;
    width:15px;
`;

const Text = styled.span`
    margin-left:10px;
`;

interface IDisplayMenu{
    mosaic:boolean;
    onClicked():void;
}

export const DisplayMenu: FC<IDisplayMenu> = (props) => {

    return(
        <Wrapper onClick={props.onClicked}>
            <Container active={props.mosaic}>
                <DisplayImg src={tile}/>
                {props.mosaic && (<Text>Mosaic</Text>)}
            </Container>
            <Container active={!props.mosaic}>
                <DisplayImg src={line}/>
                {!props.mosaic && (<Text>Line</Text>)}
            </Container>
        </Wrapper>
    );
}

export default DisplayMenu;