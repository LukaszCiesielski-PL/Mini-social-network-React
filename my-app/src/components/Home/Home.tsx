import React, {FC} from 'react';
import LatestPublications from './LatestPublications/LatestPublications';
import Workspaces from './Workspaces/Workspaces';
import AllComments from './AllComments/AllComments';

export const Home: FC = () =>{
    return(
        <>
            <LatestPublications/>
            <Workspaces/>
            <AllComments/>
        </>
    );
}

export default Home;