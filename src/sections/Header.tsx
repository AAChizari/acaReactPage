"use client";

import { useEffect } from "react";
import Link from "next/link";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        scrollToSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Beim ersten Laden prüfen

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 p-4">
      <div className="container mx-auto flex justify-center">
        <div className="border border-black/15 rounded-xl p-2 backdrop-blur">
          <nav className="flex gap-2 text-sm text-center">
            <Link href="#Einleitung" onClick={(e) => { e.preventDefault(); scrollToSection('chapter-1'); }} className="text-black/70 font-extrabold border border-black/50 rounded-xl p-1 hover:text-black transition">
              I
            </Link>
            <Link href="#Grundlagen" onClick={(e) => { e.preventDefault(); scrollToSection('chapter-2'); }} className="text-black/70 font-extrabold border border-black/50 rounded-xl p-1 hover:text-black transition">
              II
            </Link>
            <Link href="#Konzept" onClick={(e) => { e.preventDefault(); scrollToSection('chapter-3'); }} className="text-black/70 font-extrabold border border-black/50 rounded-xl p-1 hover:text-black transition">
              III
            </Link>
            <Link href="#Implementierung" onClick={(e) => { e.preventDefault(); scrollToSection('chapter-4'); }} className="text-black/70 font-extrabold border border-black/50 rounded-xl p-1 hover:text-black transition">
              IV
            </Link>
            <Link href="#Evaluierung der Ergebnisse" onClick={(e) => { e.preventDefault(); scrollToSection('chapter-5'); }} className="text-black/70 font-extrabold border border-black/50 rounded-xl p-1 hover:text-black transition">
              V
            </Link>
            <Link href="#Zusammenfassung und Ausblick" onClick={(e) => { e.preventDefault(); scrollToSection('chapter-6'); }} className="text-black/70 font-extrabold border border-black/50 rounded-xl p-1 hover:text-black transition">
              VI
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};