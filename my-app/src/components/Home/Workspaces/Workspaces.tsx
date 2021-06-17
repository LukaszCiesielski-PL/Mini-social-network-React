import {FC} from 'react';
import styled from 'styled-components';

import WorkspaceContainter from './WorkspaceContainer/WorkspaceContainer';

import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const Title = styled.h1`
    font-size: ${fontSize[20]};
    color: ${Colors.darkBlue};
    margin:15px 10px;
    justify-self:flex-start;
    width:1000px;
    padding-left:200px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
`;

export const Workspaces: FC = () =>{
    return(
        <>
            <Title>Workspaces</Title>
            <WorkspaceContainter/>
        </>
    );
}

export default Workspaces;