import React from 'react';
import LandingPageComponent from '../components/LandingPage';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return <LandingPageComponent onGetStarted={() => navigate('/editor')} />;
};

export default LandingPage; 