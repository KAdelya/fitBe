import styles from './../MainPage/MainPage.module.sass';
import firstPict from '../../assets/images/fit1.png';
import secondPict from '../../assets/images/fit2.png';
import thirdPict from '../../assets/images/fit3.png';
import { Icon } from '../../components/Icon/Icon';
import bacgroundPict from '../../assets/images/background.png'
import pink_back from '../../assets/images/pink_back.svg'
import Button from '../../components/ui/button/button';
import MainLayout from '../../components/layouts/MainLayout';

export const MainPage = () => {
    return (
        <>
            <header>
                <div className={styles.logo_wrapper}>
                    <Icon name='logo' width={48} height={48} />
                    <p>BeFit</p>
                </div>
                <div className={styles.button_wrapper}>
                    <Button text='SIGN IN' />
                </div>
            </header>
            <section className={styles.main_title}>
                <h1>Start changing with BeFit</h1>
                <div className={styles.title_container}>
                    <div className={styles.text_wrapper}>
                        <p>We encourage you to go on a fitness journey with our app!</p>
                        <br />
                        <p>We offer realistic recommendations - no quick fixes because they just don't work.</p>
                        <br />
                        <p>You will learn to take care of yourself gradually changing habits.</p>
                        <div className={styles.button_wrapper}>
                            <Button text='REGISTRATION' />
                        </div>
                    </div>
                    <div className={styles.img_back_wrapper}>
                        <img src={bacgroundPict} width={550} />
                    </div>
                </div>
            </section>
            <section className={styles.about}>
                <div className={styles.pink_back}>
                    <img src={pink_back} />
                </div>
                <div className={styles.about_content}>
                    <h1>Who We Are</h1>
                    <div className={styles.text_wrapper}>
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
                    <p>Soriane’s career was skyrocketing, but her unpredictable schedule often meant poor food choices and little time for exercise, which led to weight gain. Now, she works healthy habits into her busy calendar with HIIT workouts and by prepping healthy meals in advance––and she’s glowing as a result.</p>
                    <div className={styles.button_wrapper}>
                        <Button text='REGISTRATION' />
                    </div>
                </div>
            </section>
            <footer>
                <p>Copyright © 2022. All rights reserved</p>
            </footer>
        </>
    )
};