import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';
import { UserShortcut } from '../../../../styledHelpers/Components';
import publicationsImg  from '../../../../icons/publications.svg';
import publicationButtonImg  from '../../../../icons/plus.svg';

const PublicationImage = styled.img`
    margin-right:10px;
    width:25px;
`;

const AddPublication = styled.div`
    width:25px;
    height:20px;
    border: 1px solid ${Colors.darkBlue};
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 1px 1px 1px ${Colors.lightGray};
    &:hover{
        background-color: ${Colors.darkBlue};
    }
`;

const LeftText = styled.div`
    width:180px;
    display:flex;
    align-items:center;
`;

export const UserPublications: FC = () => {
    return(
        <UserShortcut>
            <LeftText>
                <PublicationImage src={publicationsImg}/>
                Your Publications
            </LeftText>
            <AddPublication>
                <img src={publicationButtonImg}/>
            </AddPublication>
        </UserShortcut>
    );
};

export default UserPublications;