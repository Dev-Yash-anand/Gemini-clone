import { createContext, useState } from "react";
import runChat from "../config/gemini_api_key"

export const context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showRes, setShowRes] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resData, setResData] = useState("");

    const onSent = async (prompt) => {
        setResData("");
        setLoading(true);
        setShowRes(true);
        setRecentPrompt(input)
        const response = await runChat(input);
        setResData(response);
        setLoading(false);
        setInput("");
    }

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showRes,
        loading, 
        resData,
        input, 
        setInput   
    }

    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )

}

export default ContextProvider;