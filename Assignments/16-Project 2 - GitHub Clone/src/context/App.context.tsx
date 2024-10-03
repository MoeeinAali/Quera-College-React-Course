// src/contexts/UserContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';



type AppContextType = {
    user: any;
    setUser: React.Dispatch<React.SetStateAction<any>>;
    repositories: any,
    setRepositories: React.Dispatch<React.SetStateAction<any>>;

};
const AppContext = createContext<AppContextType>({
    user: {},
    setUser: () => { },
    repositories: {},
    setRepositories: () => { },

});

type AppContextProvider = {
    children: ReactNode;
};

export const AppContextProvider: React.FC<AppContextProvider> = ({ children }) => {
    const [user, setUser] = useState<any>({});
    const [repositories, setRepositories] = useState<any>([])

    return (
        <AppContext.Provider value={{ user, setUser, repositories, setRepositories }}>
            {children}
        </AppContext.Provider>
    );
};


export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
