'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Eye, Layers } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { Project } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectSlider } from '@/components/ui/ProjectSlider';
import { ProjectModal } from '@/components/ui/ProjectModal';

export const ProjectsSection = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: t.projects.categories.all },
    { id: 'web', label: t.projects.categories.web },
    { id: 'system', label: t.projects.categories.system },
    { id: 'dashboard', label: t.projects.categories.dashboard },
  ];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="proyek" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="tag-badge">
              {t.projects.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
              {t.projects.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
              {t.projects.subtitle}
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all shrink-0 hover:scale-105"
          >
            <span>{t.projects.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/25'
                  : 'bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="rounded-2xl glass-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Slideshow Image Cover */}
                <div className="relative">
                  <ProjectSlider
                    slides={project.slides}
                    alt={project.name[language]}
                    onImageClick={() => setSelectedProject(project)}
                  />
                  <div className="absolute top-3 left-3 z-20 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-teal-300 border border-white/10">
                      {project.type[language]}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 z-20 pointer-events-none">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md text-slate-300 border border-white/10">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-lg text-[var(--text-primary)] group-hover:text-teal-400 transition-colors line-clamp-1">
                    {project.name[language]}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                    {project.description[language]}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[var(--bg-pill)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-semibold bg-[var(--bg-pill)] text-[var(--text-muted)]">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-2 border-t border-[var(--border-subtle)] mt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-500 hover:text-teal-400 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t.projects.viewDetail}</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-teal-400 border border-[var(--border-subtle)] transition-colors"
                    title={t.projects.openDemo}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="p-2 rounded-lg bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-teal-400 border border-[var(--border-subtle)] transition-colors"
                    title={t.projects.viewDetail}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
