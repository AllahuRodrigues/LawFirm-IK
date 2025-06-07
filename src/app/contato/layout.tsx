import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contacto - I.K Advogados em Sommerschield, Maputo",
  description: "Entre em contacto com I.K Advogados. Escritório localizado na Rua 1301, Bairro da Sommerschield, Maputo. Telefone, email e formulário de contacto disponível.",
  keywords: [
    "contacto I.K Advogados",
    "advogados Sommerschield", 
    "escritório advocacia Maputo contacto",
    "telefone advogados Maputo",
    "email I.K Advogados",
    "endereço escritório Sommerschield",
    "Rua 1301 Sommerschield"
  ],
  openGraph: {
    title: "Contacto - I.K Advogados Maputo",
    description: "Entre em contacto connosco. Rua 1301, Sommerschield, Maputo",
    url: "https://ikadvogados.co.mz/contato"
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 