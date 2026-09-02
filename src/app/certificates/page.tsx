'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, FileText, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { PdfModal } from '@/components/ui/PdfModal';

export default function CertificatesPage() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

  const categories = [
    'all',
    'IT Support',
    'Human Resources',
    'Data Administration',
    'Digital Marketing',
    'Leadership & Project',
    'Language',
    'Research & Innovation',
  ];

  const filteredCerts = portfolioData.certificates.filter((cert) => {
    const matchesCat = selectedCategory === 'all' || cert.type === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      cert.title.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      cert.modules[language].toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-teal-500 hover:text-teal-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-3">
          <div className="tag-badge">
            {t.certificates.tag}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-primary)]">
            {t.certificates.title}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
            {portfolioData.certificates.length} {t.certificates.totalCerts}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl glass-card border border-[var(--border-subtle)]">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.certificates.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[var(--bg-pill)] text-sm text-[var(--text-primary)] border border-[var(--border-subtle)] focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20'
                    : 'bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                }`}
              >
                {cat === 'all' ? t.certificates.filterAll : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl glass-card flex flex-col justify-between space-y-5 border border-[var(--border-subtle)] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    {cert.type}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-teal-400 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--text-muted)] mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    {t.certificates.modulesCovered}
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                    {cert.modules[language]}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center gap-2">
                <button
                  onClick={() => setSelectedPdf({ url: cert.file, title: cert.title })}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-white shadow-md shadow-teal-500/20 transition-all hover:scale-[1.02]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t.certificates.viewPdf}</span>
                </button>
                <a
                  href={cert.file}
                  download
                  className="p-2.5 rounded-xl bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] hover:text-white border border-[var(--border-subtle)] transition-colors"
                  title={t.certificates.downloadPdf}
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* PDF Modal */}
        {selectedPdf && (
          <PdfModal
            isOpen={!!selectedPdf}
            onClose={() => setSelectedPdf(null)}
            pdfUrl={selectedPdf.url}
            title={selectedPdf.title}
          />
        )}
      </div>
    </div>
  );
}
