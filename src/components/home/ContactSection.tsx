'use client';

import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, Send, Sparkles, MapPin, Phone } from 'lucide-react';
import { LinkedinIcon } from '@/components/ui/Icons';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export const ContactSection = () => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${portfolioData.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Halo Ade,\n\nNama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleSendWhatsApp = () => {
    const text = `Halo Ade Kurniawan,%0A%0ASaya: ${encodeURIComponent(form.name || 'Pengunjung Portofolio')}%0AEmail: ${encodeURIComponent(form.email || '-')}%0APerihal: ${encodeURIComponent(form.subject || 'Peluang Kerja / Proyek')}%0A%0A${encodeURIComponent(form.message || 'Tertarik untuk berdiskusi dengan Anda.')}`;
    window.open(`https://wa.me/${portfolioData.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="kontak" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="tag-badge mx-auto">
            {t.contact.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)]">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-3xl glass-card space-y-3 border border-[var(--border-subtle)]">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] border border-[var(--border-subtle)] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">{t.contact.directCards.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.directCards.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)]">Email</h4>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="text-xs sm:text-sm font-mono text-teal-400 hover:underline break-all"
                >
                  {portfolioData.email}
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${portfolioData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl glass-card flex items-center justify-between border border-[var(--border-subtle)] group hover:border-emerald-500/40"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)]">WhatsApp Direct</h4>
                  <p className="text-xs font-mono text-[var(--text-secondary)]">+{portfolioData.whatsapp}</p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-500">Chat →</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl glass-card flex items-center justify-between border border-[var(--border-subtle)] group hover:border-blue-500/40"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)]">LinkedIn Profile</h4>
                  <p className="text-xs text-[var(--text-secondary)]">in/adekurniawan2103</p>
                </div>
              </div>
              <span className="text-xs font-bold text-blue-500">Connect →</span>
            </a>

            {/* Location & Availability Box */}
            <div className="p-5 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] space-y-2 text-xs text-[var(--text-secondary)]">
              <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>{portfolioData.location[language]}</span>
              </div>
              <p className="text-[var(--text-muted)]">
                {language === 'id'
                  ? 'Siap bekerja secara On-site (Palembang & sekitarnya), Hybrid, maupun Remote di seluruh Indonesia.'
                  : 'Available for On-site (Palembang & surrounding areas), Hybrid, or Remote roles worldwide.'}
              </p>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendEmail}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-[var(--border-subtle)] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] text-sm border border-[var(--border-subtle)] focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] text-sm border border-[var(--border-subtle)] focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder={t.contact.form.subjectPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] text-sm border border-[var(--border-subtle)] focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  {t.contact.form.message}
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-pill)] text-[var(--text-primary)] text-sm border border-[var(--border-subtle)] focus:outline-none focus:border-teal-500 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white shadow-lg shadow-teal-500/25 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.form.sendEmail}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.contact.form.sendWhatsapp}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
