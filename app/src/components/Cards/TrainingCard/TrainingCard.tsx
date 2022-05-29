import { motion } from 'framer-motion';
import { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useAppSelector } from '../../../utils/redux-hooks';
import styles from '../TrainingCard/TrainingCard.module.sass';

interface Props {
    picture: string
    name: string,
    link: string
}
const BoxShadow = styled.div`
  transition: all 0.50s linear;
  box-shadow: ${props => props.theme.boxShadow};
`;

const TrainingCard: FC<Props> = ({ picture, name, link }) => {
    const theme = useAppSelector(state => state.theme);
    return (<ThemeProvider theme={theme}>

        <div className={styles.training_card} >
            <BoxShadow>
                <a href={link} target='_blank'>
                    <div className={styles.training_card__top}>
                        <img src={picture} alt='exercise' />
                    </div>
                    <motion.div animate={{ x: 100 }} />
                    <div className={styles.training_card__bottom}>
                        <div className={styles.training_card__bottom__title}>
                            <p>{name}</p>
                        </div>
                    </div>
                    
                </a>
            </BoxShadow>
        </div>
    </ThemeProvider>
    );
};

export default TrainingCard;