import styles from '../Skeletons/Skeleton.module.sass';
import { animated, easings, useSpring } from 'react-spring';

const Skeleton = () => {
    const { background } = useSpring({
        from: {
            background: 'linear-gradient(180deg, rgba(104, 119, 255, 0.9) 0%, rgba(104, 119, 255, 0.702) 100%)'
        },
        to: {
            background: 'linear-gradient(180deg, rgba(104, 119, 255, 0.9) 0%, #7B68EE 100%)'
        },
        config: {
            duration: 900,
            easing: easings.easeInOutQuart,
        },
        loop: { reverse: true },
    });
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <animated.div style={{ background, width: 250, height: 180, borderRadius: 15, }} />
            </div>
        </div>
    );
};

export default Skeleton;
