import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
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
  return (
    <div>
      <Header />
      <section className={styles.content_wrapper}>
        <div className={styles.input_block_wrapper}>
          <div className={styles.input_wrapper_main}>
            <input value={90} />
            <br />
            <label>Last weigh-in 22.03.2022</label>
          </div>
          <div className={styles.lower_input_wrapper}>
            <div className={styles.input_wrapper}>
              <input value={70} />
              <br />
              <label>Starting weight</label>
            </div>
            <div className={styles.input_wrapper}>
              <input value={95} />
              <br />
              <label>Desired weight</label>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.schedule_wrapper}>
        <div className={styles.schedule}>
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
      <Footer />
    </div>
  )
}
export default TrackWeight;