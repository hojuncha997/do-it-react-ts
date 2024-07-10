import { useState } from 'react'
import { useInterval } from './useInterval'

export const useClock = () => {
  const [today, setToday] = useState(new Date())

  // 1초마다 현재 시각을 업데이트
  useInterval(() => setToday(new Date()))
  return today
}
