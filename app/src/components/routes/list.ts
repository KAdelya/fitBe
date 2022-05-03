
import { MainPage } from "../../pages/Main/MainPage";
import { QuestionnairePage } from "../../pages/QuestionnairePage/QuestionnairePage";
import { RegistrationPage } from "../../pages/RegistrationPage/RegistrationPage";
import { SignPage } from "../../pages/SignPage/SignPage";
import Timer from "../../pages/Timer/Timer";
import Tracker from "../../pages/Tracker/Tracker";
import TrackWeight from "../../pages/TrackWeight/TrackWeight";
import Training from "../../pages/Training/Training";
import Calculator from "../../pages/Calculator/Calculator";
import PersonalArea from "../../pages/PersonalArea/PersonalArea";

export const routes = [
    {
        path: '/',
        element: MainPage,
        auth: false
    },
    {
        path: '/sign',
        element: SignPage,
        auth: false
    },
    {
        path: '/registration',
        element: RegistrationPage,
        auth: false
    },
    // {
    //     path: '/questionnaire/:id',
    //     element: QuestionnairePage,
    //     auth: true
    // },
    
    
    //начиная отсюда isAuth надо true, но пока
    {
        path: '/user/:id',
        element: PersonalArea,
        auth: false
    },
    {
        path: '/calculator/:id',
        element: Calculator,
        auth: false
    },
    {
        path: '/training/:id',
        element: Training,
        auth: false
    },
    {
        path: '/timer/:id',
        element: Timer,
        auth: false
    },
    {
        path: '/track/:id',
        element: TrackWeight,
        auth: false
    },
    {
        path: '/tracker/:id',
        element: Tracker,
        auth: false
    }
   
]