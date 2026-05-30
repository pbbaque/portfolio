'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simular envío
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">¿Hablamos?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Estoy disponible para nuevos proyectos y oportunidades</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Asunto</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="¿En qué puedo ayudarte?"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 gradient-bg text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'} <i className="fas fa-paper-plane ml-2"></i>
            </button>
            {status === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-center font-medium">
                ✓ Mensaje enviado correctamente
              </p>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-600 dark:text-gray-400">
              <a href="mailto:tu@email.com" className="flex items-center hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <i className="fas fa-envelope text-2xl mr-3"></i>
                <span>tu@email.com</span>
              </a>
              <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <i className="fab fa-github text-2xl mr-3"></i>
                <span>github.com/tuusuario</span>
              </a>
              <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <i className="fab fa-linkedin text-2xl mr-3"></i>
                <span>linkedin.com/in/tuusuario</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}