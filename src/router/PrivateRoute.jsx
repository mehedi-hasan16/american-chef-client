/* eslint-disable react/prop-types */
import{ useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    let location = useLocation();
    if(loading){
        return <div className='container d-flex justify-content-center my-4 '><div className="spinner-border text-primary mx-auto" role="status">
        <span className="visually-hidden">Loading...</span>
      </div></div>
    }
    if(user){
        return children;
    }else return <Navigate to='/login' state={{from:location}} replace></Navigate> 
};

export default PrivateRoute;