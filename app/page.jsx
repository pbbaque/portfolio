// app/page.jsx
"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  const githubUrl = "https://github.com/pbbaque";
  const linkedinUrl = "https://linkedin.com/in/pablo-barreda-baque-0a770824a/";
  const email = "pbbaque@gmail.com";

  return (
    <main>
      <Navbar />

      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 pt-16 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in">
          <div className="mb-6">
            <span className="text-purple-600 dark:text-purple-400 font-medium text-lg">
              👋 Hola, soy
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Pablo Barreda Baque
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold gradient-text mb-6">
            Desarrollador Full Stack
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Desarrollador Full Stack especializado en APIs REST, aplicaciones
            web modernas y desarrollo de soluciones software.
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-10">
            Trabajo con Java, Spring Boot, TypeScript, React, Next.js y
            PostgreSQL. Actualmente desarrollo NeighPets, una plataforma digital
            basada en una arquitectura por capas con organización por dominios,
            apoyada por herramientas de IA generativa y automatización.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="#proyectos"
              className="w-full sm:w-48 text-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Ver proyectos
            </Link>
            <Link
              href="#contacto"
              className="w-full sm:w-48 text-center px-8 py-4 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-gray-800 transition-all"
            >
              Contacto
            </Link>
          </div>

          <div className="flex gap-6 justify-center text-gray-600 dark:text-gray-400">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href={`mailto:${email}`}
              className="text-3xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>

      <section
        id="sobre-mi"
        className="py-20 bg-white dark:bg-gray-800 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Sobre mí
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Soy desarrollador Full Stack con experiencia profesional,
                freelance y en el desarrollo de productos propios.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                He trabajado con Java, Spring Boot, TypeScript, Angular, React,
                Next.js, SQL y Python para construir aplicaciones web, APIs REST
                y herramientas de automatización.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Actualmente desarrollo NeighPets, una plataforma compuesta por
                varios productos digitales para propietarios de mascotas y
                organizaciones de rescate, utilizando una arquitectura por capas
                con organización interna por dominios basada en Spring Boot,
                PostgreSQL, React y Next.js.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                También utilizo herramientas basadas en LLM para acelerar
                documentación, análisis funcional y determinadas fases del
                desarrollo software.
              </p>

              <a
                href="/Pablo_Barreda_CV_AI_FullStack.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300"
              >
                Descargar CV
                <i className="fas fa-download ml-2"></i>
              </a>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl transform rotate-6"></div>

              <div className="absolute inset-0 bg-white dark:bg-gray-700 border border-transparent dark:border-gray-600 rounded-2xl p-6 lg:p-7 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold tracking-wide">
                    CURRENTLY BUILDING
                  </span>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-2">
                    NeighPets
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Ecosistema digital para propietarios de mascotas y
                    organizaciones de rescate.
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 mb-4">
                    {[
                      ["Products", "1 / 4"],
                      ["Repositories", "5"],
                      ["Architecture", "Layered + Domain"],
                      ["Status", "Active Development"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-2.5"
                      >
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {label}
                        </p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Spring Boot", "PostgreSQL", "React", "Next.js"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>

                  <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                    <p>✓ Brand Website</p>
                    <p>✓ Rescue MVP</p>
                    <p>✓ Technical Foundation</p>
                    <p>→ Hub, Connect & Care planned</p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    LLM-assisted workflow for documentation, content and
                    Spec-Driven Development.
                  </p>
                  <p className="text-green-600 dark:text-green-400 font-medium mt-2 text-sm">
                    ● Active Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Proyectos propios, freelance y desarrollos demostrables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              icon="fas fa-paw"
              gradient="from-purple-400 to-pink-400"
              title="NeighPets"
              description="Plataforma en desarrollo para propietarios de mascotas, profesionales del sector y organizaciones de rescate. Incluye backend estructurado mediante una arquitectura por capas con organización interna por dominios, base de datos PostgreSQL, aplicaciones web con React/Next.js, documentación técnica y flujo de trabajo asistido por LLM."
              tech={["Spring Boot", "PostgreSQL", "React", "Next.js", "LLM"]}
              status="Producto propio · Active Development"
              demoLabel="Lanzamiento próximo"
              codeLabel="Repositorio privado"
            />

            <ProjectCard
              icon="fas fa-store"
              gradient="from-blue-400 to-cyan-400"
              title="Siastyle"
              description="Tienda Shopify en producción. Personalización de plantilla con Liquid, ajustes visuales y soporte en generación de contenido mediante herramientas de IA asistida."
              tech={["Shopify", "Liquid", "JavaScript", "IA asistida"]}
              status="Proyecto freelance · En producción"
              demoLabel="Ver web"
              codeLabel="Repositorio privado"
              demoHref="https://siastyle.shop"
            />

            <ProjectCard
              icon="fas fa-file-invoice-dollar"
              gradient="from-green-400 to-teal-400"
              title="LedgerLy"
              description="Aplicación web para gestión de facturación y operaciones empresariales. Proyecto orientado al desarrollo full-stack, modelado de datos, interfaces administrativas y organización de procesos de negocio."
              tech={["React", "Node.js", "MongoDB"]}
              status="Proyecto personal · Repositorio público"
              demoLabel="Demo próximamente"
              codeLabel="GitHub"
              codeHref="https://github.com/pbbaque/Invoice-manager-project"
            />
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="py-20 bg-white dark:bg-gray-800 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tecnologías y Habilidades
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Herramientas y tecnologías con las que trabajo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SkillGroup
              emoji="🎨"
              title="Frontend"
              gradient="from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
              skills={[
                "TypeScript",
                "JavaScript",
                "Angular",
                "React",
                "Next.js",
                "Ionic",
                "Tailwind CSS",
              ]}
            />

            <SkillGroup
              emoji="⚙️"
              title="Backend"
              gradient="from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
              skills={[
                "Java",
                "Spring Boot",
                "PostgreSQL",
                "MySQL",
                "REST APIs",
                "SQL",
              ]}
            />

            <SkillGroup
              emoji="🛠️"
              title="Herramientas"
              gradient="from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20"
              skills={["Git", "GitHub", "Docker", "OpenAI", "Codex", "Vercel"]}
            />
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-900 transition-colors"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Hablamos?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Estoy disponible para oportunidades profesionales y proyectos
              relacionados con desarrollo Full Stack, automatización y
              soluciones software modernas.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Puedes contactarme directamente por email, LinkedIn o GitHub.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a
                href={`mailto:${email}`}
                className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300"
              >
                <i className="fas fa-envelope mr-2"></i>
                {email}
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300"
              >
                <i className="fab fa-github mr-2"></i>
                GitHub
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300"
              >
                <i className="fab fa-linkedin mr-2"></i>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
            Diseñado y desarrollado por Pablo Barreda
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </footer>
    </main>
  );
}

function ProjectCard({
  icon,
  gradient,
  title,
  description,
  tech,
  status,
  demoLabel,
  codeLabel,
  demoHref,
  codeHref,
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-hover">
      <div
        className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center`}
      >
        <i className={`${icon} text-white text-6xl`}></i>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-4 mb-2">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-3">
          {status}
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {demoHref ? (
            <a
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold"
            >
              <i className="fas fa-external-link-alt mr-1"></i> {demoLabel}
            </a>
          ) : (
            <span className="text-gray-500 dark:text-gray-400 font-semibold">
              <i className="fas fa-lock mr-1"></i> {demoLabel}
            </span>
          )}

          {codeHref ? (
            <a
              href={codeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-semibold"
            >
              <i className="fab fa-github mr-1"></i> {codeLabel}
            </a>
          ) : (
            <span className="text-gray-500 dark:text-gray-400 font-semibold">
              <i className="fas fa-lock mr-1"></i> {codeLabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function SkillGroup({ emoji, title, gradient, skills }) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-8`}>
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="skill-badge px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
