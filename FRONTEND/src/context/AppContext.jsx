import { useState } from "react";
import { createContext } from "react";

export const AppContent = createContext();

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(false);
    const [chartData, setChartsData] = useState([]);


    const value = {
        backendUrl,
        isLoggedin, setIsLoggedin,
        userData, setUserData,
        chartData, setChartsData
    }

    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}