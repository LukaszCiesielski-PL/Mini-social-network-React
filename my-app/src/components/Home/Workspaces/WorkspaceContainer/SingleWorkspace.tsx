import {FC} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../../../styledHelpers/Colors';
import { fontSize } from '../../../../styledHelpers/FontSizes';
import peopleImg from '../../../../icons/people.svg';

const Wrapper = styled.div`
    background-color:${Colors.white};
    box-shadow: 1px 2px 3px ${Colors.gray};
    width:300px;
    height:240px;
    border-radius:4px;
    overflow:hidden;
`;

const BackgroundImage = styled.img`
    width:300px;
    height:125px;
    object-fit:cover;
`;

const ImgTitleContainter = styled.div`
    display:flex;
    position:relative;
    padding-left: 120px;
    width:300px;
    height:50px;
`;

const IconWrapper = styled.img`
    width:100px;
    height:100px;
    box-sizing:border-box;
    padding:20px;
    background-color:${Colors.white};
    box-shadow: 1px 2px 3px ${Colors.gray};
    border-radius:3px;
    position:absolute;
    left:10px;
    top:-50px;
`;

const Title = styled.span`
    padding-top:5px;
    font-size:${fontSize[18]};
    color:${Colors.darkBlue};
    font-weight:bold;
`;

const Info = styled.div`
    margin-top:10px;
    margin-left:10px;   
    display:flex;
    align-items:center;
    margin-bottom:10px;
    color:${Colors.gray};
`;

const SmallImg = styled.img`
    width:20px;
    height:20px;
    margin-right:5px;
`;

const UserCount = styled.span``;

const LastUpdate = styled.div`
    font-size:${fontSize[12]};
    color:${Colors.gray};
    letter-spacing:.4px;
    margin-left:10px;   
`;

const Space = styled.span`
    margin:0 15px;
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color:${Colors.black};
`;

const img: string = 'https://pliki.propertynews.pl/i/05/46/33/054633_940.jpg';

interface ISingleWorkspace{
    title:string;
    img:string;
    lastUpdate:string;
    users:number;
    linkTo:string;
}

export const SingleWorkspace: FC<ISingleWorkspace> = (props) =>{
    const workImg = `../../../../icons/${props.img}`
    return(
        <Wrapper>
            <CustomLink to={props.linkTo}>
                <BackgroundImage src={img}/>
                <ImgTitleContainter>
                    <IconWrapper src={workImg}/>
                    <Title>{props.title}</Title>
                </ImgTitleContainter>
                <Info>
                    <SmallImg src={workImg}/>
                    Contract
                    <Space> </Space>
                    <SmallImg src={peopleImg}/>
                    <UserCount> {props.users} users</UserCount>
                </Info>
                <LastUpdate>
                    Last update {props.lastUpdate}
                </LastUpdate>
            </CustomLink>
        </Wrapper>
    );
}

export default SingleWorkspace;