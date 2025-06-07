'use client'

import { useState } from 'react'
// import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Dynamically import MapboxGL component to avoid SSR issues
// const MapboxMap = dynamic(() => import('../../components/MapboxMap'), {
//   ssr: false,
//   loading: () => (
//     <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
//       <div className="text-gray-500">Carregando mapa...</div>
//     </div>
//   )
// })

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  })
  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // setIsSubmitting(true)
    
    try {
      // Create mailto link for immediate email sending
      const emailSubject = encodeURIComponent(`[Website] ${formData.subject}`)
      const emailBody = encodeURIComponent(`
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone || 'Não fornecido'}
Área de Interesse: ${formData.service || 'Não especificada'}

Mensagem:
${formData.message}

---
Enviado através do website I.K Advogados
Data: ${new Date().toLocaleString('pt-PT')}
      `)
      
      const mailtoLink = `mailto:ibrakante@ikadvogados.co.mz?subject=${emailSubject}&body=${emailBody}`
      
      // Open email client
      window.open(mailtoLink, '_blank')
      
      // Also try to send via a contact API if available
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'ibrakante@ikadvogados.co.mz',
          timestamp: new Date().toISOString()
        }),
      })
      
      if (response.ok) {
        console.log('Email sent successfully via API')
      } else {
        console.log('API not available, using mailto fallback')
      }
      
      // setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      // Still show success since mailto was opened
      // setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: ''
      })
    } finally {
      // setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
                Entre em Contacto
              </span>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Fale Connosco
              <span className="block text-accent text-2xl md:text-3xl font-medium mt-2">
                Estamos Aqui para Ajudar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Agende uma consulta ou esclareça as suas dúvidas. A nossa equipa está pronta para oferecer o apoio jurídico de que necessita.
            </p>

            <div className="flex items-center justify-center gap-8 text-primary-foreground/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24h</div>
                <div className="text-sm">Resposta</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm">Confidencial</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm">Anos Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(+258) 84 57 75 185"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva sua necessidade jurídica"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full">Enviar Mensagem</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                  <CardDescription>
                    Estamos disponíveis para atendimento nos seguintes horários
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                        <p className="text-gray-600">(+258) 84 57 75 185</p>
                        <p className="text-gray-600">WhatsApp: (+258) 86 57 72 780</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-gray-600">ibrakante@ikadvogados.co.mz</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                        <p className="text-gray-600">
                          Rua 1335, N.º 175<br />
                          Bairro da Coop<br />
                          Cidade de Maputo<br />
                          Moçambique
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Horário de Atendimento</h3>
                        <div className="space-y-2 text-gray-600">
                          <p>Segunda - Sexta: 08:00 - 17:00</p>
                          <p>Sábado: 09:00 - 13:00</p>
                          <p>Domingo: Fechado</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Localização</CardTitle>
                  <CardDescription>
                    Visite nosso escritório no Bairro da Coop, Maputo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.234567890123!2d32.58!3d-25.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU3JzAwLjAiUyAzMsKwMzQnNDguMCJF!5e0!3m2!1spt-PT!2smz!4v1640995200000"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização IK Advogados - Bairro da Coop"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de Apoio Jurídico Urgente?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Para situações urgentes, pode contactar-nos diretamente por telefone ou agendar uma consulta prioritária.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+258845775185"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ligar Agora
            </a>
            <a
              href="/agendar"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Agendar Consulta Urgente
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 