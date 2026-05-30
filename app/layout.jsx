// app/layout.jsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://pbbaque-portfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pablo Barreda | Full Stack Developer",
  description:
    "Portfolio profesional de Pablo Barreda, desarrollador Full Stack especializado en Java, Spring Boot, TypeScript, React, Next.js y soluciones apoyadas por IA.",

  openGraph: {
    title: "Pablo Barreda | Full Stack Developer",
    description:
      "Portfolio profesional con experiencia, proyectos y tecnologías Full Stack.",
    url: siteUrl,
    siteName: "Pablo Barreda Portfolio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pablo Barreda Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pablo Barreda | Full Stack Developer",
    description:
      "Portfolio profesional con experiencia, proyectos y tecnologías Full Stack.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
