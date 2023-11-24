import { useContext } from "react";
import { AuthContext } from "../Context/auth.context";

export const useAuth = ()=> {
    return useContext(AuthContext);
  }