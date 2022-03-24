import { Icon } from "../../components/Icon/Icon";
import { TimeBlock } from "../../components/TimeBlock/timeBlock";
import styles from "../Timer/Timer.module.sass";
import right_arrow from '../../assets/images/arr.svg'
import refresh from '../../assets/images/refresh.svg'
import stop from '../../assets/images/stop.svg'
import left_arrow from '../../assets/images/rarr.svg'
import line from '../../assets/images/line.svg'
import React, { useEffect, useRef, useState } from 'react'

const preparationTime = 55
const workTime = 10
const restTime = 10
const rounds = 5

const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        if (delay !== null) {
            const intervalId = setInterval(() => savedCallback.current(), delay);
            return () => clearInterval(intervalId);
        }
    }, [delay]);
};

export const Timer = () => {

    const [currentRound, setCurrentRound] = useState(1)
    const [isWorking, setIsWorking] = useState(true)
    const [timeRemainig, setTimeRemaining] = useState(workTime)
    const [isTimerRunning, setIsTimerRunning] = useState(false)
    const tick = () => {
        const isLastTickInInterval = timeRemainig === 1
        if (isLastTickInInterval) {
            console.log(`${isWorking ? 'Work' : 'Rest'} Interval Complete`)
            setTimeRemaining(isWorking? workTime : restTime)
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
        setTimeRemaining(isWorking? workTime : restTime)
    }


    return (

        <div className={styles.page_content}>
            <div className={styles.upper_header}>
                <div className={styles.logo_wrapper}>
                    <Icon name="logo" width="85" height="62" />
                    <p>Таймер</p>
                </div>
            </div>
            <div className={styles.page_content_wrapper}>
                <div className={styles.title_wrapper}>
                    {/* <p>Подготовка</p> */}
                    <p>{isWorking? 'Работа' : 'Отдых'}</p>
                    <button className={styles.button_timer_wrapper} onClick={toggleIsTimerRuning}>
                         {
                            (isTimerRunning)?
                            <img src={stop} width={60} />:
                            <img src={right_arrow} width={30} /> 
                         }
                    </button>
                    <button className={styles.button_timer_wrapper} onClick={reset} disabled={isTimerRunning}>
                        <img src={refresh} width={60}  />
                    </button>
                </div>
                <div className={styles.time_wrapper}>
                    <p>{timeRemainig}</p>
                </div>
                <TimeBlock type={isWorking? 'Работа' : 'Отдых'} time={timeRemainig} />
                <TimeBlock type="Работа" time={55} />
                <TimeBlock type="Отдых" time={55} />
                <TimeBlock type="Работа" time={55} />
                <TimeBlock type="Отдых" time={55} />
                <TimeBlock type="Работа" time={55} />
                <div className={styles.work_time_block}>
                    <img src={line} width={6.8} />
                    <img src={left_arrow} width={40} />
                    <p>{`${currentRound}/${rounds}`}</p>
                    <img src={right_arrow} width={40} />
                    <img src={line} width={6.8} />
                </div>
            </div>
        </div>
    )
}
const useSecondInterval = (callback: () => void, isRunning: boolean) => {
    const delay = 400
    useInterval(callback, isRunning ? delay : null)
}