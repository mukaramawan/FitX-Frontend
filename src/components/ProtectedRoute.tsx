import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.tsx';
import { useEffect, useState } from 'react';

const ProtectedRoute = () => {
  const { session } = UserAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Give a small delay to ensure session is properly loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [session]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212]">
        <div className="text-[#F3F4F6]">Loading...</div>
      </div>
    );
  }

  // If there's no session, redirect to sign in
  if (!session) {
    return <Navigate to="/signin" replace />;
  }

  // If there is a session, render the child routes
  return <Outlet />;
};

export default ProtectedRoute; 