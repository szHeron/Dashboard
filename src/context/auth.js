import { createContext, useContext, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

export default function AuthContextProvider({ children }){
    const [user, setUser] = useState({
        email: null,
        password: null,
        token: null
    });

    async function Login(user){
        try{
            const response = await api.post('/usuario/login/', {
                "username": user.email,
                "password": user.password
            });

            const token = response.data.token;
            setUser({...user, token: token});

            await StoreLoginToken(token);

            return undefined
        }catch(error){
            return error.response.data
        }
    }

    async function Register(newUser){
        try{
            const response = await api.post('/usuario/registrar/', {
                "email": newUser.email,
                "password": newUser.password
            });

            setUser({...user, token: response.data.token});

            await StoreLoginToken(response.data.token);

        }catch(error){
            console.log(error.response)
            return error.response.data
        }
    }

    return (
        <AuthContext.Provider value={{user, Login, Register}}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(){
    const context = useContext(AuthContext);
   
    return context;
}