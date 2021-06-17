import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../../reducers';
import { IPhotosReducer } from '../../../reducers/photoReducers';
import Entity from './Entity';

const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
`;

interface IEntity {
    photo:string;
    title:string;
    subtext:string;
    followed: boolean;
};

interface IEntitiesContainter{
    filter: string;
    isMosaic:boolean;
    sortAlphabetically:boolean;
    displayOption:string;
};

export const EntitiesContainer: FC<IEntitiesContainter> = (props) => {

    const {photoList} = useSelector<IState, IPhotosReducer>(globalState => ({
        ...globalState.photos,
    }));

    const entitiesArr:IEntity[] =  [];

    for(let i = 0; i < 30; i++){
        entitiesArr.push({photo: `${photoList[i]?.url}`, title: `${photoList[i]?.title}`, subtext: `W goroncej wodzie Company #${i}`, followed: i < 5 ? true : false});
    }
    
    return(
        <Wrapper>
            {entitiesArr.filter(el => el.title.toLocaleLowerCase().trim().includes(props.filter))
                        .filter(el => props.displayOption == 'All' ? el : el.followed)
                        .sort((a,b) => props.sortAlphabetically ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title))
                        .map((el,index) => 
                        (<Entity key={index} title={el.title} photo={el.photo} subtext={el.subtext} isMosaic={props.isMosaic}/>))}
        </Wrapper>
    );
}

export default EntitiesContainer;