import { useContext } from "react";
import { AccountFormContext } from "../context/AccountFormContext";


export const useAccount = () => useContext(AccountFormContext)