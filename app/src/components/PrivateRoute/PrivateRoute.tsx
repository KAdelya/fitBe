import { FC } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/use-auth';
import ProfilContainer from '../Containers/ProfilContainer/ProfilContainer';

interface Props {
    children: JSX.Element;
}
const PrivateRoute: FC<Props> = ({ children }) => {
    const { isAuth } = useAuth();
    const location = useLocation();
    if (!isAuth) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return (
        <ProfilContainer>
            {children}
        </ProfilContainer>
    );
};
export default PrivateRoute;