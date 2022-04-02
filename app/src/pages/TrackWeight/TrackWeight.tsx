import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from '../../components/ui/button/button';
import styles from '../TrackWeight/TrackWeight.module.sass'

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
      <Footer />
    </div>
  )
}
export default TrackWeight;