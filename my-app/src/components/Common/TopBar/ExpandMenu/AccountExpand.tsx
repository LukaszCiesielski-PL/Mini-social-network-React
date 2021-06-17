import {FC} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';
import { fontSize } from '../../../../styledHelpers/FontSizes';
import { SubMenuTitle } from '../../../../styledHelpers/Components';
import ExpandMenuLink from './Buttons/ExpandMenuLink';
import settingsImg from '../../../../icons/settings.svg'
import privacyImg from '../../../../icons/privacy.svg'
import { ISingleUser } from '../../../../entities/users';

const Account = styled.div`
    width:100%;
    height:40px;
    display:flex;
    align-items: center;
`;

const UserAvatar = styled.img`
    width:30px;
    height:30px;
    border-radius:30px;
    margin: 0px 10px;
`;

const UserInfo = styled.div`
    display:flex;
    justify-content: center;
    flex-direction:column;
    max-width:180px;
`;

const UserLink = styled.span`
    color: ${Colors.blue};
    font-size: ${fontSize[14]};
    font-weight: bold;
`;

const AccountInfo = styled.div`
    border-top:1px solid ${Colors.lightGray};
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color:${Colors.black};
`;

interface IAccountExpand{
    closeDropdown(): void;
    currentUser: ISingleUser;
    userPhoto: string;
}

export const AccountExpand: FC<IAccountExpand> = (props) => {
    
    const closeDropMenu = () => {
        props.closeDropdown ();
    }

    return(
        <AccountInfo>
            <SubMenuTitle>
                Account
            </SubMenuTitle>
            <CustomLink to={'/profile'} onClick={closeDropMenu}>
                <Account>
                    <UserAvatar src={props?.userPhoto}/>
                    <UserInfo>
                        <span>{props?.currentUser?.name}</span>
                        <UserLink>See more</UserLink>
                    </UserInfo>
                </Account>
            </CustomLink>
            <ExpandMenuLink title="Privacy" imgSrc={privacyImg} linkTo="/" onClick={closeDropMenu}></ExpandMenuLink>
            <ExpandMenuLink title="Settings" imgSrc={settingsImg} linkTo="/" onClick={closeDropMenu}></ExpandMenuLink>
        </AccountInfo>
    );
};

export default AccountExpand;