import Link from 'next/link'

export const metadata = {
  title: "Carreira - I.K Advogados",
  description: "Junte-se à nossa equipa na I.K Advogados. Ofertas de emprego e oportunidades de carreira em direito em Maputo, Moçambique."
}

const jobOpenings = [
  {
    id: 1,
    title: "Advogado Júnior",
    department: "Direito Comercial",
    location: "Maputo",
    type: "Tempo Integral",
    posted: "2024-12-01",
    description: "Procuramos um advogado júnior motivado para se juntar à nossa equipa de Direito Comercial.",
    requirements: [
      "Licenciatura em Direito",
      "Inscrição na Ordem dos Advogados de Moçambique",
      "1-3 anos de experiência em direito comercial",
      "Excelentes competências de comunicação",
      "Domínio do português e inglês"
    ]
  },
  {
    id: 2,
    title: "Paralegal",
    department: "Apoio Jurídico",
    location: "Maputo",
    type: "Tempo Integral",
    posted: "2024-11-15",
    description: "Oportunidade para paralegal experiente apoiar a nossa equipa jurídica.",
    requirements: [
      "Formação em Direito ou área relacionada",
      "Mínimo 2 anos de experiência como paralegal",
      "Conhecimento de procedimentos legais",
      "Competências em pesquisa jurídica",
      "Organização e atenção ao detalhe"
    ]
  },
  {
    id: 3,
    title: "Estagiário de Direito",
    department: "Várias Áreas",
    location: "Maputo",
    type: "Estágio",
    posted: "2024-11-01",
    description: "Programa de estágio para estudantes de direito em várias áreas de prática.",
    requirements: [
      "Estudante de Direito (últimos anos)",
      "Média académica mínima de 14 valores",
      "Interesse em advocacia",
      "Disponibilidade mínima de 6 meses",
      "Proatividade e vontade de aprender"
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
            numa das firmas de advocacia mais respeitadas de Moçambique.
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
              Oportunidades Atuais
            </h2>
            <p className="text-lg text-gray-600">
              Explore as nossas ofertas de emprego atuais e candidate-se à posição que melhor se adequa ao seu perfil.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
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
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-accent mr-2 flex-shrink-0">•</span>
                            {req}
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-sm text-gray-500 italic">
                            ... e mais {job.requirements.length - 3} requisitos
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="text-sm text-gray-500">
                      Publicado em: {new Date(job.posted).toLocaleDateString('pt-PT')}
                    </div>
                  </div>

                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <Link
                      href={`/contato?assunto=candidatura&vaga=${encodeURIComponent(job.title)}`}
                      className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
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
                  Envie o seu CV e carta de motivação através do nosso formulário de contacto.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Triagem</h3>
                <p className="text-sm text-gray-600">
                  Análise do perfil e avaliação da adequação aos requisitos da posição.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Entrevista</h3>
                <p className="text-sm text-gray-600">
                  Entrevista presencial ou online com a nossa equipa de recursos humanos.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">4</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Integração</h3>
                <p className="text-sm text-gray-600">
                  Bem-vindo à equipa! Processo de integração e formação inicial.
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