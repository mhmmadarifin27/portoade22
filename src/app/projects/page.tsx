'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, ExternalLink, Eye, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { Project } from '@/data/types';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectSlider } from '@/components/ui/ProjectSlider';
import { ProjectModal } from '@/components/ui/ProjectModal';

export default function ProjectsPage() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: t.projects.categories.all },
    { id: 'web', label: t.projects.categories.web },
    { id: 'system', label: t.projects.categories.system },
    { id: 'dashboard', label: t.projects.categories.dashboard },
  ];

  const filteredProjects = portfolioData.projects.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      p.name[language].toLowerCase().includes(query) ||
      p.description[language].toLowerCase().includes(query) ||
      p.type[language].toLowerCase().includes(query) ||
      p.stack.some((s) => s.toLowerCase().includes(query));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Breadcrumb & Navigation */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-teal-500 hover:text-teal-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.projects.backToProjects.replace('← ', '')}</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <div className="tag-badge">
            {t.projects.tag}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-primary)]">
            {t.projects.title}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl glass-card border border-[var(--border-subtle)]">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.projects.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[var(--bg-pill)] text-sm text-[var(--text-primary)] border border-[var(--border-subtle)] focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20'
                    : 'bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center space-y-3 glass-card rounded-3xl">
            <p className="text-base font-bold text-[var(--text-muted)]">
              {language === 'id' ? 'Tidak ada proyek yang sesuai dengan pencarian.' : 'No projects found matching your criteria.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs font-bold text-teal-500 hover:underline"
            >
              {language === 'id' ? 'Reset Pencarian' : 'Reset Filter'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="rounded-2xl glass-card overflow-hidden flex flex-col justify-between group border border-[var(--border-subtle)]"
              >
                <div>
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

                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-lg text-[var(--text-primary)] group-hover:text-teal-400 transition-colors line-clamp-1">
                      {project.name[language]}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                      {project.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[var(--bg-pill)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-2 border-t border-[var(--border-subtle)] mt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-500 hover:text-teal-400 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.projects.viewDetail}</span>
                  </button>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all hover:scale-105"
                    title="Lihat Dokumentasi Lengkap"
                  >
                    <span>{language === 'id' ? 'Dokumentasi' : 'Documentation'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}
