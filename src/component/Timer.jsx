import React, { useEffect } from 'react'

const Timer = (props) => {

    useEffect(()=>{
        // setInterval 함수는 1초마다 안에 선언한 콜백함수를 동작하는 함수
        const timer = setInterval(()=>{
            console.log('타이머 돌아가는중...')
        },1000)
        return ()=>{
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.')
        }
    },[]);


  return (
    <div>
        <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  )
}

export default Timer