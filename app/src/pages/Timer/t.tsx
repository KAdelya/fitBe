import React, { useEffect, useRef, useState } from 'react'
import styles from "../Timer/Timer.module.sass";

const workTime = 5
const restTime = 3
const rounds = 3

const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef(callback);
  
    React.useEffect(() => {
      savedCallback.current = callback;
    });
  
    useEffect(() => {
      if (delay !== null) {
        const intervalId = setInterval(() => savedCallback.current(), delay);
        return () => clearInterval(intervalId);
      }
    }, [delay]);
  };

export default function Tmr() {
  const [currentRound, setCurrentRound] = useState(1)
  const [isWorking, setIsWorking] = useState(true)
  const [timeRemainig, setTimeRemaining] = useState(workTime)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  const tick = () => {
    const isLastTickInInterval = timeRemainig === 1
    if (isLastTickInInterval) {
      console.log(`${isWorking ? 'Work' : 'Rest'} Interval Complete`)
      setTimeRemaining(isWorking ? restTime : workTime)
      setIsWorking((isWorking) => !isWorking)
      const isRestIntervalEnd = isWorking === false
      if (isRestIntervalEnd) {
        console.log(`Round ${currentRound} Complete`)
        const isWorkoutComplete = currentRound === rounds
        if (isWorkoutComplete) {
          console.log('Workout Complete')
          setIsTimerRunning(false)
        } else {
          setCurrentRound((currentRound) => currentRound + 1)
        }
      }
    } else {
      setTimeRemaining((timeRemainig) => timeRemainig - 1)
    }
  }

  useSecondInterval(tick, isTimerRunning)

  const toggleIsTimerRuning = () => {
    setIsTimerRunning((isTimerRunning) => !isTimerRunning)
  }

  const reset = () => {
    setTimeRemaining(isWorking ? workTime : restTime)
  }

  return (
    <div className={styles.t_wrap}>
      <p>{`${currentRound}/${rounds}`}</p>
      <p>{isWorking ? 'Work' : 'Rest'}</p>
      <p>{timeRemainig}</p> 
      {/* тек время */}
      <button onClick={toggleIsTimerRuning}>play/pause</button>
      <button onClick={reset} disabled={isTimerRunning}>
        reset
      </button>
    </div>
  )
}

const useSecondInterval = (callback: () => void, isRunning: boolean) => {
  const delay = 1000
  useInterval(callback, isRunning ? delay : null)
}