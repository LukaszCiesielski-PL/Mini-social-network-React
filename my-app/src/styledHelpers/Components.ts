import styled from 'styled-components';

import { Colors } from './Colors';
import {fontSize} from './FontSizes';

export const Wrapper = styled.div`
    background: grey;
    display: flex;
    justify-content: center;
    padding: 5px;
`;


export const CircleNotify = styled.div`
    background-color: ${Colors.lightGray};
    width:40px;
    height:40px;
    margin: 3px 6px;
    border-radius:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
`;

export const LeftBarLink = styled.div`
    margin:10px 0px;
    height:30px;
    display:flex;
    font-size: ${fontSize[16]};
    color: ${Colors.darkBlue};
    align-items:center;
`;

export const IconImg = styled.img`
    margin-right:10px;
    border-radius:2px;
    width:25px;
`;

export const UserShortcut = styled.div`
    height:30px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:220px;
    display:flex;
    align-items:center;
    color: ${Colors.darkBlue};
    cursor: pointer;
`;

export const SubMenuTitle = styled.span`
    align-self:flex-start;
    margin-left:3px;
    color: ${Colors.gray};
    font-weight:600;
    font-size: ${fontSize[12]};
    margin: 3px 6px;
    display:block;
`;

export const CustomInput = styled.input`
    height:25px;
    width:100px;
    outline:none;
    box-sizing:border-box;
    padding:3px;
    border:1px solid ${Colors.lightGray};
    border-radius:2px;
    transition: .2s;
    &:focus{
        border:1px solid #2684ff;
    }
`;