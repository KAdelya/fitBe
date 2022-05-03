import styles from './App.module.sass'
import MainLayout from './components/Layouts/MainLayout/MainLayout';
// import firebase from 'firebase'
import 'firebase/firestore';
import * as firebase from "firebase/app";
import Routes from './components/routes/RouteList';
import RouteList from './components/routes/RouteList';
// import * as firebase from "firebase/app";

const App = () => {

  return (
    <div className={styles.App}>
      <MainLayout>
        <RouteList />
      </MainLayout>
    </div>
  );
}

export default App;


