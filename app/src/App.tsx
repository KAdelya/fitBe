import styles from './App.module.sass'
import { MainPage } from './pages/MainPage/MainPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { SignPage } from './pages/SignPage/SignPage'
import PersonalArea from './pages/PersonalArea/PersonalArea';
import { QuestionnairePage } from './pages/QuestionnairePage/QuestionnairePage';
import Calculator from './pages/Calculator/Calculator';
import Training from './pages/Training/Training';
<<<<<<< HEAD
import MainLayout from './components/Layouts/MainLayout/MainLayout';
import Timer from './pages/Timer/Timer';
import TrackWeight from './pages/TrackWeight/TrackWeight';

=======
import MainLayout from './components/layouts/MainLayout/MainLayout';
>>>>>>> ef55964a32c8e9682578d8c8356250b0d66c4148
const App = () => {
  return (
    <div className={styles.App}>
      <MainLayout>
<<<<<<< HEAD
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/registration' element={<RegistrationPage />} />
            <Route path='/sign' element={<SignPage />} />
            <Route path='/user' element={<PersonalArea />} />
            <Route path='/questionnaire' element={<QuestionnairePage data="" />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/training' element={<Training />} />
            <Route path='/timer' element={<Timer />} />
            <Route path='/track' element={<TrackWeight />} />
          </Routes>
        </Router>
=======
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
          {/*<Route path='/questionnaire' element={<QuestionnairePage data=""/>} />*/}
          <Route path='/timer' element={<Timer />} />
          <Route path='/timer_settings' element={<TimerSettings />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/training' element={<Training />} />
        </Routes>
      </Router>
>>>>>>> ef55964a32c8e9682578d8c8356250b0d66c4148
      </MainLayout>
    </div>
  );
}

export default App;


