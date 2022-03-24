import { Icon } from "../../components/Icon/Icon";
import styles from "../TimerSettings/TimerSettings.module.sass";
import { TimeSettingsBlock } from "../../components/TimeBlock/timeSettingsBlock";
import React, { useEffect, useRef, useState } from 'react'

export const TimerSettings = () => {

    const [restTime, setRestTime] = useState('')
    const [workTime, setWorkTime] = useState('')
    const [rounds, setRounds] = useState('')

    const DataTime = [
        { work: workTime },
        { rest: restTime },
        { round: rounds },
    ]

    return (
        <div className={styles.page_content}>
            <div className={styles.upper_header}>
                <div className={styles.logo_wrapper}>
                    <Icon name="logo" width="85" height="62" />
                    <p>Таймер</p>
                </div>
            </div>
            <div className={styles.content_wrapper}>
                <TimeSettingsBlock type="Подготовка" onChange={(event: any) => setWorkTime(event.target.value)} />
                <TimeSettingsBlock type="Работа" onChange={(event: any) => setWorkTime(event.target.value)} />
                <TimeSettingsBlock type="Отдых" onChange={(event: any) => setRestTime(event.target.value)} />
                <TimeSettingsBlock type="Циклы" onChange={(event: any) => setRounds(event.target.value)} />
                <TimeSettingsBlock type="Сеты" onChange={(event: any) => setWorkTime(event.target.value)} />
                <TimeSettingsBlock type="Отдых между сетами" onChange={(event: any) => setWorkTime(event.target.value)} />
            </div>
            <div className={styles.button_wrapper}>
                <button>Старт</button>
            </div>
        </div>
    )
}

