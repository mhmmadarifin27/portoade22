'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Sparkles, MapPin, Award, Briefcase, Code2, GraduationCap } from 'lucide-react';
import { LinkedinIcon, GithubIcon, WhatsappIcon } from '@/components/ui/Icons';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export const HeroSection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center space-y-8">

        {/* Main Title & Editorial Typography */}
        <div className="space-y-4">
          <p className="text-sm sm:text-base font-semibold text-[var(--text-secondary)] tracking-wider uppercase">
            {t.hero.greeting}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-[var(--text-primary)]">
            Ade <span className="gradient-text">Kurniawan</span>
          </h1>
          <p className="text-base sm:text-xl font-bold text-[var(--text-secondary)] tracking-wide max-w-3xl mx-auto pt-2">
            {portfolioData.role[language]}
          </p>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            {portfolioData.summary[language]}
          </p>
        </div>

        {/* Location & Alma Mater Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[var(--text-secondary)]">
          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--bg-pill)] border border-[var(--border-subtle)]">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            {portfolioData.location[language]}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--bg-pill)] border border-[var(--border-subtle)]">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            {portfolioData.education[language]} • IPK {portfolioData.gpa}
          </span>
        </div>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white shadow-xl shadow-teal-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <span>{t.hero.ctaProjects}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/#kontak"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-teal-500/40 shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>{t.hero.ctaContact}</span>
          </Link>
        </div>

        {/* Social Direct Links */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <a
            href={`mailto:${portfolioData.email}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-amber-500 border border-[var(--border-subtle)] transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 text-amber-500" />
            <span className="hidden sm:inline">Email</span>
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-blue-500 border border-[var(--border-subtle)] transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-500" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href={`https://wa.me/${portfolioData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-emerald-500 border border-[var(--border-subtle)] transition-all"
            aria-label="WhatsApp"
          >
            <WhatsappIcon className="w-4 h-4 text-emerald-500" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4 text-[var(--text-primary)]" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>

        {/* Quick Highlights Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 text-left">
          <div className="p-4 sm:p-5 rounded-2xl glass-card">
            <div className="flex items-center gap-2 text-teal-400 mb-2">
              <Briefcase className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {t.hero.quickStats.experience}
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
              {t.hero.quickStats.experienceValue}
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Pertamina RU III & KPKM
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass-card">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <Code2 className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {t.hero.quickStats.projects}
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
              {t.hero.quickStats.projectsValue}
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Laravel, GIS, Web Store, MVC
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass-card">
            <div className="flex items-center gap-2 text-amber-400 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {t.hero.quickStats.gpa}
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
              {t.hero.quickStats.gpaValue}
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Peraih IPK Tertinggi Prodi
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass-card">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <Award className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {t.hero.quickStats.certs}
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
              {t.hero.quickStats.certsValue}
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Google, HRCI, Karir Nex, BRIN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
