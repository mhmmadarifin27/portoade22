'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, Calendar, CheckCircle2, FileText, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { PdfModal } from '@/components/ui/PdfModal';
import { ImageLightbox } from '@/components/ui/ImageLightbox';

export const ExperienceSection = () => {
  const { language, t } = useLanguage();
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);
  const [lightboxData, setLightboxData] = useState<{ images: string[]; initialIndex: number } | null>(null);

  return (
    <section id="pengalaman" className="py-20 px-4 sm:px-6 relative bg-[var(--bg-secondary)]/30">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="tag-badge">
              {t.experience.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
              {t.experience.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
              {t.experience.subtitle}
            </p>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all shrink-0 hover:scale-105"
          >
            <span>Selengkapnya</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {portfolioData.experience.map((exp, expIdx) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-[var(--border-subtle)] space-y-6"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-500 border border-teal-500/20">
                    {exp.type[language]}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] mt-2">
                    {exp.role[language]}
                  </h3>
                  <p className="text-sm font-semibold text-teal-500 dark:text-teal-400">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] bg-[var(--bg-pill)] px-3 py-1.5 rounded-xl border border-[var(--border-subtle)] w-fit">
                  <Calendar className="w-3.5 h-3.5 text-teal-400" />
                  <span>{exp.period[language]}</span>
                </div>
              </div>

              {/* Description & Highlights */}
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed text-justify">
                  {exp.detail[language]}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    {t.experience.keyResponsibilities}
                  </h4>
                  <ul className="grid sm:grid-cols-1 gap-2">
                    {exp.highlights[language].map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Photo Documentation Grid */}
              {exp.photos.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center justify-center sm:justify-start gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-teal-400" />
                    {t.experience.documentation}
                  </h4>
                  <div className="flex flex-wrap justify-center gap-4">
                    {exp.photos.map((photo, pIdx) => (
                      <div
                        key={pIdx}
                        onClick={() => setLightboxData({ images: exp.photos, initialIndex: pIdx })}
                        className="relative aspect-[4/3] w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] max-w-sm sm:max-w-none rounded-2xl overflow-hidden cursor-pointer group border border-[var(--border-subtle)] bg-slate-950/70 shadow-md shrink-0"
                      >
                        <Image
                          src={photo}
                          alt={`Dokumentasi ${exp.company} - ${pIdx + 1}`}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-black/80 text-white backdrop-blur-md border border-white/20">
                            Perbesar Foto
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Documents & Certificates */}
              {exp.documents.length > 0 && (
                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-3">
                  {exp.documents.map((doc, dIdx) => (
                    <button
                      key={dIdx}
                      onClick={() => setSelectedPdf({ url: doc.file, title: doc.title[language] })}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-teal-500/10 hover:bg-teal-500/20 text-teal-600 dark:text-teal-300 border border-teal-500/30 transition-all hover:scale-105"
                    >
                      <FileText className="w-4 h-4" />
                      <span>{doc.title[language]}</span>
                    </button>
                  ))}
                </div>
              )}
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

        {/* Lightbox Modal */}
        {lightboxData && (
          <ImageLightbox
            isOpen={!!lightboxData}
            onClose={() => setLightboxData(null)}
            images={lightboxData.images}
            initialIndex={lightboxData.initialIndex}
          />
        )}
      </div>
    </section>
  );
};
