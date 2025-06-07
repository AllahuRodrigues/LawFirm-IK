export const metadata = {
  title: "Entrar - I.K Advogados",
  description: "Aceda à sua conta na I.K Advogados para gerir as suas consultas e documentos."
}

export default function LoginPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entrar na Sua Conta
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aceda à sua conta para gerir consultas, ver documentos e acompanhar o progresso dos seus processos.
          </p>
        </section>

        {/* Coming Soon Notice */}
        <section className="max-w-md mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-primary mb-4">
              Sistema de Autenticação em Desenvolvimento
            </h2>
            
            <p className="text-gray-600 mb-6">
              Estamos a desenvolver um sistema seguro de autenticação para permitir o acesso à sua área pessoal. 
              Por enquanto, contacte-nos diretamente para assuntos relacionados aos seus processos.
            </p>

            <div className="space-y-4">
              <a
                href="/contato"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block w-full"
              >
                Contactar-nos
              </a>
              
              <a
                href="tel:+258845775185"
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors inline-block w-full"
              >
                Ligar: +258 84 577 5185
              </a>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Funcionalidades da Área do Cliente
            </h2>
            <p className="text-gray-600">
              Quando o sistema estiver pronto, poderá aceder a:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Gestão de Consultas
              </h3>
              <p className="text-gray-600">
                Agende, reagende ou cancele consultas de forma rápida e conveniente.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Documentos e Processos
              </h3>
              <p className="text-gray-600">
                Aceda aos seus documentos legais e acompanhe o progresso dos seus processos.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Comunicação Direta
              </h3>
              <p className="text-gray-600">
                Comunique diretamente com a nossa equipa através de mensagens seguras.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 