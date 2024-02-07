import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

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
