import {Dispatch} from 'redux';
import * as actionTypes from './actionTypes/commentTypes';
import { IComment } from '../entities/comments';

export const getComments = ():Promise<IComment[]> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then((data: IComment[]) =>{
            dispatch({
                type: actionTypes.GET_COMMENTS,
                commentList: data
            });
        });
}) as any;