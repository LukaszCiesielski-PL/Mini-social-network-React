import React,{ FC } from 'react';
import styled from 'styled-components';
import house from '../../../../icons/house.svg';

const ImageMargin = styled.img`
    margin: 0px 6px;    
`;


export const HouseButton: FC = () =>{
    return(
        <div>
            <ImageMargin src={house} alt="Return to homepage"/>
        </div>
    );
};

export default HouseButton;