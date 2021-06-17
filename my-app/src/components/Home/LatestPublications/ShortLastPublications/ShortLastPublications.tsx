import React, {FC} from 'react';
import styled from 'styled-components';
import { IPost } from '../../../../entities/posts';
import { ShortPublication } from './ShortPublication';

const Container = styled.div`
    background-color: #FFF;
    flex-grow:1;
    height:300px;
    border-radius:10px;
    overflow: hidden;
    padding:12px;
`;

const Title = styled.div`
    font-size: 1.25rem;
    color: #232C47;
    margin:0px 0px 0px 0px;
    padding-bottom:10px;
`;

const MorePublications = styled.div`
    color: #3347A1;
    font-size: 0.85rem;
    padding-top:5px;
`;

const Shorts = styled.div`
    min-height:226px;
`;

export interface ILastPublications{
    publications: IPost[];
}

const postDefaultPhoto:string = 'https://freedesignfile.com/upload/2018/05/Handsome-man-in-office-Stock-Photo.jpg';

export const ShortLastPublications: FC<ILastPublications> = (props) =>{
    return(
        <Container>
            <Title>
                Latest publications
            </Title>
            <Shorts>
                {props.publications.map((el,index) => (
                    <ShortPublication key={index}
                    postImage={postDefaultPhoto} 
                    date="21 Jun. 2021" 
                    userId={el?.userId} 
                    title={el?.title}/>
                ))}
            </Shorts>
            <MorePublications>See more publications</MorePublications>
        </Container>
    );
}

export default ShortLastPublications;