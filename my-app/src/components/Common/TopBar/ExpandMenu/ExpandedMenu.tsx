import React, {ChangeEvent, FC, useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../../../styledHelpers/Colors';
import Links from './Links';
import AccountExpand from './AccountExpand';
import Logout from './Buttons/Logout';
import { ISingleUser } from '../../../../entities/users';

const MenuBody = styled.div`
    width:210px;
    height:auto;
    background-color:${Colors.white};
    position:absolute;
    right:0px;
    box-shadow: 0px 3px 3px 3px ${Colors.lightGray};
    border:0px 1px 1px 1px solid ${Colors.lightGray};
    border-radius:3px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:3px;
`;

const InputFilter = styled.input`
    width:190px;
    height:20px;
    padding:3px 6px;
    outline:none;
    margin:3px 0px;
    border:1px solid ${Colors.lightGray};
`;


interface IExpMenu{
    closeMenu(): void;
    currentUser: ISingleUser;
    userPhoto: string;
}

export const ExpandedMenu: FC<IExpMenu> = props => {

    const [inputText, setInputText] = useState<string>('');

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText((e.target.value as string).trim().toLocaleLowerCase());
    }
    const closeDropMenu = () => {
        props.closeMenu();
    }

    return(
        <MenuBody>
            <InputFilter placeholder='Filter...' onChange={inputChangeHandler}/>
            <Links closeDropdown={closeDropMenu} filterValue={inputText}/>
            <AccountExpand closeDropdown={closeDropMenu} currentUser={props?.currentUser} userPhoto={props?.userPhoto}/>
            <Logout />
        </MenuBody>
    );
};

export default ExpandedMenu;