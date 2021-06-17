import React, { FC } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import arrowDown from '../../../../icons/arrow-down.svg'
import { Colors } from '../../../../styledHelpers/Colors';
import workspaceImg from '../../../../icons/workspace.png';

const MenuButton = styled.button`
    background-color: transparent;
    border:none;
    outline: none;
    cursor: pointer;
`;

const ImageSelector = styled.img`
    margin: 0px 10px;
    width:35px;
    height:35px;
`;

const Selector = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const PageName = styled.div`
    width:150px;
    color: ${Colors.darkBlue};
    font-size:18px;
    text-align:left;
`;

interface ParamTypes {
    workspace: string;
}

export const ExpandMenuButton: FC = () => {
    return(
        <MenuButton>
            <Selector>
                <Switch>
                    <Route path="/publications">
                        <ImageSelector src="./icons/publications.svg" alt="Current page image"/>               
                        <PageName>Publications</PageName>
                    </Route>
                    <Route path='/ecosystem'>
                        <ImageSelector src="./icons/ecosystem.svg" alt="Current page image"/>               
                        <PageName>EcoSystem</PageName>
                    </Route>
                    <Route path='/entities'>
                        <ImageSelector src="./icons/entities.svg" alt="Current page image"/>               
                        <PageName>Entities</PageName>
                    </Route>
                    <Route path='/administration'>
                        <ImageSelector src="./icons/administration.svg" alt="Current page image"/>               
                        <PageName>Administration</PageName>
                    </Route>
                    <Route path='/profile'>
                        <ImageSelector src="./icons/settings.svg" alt="Current page image"/>               
                        <PageName>Profile</PageName>
                    </Route>
                    <Route path='/workspaces/:workspace'>
                        <ImageSelector src={workspaceImg} alt="Current page image"/>               
                        <PageName>Workspace</PageName>
                    </Route>
                    <Route path='/'>
                        <ImageSelector src='./icons/house2.svg' alt="Current page image"/>               
                        <PageName>Home</PageName>
                    </Route>
                </Switch>
                <img src={arrowDown} alt=""/>
            </Selector>
        </MenuButton>
    );
};

export default ExpandMenuButton;