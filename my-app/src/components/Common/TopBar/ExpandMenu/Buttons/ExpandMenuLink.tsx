import React, {FC} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../../../../styledHelpers/Colors';
import { fontSize } from '../../../../../styledHelpers/FontSizes';

const LinkBody = styled.div`
    width:190px;
    height:25px;
    margin:3px;
    display:flex;
    align-items:center;
`;

const LinkImg = styled.img`
    width:25px;
    height:25px;
`;

const LinkSpan = styled.span`
    margin-left:10px;
    color: ${Colors.darkBlue};
    font-size: ${fontSize[14]};
`;

const CustomLink = styled(Link)`
    text-decoration: none;
`;

const InvisibleButton = styled.button`
    background-color: transparent;
    border:0px;
    list-style: none outside none;
`;

interface ITitle{
    title: string;
    imgSrc?: string;
    imgName?: string;
    linkTo: string;
    onClick(): void;
}

export const ExpandMenuLink: FC<ITitle> = props =>{
    return(
    <InvisibleButton onClick={props.onClick}>        
        <CustomLink to={props.linkTo}>
            <LinkBody>
                <LinkImg src={props.imgSrc ? props.imgSrc : `../../../../../icons/${props?.imgName}`} />
                <LinkSpan>{props.title}</LinkSpan>
            </LinkBody>
        </CustomLink>
    </InvisibleButton>
    );
}

export default ExpandMenuLink;