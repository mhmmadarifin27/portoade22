import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://adekurniawan.vercel.app'),
  title: 'Ade Kurniawan | Portofolio Data Administration & System Analysis',
  description:
    'Portofolio resmi Ade Kurniawan, S.Kom. Profesional di bidang Data Administration, System Analysis, Database Management, IT Support, dan Web Development.',
  keywords: [
    'Ade Kurniawan',
    'Portofolio Ade Kurniawan',
    'Data Administration',
    'System Analysis',
    'Database Management',
    'IT Support Palembang',
    'Web Developer Laravel',
    'Next.js Portfolio',
    'Human Resources',
    'Pertamina Internasional RU III',
  ],
  authors: [{ name: 'Ade Kurniawan' }],
  creator: 'Ade Kurniawan',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://adekurniawan.vercel.app',
    title: 'Ade Kurniawan | Portofolio Data Administration & System Analysis',
    description:
      'Portofolio profesional Ade Kurniawan — Berpengalaman dalam administrasi & validasi data, analisis sistem, manajemen database, dukungan IT, dan pengembangan web.',
    siteName: 'Ade Kurniawan Portfolio',
    images: [
      {
        url: '/images/about/ade-kurniawan-profile.png',
        width: 800,
        height: 1000,
        alt: 'Ade Kurniawan Profile',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#090d16' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-teal-500 selection:text-white">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
