import { ReactNode, createContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthContextType } from "../types/Auth";

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  async function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password).catch(
      (error) => {
        console.error("Erro ao criar conta:", error);
        throw error;
      }
    );
  }

  async function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.error("Erro ao fazer login:", error);
      throw error;
    });
  }

  async function logout() {
    return signOut(auth).catch((error) => {
      console.error("Erro ao fazer logout:", error);
      throw error;
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
