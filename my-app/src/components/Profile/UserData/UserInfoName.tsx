import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserGet } from './UserGet';

import message from '../../../icons/speech-bubble.svg';
import briefcase from '../../../icons/briefcase.svg';
import request from '../../../icons/file.svg';

import pen from '../../../icons/pen.svg';
import { Colors } from '../../../styledHelpers/Colors';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IPhotosReducer } from '../../../reducers/photoReducers';
import { IUsersReducer } from '../../../reducers/userReducers';
import { CustomInput } from '../../../styledHelpers/Components';

const Wrapper = styled.div`
    width:100%;
    height:140px;
    display:flex;
    flex-direction:column;
    padding:10px 30px;
    box-sizing:border-box;
    border-bottom:1px solid ${Colors.lightBackground};
    position: relative;
    font-weight: bold;
`;
const Section = styled.div`
    display:flex;
    justify-content:flex-end;
`;

const Avatar = styled.div`
    display:flex;
    flex-direction:column;
    height:100px;
`;

const UserAvatar = styled.img`
    width:75px;
    height:75px;
    border-radius:75px;
`;
const AvatarText = styled.span`
    margin-top:5px;
    color:${Colors.blue};
    cursor:pointer;
`;

const User = styled.div`
    display:flex;
`;

const UserData = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    margin-left:25px;
`;

const UserDataText = styled.span`
    color:${Colors.blue};
    font-weight:bold;
`;

const UserText = styled.span`
    color:${Colors.blue};
`;

const Contact = styled.div`
    flex-grow:1;
    display:flex;
    padding:5px;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-end;
`;

const EditBtn = styled.button`
    width:30px;
    height:30px;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:transparent;
    outline:none;
    border:none;
    cursor: pointer;
    right:15px;
    top:30px;
`;
const BtnImg = styled.img`
    width:20px;
    height:20px;
`;

const InputUser = styled(CustomInput)`
    width:200px;
    &:focus{
        border:1px solid #000000;
    }
`;

export const UserInfoName: FC = () =>{

    const { currentUser, photoList } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState =>({
        ...globalState.users,
        ...globalState.photos
    }));

    const [isEdit, isEditHandler] = useState(false);

    const handleSubmit = () => {isEditHandler(!isEdit)}

    const [data, setData] = useState({
        phone: '',
        city: '',
        name: '',
        companyName: '',
        email: '',
        text: '',
    });
    
    useEffect(() => {
        const newData = {
            phone: currentUser?.phone,
            city: currentUser?.address.city,
            name: currentUser?.name,
            companyName: currentUser?.company.name,
            email: currentUser?.email,
            text: 'Parnter'
        }
        setData(newData);
      },[currentUser]);

    return(
        <Wrapper>
            <EditBtn onClick={() => handleSubmit()}><BtnImg src={pen}/></EditBtn>
            <Section>
                    <UserGet text="Message" icon={message}/>
                    <UserGet text="Create a request" icon={request}/>
                    <UserGet text="Add to cluster" icon={briefcase}/>
            </Section>
            <User>
                <Avatar>
                    <UserAvatar src={photoList?.filter(el => el?.id === currentUser?.id)[0]?.url}/>
                    <AvatarText>See profile</AvatarText>
                </Avatar>
                <UserData>
                    <UserDataText>
                    {
                    !isEdit ? data?.name
                            :(<InputUser type='text' value={data?.name} onChange={e => setData({...data, name: e.target.value})}/>)
                    }  
                    </UserDataText>
                    <UserDataText>
                    {
                    !isEdit ? data?.companyName
                            :(<InputUser type='text' value={data?.companyName} onChange={e => setData({...data, companyName: e.target.value})}/>)
                    }  
                    </UserDataText>
                    <UserText>
                    {
                    !isEdit ? data?.city
                            :(<InputUser type='text' value={data?.city} onChange={e => setData({...data, city: e.target.value})}/>)
                    }    
                    </UserText>
                    <UserText>
                    {
                    !isEdit ? data?.text
                            :(<InputUser type='text' value={data?.text} onChange={e => setData({...data, text: e.target.value})}/>)
                    }  
                    </UserText>
                </UserData>
                <Contact>
                    <UserText>
                    {
                    !isEdit ? data?.email
                            :(<InputUser type='text' value={data?.email} onChange={e => setData({...data, email: e.target.value})}/>)
                    }  
                    </UserText>
                    <UserText>
                    {
                    !isEdit ? data?.phone
                            :(<InputUser type='text' value={data?.phone} onChange={e => setData({...data, phone: e.target.value})}/>)
                    }
                    </UserText>
                </Contact>
            </User>
        </Wrapper>
    );
};

export default UserInfoName;