import styles from '../TrackWeight/TrackWeight.module.sass'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { curveCardinal } from "d3-shape";
import { useEffect, useState } from 'react';
import { onValue, ref, update } from 'firebase/database';
import { db } from '../..';
import { useAuth } from '../../utils/use-auth';


const data = [
  {
    name: "18.11.2021",
    uv: 70,
    pv: 2400,
    amt: 2400
  },
  {
    name: "08.01.2022",
    uv: 78,
    pv: 1398,
    amt: 2210
  },
  {
    name: "02.02.2022",
    uv: 84,
    pv: 9800,
    amt: 2290
  },
  {
    name: "22.02.2022",
    uv: 88,
    pv: 3908,
    amt: 2000
  },
  {
    name: "22.03.2022",
    uv: 90,
    pv: 4800,
    amt: 2181
  }
];
const cardinal = curveCardinal.tension(0);
const TrackWeight = () => {
  let [startWeight, setStartWeight] = useState();
  let [curWeight, setCurWeight] = useState();
  let [desiredWeight, setDesiredWeight] = useState();
  const [weight, setWeight] = useState('')
  async function getInfoFromDataBase(id: any) {
    const dbRef = (ref(db, `/${id}`))
    onValue(dbRef, (snapshot: any) => {
      startWeight = snapshot.val().weight.start;
      curWeight = snapshot.val().weight.current;
      desiredWeight = snapshot.val().weight.desired;
    })
    setStartWeight(startWeight);
    setCurWeight(curWeight);
    setDesiredWeight(desiredWeight);
  }
  const { id } = useAuth();
  useEffect(() => {
    getInfoFromDataBase(id)
  })

  async function updateInDataBase(id: any) {
    update(ref(db, `/${id}`), {
      weight: {
        start: startWeight,
        current: weight,
        desired: desiredWeight
      },
    }).then(() => { console.log('update successfully') })
      .catch((error) => { alert('sorry :(' + error) })
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
  )
}
export default TrackWeight;