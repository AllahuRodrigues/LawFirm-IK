import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Serviços Jurídicos - Direito Civil, Comercial e Laboral em Maputo",
  description: "Serviços jurídicos especializados em Direito Civil, Comercial, Laboral e Imobiliário em Maputo, Moçambique. Consultoria jurídica empresarial e assessoria legal completa.",
  keywords: [
    "serviços jurídicos Maputo",
    "direito civil Moçambique",
    "direito comercial Maputo", 
    "direito laboral Moçambique",
    "direito imobiliário Maputo",
    "consultoria jurídica empresarial",
    "assessoria legal Moçambique",
    "contratos comerciais",
    "questões laborais Maputo"
  ],
  openGraph: {
    title: "Serviços Jurídicos - I.K Advogados Maputo",
    description: "Direito Civil, Comercial, Laboral e Imobiliário em Moçambique",
    url: "https://ikadvogados.co.mz/servicos"
  }
}

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            Nossos Serviços
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-primary">Direito Civil</h2>
              <p className="text-gray-600">
                Contratos, propriedade, sucessões e questões familiares.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-primary">Direito Comercial</h2>
              <p className="text-gray-600">
                Assessoria jurídica para empresas e negócios.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-primary">Direito do Trabalho</h2>
              <p className="text-gray-600">
                Questões laborais e relações de trabalho.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-primary">Direito Imobiliário</h2>
              <p className="text-gray-600">
                Transações imobiliárias e questões de propriedade.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Precisa de consultoria jurídica especializada? Entre em contacto connosco.
            </p>
            <a 
              href="/contato"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-block"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 