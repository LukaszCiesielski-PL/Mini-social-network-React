import React, {FC, useRef} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

import sort from '../../icons/sort.svg';
import filter from '../../icons/filter.svg';
import resize from '../../icons/resize.svg';
import share from '../../icons/share.svg';
import more from '../../icons/more.svg';
import circle from '../../icons/circle.svg';
import arrow from '../../icons/arrow_down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IDisplayState } from '../../reducers/displayReducer';
import { IDisplayTypes } from '../../actions/actionTypes/displayTypes';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding:0px 5px;
`;

const FakeSelect = styled.div`
    height:30px;
    width:80px;
    background-color:#f0ecf4;
    border-radius:2px;
    box-shadow:0px 1px 3px ${Colors.gray};
    color:${Colors.blue};
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    cursor:pointer;
`;

interface ISmallIcon {
    height:string;
}
const SmallIcon = styled.img<ISmallIcon>`
    height:${props => props.height}px;
`;

const Options = styled.div`
    display:flex;
    cursor: pointer;
    font-size:${fontSize[14]};
    height:25px;
`;

const Option = styled.button`
    background-color: transparent;
    outline:none;
    border:none;
    color:${Colors.gray};
    margin-left:10px;
    padding:2px 2px;
    border-left:1px solid ${Colors.lightGray};
    display:flex;
    align-items:center;
    cursor:pointer;
`;

const ImgIcon = styled.img`
    width:14px;
    height:14px;
    margin-left:10px;
    filter: invert(50%);
`;

const More = styled.img`
    width:14px;
    height:14px;
    margin-left:10px;
    cursor: pointer;
`;

const Text = styled.span`
    margin-left:5px;
`;

interface IButtonPanel {
    onClickSort():void;
    displayFilters():void;
};

export const ButtonPanel: FC<IButtonPanel> = (props) => {
    const dispatch = useDispatch();
    const isFullscreen = useSelector<IState, boolean>(globalState => (globalState.display.isFullscreen));
    
    return(
        <Wrapper>
            <FakeSelect>
                <SmallIcon height='14' src={circle}/> 
                All
                <SmallIcon height='9' src={arrow}/> 
            </FakeSelect>
            <More src={more}/>
            <Options>
                <Option onClick={() => props.onClickSort()}>
                    <ImgIcon src={sort}/>
                    <Text>Sort</Text>
                </Option>
                <Option onClick={() => props.displayFilters()}>
                    <ImgIcon src={filter}/>
                    <Text>Filters</Text>
                </Option>
                <Option onClick={() => {
                    dispatch({type: IDisplayTypes.TOGGLE_FULLSCREEN});
                    console.log(isFullscreen);           
                }}>
                    <ImgIcon src={resize}/>
                </Option>
                <Option onClick={() =>  navigator.clipboard.writeText(window.location.href)}>
                    <ImgIcon src={share}/>
                    <Text>Share</Text>
                </Option>
            </Options>        
        </Wrapper>
    );
}

export default ButtonPanel;