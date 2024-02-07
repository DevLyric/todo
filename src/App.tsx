import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import TodoPage from './pages/TodoPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

export default function App() {
  const currentUser = useAuth();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={currentUser?.currentUser ? <TodoPage /> : <SignInPage />}
        />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}
