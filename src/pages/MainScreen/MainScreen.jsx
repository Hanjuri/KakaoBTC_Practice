import * as React from 'react';
import {useState, useEffect, useContext} from 'react';
import * as mains from './styled/MainScreen';
import {ThemeContext} from './ThemeContext';

function MainScreen(){

    const [name, setName] = useState('');
    const [records, setRecords] = useState(()=>{
        const savedRecords = localStorage.getItem('items');
        return savedRecords ? JSON.parse(savedRecords):[];
        //records 상태는 locaStorage에 데이터를 가져와 초기화 한다
        //저장된 데이터를 가져오고 JSON 문자열을 JS배열로 변환한다
        //저장된 데이터가 없다면 빈 배열을 반환한다.
    })

    useEffect(()=>{
        localStorage.setItem('items',JSON.stringify(records));
    },[records]);
    // useEffect 훅을 사용하여 records 상태가 변경될 때마다 localStorage에 데이터 저장
    //JSON.stringfy(records)를 사용하여 배열을 JSON 문자열로 변환 , 저장


    const {isDarkTheme, toggleTheme} = useContext(ThemeContext);


    const handleButtonClick = ()=>{
        const currentTime = new Date().toLocaleString();
        const newRecord = `${name} : ${currentTime}`;
        setRecords([...records, newRecord]);
        //..records를 통해 기존 기록을 새로운 배열로 복사하고, 새로운 기록 newRecord를 배열의 마지막에 추가
        setName('');
        alert(newRecord);


    }

    return (
       <mains.TotalWrapper theme={isDarkTheme ? 'dark': 'light'}>
        <mains.SubWrapper>
        <mains.InputWrapper>
            <mains.Input
            value={name}
            onChange = {(e)=> setName(e.target.value)}
            placeholder="이름 입력"
            />
            <mains.Button1
            onClick={handleButtonClick}>확인</mains.Button1>
            
        </mains.InputWrapper>

        <mains.Button2 onClick={toggleTheme}>{isDarkTheme?'라이트모드 전환':'다크모드 전환'}</mains.Button2>
        <mains.RecordList>
            {records.map((record, index)=>(
                <mains.RecordItem key = {index}>{record}</mains.RecordItem>
            ))}
        </mains.RecordList>
        </mains.SubWrapper>
       </mains.TotalWrapper>
    )
}
export default MainScreen;
//input 요소는 self-closing