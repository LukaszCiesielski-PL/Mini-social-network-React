import React, {FC} from 'react';
import styled from 'styled-components';
import ShortLastPublications from './ShortLastPublications/ShortLastPublications';
import Slider from './Slider/Slider';
import { useSelector } from 'react-redux';
import { IPost } from '../../../entities/posts';
import { IState } from '../../../reducers';
import { IPostReducer } from '../../../reducers/postReducers';


const Container = styled.div`
   margin-left:180px;
    width:1000px;
    height:300px;
    border-radius:2px;
    overflow: hidden;
    display:flex;
    box-shadow: 0px 0px 3px #E8E8E8;
`;


export const LatestPublications: FC = () =>{

    const {postList } = useSelector<IState, IPostReducer>(globalState => ({
        ...globalState.posts,
    }));

    const threePublications: IPost[] = [];
    for(let i = 0; i<3; i++)
    {
        const random = Math.floor(Math.random() * 99);  
        threePublications.push(postList[random]);
    }

    return(
        <Container>
            <Slider publications={threePublications}/>
            <ShortLastPublications publications={threePublications}/>
        </Container>
    );
}

export default LatestPublications;