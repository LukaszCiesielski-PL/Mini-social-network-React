import React, { FC } from 'react';
import useDropdown from 'react-dropdown-hook';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors'
import logo from '../../../icons/logo192.png';
import commentsImg from '../../../icons/comments.svg';
import bellImg from '../../../icons/bell.svg';
import { SearchBar } from '../TopBar/SearchBar';
import { RoundButton } from './Buttons/RoundButton';
import { HouseButton } from './Buttons/HouseButton';
import { ExpandMenuButton } from './ExpandMenu/ExpandMenuButton';
import { ExpandedMenu } from './ExpandMenu/ExpandedMenu';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/userReducers';
import { IPhotosReducer } from '../../../reducers/photoReducers';
import { IDisplayState } from '../../../reducers/displayReducer';

interface IBar {
    hidden:boolean;
}

const Bar = styled.div<IBar>`
    width:100vw;
    min-height:50px;
    max-height:50px;
    background-color: ${Colors.white};
    display:flex;
    align-items:center;
    justify-content: space-between;
    box-shadow: 1px 0px 4px ${Colors.lightGray};
    position:sticky;
    ${props => (props.hidden && 'transform: translateY(-50px)')};
    transition:.1s;
`;

const RightButtonSet = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right: 50px;
`;
const LeftButtonSet = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left: 50px;
`;

const Logo = styled.div`
    width:35px;
    height:35px;
`;

const LogoImage = styled.img`
    width:35px;
    height:35px;  
`;

const MenuHookButton = styled.button`
    background-color: transparent;
    border:none;
    outline:none;
`;

const Menu = styled.div`
    position:relative;
`;

const SearchWrapper = styled.div`
    width:500px;
    height: 30px;
`;

export const TopBar: FC = props => {

    const { usersList, photoList, currentUser, isFullscreen } = useSelector<IState, IUsersReducer & IPhotosReducer & IDisplayState>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.display
    }));
    
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    
    const menuHandler = () => {
        toggleDropdown();
    };
    const closeDropMenu = () => {
        closeDropdown();
    }
    
    return(
        <Bar hidden={isFullscreen}>
            <LeftButtonSet>
                <Link to='/'>
                    <Logo>
                        <LogoImage src={logo} />
                    </Logo>
                </Link>
                <Menu ref={wrapperRef}>
                    <MenuHookButton onClick={menuHandler}>
                        <ExpandMenuButton />
                    </MenuHookButton>
                    {dropdownOpen && <ExpandedMenu closeMenu={closeDropMenu} userPhoto={photoList?.filter(el => el?.id === currentUser?.id)[0]?.url} currentUser={currentUser}/>}
                </Menu>
            </LeftButtonSet>
            <SearchWrapper>
                <SearchBar />
            </SearchWrapper>
            
            <RightButtonSet>
                <HouseButton />
                <RoundButton image={commentsImg} altText="Check your comments!" notifyCount="8"/>
                <RoundButton image={bellImg} altText="Check your notifications!" notifyCount="8"/>
            </RightButtonSet>
        </Bar>
    );
};

export default TopBar;