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


const App = () => {
  return (
    <div className={styles.App}>
      <MainLayout>
        <Router>
          
        <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/questionnaire' element={<Questionnaire data={undefined} />} />
              <Route path='/registration' element={<RegistrationPage />} />
              <Route path='login' element={<Login />} />

              <Route path='/user/:id' element={<Profil />} />
              <Route path='/timer/:id' element={<Timer />} />
              <Route path='/calculator/:id' element={<Calculator />} />
              <Route path='/training/:id' element={<Training />} />
              <Route path='/track/:id' element={<TrackWeight />} />
          </Routes>
        </Router>
      </MainLayout>

    </div>
  );
}

export default App;