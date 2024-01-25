import { Navigate, useLocation } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Loader from '../../common/Loader';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/signin'></Navigate>
};

export default ProtectedRoute;