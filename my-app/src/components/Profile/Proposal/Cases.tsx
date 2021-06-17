import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import { CustomInput } from '../../../styledHelpers/Components';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import {date} from '../../../tools/date';

const Wrapper = styled.div`
    width:100%;
`;

const Headers = styled.div`
    display:flex;
    border-bottom:1px solid ${Colors.lightGray};
    font-weight: bold;
    padding-left: 10px;
`;

const Header = styled.div`
    width: calc(1000px / 6);
    font-size: ${fontSize[18]};
    padding:10px;
`;

const Data = styled.div`
    display:flex;
    width:100%;
`;

const Column = styled.div`
    width: calc(1000px / 6);
    padding:10px;
    display:flex;
    flex-direction:column;
`;

const Row = styled.div`
    padding:2px 4px;
    font-size: ${fontSize[14]};
    width:100px;
    height:20px;
    padding:5px 10px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

const CustomDatePicker = styled(DatePicker)`
    height:25px;
    width:100px;
    box-sizing:border-box;
    padding:3px;
    border:1px solid ${Colors.lightGray};
    border-radius:2px;
`;

interface ICases{
    isEditable: boolean;
}

export const Cases: FC<ICases> = (props) =>{

    const [data, setData] = useState(
        {
        names:[
            {id:0,value:'Operation Times'},
            {id:1,value:'Op. to kretyn'},
            {id:2,value:'Op. Avelante'}],
        entity:[
            {id:0,value:'Renault Corporation'},
            {id:1,value:'Mercedes Benz Daimler'},
            {id:2,value:'Renault Brazil'}],
        location:[
            {id:0,value:'France'},
            {id:1,value:'Germany'},
            {id:2,value:'Brazil'}],
        expertise:[
            {id:0,value:'#TAX'},
            {id:1,value:'#MDM&A'},
            {id:2,value:'#Social'}],
        date:[
            {id:0,value:'Mon Jan 20 2018 00:00:00 GMT+0200 (czas środkowoeuropejski letni)'},
            {id:1,value:'Mon Feb 18 2019 00:00:00 GMT+0200 (czas środkowoeuropejski letni)'},
            {id:2,value:'Mon Feb 18 2019 00:00:00 GMT+0200 (czas środkowoeuropejski letni)'}],
        firm:[
            {id:0,value:'Racinne'},
            {id:1,value:'Clifford'},
            {id:2,value:'SVZ'}],
        }
    );

    return(
        <Wrapper>
            <Headers>
                <Header>Name</Header>
                <Header>Entity</Header>
                <Header>Location</Header>
                <Header>Expertise</Header>
                <Header>Date</Header>
                <Header>Firm</Header>
            </Headers>
            <Data>
                <Column>
                    {!props.isEditable ?
                        data.names.map(el => (<Row>{el.value}</Row>)) :
                        data.names.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.names.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,names: newData});
                        }}></CustomInput>))}
                </Column>
                <Column>

                {!props.isEditable ?
                        data.entity.map(el => (<Row>{el.value}</Row>)) :
                        data.entity.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.entity.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,entity: newData});
                        }}></CustomInput>))}
                </Column>
                <Column>
                {!props.isEditable ?
                        data.location.map(el => (<Row>{el.value}</Row>)) :
                        data.location.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.location.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,location: newData});
                        }}></CustomInput>))}
                </Column>
                <Column>
                {!props.isEditable ?
                        data.expertise.map(el => (<Row>{el.value}</Row>)) :
                        data.expertise.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.expertise.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,expertise: newData});
                        }}></CustomInput>))}
                </Column>
                <Column>
                {!props.isEditable ?
                        data.date.map(el => (<Row>{date(new Date(el.value))}</Row>)) 
                        :
                        data.date.map((el,index) => (<CustomDatePicker 
                        selected={Date.parse(data?.date[index].value)} 
                        dateFormat="dd/MM/yyyy"
                        onChange={e => {
                            let newData = data?.date.map(el => {
                                if(el.id == index)
                                    {el.value = `${e}`;return el;}
                                else return el;
                            }); setData({...data,date: newData});
                        }}/>))}
                </Column>
                <Column>
                {!props.isEditable ?
                        data.firm.map(el => (<Row>{el.value}</Row>)) :
                        data.firm.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.firm.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,firm: newData});
                        }}></CustomInput>))}
                </Column>
            </Data>
        </Wrapper>
    );
};

export default Cases;