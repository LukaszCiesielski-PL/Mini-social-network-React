import {FC} from 'react';
import styled from 'styled-components';
import { ILastPublications } from '../ShortLastPublications/ShortLastPublications';
import Slide from './Slide';

const Containter = styled.div`
    width:300px;
    height:300px;
`;

const postDefaultPhoto: string = 'https://images.wsj.net/im-159068?width=620&size=1.5';



interface ISlider extends ILastPublications{};

export const Slider: FC<ISlider> = (props) =>{


    return(
        <Containter>
            {props.publications.map((el,index) => 
                (
                <Slide  key={index}
                        postImage={postDefaultPhoto} 
                        date="21 jan.2021" 
                        userId={el?.userId-1} 
                        title={el?.title} ></Slide>            
                ))}            
        </Containter>
    );
}

export default Slider;