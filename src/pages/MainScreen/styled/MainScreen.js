import styled,{css} from 'styled-components';

const lightTheme = {
  background: '#fff',
  color: '#000',
};

const darkTheme = {
  background: '#333',
  color: '#fff',
};

const getTheme = (theme) => (theme === 'dark' ? darkTheme : lightTheme);


export const TotalWrapper = styled.div`
${({theme})=> css`
background-color: ${getTheme(theme).background};
min-height: 100vh;
display:flex;
align-items: center;
justify-content:center;

`}
`;

export const SubWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
width: 80%;
height: 500px;
`

export const InputWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 500px;
background-color: gray;
`;

export const Input = styled.input`
  width: 75%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #4A90E2;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const Button1 = styled.button`
background-color: skyblue;
color: white;
width: 20%;
height: 50px;
  outline: none;
  border-radius:15px;
  border: none;
font-size: 20px;
font-weight: 800;
margin-left:15px;

&:hover{
background-color: deepskyblue;
color: white;
}

&:active{
background-color: dodgerbue;
color: black;

}

`;

export const Button2 = styled.button`
background-color: pink;
color: white;
width: 20%;
height: 50px;
  outline: none;
  border-radius:15px;
  border: none;
font-size: 20px;
font-weight: 800;
margin-left:15px;
margin-top: 15px;

&:hover{
background-color: rgb(246, 74, 138);
color: white;
}

&:active{
background-color: rgb(246, 74, 138);
color: black;

}

`;

export const RecordList = styled.div`
margin-top: 20px;
`
export const RecordItem = styled.div`
   padding: 10px;
    background-color: #f1f1f1;
    border-radius: 5px;
    margin-top: 5px;
`