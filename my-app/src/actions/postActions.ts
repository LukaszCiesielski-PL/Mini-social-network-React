import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/postTypes';
import { IPost } from '../entities/posts';

export const getPosts = (): Promise<IPost[]> => ((dispatch: Dispatch) =>{

    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data: IPost[]) =>{
            dispatch({
                type: actionTypes.GET_POSTS,
                postList: data
                });
        });
}) as any;