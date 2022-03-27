import styles from './App.module.sass'
import { MainPage } from './pages/MainPage/MainPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { SignPage } from './pages/SignPage/SignPage'
import PersonalArea from './pages/PersonalArea/PersonalArea';
import { CharitableFoundationPage } from "./pages/CharitableFoundationPage/CharitableFoundationPage";
import { SubscriptionPaymentPage } from "./pages/SubscriptionPaymentPage/SubscriptionPaymentPage";
import { Questionnaire } from './pages/Questionnaire/Questionnaire';
import { TopParticipantsPage } from "./pages/TopParticipantsPage/TopParticipantsPage";
import { ViewSubscriptionsPage } from "./pages/ViewSubscriptionsPage/ViewSubscriptionsPage";
import { Timer } from './pages/Timer/Timer';
import { TimerSettings } from './pages/TimerSettings/TimerSettings';
import { News } from './pages/News/News';
import Calculator from './pages/Calculator/Calculator';
import Training from './pages/Training/Training';
import Modal from "./components/layouts/Modal";
import {ModalWelcome} from "./components/modal/ModalWelcome";

const App = () => {
  
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/news' element={<News />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/sign' element={<SignPage />} />
          <Route path='/user' element={<PersonalArea />} />
          <Route path='/view_subscriptions' element={<ViewSubscriptionsPage />} />
          <Route path='/top_participants' element={<TopParticipantsPage />} />
          <Route path='/charitable_foundation' element={<CharitableFoundationPage />} />
          <Route path='/subscription_payment' element={<SubscriptionPaymentPage />} />
          <Route path='/questionnaire' element={<Questionnaire />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/timer_settings' element={<TimerSettings />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/training' element={<Training />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


