import React from "react";
import { AuthContext } from "../../providers/Auth";

export const useAuth = () =>{
    const context = React.useContext(AuthContext)
    if (!context) {
        return Promise.reject('useAuth deve ser usado juntamente com AuthProvider')
    }
    return context;
}