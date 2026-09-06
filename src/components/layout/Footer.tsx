'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowUp } from 'lucide-react';
import { LinkedinIcon, GithubIcon, WhatsappIcon } from '@/components/ui/Icons';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/40 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[var(--border-subtle)]">
          {/* Brand & Description */}
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-tight">
              {portfolioData.name}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              {t.footer.description}
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={`mailto:${portfolioData.email}`}
              className="p-2.5 rounded-xl bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-teal-400 border border-[var(--border-subtle)] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-teal-400 border border-[var(--border-subtle)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${portfolioData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-teal-400 border border-[var(--border-subtle)] transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-teal-400 border border-[var(--border-subtle)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation & Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          {/* Clean Horizontal Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 font-medium">
            <Link href="/projects" className="hover:text-teal-400 transition-colors">
              {t.nav.projects}
            </Link>
            <Link href="/experience" className="hover:text-teal-400 transition-colors">
              {t.nav.experience}
            </Link>
            <Link href="/organization" className="hover:text-teal-400 transition-colors">
              {t.nav.organization}
            </Link>
            <Link href="/certificates" className="hover:text-teal-400 transition-colors">
              {t.nav.certificates}
            </Link>
            <Link href="/achievements" className="hover:text-teal-400 transition-colors">
              {t.nav.achievements}
            </Link>
          </nav>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-5">
            <span>
              © {new Date().getFullYear()} {portfolioData.name}. {t.footer.rights}
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 font-semibold text-[var(--text-secondary)] hover:text-teal-400 transition-colors"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
