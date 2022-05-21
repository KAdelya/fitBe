import styles from './App.module.sass'
import {RegistrationPage} from './pages/RegistrationPage/RegistrationPage'
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Timer from './pages/Timer/Timer';
import Calculator from './pages/Calculator/Calculator';
import Training from './pages/Training/Training';
import TrackWeight from './pages/TrackWeight/TrackWeight';
import {MainPage} from './pages/Main/MainPage';
import Profil from './pages/Profil/Profil';
import {useAuth} from './utils/use-auth';
import Todods from './pages/Todods/Todods';
import {QuestionnairePage} from './pages/QuestionnairePage/QuestionnairePage';
import {LoginPage} from './pages/Login/LoginPage';
import ProfilContainer from './components/Layouts/ProfilContainer/ProfilContainer';


const App = () => {
    const {isAuth, email, id} = useAuth();
    return (
        <div className={styles.App}>
            <Router>

                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path={`/questionnaire`} element={<QuestionnairePage/>}/>
                    <Route path='/registration' element={<RegistrationPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>

                    <Route path={`/user`} element={<ProfilContainer><Profil/></ProfilContainer>}/>
                    <Route path={`/timer`} element={<ProfilContainer><Timer/></ProfilContainer>}/>
                    <Route path={`/calculator`} element={<ProfilContainer><Calculator/></ProfilContainer>}/>
                    <Route path={`/training`} element={<ProfilContainer><Training/></ProfilContainer>}/>
                    <Route path={`/track`} element={<ProfilContainer><TrackWeight/></ProfilContainer>}/>
                    <Route path={`/todods`} element={<ProfilContainer><Todods/></ProfilContainer>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;