import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Conocimientos | Publica y aprende en comunidad",
    template: "%s | Conocimientos",
  },
  description:
    "La plataforma donde cualquier estudiante publica, organiza, descubre y aprende contenido creado por su propia comunidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-base-100 text-base-content">
        {children}
      </body>
    </html>
  );
}
