import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './list';

const RouteList: FC = () => {
    const isAuth = true
    return (
        <Router>
            <Routes>
                {routes.map(route => {

                    return (
                        <Route
                            path={route.path}
                            element={< route.element />}
                            key={`route ${route.path}`}
                        >
                        </Route>
                    )
                })}
            </Routes>
        </Router>
    )
}

export default RouteList;
