'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, ArrowRight, FileText, CheckCircle2, ShieldCheck, Search } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { PdfModal } from '@/components/ui/PdfModal';

export const CertificatesSection = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

  const categories = [
    'all',
    'Data Administration',
    'Surat Rekomendasi',
    'Human Resources',
    'IT Support',
    'Digital Marketing',
    'Leadership & Project',
  ];

  const filteredCerts = portfolioData.certificates.filter((cert) => {
    const matchesCat = selectedCategory === 'all' || cert.type === selectedCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.modules[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="sertifikat" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="tag-badge">
              {t.certificates.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
              {t.certificates.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
              {t.certificates.subtitle}
            </p>
          </div>

          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all shrink-0 hover:scale-105"
          >
            <span>Lihat Semua ({portfolioData.certificates.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Pills & Search */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/25'
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
          {filteredCerts.slice(0, 6).map((cert) => (
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

                <div className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    {t.certificates.modulesCovered}
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                    {cert.modules[language]}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-[var(--border-subtle)]">
                <button
                  onClick={() => setSelectedPdf({ url: cert.file, title: cert.title })}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-white shadow-md shadow-teal-500/20 transition-all hover:scale-[1.02]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t.certificates.viewPdf}</span>
                </button>
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
    </section>
  );
};
