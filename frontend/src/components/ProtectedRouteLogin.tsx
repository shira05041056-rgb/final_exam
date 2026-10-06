

import { Navigate, Outlet } from 'react-router';

export default function ProtectedRouteLogin() {
    const token = localStorage.getItem("Authorization")?.split("Bearer ")[1];
    return (
        !token ?
            <Outlet /> :
            <Navigate to="/" />

    );
}


