import Link from 'next/link'

export const metadata = {
  title: "Carreira - I.K Advogados",
  description: "Junte-se à nossa equipa na I.K Advogados. Ofertas de emprego e oportunidades de carreira em direito em Maputo, Moçambique."
}

const jobOpenings = [
  {
    id: 1,
    title: "Estágio Profissional para Efeitos de Ingresso na Advocacia",
    department: "Formação Profissional",
    location: "Maputo",
    type: "Estágio Profissional",
    posted: "2025-01-07",
    description: "Programa de estágio profissional destinado a licenciados em Direito que pretendem ingressar na advocacia. Este estágio visa proporcionar formação prática e experiência profissional necessária para o exercício da advocacia em Moçambique, em conformidade com os requisitos da Ordem dos Advogados de Moçambique.",
    requirements: [
      "Licenciatura em Direito por instituição reconhecida",
      "Certificado de conclusão do curso de Direito",
      "Disponibilidade para estágio a tempo inteiro",
      "Excelente domínio da língua portuguesa",
      "Conhecimentos básicos em inglês (preferencial)",
      "Competências de investigação jurídica",
      "Boa capacidade de redacção e comunicação",
      "Proactividade e vontade de aprender",
      "Interesse genuíno pela prática da advocacia",
      "Disponibilidade para acompanhar processos em tribunal",
      "Conhecimento básico de informática (Word, Excel, pesquisa online)"
    ],
    benefits: [
      "Formação prática supervisionada por advogados experientes",
      "Subsídio de estágio competitivo",
      "Acompanhamento em processos reais",
      "Formação contínua em diferentes áreas do direito",
      "Possibilidade de contratação após conclusão do estágio",
      "Preparação para exames da Ordem dos Advogados",
      "Mentoria personalizada com o Ibraimo Kanté",
      "Certificado de conclusão de estágio"
    ],
    documents: [
      "Curriculum Vitae actualizado",
      "Certificado de licenciatura em Direito",
      "Histórico escolar completo",
      "Carta de motivação (máximo 2 páginas)",
      "Fotocópia do Bilhete de Identidade",
      "Certificados de outros cursos ou formações (se aplicável)",
      "Registo criminal (ou declaração de não existência)"
    ]
  }
]

export default function CareerPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Carreira na I.K Advogados
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Junte-se à nossa equipa de profissionais experientes e construa uma carreira de sucesso 
            numa firma comprometida com os seus clientes.
          </p>
        </section>

        {/* Why Join Us */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Por que Trabalhar Connosco?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Desenvolvimento Profissional</h3>
              <p className="text-gray-600">
                Oferecemos oportunidades contínuas de formação e desenvolvimento para expandir as suas competências jurídicas.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Casos Desafiadores</h3>
              <p className="text-gray-600">
                Trabalhe em casos complexos e interessantes que irão desafiar e expandir a sua experiência jurídica.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Ambiente Colaborativo</h3>
              <p className="text-gray-600">
                Faça parte de uma equipa unida que valoriza a colaboração, o respeito mútuo e a excelência profissional.
              </p>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Oportunidades Actuais
            </h2>
            <p className="text-lg text-gray-600">
              Explore as nossas ofertas de emprego atuais e candidate-se à posição que melhor se adequa ao seu perfil.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        job.type === 'Estágio Profissional' 
                          ? 'bg-accent text-accent-foreground' 
                          : 'bg-primary text-primary-foreground'
                      }`}>
                        {job.type}
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                        {job.department}
                      </span>
                      <span className="text-gray-500 text-sm">📍 {job.location}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {job.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {job.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Requisitos:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-accent mr-2 flex-shrink-0">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {job.benefits && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 mb-2">Benefícios:</h4>
                        <ul className="space-y-1">
                          {job.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.documents && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 mb-2">Documentos a Enviar:</h4>
                        <ul className="space-y-1">
                          {job.documents.map((doc, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-blue-500 mr-2 flex-shrink-0">📄</span>
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="text-sm text-gray-500">
                      Publicado em: {new Date(job.posted).toLocaleDateString('pt-PT')}
                    </div>
                  </div>

                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <Link
                      href={`/contato?assunto=candidatura&vaga=${encodeURIComponent(job.title)}`}
                      className={`px-6 py-2 rounded-md font-medium transition-colors inline-block ${
                        job.type === 'Estágio Profissional'
                          ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                          : 'bg-primary text-primary-foreground hover:bg-primary/90'
                      }`}
                    >
                      Candidatar-se
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Processo de Candidatura
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Candidatura</h3>
                <p className="text-sm text-gray-600">
                  Envie o seu CV e documentos necessários através do nosso formulário de contacto. Para estágios profissionais, consulte a lista completa de documentos exigidos.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Análise</h3>
                <p className="text-sm text-gray-600">
                  Análise cuidadosa do perfil e avaliação da adequação aos requisitos da posição. Para estágios, verificação dos requisitos da OAM.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Entrevista</h3>
                <p className="text-sm text-gray-600">
                  Entrevista presencial ou online com a nossa equipa. Para estágios profissionais, inclui entrevista com o Dr. Ibraimo Kanté.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">4</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Integração</h3>
                <p className="text-sm text-gray-600">
                  Bem-vindo à equipa! Processo de integração, formação inicial e definição do plano de formação personalizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Não Encontrou a Posição Ideal?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Envie-nos o seu CV mesmo assim! Poderemos ter oportunidades futuras que se adequem ao seu perfil.
          </p>
          
          <Link
            href="/contato?assunto=candidatura-espontanea"
            className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-block"
          >
            Candidatura Espontânea
          </Link>
        </section>
      </div>
    </div>
  )
} 