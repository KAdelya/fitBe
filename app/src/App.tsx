import styles from './App.module.sass'
import { MainPage } from './pages/MainPage/MainPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { SignPage } from './pages/SignPage/SignPage'
import PersonalArea from './pages/PersonalArea/PersonalArea';
import { Questionnaire } from './pages/Questionnaire/Questionnaire';
import  Timer  from './pages/Timer/Timer';
import Calculator from './pages/Calculator/Calculator';
import Training from './pages/Training/Training';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import TrackWeight from './pages/TrackWeight/TrackWeight';


const App = () => {
  return (
    <div className={styles.App}>
      <MainLayout>
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/registration' element={<RegistrationPage />} />
            <Route path='/sign' element={<SignPage />} />
            <Route path='/user' element={<PersonalArea />} />
            <Route path='/questionnaire' element={<Questionnaire />} />
            <Route path='/timer' element={<Timer />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/training' element={<Training />} />
            <Route path='/track' element={<TrackWeight />} />
          </Routes>
        </Router>
      </MainLayout>
    </div>
  );
}

export default App;


