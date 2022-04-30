import styles from './App.module.sass'
import { MainPage } from './pages/Main/MainPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { SignPage } from './pages/SignPage/SignPage'
import PersonalArea from './pages/PersonalArea/PersonalArea';
import { QuestionnairePage } from './pages/QuestionnairePage/QuestionnairePage';
import Calculator from './pages/Calculator/Calculator';
import Training from './pages/Training/Training';
import MainLayout from './components/Layouts/MainLayout/MainLayout';
import Timer from './pages/Timer/Timer';
import TrackWeight from './pages/TrackWeight/TrackWeight';
import Tracker from './pages/Tracker/Tracker';
import Test from './pages/Test/Test';

const App = () => {
  return (
    <div className={styles.App}>
      <MainLayout>
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/registration' element={<RegistrationPage />} />
            <Route path='/sign' element={<SignPage />} />
            {/* <Route path='/user/:name' element={<PersonalArea />} /> */}
            <Route path='/user' element={<PersonalArea />} />
            <Route path='/questionnaire' element={<QuestionnairePage data="" />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/training' element={<Training />} />
            <Route path='/timer' element={<Timer />} />
            <Route path='/track' element={<TrackWeight />} />
            <Route path='/tracker' element={<Tracker tasksList={[]} />} />
            <Route path='/test' element={<Test />} />
          </Routes>
        </Router>
      </MainLayout>
    </div>
  );
}

export default App;


