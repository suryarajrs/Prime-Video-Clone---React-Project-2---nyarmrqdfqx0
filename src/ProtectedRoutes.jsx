


import React from 'react'
import { Navigate } from 'react-router'


 const ProtectedRoutes = ({children}) => {
    const isAuthenticated = !!localStorage.getItem("bearer_token");
    
    if(!isAuthenticated){
      return  <Navigate to="/login"/>
    }


  return children
}

export default ProtectedRoutes