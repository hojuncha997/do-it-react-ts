import { useEffect } from 'react'

// 주어진 콜백 함수를 지정된 간격(duration)으로 호출하는 useInterval 훅
// 콜백 함수가 제공되지 않으면 아무 동작도 하지 않음
export const useInterval = (callback: () => void, duration: number = 1000) => {
  useEffect(() => {
    // setInterval을 사용하여 지정된 간격으로 콜백 함수를 호출
    const id = setInterval(callback, duration)
    // 컴포넌트가 언마운트될 때 clearInterval을 호출하여 setInterval을 정리
    return () => clearInterval(id)
  }, [callback, duration])
}
