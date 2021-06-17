import {FC} from 'react';
import styled from 'styled-components';

import data from '../workspacesData';

import SingleWorkspace from './SingleWorkspace';


import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';

const Containter = styled.div`
    width:1000px;
    padding-left:180px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
`;

const CustomSwiper = styled(Swiper)`
    height:255px;
`;

export const WorkspaceContainer: FC = () =>{
    return(
        <Containter>
            <CustomSwiper slidesPerView={3} spaceBetween={0}>  
                {data.map(el => (
                    <SwiperSlide>
                        <SingleWorkspace title={el.name} img={el.icon} users={el.users} lastUpdate={el.lastUpdate} linkTo={`/workspaces/${el.id}`}/>
                    </SwiperSlide>
                ))}
            </CustomSwiper>
        </Containter>
    );
}

export default WorkspaceContainer;