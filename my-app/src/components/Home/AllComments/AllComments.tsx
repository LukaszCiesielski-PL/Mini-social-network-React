import {ChangeEvent, FC, useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IComment } from '../../../entities/comments';
import { IState } from '../../../reducers';
import { ICommentReducer } from '../../../reducers/commentReducer';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import SearchBar from '../../Common/TopBar/SearchBar';
import SingleComment from './SingleComment';
import signal from '../../../icons/signal.svg';

const Title = styled.h1`
    font-size: ${fontSize[20]};
    color: ${Colors.darkBlue};
    margin:15px 10px;
    width:1000px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
`;

const PageSelector = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width:1000px;
    padding-left:190px;
`;

const PageButton = styled.button`
    outline:none;
    border:none;
    background-color:transparent;
    cursor: pointer;
    color: ${Colors.blue};
    
`;

const CurrentPageButton = styled(PageButton)`
    color:${Colors.black};
`;

const CustomButton = styled.button`
    outline:none;
    border:none;
    background-color:transparent;
    cursor: pointer;
    text-transform:uppercase;
    color: #3347A1;
    transition: .2s;
    &:hover{
        box-shadow: 0px 0px 2px #232C47;
        border-radius:2px;
    }
    
`;

const TitleBar = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:1000px;
    padding-left:190px;
`;

const Filter = styled.div`
    height:30px;
    width:200px;
`;

const CustomSelect = styled.select`
    height:30px;
    width:90px;
    font-size:${fontSize[16]};
    background-color:transparent;
    outline:none; 
    box-shadow: none;
    border:1px solid ${Colors.lightBackground};
    color:${Colors.blue};
`;

const SmallIcon = styled.img`
    height:20px;
    width:20px;
`;

const SelectCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:20px;
`;

export const AllComments: FC = () =>{

    const [inputText, setInputText] = useState<string>('');
    const [displayOption, setDisplayOption] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState<number>(0);

    const { commentList } = useSelector<IState, ICommentReducer>(globalState => ({
        ...globalState.comments
    }));
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText((e.target.value as string).trim().toLocaleLowerCase());
        setCurrentPage(0);
    };

    const pages: any[] = [];
    const tempArr: any[] = commentList.filter(el => el.body.includes(inputText))
                                      .filter(el => displayOption == 'All' ? el : el.id < 15);

    for(let i = 0; i < tempArr.length; i += 10)
    {
        pages.push(tempArr.slice(i,i+10)); 
    }
    const pageCount:number = pages?.length - 1;

    return(
        <>
            <TitleBar>
                <Title>Resume your work</Title>
                <Filter><SearchBar searchHandler={inputChangeHandler}/></Filter>
                <SelectCont>
                <SmallIcon src={signal}/>
                    <CustomSelect value={displayOption} onChange={(e) => setDisplayOption(`${e.target.value}`)}>
                        <option>All</option>
                        <option>Followed</option>
                    </CustomSelect>
                </SelectCont>
            </TitleBar>
            
            {pages[currentPage]?.map( (e:IComment,index:number) => 
                (<SingleComment text={e.body} title={e.name} postId={e.postId} key={index}/>)
            )}

            <PageSelector>
                <CustomButton onClick={
                    () => currentPage > 0 
                        ? setCurrentPage(currentPage - 1) 
                        : setCurrentPage(currentPage)
                }>Previous</CustomButton>

                { pageCount < 3 
                    ?   pages.map((el,index) => 
                        (<PageButton onClick={() => setCurrentPage(index)} key={index}>{index+1}</PageButton>))
                    :   (
                        <>
                            { currentPage > 0 &&
                            <>
                                <PageButton onClick={() => setCurrentPage(0)} key={0}>{1}</PageButton>
                                <>...</>
                            </>
                            }
                            { currentPage > 1 &&
                            <PageButton onClick={() => setCurrentPage(currentPage - 1)} key={currentPage - 1}>{currentPage}</PageButton>}
                            
                            <CurrentPageButton onClick={() => setCurrentPage(currentPage)} key={currentPage}>{currentPage + 1}</CurrentPageButton>
                            { currentPage < pageCount &&
                                <PageButton onClick={() => setCurrentPage(currentPage + 1)} key={currentPage + 1}>{currentPage + 2}</PageButton>}
                            
                            { currentPage < pageCount - 1 &&
                            <>  
                                <>...</>
                                <PageButton onClick={() => setCurrentPage(pageCount)} key={pageCount}>{pageCount + 1}</PageButton>
                            </>
                            }
                        </>
                        )
                }
                
                <CustomButton onClick={
                    () => currentPage < pageCount
                        ? setCurrentPage(currentPage + 1) 
                        : setCurrentPage(currentPage)
                }>Next</CustomButton>
                
            </PageSelector>
        </>
    );
}

export default AllComments;