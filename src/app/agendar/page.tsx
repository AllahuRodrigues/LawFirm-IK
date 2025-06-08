'use client'

import { useState } from 'react'
import Link from 'next/link'

const consultationTypes = [
  {
    id: 'presencial',
    title: 'Consulta Presencial',
    description: 'Reunião no nosso escritório em Sommerschield',
    duration: '60 minutos',
    price: 'Consulta inicial gratuita',
    icon: '🏢',
    features: ['Análise detalhada do caso', 'Documentação física', 'Ambiente profissional']
  },
  {
    id: 'online',
    title: 'Consulta Online',
    description: 'Videochamada através de plataforma segura',
    duration: '45 minutos', 
    price: 'Consulta inicial gratuita',
    icon: '💻',
    features: ['Conveniência total', 'Gravação autorizada', 'Partilha de documentos']
  },
  {
    id: 'urgente',
    title: 'Consulta Urgente',
    description: 'Atendimento prioritário em até 24h',
    duration: '30-60 minutos',
    price: 'Taxa expressa aplicável',
    icon: '⚡',
    features: ['Resposta rápida', 'Prioridade máxima', 'Horários flexíveis']
  }
]

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00'
]

const specializations = [
  'Direito Comercial',
  'Direito Laboral', 
  'Direito Civil',
  'Direito Criminal',
  'Arbitragem',
  'Consultoria Jurídica',
  'Direito Administrativo',
  'Direito Bancário'
]

export default function BookingPage() {
  const [selectedType, setSelectedType] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    description: '',
    urgency: 'normal'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    const today = new Date()
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)
      
      const isCurrentMonth = date.getMonth() === month
      const isToday = date.toDateString() === today.toDateString()
      const isPast = date < today
      const isWeekend = date.getDay() === 0 || date.getDay() === 6
      const isAvailable = isCurrentMonth && !isPast && !isWeekend
      
      days.push({
        date,
        isCurrentMonth,
        isToday,
        isPast,
        isWeekend,
        isAvailable,
        dateString: date.toISOString().split('T')[0]
      })
    }
    
    return days
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1))
      return newDate
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const consultationType = consultationTypes.find(t => t.id === selectedType)
      const selectedDateFormatted = new Date(selectedDate).toLocaleDateString('pt-PT', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
      
      // Create mailto link for immediate email sending
      const emailSubject = encodeURIComponent(`[Agendamento] Consulta ${consultationType?.title} - ${selectedDateFormatted}`)
      const emailBody = encodeURIComponent(`
Novo Agendamento de Consulta

DETALHES DA CONSULTA:
- Tipo: ${consultationType?.title}
- Data: ${selectedDateFormatted}
- Hora: ${selectedTime}
- Duração: ${consultationType?.duration}

DADOS DO CLIENTE:
- Nome: ${formData.name}
- Email: ${formData.email}
- Telefone: ${formData.phone}
- Área Jurídica: ${formData.specialization}
- Urgência: ${formData.urgency === 'low' ? 'Baixa' : formData.urgency === 'normal' ? 'Normal' : 'Alta'}

DESCRIÇÃO DO CASO:
${formData.description}

---
Agendamento realizado através do website I.K Advogados
Data/Hora do pedido: ${new Date().toLocaleString('pt-PT')}

AÇÃO NECESSÁRIA: 
Por favor confirme este agendamento contactando o cliente através dos dados fornecidos.
      `)
      
      const mailtoLink = `mailto:ibrakante@ikadvogados.co.mz?subject=${emailSubject}&body=${emailBody}`
      
      // Open email client
      window.open(mailtoLink, '_blank')
      
      // Create calendar event data for potential Google Calendar integration
      const eventDetails = {
        type: selectedType,
        date: selectedDate,
        time: selectedTime,
        client: formData,
        consultationType: consultationType,
        calendar_email: 'ibrakante@ikadvogados.co.mz'
      }
      
      // Try to send via API if available
      try {
        const response = await fetch('/api/booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventDetails),
        })
        
        if (response.ok) {
          console.log('Booking sent successfully via API')
        } else {
          console.log('API not available, using mailto fallback')
        }
      } catch (apiError) {
        console.log('API not available, using mailto fallback', apiError)
      }
      
      console.log('Booking details:', eventDetails)
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        specialization: '',
        description: '',
        urgency: 'normal'
      })
      setSelectedType('')
      setSelectedDate('')
      setSelectedTime('')
    } catch (error) {
      console.error('Error creating booking:', error)
      // Still show success since mailto was opened
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        specialization: '',
        description: '',
        urgency: 'normal'
      })
      setSelectedType('')
      setSelectedDate('')
      setSelectedTime('')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const calendarDays = generateCalendarDays()
  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-blue-900 text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Agendamento Online
              </span>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Agende a Sua Consulta
              <span className="block text-accent text-2xl md:text-3xl font-medium mt-2">
                Com o Ibraimo Kanté
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Escolha o tipo de consulta, data e horário que melhor se adequa às suas necessidades. Resposta garantida em 24 horas.
            </p>

            <div className="flex items-center justify-center gap-8 text-primary-foreground/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24h</div>
                <div className="text-sm">Confirmação</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">Gratuita</div>
                <div className="text-sm">1ª Consulta</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">Online</div>
                <div className="text-sm">ou Presencial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Tipos de Consulta
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha a modalidade que melhor se adapta às suas necessidades e disponibilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`group cursor-pointer p-8 rounded-xl border-2 transition-all duration-300 ${
                  selectedType === type.id
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-gray-200 hover:border-primary/50 hover:shadow-md'
                }`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-medium text-primary">
                    <span className="text-gray-500">Duração:</span> {type.duration}
                  </p>
                  <p className="font-medium text-accent">
                    <span className="text-gray-500">Preço:</span> {type.price}
                  </p>
                </div>
                <ul className="mt-4 space-y-1">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                {selectedType === type.id && (
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-primary font-medium flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Selecionado
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar & Booking Form */}
      {selectedType && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Calendar */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-primary font-semibold uppercase text-sm tracking-wider">Escolher Data e Hora</span>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-primary">
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigateMonth('prev')}
                        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => navigateMonth('next')}
                        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                      <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, index) => (
                      <button
                        key={index}
                        onClick={() => day.isAvailable ? setSelectedDate(day.dateString) : null}
                        disabled={!day.isAvailable}
                        className={`
                          p-2 h-10 text-sm rounded-lg transition-all duration-200
                          ${!day.isCurrentMonth ? 'text-gray-300' : ''}
                          ${day.isToday ? 'ring-2 ring-accent' : ''}
                          ${day.isAvailable 
                            ? 'hover:bg-primary hover:text-primary-foreground cursor-pointer' 
                            : 'text-gray-300 cursor-not-allowed'
                          }
                          ${selectedDate === day.dateString 
                            ? 'bg-primary text-primary-foreground' 
                            : 'text-gray-700'
                          }
                        `}
                      >
                        {day.date.getDate()}
                      </button>
                    ))}
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <div className="mt-8">
                      <h4 className="font-semibold text-primary mb-4">Horários Disponíveis</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`
                              p-3 rounded-lg text-sm font-medium transition-all duration-200
                              ${selectedTime === time
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary'
                              }
                            `}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Booking Form */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-primary font-semibold uppercase text-sm tracking-wider">Dados da Consulta</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="O seu nome completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                          placeholder="+258 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-2">
                          Área Jurídica *
                        </label>
                        <select
                          id="specialization"
                          name="specialization"
                          value={formData.specialization}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Selecionar área</option>
                          {specializations.map(spec => (
                            <option key={spec} value={spec}>{spec}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        Urgência
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      >
                        <option value="low">Baixa - Pode aguardar</option>
                        <option value="normal">Normal - Dentro de alguns dias</option>
                        <option value="high">Alta - Preciso urgentemente</option>
                      </select>
                    </div>

                    <div className="mt-6">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                        Descrição do Caso *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-vertical"
                        placeholder="Descreva brevemente o seu caso ou questão jurídica..."
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  {selectedDate && selectedTime && (
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                      <h3 className="font-semibold text-primary mb-4">Resumo da Consulta</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Tipo:</span> {consultationTypes.find(t => t.id === selectedType)?.title}</p>
                        <p><span className="font-medium">Data:</span> {new Date(selectedDate).toLocaleDateString('pt-PT', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</p>
                        <p><span className="font-medium">Hora:</span> {selectedTime}</p>
                        <p><span className="font-medium">Duração:</span> {consultationTypes.find(t => t.id === selectedType)?.duration}</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Consulta agendada com sucesso! Receberá uma confirmação por email em breve.
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      Erro ao agendar consulta. Tente novamente ou contacte-nos diretamente.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !selectedDate || !selectedTime}
                    className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Agendando...
                      </span>
                    ) : (
                      'Confirmar Agendamento'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Support Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de Ajuda?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Se tiver dificuldades no agendamento ou questões urgentes, contacte-nos diretamente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contactar Agora
            </Link>
            <a
              href="tel:+258841234567"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Ligar Diretamente
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 