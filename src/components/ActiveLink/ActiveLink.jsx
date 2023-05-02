/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink to={to} className={({ isActive }) => (isActive ? "text-danger border border-danger rounded px-2 py-1 text-decoration-none" : "") + 'text-decoration-none ms-3'}>
            {children}
          </NavLink>
            
        </div>
    );
};

export default ActiveLink;