import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import YearPage from './pages/YearPage';
import SubjectPage from './pages/SubjectPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData: any) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      <Header user={user} onLogout={handleLogout} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/year/:year" element={<YearPage />} />
            <Route path="/year/:year/subject/:subject" element={<SubjectPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App; 