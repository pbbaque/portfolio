const skills = {
  frontend: ['React', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SASS', 'Ionic'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Jest'],
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tecnologías y Habilidades</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Herramientas con las que trabajo día a día</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 border border-transparent dark:border-gray-700">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span key={skill} className="skill-badge px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-8 border border-transparent dark:border-gray-700">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span key={skill} className="skill-badge px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-8 border border-transparent dark:border-gray-700">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Herramientas</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-badge px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}