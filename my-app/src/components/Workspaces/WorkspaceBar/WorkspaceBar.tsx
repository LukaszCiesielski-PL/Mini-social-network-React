import React, {FC} from 'react';
import styled from 'styled-components';

import gear from '../../../icons/gear.svg'
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    width:980px;
    height:300px;
    border-radius:2px;
    display:flex;
    flex-direction:column;
    overflow:hidden;
    background-color:${Colors.white};
    box-shadow:1px 2px 2px ${Colors.lightGray};
`;

const ImgContainer = styled.img`
    width:100%;
    height:200px;
    object-fit:cover;
`;

const Body = styled.div`
    width:100%;
    height:100px;
    display:flex;
    position:relative;
`;

const BodyIcon = styled.img`
    height:80px;
    width:60px;
    padding:10px;
`;

const BodyText = styled.div`
    flex-grow:1;
    padding:15px 10px;
    display:flex;
    flex-direction:column;
`;

const Title = styled.span`
    font-size:${fontSize[20]};
    font-weight:bold;
    color:${Colors.darkBlue};
    margin-bottom:10px;
`;

const Text = styled.span`
    font-size:${fontSize[14]};
    color:${Colors.gray};
    line-height:20px;
`;

const SettingsIcon = styled.img`
    height:20px;
    width:20px;
    right:10px;
    top:10px;
    position:absolute;
`;

interface IWorkspaceBar {
    title: string;
    icon: string;
}

const bgImg: string = 'https://www.softwareone.com/-/media/global/social-media-and-blog/hero/publisher-advisory_get-ready-for-the-office-2010-end-of-support-header.jpg?rev=5496ff43323143be831b8a7922711cf2&sc_lang=en-fi&hash=A250C8730555358AEFE638574FCA0AF4';

export const WorkspaceBar: FC<IWorkspaceBar> = (props) => {

    return(
        <Wrapper>
            <ImgContainer src={bgImg}/>
            <Body>
                <BodyIcon src={`../../../icons/${props.icon}`}/>
                <BodyText>
                    <Title>
                        {props?.title}
                    </Title>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Assumenda, accusamus. Quaerat necessitatibus id incidunt, 
                        iste, suscipit, dolorem ipsum deleniti in corrupti voluptates a cumque? 
                        Illum nesciunt eum quaerat suscipit totam.
                    </Text>
                </BodyText>
                <SettingsIcon src={gear}/>
            </Body>
        </Wrapper>
    );
};

export default WorkspaceBar;