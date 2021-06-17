import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/photoTypes';
import { ISinglePhoto } from  '../entities/userPhotos';

export const getPhotos = (): Promise<ISinglePhoto[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then((data: ISinglePhoto[]) =>{
            dispatch({
                type: actionTypes.GET_PHOTOS,
                photoList: data
            });
        });
}) as any;