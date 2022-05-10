import { FC } from 'react'; import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../../../utils/use-auth';
;

interface Props { }

const RequireAuth: FC<Props> = ({ children }) => {
    const location = useLocation();
    const { isAuth } = useAuth();
    if (!isAuth) {
        return <Navigate to='/login' state={{ from: location }} />
    }

    return <>{children}</>
}
export default RequireAuth;