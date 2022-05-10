import styles from './../Main/MainPage.module.sass';
import firstPict from '../../assets/images/fit1.png';
import { NavLink } from 'react-router-dom';
import secondPict from '../../assets/images/fit2.png';
import thirdPict from '../../assets/images/fit3.png';
import { Icon } from '../../components/Icon/Icon';
import bacgroundPict from '../../assets/images/background.png'
import pink_back from '../../assets/images/pink_back.svg'
import Footer from '../../components/Footer/Footer';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';
import CustomButton from '../../components/ui/button/CustomBtnLayout/CustomBtnLayout';

export const MainPage = () => {
    return (
        <div>
            <header>
                <div className={styles.logo}>
                    <Icon name='logo' width={48} height={48} />
                    <p>BeFit</p>
                </div>
                <div className={styles.button}>
                    <NavLink to='/login'>
                        <CustomButton>SIGN IN</CustomButton>
                    </NavLink>
                </div>
            </header>
            <section className={styles.title}>
                <h1>Start changing with BeFit</h1>
                <div className={styles.title_container}>
                    <div className={styles.text}>
                        <p>We encourage you to go on a fitness journey with our app!</p>
                        <p>We offer realistic recommendations - no quick fixes because they just don't work.</p>
                        <p>You will learn to take care of yourself gradually changing habits.</p>
                        <div className={styles.button}>
                            <NavLink to='/registration'>
                                <MainCustomBtn>REGISTRATION</MainCustomBtn>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.img_back_wrapper}>
                        <div>
                            <img src={bacgroundPict} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.about}>
                <div className={styles.pink_back}>
                    <div className={styles.pink_back_wrapper}>
                        <img src={pink_back} />
                    </div>
                </div>
                <div className={styles.about_content}>
                    <h1>Who We Are</h1>
                    <div className={styles.text}>
                        <p>We encourage you to go on a fitness journey with our app!</p>
                        <p>We offer realistic recommendations - no quick fixes because they just don't work.</p>
                        <p>You will learn to take care of yourself gradually changing habits.</p>
                    </div>
                    <div className={styles.picture_content_wrap}>
                        <div><img src={firstPict} /></div>
                        <div><img src={secondPict} /></div>
                    </div>
                    <div className={styles.block_info_wrapper}>
                        <div className={styles.block_info}>
                            <h5>Be Brave</h5>
                            <p>We are agents of radical change, harnessing creative thinking and daring solutions to make a difference in the world.
                            </p>
                        </div>
                        <div className={styles.block_info}>
                            <h5>Have Fun</h5>
                            <p>We are all about finding what feels good and spreading the joy of the journey -- work and working out are about play.
                            </p>
                        </div>
                        <div className={styles.block_info}>
                            <h5>Have Compassion</h5>
                            <p>Listening and empathizing with both the people in our organization and the customers we serve is at the core of who we are.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.sport_women_wrapper}>
                <div className={styles.sport_women}>
                    <img src={thirdPict} />
                </div>
                <div className={styles.lower_text_block}>
                    <h1>Making health a priority with BeFit</h1>
                    <p>Soriane career was skyrocketing, but her unpredictable schedule often meant poor food choices and little time for exercise, which led to weight gain. Now, she works healthy habits into her busy calendar with HIIT workouts and by prepping healthy meals in advance––and she’s glowing as a result.</p>
                    <div className={styles.button}>
                        <NavLink to='/registration'>
                            <MainCustomBtn>REGISTRATION</MainCustomBtn>
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className={styles.footer}>
                <Footer />
            </section>
        </div>

    )
};