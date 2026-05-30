'use client'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    icon: 'fa-shopping-cart',
    gradient: 'from-purple-400 to-pink-400',
    github: 'https://github.com/tuusuario/proyecto1',
    demo: 'https://proyecto1.vercel.app',
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones push.',
    tech: ['Angular', 'Ionic', 'Firebase'],
    icon: 'fa-tasks',
    gradient: 'from-blue-400 to-cyan-400',
    github: 'https://github.com/tuusuario/proyecto2',
    demo: 'https://proyecto2.vercel.app',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Dashboard interactivo con gráficos en tiempo real, exportación de datos y sistema de reportes.',
    tech: ['Next.js', 'Tailwind', 'Chart.js'],
    icon: 'fa-chart-line',
    gradient: 'from-green-400 to-teal-400',
    github: 'https://github.com/tuusuario/proyecto3',
    demo: 'https://proyecto3.vercel.app',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Algunos de mis trabajos más recientes</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-hover">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <i className={`fas ${project.icon} text-white text-6xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold">
                    <i className="fas fa-external-link-alt mr-1"></i> Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-semibold">
                    <i className="fab fa-github mr-1"></i> Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}