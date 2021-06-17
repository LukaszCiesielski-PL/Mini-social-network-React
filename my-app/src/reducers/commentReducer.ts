import { IComment } from '../entities/comments';
import * as actionTypes from '../actions/actionTypes/commentTypes';

export interface ICommentReducer{
    commentList: IComment[];
};

const defaultState = (): ICommentReducer => ({
    commentList: []
});

export default (state = defaultState(), action: any) => {
    switch(action.type){
        case actionTypes.GET_COMMENTS: {
            const payload: actionTypes.ICommentTypes['GET_COMMENTS'] = action;
            return{
                ...state,
                commentList: payload.commentList
            }
        }
        default:{
            return state;
        }
    }
};