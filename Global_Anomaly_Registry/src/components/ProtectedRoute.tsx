import { Outlet, Navigate } from "react-router-dom";

interface ProtectedRouteProps{
    isUser: boolean;
}

function ProtectedRoute({isUser} : ProtectedRouteProps){
    let allow_access: boolean = false;

    if (isUser){
        allow_access = isUser;
    }

    return allow_access ? <Outlet /> : <Navigate to={"/"} replace/>
}

export default ProtectedRoute;