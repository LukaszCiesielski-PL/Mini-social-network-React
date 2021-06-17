import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import searchIcon from '../../../icons/search.svg';
import { Colors } from '../../../styledHelpers/Colors';

const Search = styled.div`
    width:100%;
    height: 100%;
    border: 1px solid ${Colors.lightGray};
    color:${Colors.lightGray};
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    border-radius:2px;
    box-shadow: 0px 0px 4px ${Colors.lightGray};
    overflow:hidden;
    background-color: ${Colors.white};
`;

const Loupe = styled.img`
    position:absolute;
    right:5px;
    &:hover{
        cursor: pointer;
    }
`;

const SearchInput = styled.input`
    width:100%;
    height: 100%;
    border:none;
    text-align:center;
    margin-right:25px;
    outline: none;
`;

interface ISearchBar{
    searchHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<ISearchBar> = (props) => {
    return(
        <Search>
            <SearchInput onChange={props.searchHandler} type="text" placeholder="Search..."></SearchInput>
            <Loupe src={searchIcon}/>
        </Search>
    );
};

export default SearchBar;