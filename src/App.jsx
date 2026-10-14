import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Events from './components/Events';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import MediaModal from './components/MediaModal';
import ProjectCaseModal from './components/ProjectCaseModal';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/CustomCursor';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeMedia, setActiveMedia] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleSelectProjectById = (projectId) => {
    const proj = PROJECTS.find((p) => p.id === projectId);
    if (proj) setSelectedProject(proj);
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Editorial Custom Cursor */}
      <CustomCursor />

      {/* Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Persistent 7-Destination Editorial Navbar */}
      <Navbar />

      <main>
        {/* SECTION 01: About (Includes full-screen Modnia editorial hero & profile) */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* SECTION 02: Projects (2-column desktop grid, 18 projects in exact order) */}
        <Projects onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* SECTION 03: Skills (7 domain categories + continuous reference flashcard) */}
        <Skills onSelectProjectById={handleSelectProjectById} />

        {/* SECTION 04: Experience (4 verified roles & MITAOE internship document) */}
        <Experience onOpenMedia={(media) => setActiveMedia(media)} />

        {/* SECTION 05: Events (Strictly events/ folder assets, starting with HBTM & Fund Arcade) */}
        <Events onOpenMedia={(media) => setActiveMedia(media)} />

        {/* SECTION 06: Certifications (Strictly cer/ folder assets, 22 verified credentials) */}
        <Certificates onOpenMedia={(media) => setActiveMedia(media)} />

        {/* SECTION 07: Contact (Direct reach, dispatch form, no LeetCode, and Coming Soon compartment) */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Media Viewer Modal (Certificates, proof images, PDFs) */}
      <MediaModal
        isOpen={Boolean(activeMedia)}
        onClose={() => setActiveMedia(null)}
        fileUrl={activeMedia?.fileUrl}
        title={activeMedia?.title}
        subtitle={activeMedia?.subtitle}
        fileType={activeMedia?.fileType}
      />

      {/* Project Case Study Modal (Full specs, problem/solution, live links, and prev/next controls) */}
      <ProjectCaseModal
        isOpen={Boolean(selectedProject)}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
