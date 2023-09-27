import {Navigate, useLocation} from 'react-router-dom';

const ProtectedRoute = ({loggedIn, element: Component, ...props}) => {
    const {pathname} = useLocation();
    return loggedIn ? (
        <Component {...props} />
    ) : (
        <Navigate to='/signup' state={{backUrl: pathname}} replace/>
    );
};

export default ProtectedRoute;
