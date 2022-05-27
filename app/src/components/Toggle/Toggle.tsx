import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../Toggle/Toggle.module.sass';
import { darkTheme, lightTheme } from '../Themes/Theme';

interface Props {
    changeTheme: any
}

const Toggle:FC<Props> = ({changeTheme}) => {
    const [isOn, setIsOn] = useState(false);
    const [theme, setTheme] = useState(lightTheme);
    
    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };
    const toggleSwitch = () => {
        setIsOn(!isOn);
        toggleTheme();
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
