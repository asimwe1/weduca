import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { WedukaBranding } from '../components/weduka-branding';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full px-6 py-12 bg-white shadow-lg rounded-lg text-center">
      <WedukaBranding />
        <div className="mb-8 flex justify-center">
          <AlertTriangle className="h-24 w-24 text-amber-500" strokeWidth={1.5} />
        </div>
         
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <Button 
          onClick={goHome} 
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
