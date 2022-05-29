import { QuestionnairePage } from './pages/QuestionnairePage/QuestionnairePage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import TrackWeight from './pages/TrackWeight/TrackWeight';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import Calculator from './pages/Calculator/Calculator';
import { LoginPage } from './pages/Login/LoginPage';
import Training from './pages/Training/Training';
import { MainPage } from './pages/Main/MainPage';
import Todods from './pages/Todods/Todods';
import Profil from './pages/Profil/Profil';
import Timer from './pages/Timer/Timer';
import styles from './App.module.sass';
import Test from './pages/Test/Test';


const App = () => {
    return (
        <div className={styles.App}>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='*' element={<NotFoundPage/>} />
                    <Route path={'/questionnaire'} element={<QuestionnairePage />} />
                    <Route path='/registration' element={<RegistrationPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/test' element={<Test />} />

                    <Route path={'/user'} element={<PrivateRoute>
                        <Profil />
                    </PrivateRoute>} />
                    <Route path={'/timer'} element={<PrivateRoute>
                        <Timer />
                    </PrivateRoute>} />
                    <Route path={'/calculator'} element={<PrivateRoute>
                        <Calculator />
                    </PrivateRoute>} />
                    <Route path={'/training'} element={<PrivateRoute>
                        <Training />
                    </PrivateRoute>} />
                    <Route path={'/track'} element={<PrivateRoute>
                        <TrackWeight />
                    </PrivateRoute>} />
                    <Route path={'/todods'} element={<PrivateRoute>
                        <Todods />
                    </PrivateRoute>} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;