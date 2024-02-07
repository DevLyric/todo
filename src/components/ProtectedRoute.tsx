import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ReactNode, useEffect } from 'react';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.currentUser === null) {
      navigate('/signin', { replace: true });
    }
  }, [navigate, user]);

  return children;
}
