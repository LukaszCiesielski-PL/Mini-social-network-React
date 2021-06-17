import React, {FC} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../../../styledHelpers/Colors';
import publicationsImg from '../../../../icons/publications.svg';
import {IconImg, LeftBarLink} from '../../../../styledHelpers/Components';

const CustomLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.darkBlue};
`;

export const Publications: FC = () => {
    return (
        <LeftBarLink>
            <CustomLink  to="/publications">
                <IconImg src={publicationsImg} alt="Shortcut to Publication page"/>
                Publications
            </CustomLink>
        </LeftBarLink>
    );
};