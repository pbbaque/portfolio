"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in">
        <div className="mb-6">
          <span className="text-purple-600 dark:text-purple-400 font-medium text-lg">
            👋 Hola, soy
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Pablo Barreda
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold gradient-text mb-6">
          Desarrollador Full Stack
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Especializado en crear aplicaciones web modernas con React, Angular,
          Node.js y más. Transformo ideas en experiencias digitales
          excepcionales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#proyectos"
            className="px-8 py-4 gradient-bg text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Ver mis proyectos
          </Link>
          <Link
            href="#contacto"
            className="px-8 py-4 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-gray-800 transition-all"
          >
            Contáctame
          </Link>
        </div>

        <div className="flex gap-6 justify-center text-gray-600 dark:text-gray-400">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:tu@email.com"
            className="text-3xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
