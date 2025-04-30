import { createContext, useEffect, useState } from "react";
import { api } from '../services';

export const AppContext = createContext({});

export const AppContextProvider = ( props ) => {
    const {children} = props;
    //Estado para guardar os dados do usuário logado

    //Função de login
    //Função de logout
    //Verificação automática se o usuário já está logado

    return(
        <AppContext.Provider value={{
        
        }}>
            {children }
        </AppContext.Provider>
    );

};