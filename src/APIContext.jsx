
import React, { createContext, useContext, useState } from "react";

const ApiContext = createContext();


export const ApiProvider = ({ children }) => {
    const [api, setApi] = useState("");

    return (
        <ApiContext.Provider value={{ api, setApi }}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () => {
    const context = useContext(ApiContext);

    {console.log("context"+JSON.stringify(context)   )}
    if (!context) {
        throw new Error("useApi must be used within an ApiProvider");
    }
    return context;
};
