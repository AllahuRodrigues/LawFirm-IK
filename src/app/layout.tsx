import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ikadvogados.co.mz'),
  title: {
    default: "I.K Advogados - Escritório de Advocacia em Maputo, Moçambique",
    template: "%s | I.K Advogados - Escritório de Advocacia"
  },
  description: "I.K Advogados é um escritório de advocacia especializado em Direito Civil, Comercial, Laboral e Imobiliário em Maputo, Moçambique. Serviços jurídicos de excelência com mais de 15 anos de experiência no mercado moçambicano.",
  keywords: [
    // Palavras-chave principais
    "advogados Maputo",
    "escritório advocacia Moçambique", 
    "advogado Maputo",
    "serviços jurídicos Moçambique",
    "consultoria jurídica Maputo",
    
    // Áreas de direito
    "direito civil Moçambique",
    "direito comercial Maputo",
    "direito laboral Moçambique",
    "direito imobiliário Maputo",
    "direito empresarial Moçambique",
    "direito contratual Maputo",
    
    // Localização específica
    "advogados Sommerschield",
    "escritório advocacia Sommerschield",
    "advogados Maputo centro",
    "serviços jurídicos Sommerschield",
    
    // Serviços específicos
    "contratos comerciais Moçambique",
    "constituição empresas Maputo",
    "assessoria jurídica empresas",
    "direito trabalho Moçambique",
    "questões imobiliárias Maputo",
    "consultoria legal Moçambique",
    
    // Variações da marca
    "IK Advogados",
    "I.K Advogados Maputo",
    "Ibraimo Kanté advogado"
  ],
  authors: [
    {
      name: "I.K Advogados",
      url: "https://ikadvogados.co.mz"
    }
  ],
  creator: "I.K Advogados",
  publisher: "I.K Advogados",
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    url: "https://ikadvogados.co.mz",
    siteName: "I.K Advogados",
    title: "I.K Advogados - Escritório de Advocacia em Maputo, Moçambique",
    description: "Escritório de advocacia especializado em Direito Civil, Comercial, Laboral e Imobiliário em Maputo, Moçambique. Serviços jurídicos de excelência.",
    images: [
      {
        url: "/images/logo-main.png",
        width: 1200,
        height: 630,
        alt: "I.K Advogados - Escritório de Advocacia em Maputo"
      }
    ]
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "I.K Advogados - Escritório de Advocacia em Maputo",
    description: "Serviços jurídicos especializados em Moçambique. Direito Civil, Comercial, Laboral e Imobiliário.",
    images: ["/images/logo-main.png"]
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: "google-site-verification-code",
    other: {
      "msvalidate.01": "bing-verification-code"
    }
  },
  
  // Aplicativo
  applicationName: "I.K Advogados",
  
  // Metadados específicos para Moçambique
  other: {
    "geo.region": "MZ-MPM",
    "geo.placename": "Maputo",
    "geo.position": "-25.9589;32.5930",
    "ICBM": "-25.9589, 32.5930",
    "DC.title": "I.K Advogados - Escritório de Advocacia",
    "DC.creator": "I.K Advogados",
    "DC.subject": "Serviços Jurídicos, Advocacia, Direito",
    "DC.description": "Escritório de advocacia em Maputo, Moçambique",
    "DC.publisher": "I.K Advogados",
    "DC.contributor": "Ibraimo Kanté",
    "DC.date": new Date().toISOString(),
    "DC.type": "website",
    "DC.format": "text/html",
    "DC.identifier": "https://ikadvogados.co.mz",
    "DC.language": "pt-MZ",
    "DC.coverage": "Moçambique",
    "DC.rights": "© 2024 I.K Advogados"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-MZ" dir="ltr">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "I.K Advogados",
              "description": "Escritório de advocacia especializado em Direito Civil, Comercial, Laboral e Imobiliário em Maputo, Moçambique",
              "url": "https://ikadvogados.co.mz",
              "logo": "https://ikadvogados.co.mz/images/logo-main.png",
              "image": "https://ikadvogados.co.mz/images/logo-main.png",
              "telephone": "+258-845775185",
              "email": "ibrakante@ikadvogados.co.mz",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua 1335, N.º 175, Bairro da Coop",
                "addressLocality": "Maputo",
                "addressCountry": "MZ",
                "postalCode": "1100"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -25.95,
                "longitude": 32.58
              },
              "openingHours": "Mo-Fr 08:00-17:00",
              "priceRange": "$$",
              "areaServed": {
                "@type": "Country",
                "name": "Moçambique"
              },
              "serviceType": [
                "Direito Civil",
                "Direito Comercial", 
                "Direito Laboral",
                "Direito Imobiliário",
                "Consultoria Jurídica"
              ],
              "founder": {
                "@type": "Person",
                "name": "Ibraimo Kanté"
              },
              "knowsAbout": [
                "Direito Civil Moçambicano",
                "Direito Comercial",
                "Direito do Trabalho",
                "Direito Imobiliário",
                "Legislação Moçambicana"
              ],
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Serviços Jurídicos",
                  "description": "Consultoria e representação jurídica em diversas áreas do direito"
                }
              }
            })
          }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#022B4A" />
        <meta name="msapplication-TileColor" content="#022B4A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://ikadvogados.co.mz",
              "name": "I.K Advogados",
              "alternateName": "IK Advogados",
              "description": "Escritório de advocacia em Maputo, Moçambique",
              "url": "https://ikadvogados.co.mz",
              "telephone": "+258-845775185",
              "email": "ibrakante@ikadvogados.co.mz",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua 1335, N.º 175, Bairro da Coop",
                "addressLocality": "Maputo",
                "addressRegion": "Maputo",
                "postalCode": "1100",
                "addressCountry": "MZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -25.95,
                "longitude": 32.58
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/ikadvogados"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
