import styles from '../CustomBtnLayout/CustomBtnLayout.module.sass'
import { FC } from 'react';

interface Props { }

const CustomButton:FC<Props> = ({ children }) => {
  return (
      <div className={styles.custom_btn}>
          {children}
      </div>
  );
}

export default CustomButton;
