import Link from 'next/link'
import Image from 'next/image'

const timeline = [
  {
    year: "2019 - Presente",
    title: "Sócio Administrador",
    company: "Ibraimo Kanté Advogados, S.U., Lda",
    description: "Fundação e liderança da própria firma de advocacia especializada em direito comercial, laboral, civil e criminal.",
    location: "Maputo, Moçambique"
  },
  {
    year: "2024 - Presente", 
    title: "Conselheiro Nacional",
    company: "Ordem dos Advogados de Moçambique",
    description: "Cargo de liderança nacional na regulamentação e supervisão da advocacia em Moçambique, com foco na área de estágio, formação profissional e IAJ – Instituto de Acesso à Justiça.",
    location: "Moçambique"
  },
  {
    year: "2022 - Presente",
    title: "Árbitro Certificado", 
    company: "CACM - Centro de Arbitragem Conciliação e Mediação",
    description: "Resolução de conflitos através de arbitragem e mediação em disputas comerciais e civis.",
    location: "Moçambique"
  },
  {
    year: "2020 - 2023",
    title: "Conselheiro Provincial",
    company: "Conselho Provincial da Cidade de Maputo - OAM",
    description: "Atuação na área do Acesso à Justiça e Direitos Humanos junto da Ordem dos Advogados de Moçambique.",
    location: "Maputo, Moçambique"
  },
  {
    year: "2023 - 2024",
    title: "Presidente da Comissão",
    company: "Verificação de Sociedades de Advogados & Avaliação de Quotas",
    description: "Liderança na avaliação e verificação de sociedades de advogados em Moçambique junto da Ordem dos Advogados.",
    location: "Moçambique"
  },
  {
    year: "2009 - 2019",
    title: "Advogado",
    company: "Zaheer Lorgat Advogados",
    description: "10 anos de experiência em contencioso e assessoria jurídica numa das firmas mais prestigiadas de Moçambique, prestando serviços jurídicos em renomadas instituições bancárias, públicas e privadas.",
    location: "Maputo, Moçambique"
  }
]

const values = [
  {
    title: "Excelência Profissional",
    description: "Compromisso com a mais alta qualidade em todos os serviços prestados, baseado em 10+ anos de experiência e formação contínua.",
    icon: "⚖️"
  },
  {
    title: "Integridade & Ética",
    description: "Adesão rigorosa aos princípios éticos da advocacia, com transparência e honestidade em todas as relações profissionais.",
    icon: "🤝"
  },
  {
    title: "Compromisso com o Cliente",
    description: "Dedicação total à defesa dos interesses dos clientes, com soluções personalizadas e atenção aos detalhes.",
    icon: "🎯"
  },
  {
    title: "Inovação Jurídica",
    description: "Aplicação de métodos modernos e tecnologia na prática jurídica para maior eficiência e resultados.",
    icon: "💡"
  }
]

const expertise = [
  "Direito Comercial e Bancário",
  "Arbitragem e Mediação",
  "Direito Laboral e Emprego", 
  "Litígios Civis",
  "Direito Criminal",
  "Assessoria Corporativa",
  "Direito Administrativo",
  "Consultoria Jurídica"
]

export default function AboutPage() {
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
                Conheça o Ibraimo Kanté
              </span>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Liderança Jurídica com
              <span className="block text-accent">Experiência Comprovada</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Sócio Administrador com mais de 10 anos de experiência, Conselheiro Nacional da Ordem dos Advogados de Moçambique e Árbitro certificado.
            </p>

            <div className="flex items-center justify-center gap-8 text-primary-foreground/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">2009</div>
                <div className="text-sm">Formação UEM</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm">Anos Experiência</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3</div>
                <div className="text-sm">Cargos Liderança</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-primary font-semibold uppercase text-sm tracking-wider">Perfil Profissional</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ibraimo Kanté
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                O Ibraimo Kanté, é o fundador e Sócio Administrador da Ibraimo Kanté Advogados, uma sociedade unipessoal especializada em direito comercial, laboral e civil. Com uma carreira que se estende por mais de 15 anos, começou a sua jornada profissional em 2009.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Formado pela prestigiada Universidade Eduardo Mondlane, o Kanté construiu uma carreira sólida baseada na excelência, integridade e compromisso com os seus clientes, atuando em diversas áreas do direito, com especial enfoque em contencioso (cível, laboral, crime, administrativo, comercial e bancário).
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Trabalha desde 2009 nas diversas áreas do direito, tendo prestado através da firma onde esteve afecto até junho de 2019 (Zaheer Lorgat Advogados), serviços jurídicos em renomadas instituições bancárias, públicas e privadas. É Advogado inscrito na Ordem dos Advogados de Moçambique, exercendo a profissão a tempo inteiro.
              </p>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10 mb-8">
                <h4 className="font-semibold text-primary mb-4">Contactos Profissionais</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Telefone:</strong> (+258) 84 57 75 185 / (+258) 86 57 72 780</p>
                  <p><strong>Email:</strong> ibrakante@ikadvogados.co.mz</p>
                  <p><strong>Endereço:</strong> Rua 1335, N.º 175, Bairro da Coop, Cidade de Maputo</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10">
                  <h4 className="font-semibold text-primary mb-3">Educação</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Universidade Eduardo Mondlane</strong></p>
                    <p>Licenciatura em Direito</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10">
                  <h4 className="font-semibold text-primary mb-3">Idiomas</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Português (Nativo)</p>
                    <p>Francês (Proficiente)</p>
                    <p>Inglês (Proficiente)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* CEO Photo */}
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="aspect-square rounded-2xl overflow-hidden border-4 border-accent/20 shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                    <Image
                      src="/images/ceo1.jpg"
                      alt="Ibraimo Kanté"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-gray-200">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 rounded-xl border border-accent/20">
                <h3 className="text-2xl font-semibold text-primary mb-6">Especializações</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {expertise.map((area, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Cargos de Liderança Atuais</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Sócio Administrador</p>
                      <p className="text-primary-foreground/80 text-sm">Ibraimo Kanté Advogados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Conselheiro Nacional</p>
                      <p className="text-primary-foreground/80 text-sm">Ordem dos Advogados de Moçambique</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Árbitro Certificado</p>
                      <p className="text-primary-foreground/80 text-sm">CACM - Centro de Arbitragem</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Membro Sénior e Assessor Jurídico</p>
                      <p className="text-primary-foreground/80 text-sm">AMEEM - Associação de Empresários Muçulmanos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Percurso Profissional
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uma carreira construída sobre excelência, dedicação e liderança no sector jurídico moçambicano.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-8 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg z-10"></div>
                  {index !== timeline.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-accent to-gray-300 mt-2"></div>
                  )}
                </div>
                
                <div className="flex-1 pb-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                      <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                        {item.year}
                      </span>
                      <span className="text-gray-500 text-sm">{item.location}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <h4 className="text-accent font-medium mb-3">
                      {item.company}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Os Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Valores fundamentais que orientam a nossa prática e definem a nossa relação com os clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-blue-900 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Trabalhar Connosco?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Beneficie da nossa experiência e dedicação. Agende uma consulta e descubra como podemos ajudá-lo a alcançar os seus objetivos jurídicos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agendar"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Agendar Consulta
            </Link>
            <Link
              href="/contato"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Contactar-nos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 