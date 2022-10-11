/*eslint-disable*/
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자', '여자', '가자']);
  let [따봉, 따봉변경] = useState([0,10,100]);
  let [modal, setModal] = useState(false);
  let [change, setChange] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <div className="list">
          <button onClick={() => {
            let copy = [...글제목];
            글제목변경(copy.sort());
          }}>
            가나다순 정렬
          </button>
      </div>
      <div>
        <input onChange={(e)=>{
          입력값변경(e.target.value);
          console.log(입력값);
        }}>
        </input>

        <button onClick={()=>{
          let copy = [...글제목];
          copy.push(입력값);
          글제목변경(copy);
        }}
        >
          글 발행
        </button>
      </div>
      
    {
      글제목.map((a, i)=>{
        return(
          <div className="list" key={i} onClick = { () => {
            setModal(!modal);
            setChange(i);
          }}>
            <h4>{a}</h4>
            <p>2월 17일 발행</p>

            <span onClick={(e)=>{
              e.stopPropagation();//이벤트 버블링 막기
              let copy = [...따봉];
              copy[i] += 1;
              따봉변경(copy);
            }}
            >
              좋아요 {따봉[i]}
            </span>

            <button onClick={(e)=>{
              let copy = [...글제목];
              
              console.log(copy[i]);
              copy.splice(i, 1);
              
              글제목변경(copy);
              e.stopPropagation();//이벤트 버블링 막기
            }}>
              글 삭제
            </button>
          </div>
        )
        
      })
    }

  {
   modal ? <Modal 글제목 = {글제목} 글제목변경 = {글제목변경} change = {change} color={'green'}/> : null
  }
    
    
  </div>
  )
}


function Modal(props) {
  
  return(
    <div className="modal" style={{backgroundColor : props.color}}>
      <h4>{props.글제목[props.change]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ () => {
        let copy = [...props.글제목];
        copy[0] = '테스트';
        props.글제목변경(copy);
      }}>
        글 수정
      </button>
    </div>
  )
}

export default App;
