import styles from './App.module.sass'
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Timer from './pages/Timer/Timer';
import Calculator from './pages/Calculator/Calculator';
import Training from './pages/Training/Training';
import TrackWeight from './pages/TrackWeight/TrackWeight';
import MainLayout from './components/Layouts/MainLayout/MainLayout';
import { MainPage } from './pages/Main/MainPage';
import Profil from './pages/Profil/Profil';
import { Questionnaire } from './components/Questionnaire/Questionnaire';
import { Login } from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useAuth } from './utils/use-auth';
import Tracker from './pages/Tracker/Tracker';
import { QuestionnairePage } from './pages/QuestionnairePage/QuestionnairePage';


const App = () => {
  const { isAuth, email, id } = useAuth();
  return (
    <div className={styles.App}>
      <MainLayout>
        <Router>
          
        <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path={`/questionnaire`} element={<QuestionnairePage />} />
              <Route path='/registration' element={<RegistrationPage />} />
              <Route path='/login' element={<Login />} />

              <Route path={`/user`} element={<Profil />} />
              <Route path={`/timer`} element={<Timer />} />
              <Route path={`/calculator`} element={<Calculator />} />
              <Route path={`/training`} element={<Training />} />
              <Route path={`/track`} element={<TrackWeight />} />
              <Route path={`/tracker`} element={<Tracker/>}/>
          </Routes>
        </Router>
      </MainLayout>

    </div>
  );
}

export default App;