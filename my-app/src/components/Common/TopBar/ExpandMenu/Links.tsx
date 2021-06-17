import {FC} from 'react';
import styled from 'styled-components';
import ExpandMenuLink from './Buttons/ExpandMenuLink';
import houseImg from '../../../../icons/house2.svg';
import publicationsImg from '../../../../icons/publications.svg';
import peopleImg from '../../../../icons/people.svg';
import entitiesImg from '../../../../icons/entities.svg';
import administrationImg from '../../../../icons/administration.svg';
import { SubMenuTitle } from '../../../../styledHelpers/Components';
import workspaceData from '../../../../tools/workspacesData';

const LinksBody = styled.div`
    max-height:300px;
    width:100%;
    overflow-x:hidden;
    overflow-y: scroll;
`;

interface ILinks{
    closeDropdown(): void;
    filterValue: string;
}

export const Links: FC<ILinks> = (props) => {
    
    const closeDropMenu = () => {
        props.closeDropdown ();
    }

    return(
        <LinksBody>
                {props.filterValue.length === 0 &&
                <SubMenuTitle> Platform </SubMenuTitle>}
                {'home'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"Home"} imgSrc={houseImg} linkTo="/"/>}
                {'publications'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"Publications"} imgSrc={publicationsImg} linkTo="/publications"/>}
                {'people'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"People"} imgSrc={peopleImg} linkTo="/people"/>}
                {'entities'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"Entities"} imgSrc={entitiesImg} linkTo="/entities"/>}
                {'administration'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"Administration"} imgSrc={administrationImg} linkTo="/administration"/>}
                {props.filterValue.length === 0 &&
                <SubMenuTitle> Workspaces</SubMenuTitle>}
                {workspaceData.map(workspace => {
                    if(workspace.name.toLocaleLowerCase().includes(props.filterValue))
                        return (<ExpandMenuLink 
                                onClick={closeDropMenu}  
                                title={workspace.name} 
                                imgName={workspaceData.filter(el => el.id === workspace.id)[0].icon} 
                                linkTo={`/workspaces/${workspace.id}`}
                                />)})}
        </LinksBody>
    );
};

export default Links;