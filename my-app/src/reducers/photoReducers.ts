import { ISinglePhoto } from '../entities/userPhotos';
import * as actionTypes from '../actions/actionTypes/photoTypes';

export interface IPhotosReducer{
    photoList: ISinglePhoto[];
};

const defaultState = (): IPhotosReducer => ({
    photoList: []
});

export default (state = defaultState(), action: any) => {
    switch(action.type){
        case actionTypes.GET_PHOTOS: {
            const payload: actionTypes.IPhotoTypes['GET_PHOTOS'] = action;
            return{
                ...state,
                photoList: payload.photoList
            }
        }
        default:{
            return state;
        }
    }
};