import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../../../reducers';
import { IPhotosReducer } from '../../../../reducers/photoReducers';
import { IUsersReducer } from '../../../../reducers/userReducers';

const Container = styled.div`
    background-color: #FFF;
    height:70px;
    overflow: hidden;
    padding:1px;
    display:flex;
    margin-bottom:5px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
`;

const PostImage = styled.img`
    width:70px;
    height:70px;
    border-radius:2px;
    object-fit: cover;
`;

const PostContent = styled.div`
    flex-grow:1;
    display:flex;
    flex-direction:column;
    height:70px;
    padding:8px;
    box-sizing: border-box;
    padding-left:7px;
    
`;

const PostTitle = styled.div`
    height:45px;
    color: #232C47;
`;

const PostUserInfo = styled.div`
    flex-grow:1;
    display:flex;
    align-items:center;
    color: #90949a;
    font-size: 0.74rem;
`;

const PostDate = styled.span`
    margin: 0px 10px 0px 0px;
   
`;

const UserAvatar = styled.img`
    width:15px;
    height:15px;
    border-radius:15px;
    margin-right:5px;
`;

const UserName = styled.span``;

interface IShortPublication{
    postImage: string;
    date: string;
    title: string;
    userId: number;
}

export const ShortPublication: FC<IShortPublication> = (props) =>{
    
    const { usersList, photoList} = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
    }));
    

    return(
        <Container>
            <PostImage src={props?.postImage}/>
            <PostContent>
                <PostTitle>
                    {props?.title}
                </PostTitle>
                <PostUserInfo>
                    <PostDate>{props?.date}</PostDate>
                    <UserAvatar src={photoList[props?.userId - 1]?.url}></UserAvatar>
                    <UserName>{usersList[props?.userId - 1]?.name}</UserName> 
                </PostUserInfo>
            </PostContent>
        </Container>
    );
}

export default ShortPublication;