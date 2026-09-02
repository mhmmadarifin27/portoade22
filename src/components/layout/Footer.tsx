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
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 pt-16 pb-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--border-subtle)]">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-1 text-2xl font-black tracking-tighter">
              <span className="text-[var(--text-primary)]">ade</span>
              <span className="text-teal-400">.</span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`mailto:${portfolioData.email}`}
                className="p-2.5 rounded-xl bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-amber-500 border border-[var(--border-subtle)] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-blue-500 border border-[var(--border-subtle)] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${portfolioData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-emerald-500 border border-[var(--border-subtle)] transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-white border border-[var(--border-subtle)] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-[var(--text-secondary)] hover:text-teal-400 transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-[var(--text-secondary)] hover:text-teal-400 transition-colors">
                  {t.nav.experience}
                </Link>
              </li>
              <li>
                <Link href="/organization" className="text-[var(--text-secondary)] hover:text-teal-400 transition-colors">
                  {t.nav.organization}
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-[var(--text-secondary)] hover:text-teal-400 transition-colors">
                  {t.nav.certificates}
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-[var(--text-secondary)] hover:text-teal-400 transition-colors">
                  {t.nav.achievements}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              {t.nav.contact}
            </h4>
            <p className="text-xs text-[var(--text-secondary)] break-all font-mono">
              {portfolioData.email}
            </p>
            <p className="text-xs text-[var(--text-secondary)] font-mono">
              +{portfolioData.whatsapp}
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Palembang, Indonesia
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} {portfolioData.name}. {t.footer.rights}
          </div>
          <div className="flex items-center gap-4">
            <span>{t.footer.builtWith}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 font-semibold text-[var(--text-secondary)] hover:text-teal-400 transition-colors"
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
