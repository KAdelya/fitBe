import { Icon } from '../../components/Icon/Icon';
import { MainBackground } from '../../components/MainBackground/MainBackground';
import styles from './Advertising.module.sass'

export const Advertising = () => {
    return (
        <div>
            <MainBackground/>
            <header>
                <div className={styles.logo_image}>
                    <Icon name="logo" width="112" height="88"/>
                    <div className={styles.logo_name}>BeFit</div>
                </div>
            </header>
        </div>
    );
}
