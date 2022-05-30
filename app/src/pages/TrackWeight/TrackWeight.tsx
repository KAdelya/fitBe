import styles from '../TrackWeight/TrackWeight.module.sass';
import { AreaChart, Area,  XAxis, YAxis, CartesianGrid, Tooltip}  from 'recharts';
import { curveCardinal } from 'd3-shape';
import { useEffect, useState } from 'react';
import { onValue, ref, update } from 'firebase/database';
import { db } from '../..';
import { useAuth } from '../../utils/use-auth';
import { data } from '../../constants';

const TrackWeight = () => {

    const [weight, setWeight] = useState('');
    const { id } = useAuth();
    const cardinal = curveCardinal.tension(0);

    let [startWeight, setStartWeight] = useState();
    let [curWeight, setCurWeight] = useState();
    let [desiredWeight, setDesiredWeight] = useState();
    
    useEffect(() => {
            const dbRef = (ref(db, `/${id}`));
            onValue(dbRef, (snapshot: any) => {
                setStartWeight(startWeight = snapshot.val().weight.startWeight);
                setCurWeight(curWeight = snapshot.val().weight.currentWeight);
                setDesiredWeight(desiredWeight = snapshot.val().weight.desiredWeight);
            });
            setStartWeight(startWeight);
            setCurWeight(curWeight);
            setDesiredWeight(desiredWeight);
    },[]);

    async function updateInDataBase(id: any) {
        update(ref(db, `/${id}`), {
            weight: {
                startWeight: startWeight,
                currentWeight: weight,
                desiredWeight: desiredWeight
            },
        }).catch((error) => { console.log( error);});
    }
    return (
        <div>
            <section className={styles.track_page}>
                <div className={styles.track_page__inputs}>
                    <div className={styles.track_page__inputs__top}>
                        <input value={weight} name="firstName" onChange={e => setWeight(e.target.value)} />
                        <button onClick={() => updateInDataBase(id)}>update</button>
                        <br />
                        <label>Last weigh-in 22.03.2022</label>
                    </div>
                    <div className={styles.track_page__inputs__bottom}>
                        <div className={styles.track_page__inputs__bottom__wrapper}>
                            <input value={startWeight} />
                            <br />
                            <label>Starting weight</label>
                        </div>
                        <div className={styles.track_page__inputs__bottom__wrapper}>
                            <input value={desiredWeight} />
                            <br />
                            <label>Desired weight</label>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.schedule}>
                <div className={styles.schedule__content}>
                    <AreaChart
                        width={1000}
                        height={420}
                        data={data}>

                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="uv"
                            stroke="#8884d8"
                            fill="#8884d8"
                            fillOpacity={0.3}
                        />
                        <Area
                            type={cardinal}
                            dataKey="uv"
                            stroke="#d90921"
                            strokeWidth={2}
                            fill="#853CFC"
                            fillOpacity={0.6}
                        />
                    </AreaChart>
                </div>
            </section>
        </div>
    );
};
export default TrackWeight;