import { IDisplay } from '../entities/display';
import {IDisplayTypes} from '../actions/actionTypes/displayTypes';

export interface IDisplayState{
    isFullscreen: boolean;
};

const defaultState = (): IDisplayState => ({
    isFullscreen: false,
});

export default (state = defaultState(), action: any) => {
    switch(action.type){
        case IDisplayTypes.TOGGLE_FULLSCREEN:{
            return {...state, isFullscreen: !state.isFullscreen};
        }
        default:{
            return state;
        }
    }
};