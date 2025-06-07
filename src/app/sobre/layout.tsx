import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sobre Nós - Ibraimo Kanté Advogados",
  description: "Conheça a Ibraimo Kanté Advogados, Sociedade Unipessoal, Lda. Nossa história, missão e compromisso com a excelência jurídica em Moçambique."
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 