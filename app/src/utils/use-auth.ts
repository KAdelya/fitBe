import {useAppSelector} from './redux-hooks';

export const useAuth = () => {
    const {token, id} = useAppSelector(state => state.user);
    return {
        isAuth: !! token,
        token,
        id,
    };
};

