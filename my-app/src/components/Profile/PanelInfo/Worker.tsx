import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import messageImg from '../../../icons/comments.svg'
import profileImg from '../../../icons/people.svg'
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IPhotosReducer } from '../../../reducers/photoReducers';
import { IUsersReducer } from '../../../reducers/userReducers';

const Wrapper = styled.div`
    width: 550px;
    height:30px;
    background-color:${Colors.lightGray};
    display:flex;
    align-items:center;
    font-size:${fontSize[14]};
    display:flex;
    align-items:center;
    margin-bottom: 10px;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
`;

const Avatar = styled.img`
    width:25px;
    height:25px;
    border-radius:30px;
    margin-left:5px;
    
`;

const Name = styled.span`
    color: ${Colors.blue};
    font-weight:bold;
    margin-left:5px;
    text-overflow:ellipsis;
    overflow: hidden;
    height:15px;
    font-size:${fontSize[16]};
    flex-grow:1;
    
`;

const ButtonsContainter = styled.div`
    justify-self:flex-end;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:200px;
    margin-right:50px;

`;

const Button = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:${fontSize[16]};
    color:${Colors.blue};
    margin:0px 10px;
    cursor: pointer;
`;

const Icon = styled.img`
    height:20px;
    width:20px;
    margin-right:5px;
`;

interface IWorker{
    userId: string;
}

export const Worker:FC<IWorker> = (props) => {

    const { usersList, photoList } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState =>({
        ...globalState.users,
        ...globalState.photos
    }));

    return(
        <Wrapper>
            <Avatar src={photoList?.filter(el => el?.id === parseInt(props?.userId))[0]?.url}/>
            <Name>
            {usersList?.filter(el => el.id === parseInt(props?.userId))[0]?.name}
            </Name>
            <ButtonsContainter>
                <Button>
                    <Icon src={messageImg}/> Message
                </Button>
                <Button>
                    <Icon src={profileImg}/> Profile
                </Button>
            </ButtonsContainter>
        </Wrapper>
    );
};

export default Worker;