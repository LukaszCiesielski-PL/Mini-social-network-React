import React, {FC} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../../../styledHelpers/Colors';
import entitiesImg from '../../../../icons/entities2.svg';
import {IconImg, LeftBarLink} from '../../../../styledHelpers/Components';

const CustomLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.darkBlue};
`;

export const Entities: FC = () => {
    return (
        <LeftBarLink>
            <CustomLink to="/entities">
                <IconImg src={entitiesImg} alt="Shortcut to Entities page"/>
                Entities
            </CustomLink>
        </LeftBarLink>
    );
};