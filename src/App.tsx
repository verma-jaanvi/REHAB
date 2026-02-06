import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { SolutionsPage } from './components/pages/SolutionsPage';
import { NeuroRehabPage } from './components/pages/NeuroRehabPage';
import { SpacePlannerPage } from './components/pages/SpacePlannerPage';
import { Footer } from './components/Footer';

export type Page = 'home' | 'about' | 'solutions' | 'neuro-rehab' | 'space-planner' | 'orthopedic-sports' | 'spinal' | 'pain' | 'cardiac' | 'wellness' | 'geriatric' | 'speech';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'solutions':
        return <SolutionsPage onNavigate={setCurrentPage} />;
      case 'neuro-rehab':
        return <NeuroRehabPage />;
      case 'space-planner':
        return <SpacePlannerPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}