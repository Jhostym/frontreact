import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

function ProtectedRoute() {

  const {user, isAuthenticate} = useAuth()

  if(!isAuthenticate) return <Navigate to="/login" replace />

  return (
    <Outlet/>
  )
}

export default ProtectedRoute