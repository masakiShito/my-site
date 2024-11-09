import React, { useState } from 'react';
import { NavigationBar } from '@/components/Navigation/NavigationBar';
import { HomePage } from '@/components/Home/HomePage';
import { AboutPage } from '@/components/About/AboutPage';
import { ProjectsPage } from '@/components/Projects/ProjectsPage';
import { SkillsPage } from '@/components/Skills/SkillsPage';
import { Page } from '@/types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  return (
      <div className="bg-white min-h-screen">
        <NavigationBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {currentPage === 'Home' && <HomePage />}
        {currentPage === 'About' && <AboutPage />}
        {currentPage === 'Projects' && <ProjectsPage />}
        {currentPage === 'Skills' && <SkillsPage />}
      </div>
  );
};

export default App;