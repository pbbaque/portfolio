export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Sobre mí</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Soy un desarrollador full stack apasionado por crear soluciones tecnológicas 
              que resuelven problemas reales. Con más de X años de experiencia en desarrollo web, 
              he trabajado en proyectos que van desde startups hasta empresas establecidas.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Mi experiencia incluye el desarrollo de aplicaciones con Angular, Ionic y SASS, 
              y actualmente estoy expandiendo mis habilidades con React, Next.js y Tailwind CSS 
              para crear experiencias web aún más rápidas y modernas.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, 
              contribuyendo a proyectos open source o compartiendo conocimiento con la comunidad.
            </p>
            <a href="#" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300">
              Descargar CV <i className="fas fa-download ml-2"></i>
            </a>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-400">
              <i className="fas fa-user text-9xl opacity-20"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}