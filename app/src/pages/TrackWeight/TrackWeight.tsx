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
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
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
            <input />
            <label>kosjpo</label>
          </div>
          <div className={styles.lower_input_wrapper}>
            <div className={styles.input_wrapper}>
              <input />
            </div>
            <div className={styles.input_wrapper}>
              <input />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.schedule_wrapper}>
        <div className={styles.schedule}>
        <AreaChart
          width={800}
          height={400}
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