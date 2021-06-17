import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

interface IEntityDisplay {
    isMosaic: boolean;
};

const Wrapper = styled.div<IEntityDisplay>`
    box-sizing:border-box;
    padding:5px;
    height:90px;
    margin:5px;
    border-radius:2px;
    box-shadow: 0px 2px 4px ${Colors.lightGray};
    display:flex;
    ${props => (
        props.isMosaic ? `width:240px;` : `width:100%;`
    )};
`;

const ImageCont = styled.div`
    min-width:80px;
    max-width:80px;
    height:80px;
    box-shadow: 0px 0px 2px ${Colors.lightGray};
    border-radius:2px;
    overflow: hidden;
    object-fit:cover;
`;

const Image = styled.img`
    width:80px;
    height:80px;
`;

const Data = styled.div`
    display:flex;
    flex-direction:column;
    height:80px;
`;

const Title = styled.span`
    padding:5px;
    height:40px;
    color:${Colors.blue};
    word-wrap: break-word;
    text-overflow:ellipsis;
    overflow: hidden;   
    box-sizing:border-box;
`;

const SubText = styled.span`
    padding:5px;
    height:40px;
    font-size:${fontSize[14]};
    color:${Colors.gray};
    word-wrap: break-word;
    text-overflow:ellipsis;
    overflow: hidden;
    line-height: 18px;
`;

interface IEntity{
    photo:string;
    title:string;
    subtext:string;
    isMosaic:boolean;
}

export class Entity extends React.Component<IEntity> {
    render(){
        return(
        <Wrapper isMosaic={this.props?.isMosaic}>
            <ImageCont>
                <Image src={this.props?.photo}></Image>
            </ImageCont>
            <Data>
                <Title>{this.props?.title}</Title>
                <SubText>{this.props?.subtext}</SubText>
            </Data>
        </Wrapper>
        )
    }
};

export default Entity;