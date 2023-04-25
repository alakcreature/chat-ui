import { useContext } from "react";
import { ChatContext } from "./AppContext";


export default function GlobalContext() {
    return useContext(ChatContext);
}