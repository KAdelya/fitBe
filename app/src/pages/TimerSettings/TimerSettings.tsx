import { Icon } from "../../components/Icon/Icon";
import styles from "../TimerSettings/TimerSettings.module.sass";
import { TimeSettingsBlock } from "../../components/TimeBlock/timeSettingsBlock";
import React, { useEffect, useRef, useState } from 'react'

const preparationTime = 55
const workTime = 50
const restTime = 30
const rounds = 3

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

export const TimerSettings = () => {
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
        <div className={styles.page_content}>
            <div className={styles.upper_header}>
                <div className={styles.logo_wrapper}>
                    <Icon name="logo" width="85" height="62" />
                    <p>Таймер</p>
                    <p>{`${currentRound}/${rounds}`}</p>
                    <p>{isWorking ? 'Work' : 'Rest'}</p>
                    <p>{timeRemainig}</p>
                    <button onClick={toggleIsTimerRuning}>play/pause</button>
                    <button onClick={reset} disabled={isTimerRunning}>reset</button>
                </div>
            </div>
            <div className={styles.content_wrapper}>
                <TimeSettingsBlock type="Подготовка" time={55} />
                <TimeSettingsBlock type="Работа" time={45} />
                <TimeSettingsBlock type="Отдых" time={0} />
                <TimeSettingsBlock type="Циклы" time={0} />
                <TimeSettingsBlock type="Сеты" time={0} />
                <TimeSettingsBlock type="Отдых между сетами" time={0} />
            </div>
            <div className={styles.button_wrapper}>
                <button>Старт</button>
            </div>
        </div>
    )
}

const useSecondInterval = (callback: () => void, isRunning: boolean) => {
    const delay = 1000
    useInterval(callback, isRunning ? delay : null)
}
