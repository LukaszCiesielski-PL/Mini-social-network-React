import React, { FC, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import styled from 'styled-components';
import { TopBar } from '../Common/TopBar/TopBar';
import { LeftBar } from '../Common/LeftBar/LeftBar';
import { Publications } from '../Publications/Publications';
import { Entities } from '../Entities/Entities';
import { Ecosystem } from '../Ecosystem/Ecosystem';
import { Profile } from '../Profile/Profile';
import { Colors } from '../../styledHelpers/Colors';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/userActions';
import { getPhotos } from '../../actions/photoActions';
import { getPosts } from '../../actions/postActions';
import { Home } from '../Home/Home';
import { getComments } from '../../actions/commentActions';



const Content = styled.div`
    display:flex;
    width:100vw;
    justify-content:center;
    background-color: ${Colors.lightBackground};
    min-height:calc(100vh - 50px); //50px - topbar
    margin-right:auto;
`;

const Main = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap');
    font-family: 'Roboto', sans-serif;
    overflow-x:hidden;
    background-color:${Colors.lightBackground};
`;

const PageContent = styled.div`
    padding:15px;
    flex-grow:1;
    margin-right:300px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetPosts = ReturnType<typeof getPosts>;
type GetComments = ReturnType<typeof getComments>;

export const MainPage: FC = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetPosts>(getPosts());
        dispatch<GetComments>(getComments());
    }, []);
    
    return(
        <Router>
            <Main>
                <TopBar />
                <Content>
                    <LeftBar />
                    <PageContent>
                        <Switch>
                            <Route path="/publications">
                                <Publications />
                            </Route>
                            <Route path="/ecosystem">
                                <Ecosystem />
                            </Route>
                            <Route path="/entities">
                                <Entities />
                            </Route>
                            <Route path="/people">
                                <Home />
                            </Route>
                            <Route path="/administration">
                                <Home />
                            </Route>
                            <Route path="/profile">
                                <Profile />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </PageContent>
                </Content>
            </Main>
        </Router>
    );
};

export default MainPage;