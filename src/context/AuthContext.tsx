import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { auth } from '../../firebase';
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { AuthContextType } from '../types/Auth';

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
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

export function useAuth() {
  return useContext(AuthContext);
}
