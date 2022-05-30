import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { IProps } from '../../models/IProps';
import { useAuth } from '../../utils/use-auth';
import ProfilContainer from '../Containers/ProfilContainer/ProfilContainer';

const PrivateRoute: FC<IProps> = ({ children }) => {
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