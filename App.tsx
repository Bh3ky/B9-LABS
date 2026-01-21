
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ArchivePage from './pages/ArchivePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/archive" element={<ArchivePage />} />
          </Routes>
        </main>
        <div className="pt-12">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
