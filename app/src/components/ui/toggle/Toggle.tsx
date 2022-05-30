import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../toggle/Toggle.module.sass';
import { useAppDispatch, useAppSelector } from '../../../utils/redux-hooks';
import { setTheme } from '../../../redux/slices/themeSlice';
import { darkTheme, lightTheme } from '../../../constants';


const Toggle = () => {
    const [isOn, setIsOn] = useState(false);
    const dispatch = useAppDispatch();
    const theme = useAppSelector(state => state.theme);
    const toggleSwitch = () => {
        setIsOn(!isOn);
        dispatch(setTheme(theme === darkTheme? lightTheme: darkTheme));
        ;};
        
    return (
        <div className={styles.switch} data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className={styles.handle} layout transition={spring} />
        </div>
    );
};
const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
};

export default Toggle;
