'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectSlider } from './ProjectSlider';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl my-8 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0f172a] text-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Slider */}
        <div className="relative">
          <ProjectSlider 
            slides={project.slides} 
            alt={project.name[language]} 
            className="rounded-t-2xl rounded-b-none"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors"
            aria-label={t.modal.close}
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute top-4 left-4 z-30">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/90 text-white shadow-lg backdrop-blur-sm">
              {project.type[language]} • {project.year}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {project.name[language]}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description[language]}
            </p>
          </div>

          {/* Impact Banner */}
          <div className="p-4 rounded-xl bg-teal-950/40 border border-teal-500/30 text-teal-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-1">
              {t.projects.impactLabel}
            </h4>
            <p className="text-sm font-medium">
              {project.impact[language]}
            </p>
          </div>

          {/* Key Features */}
          {project.features && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                Fitur Utama & Modul
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.features[language].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-teal-400" />
              {t.projects.techUsed}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-teal-300 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white shadow-lg shadow-teal-500/20 transition-all hover:scale-[1.02]"
            >
              <ExternalLink className="w-4 h-4" />
              {t.projects.openDemo}
            </a>

            <Link
              href={`/projects/${project.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              {t.projects.viewDetail}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
