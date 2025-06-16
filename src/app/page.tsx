import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const pillars = [
  {
    number: "01",
    title: "Excelência",
    description: "Serviços com eficiência e qualidade superior, com mais de 15 anos de experiência comprovada."
  },
  {
    number: "02", 
    title: "Integridade & Ética",
    description: "Sigilo e ética profissional, com reconhecimento da Ordem dos Advogados de Moçambique."
  },
  {
    number: "03",
    title: "Inovação",
    description: "Soluções jurídicas modernas e personalizadas para cada necessidade dos nossos clientes."
  }
]

const achievements = [
  {
    year: "2024",
    title: "Conselheiro Nacional",
    org: "Ordem dos Advogados de Moçambique"
  },
  {
    year: "2023",
    title: "Presidente da Comissão",
    org: "Sociedades de Advogados & Avaliação de Quotas"
  },
  {
    year: "2022",
    title: "Árbitro Certificado",
    org: "CACM - Centro de Arbitragem"
  }
]

const expertise = [
  "Direito Comercial e Bancário",
  "Arbitragem e Mediação", 
  "Direito Laboral",
  "Litígios Civis",
  "Direito Criminal",
  "Assessoria Corporativa"
]

const patronProfile = {
  name: "Ibraimo Kanté",
  age: 41,
  role: "Advogado",
  contact: {
    phone: ["(+258) 84 57 75 185", "(+258) 86 57 72 780"],
    whatsapp: "(+258) 86 57 72 780",
    email: "ibrakante@ikadvogados.co.mz"
  },
  education: "Licenciado em Direito pela Universidade Eduardo Mondlane",
  currentPositions: [
    "Sócio Administrador na firma Ibraimo Kanté Advogados, S.U., Lda (desde 2019)",
    "Árbitro inscrito no Centro de Arbitragem Conciliação e Mediação (CACM/CTA)",
    "Conselheiro Nacional da Ordem dos Advogados de Moçambique, para a área de estágio, formação profissional e IAJ – Instituto de Acesso à Justiça",
    "Presidente da Comissão de Verificação de Sociedades de Advogados e Avaliação de Quotas da Ordem dos Advogados de Moçambique (foi)",
    "Conselheiro Provincial do Conselho Provincial da Cidade de Maputo, para a área do Acesso à Justiça e Direito dos Humanos (foi)",
    "Formador de Advogados estagiários junto da Ordem dos Advogados de Moçambique (foi)",
    "Júri nos exames orais de acesso à Advocacia junto da Ordem dos Advogados de Moçambique",
    "Membro sénior e Assessor Jurídico da Associação Muçulmana de Empresários e Empreendedores Moçambicanos (AMEEM)",
    "Membro sénior da Associação dos Juristas Muçulmanos de Moçambique (AJUM)"
  ],
  experience: "Trabalha desde 2009 nas diversas áreas do direito, com especial enfoque para o contencioso (cível, laboral, crime, administrativo, comercial e bancário), tendo prestado através da firma onde esteve afecto até junho de 2019 (Zaheer Lorgat Advogados), serviços jurídicos em renomadas instituições bancárias, públicas e privadas.",
  oamReference: "Perfil oficial disponível na página da Ordem dos Advogados de Moçambique em oam.org.mz/orgaos/conselho-nacional/"
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-blue-900 text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  Managing Partner
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Ibraimo Kanté
                <span className="block text-accent text-2xl md:text-3xl font-medium mt-2">
                  Profissionalismo e comprometimento
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90">
                10+ Anos comprometido com a defesa dos seus clientes
              </p>
              
              <p className="text-lg mb-8 text-primary-foreground/80 max-w-lg">
                Conselheiro Nacional da Ordem dos Advogados de Moçambique. 
                Especialista em Direito Comercial, Arbitragem e Litígios.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/agendar"
                  className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Agendar Consulta
                </Link>
                <Link
                  href="/sobre"
                  className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                >
                  Conheça o Ibraimo Kanté
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary-foreground/10 rounded-full backdrop-blur-sm border border-primary-foreground/20"></div>
                
                {/* CEO Photo */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl">
                  <Image
                    src="/images/circle-profile.jpg"
                    alt="Ibraimo Kanté"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/60 rounded-full animate-pulse"></div>
                
                {/* Achievement Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white text-primary px-4 py-2 rounded-full shadow-lg">
                  <div className="text-sm font-semibold">10+</div>
                  <div className="text-xs">Anos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Strip */}
      <section className="bg-accent py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 text-accent-foreground">
            {expertise.map((area, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                <span className="font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Kanté */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-primary font-semibold uppercase text-sm tracking-wider">Sobre o Kanté</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Liderança Jurídica com Experiência Comprovada
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                O Ibraimo Kanté é o Sócio-fundador e Administrador da I.K Advogados, com uma carreira distinta 
                que começou em 2009. Formado pela prestigiada Universidade Eduardo Mondlane, 
                especializado em Direito Civil, Comercial, Laboral e Bancário.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Atualmente serve como Conselheiro Nacional da Ordem dos Advogados de Moçambique 
                e Árbitro certificado pelo CACM. A sua vasta experiência inclui trabalhar desde 2009 
                na renomada Zaheer Lorgat Advogados antes de fundar a sua própria firma em 2019.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border-l-4 border-primary mb-6">
                <p className="text-sm text-gray-600 italic">
                  <strong>Referência Oficial:</strong> O perfil do Ibraimo Kanté está disponível na página oficial da 
                  Ordem dos Advogados de Moçambique em{' '}
                  <a 
                    href="https://oam.org.mz/orgaos/conselho-nacional/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors underline"
                  >
                    oam.org.mz/orgaos/conselho-nacional/
                  </a>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Educação</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Universidade Eduardo Mondlane</strong><br />
                    Licenciatura em Direito (2008-2012)<br />
                    Banking, Corporate, Finance & Securities Law
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Idiomas</h4>
                  <p className="text-sm text-gray-600">
                    Português (Nativo)<br />
                    Francês (Proficiente)<br />
                    Inglês (Proficiente)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold text-primary mb-4">Conquistas Recentes</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-accent-foreground font-bold text-sm">{achievement.year}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{achievement.title}</h4>
                        <p className="text-gray-600 text-sm">{achievement.org}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Os Nossos Pilares
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Construímos a nossa prática sobre valores sólidos que garantem o melhor serviço aos nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div 
                key={pillar.number}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
              >
                <div className="text-accent text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {pillar.number} •
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Articles & National Events Combined Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Contribuições Jurídicas & Liderança
              </span>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Artigos Jurídicos & Participação em Eventos Nacionais
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Acompanhe as análises especializadas do Dr. Ibraimo Kanté e a sua participação activa em eventos da Ordem dos Advogados de Moçambique.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Artigos Jurídicos Card */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-primary font-semibold uppercase text-xs tracking-wider">Artigo Destacado</span>
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  Finalidade da Caução nos Contratos de Arrendamento
                </CardTitle>
                <CardDescription>
                  Publicado na Folha Imobiliária • Setembro 2024
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-sm">
                  O contrato de arrendamento é aquele através do qual alguém se compromete a proporcionar a outro, 
                  o gozo (uso) temporário de um bem imóvel, mediante retribuição. A pessoa que dá o imóvel de 
                  arrendamento é designada por &ldquo;senhorio&rdquo; ou locador.
                </p>

                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                  <h4 className="font-semibold text-primary mb-2 text-sm">Pontos-chave do Artigo:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs text-gray-700">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Definição e aplicação da caução em contratos de arrendamento</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-700">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Proteção jurídica para senhorios e inquilinos</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-700">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Resolução de conflitos em situações de incumprimento</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-700">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Casos práticos e exemplos de aplicação</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">IK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">Dr. Ibraimo Kanté</p>
                    <p className="text-xs text-gray-600">ibrakante@ikadvogados.co.mz</p>
                  </div>
                </div>

                <Link
                  href="/servicos"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <span>Saber Mais sobre Direito Imobiliário</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Eventos Nacionais Card */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-accent font-semibold uppercase text-xs tracking-wider">Liderança Nacional</span>
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  Moderador em Eventos da OAM
                </CardTitle>
                <CardDescription>
                  Conselheiro Nacional da Ordem dos Advogados de Moçambique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-sm">
                  Como Conselheiro Nacional da Ordem dos Advogados de Moçambique, o Dr. Ibraimo Kanté 
                  participa regularmente como moderador em palestras e eventos sobre desenvolvimento 
                  profissional, formação de estagiários e questões relacionadas ao Instituto de Acesso à Justiça.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary">Comissão de Género - OAM</h4>
                      <p className="text-xs text-gray-600">
                        Ciclo de Palestras sobre Desenvolvimento Pessoal e Empreendedorismo
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary">Tema: Desafios e Prerrogativas dos Advogados</h4>
                      <p className="text-xs text-gray-600">
                        Uma Perspectiva Baseada no Género
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary">Moderação de Painéis</h4>
                      <p className="text-xs text-gray-600">
                        Dr. Dário de Souza, Dra. Amina Berta, Dr. Joaquim Pereira
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-xs text-gray-700 italic">
                    &ldquo;Por uma Advocacia Ética, de Qualidade e Moderna, ao Serviço da Sociedade&rdquo;
                  </p>
                  <p className="text-xs text-accent mt-1 font-medium">— Lema da Ordem dos Advogados de Moçambique</p>
                </div>

                <div className="bg-primary/5 p-3 rounded-lg">
                  <h5 className="font-semibold text-primary text-sm mb-2">Informações do Evento Recente:</h5>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-600"><strong>Local:</strong> Hotel Sena, Maputo</p>
                    <p className="text-xs text-gray-600"><strong>Data:</strong> Março 2024</p>
                    <p className="text-xs text-gray-600"><strong>Função:</strong> Moderador Principal</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10">
              <p className="text-sm text-gray-600 mb-4">
                <strong>Referência Oficial:</strong> As fotografias do Dr. Ibraimo Kanté em eventos oficiais da OAM 
                podem ser consultadas na página oficial da organização, demonstrando a sua participação activa 
                na liderança da advocacia moçambicana.
              </p>
              <p className="text-xs text-gray-500">
                Para mais informações sobre eventos e artigos, visite a página oficial da Ordem dos Advogados de Moçambique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Números que Falam por Si
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              A nossa experiência e dedicação traduzem-se em resultados concretos para os nossos clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-primary-foreground/80">Anos de Experiência</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-primary-foreground/80">Casos Resolvidos</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">3</div>
              <div className="text-primary-foreground/80">Cargos de Liderança</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-primary-foreground/80">Compromisso</div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/agendar"
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Agendar Consulta Agora
              </Link>
              <Link
                href="/contato"
                className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              >
                Contactar-nos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Nossa Localização</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video">
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
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Endereço Completo</h3>
                <p className="text-gray-600">
                  Rua 1335, N.º 175<br />
                  Bairro da Coop<br />
                  Cidade de Maputo<br />
                  Moçambique
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/${patronProfile.contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${patronProfile.contact.phone[0].replace(/\D/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Ligar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
