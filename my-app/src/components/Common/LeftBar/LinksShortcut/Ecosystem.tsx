import React, {FC} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../../../styledHelpers/Colors';
import ecoSystemImg from '../../../../icons/ecosystem.svg';
import {IconImg, LeftBarLink} from '../../../../styledHelpers/Components';

const CustomLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.darkBlue};
`;

export const EcoSystem: FC = () => {
    return (
        <LeftBarLink>
            <CustomLink to="/ecosystem">
                <IconImg src={ecoSystemImg} alt="Shortcut to ecosystem page"/>
                EcoSystem
            </CustomLink>
        </LeftBarLink>
    );
};