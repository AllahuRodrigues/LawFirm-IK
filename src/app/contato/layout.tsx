import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contato - Ibraimo Kanté Advogados",
  description: "Entre em contato com a Ibraimo Kanté Advogados. Estamos prontos para atender suas necessidades jurídicas com excelência e compromisso."
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 