import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900"></div>
      <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/logo-white.png"
                  alt="I.K Advogados Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold">I.K ADVOGADOS</div>
                <p className="text-sm text-primary-foreground/80">
                  Sociedade Unipessoal, Lda.
                </p>
              </div>
            </div>
            
            <p className="text-sm text-primary-foreground/80 max-w-md leading-relaxed">
              Advocacia de excelência com mais de 15 anos de experiência em Moçambique. 
              Especialistas em direito comercial, laboral e arbitragem.
            </p>
            
            <div className="flex items-center gap-6 text-primary-foreground/80">
              <div className="text-center">
                <div className="text-xl font-bold text-accent">15+</div>
                <div className="text-xs">Anos</div>
              </div>
              <div className="w-px h-8 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent">500+</div>
                <div className="text-xs">Casos</div>
              </div>
              <div className="w-px h-8 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent">3</div>
                <div className="text-xs">Liderança</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contacto
            </h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>Rua 1301, Bairro da Sommerschield</p>
                  <p>Maputo – Moçambique</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:ibrakante@ikadvogados.co.mz" 
                  className="hover:text-accent transition-colors"
                >
                  ibrakante@ikadvogados.co.mz
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:+258841234567" 
                  className="hover:text-accent transition-colors"
                >
                  +258 84 123 4567
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p>Segunda - Sexta: 08:00 - 17:00</p>
                  <p>Sábado: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Links Rápidos
            </h3>
            <div className="space-y-3 text-sm">
              <Link 
                href="/sobre" 
                className="block text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-125 transition-transform"></span>
                Sobre a Firma
              </Link>
              <Link 
                href="/servicos" 
                className="block text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-125 transition-transform"></span>
                Áreas de Atuação
              </Link>
              <Link 
                href="/agendar" 
                className="block text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-125 transition-transform"></span>
                Agendar Consulta
              </Link>
              <Link 
                href="/contato" 
                className="block text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-125 transition-transform"></span>
                Contacto
              </Link>
              <Link 
                href="/carreira" 
                className="block text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-125 transition-transform"></span>
                Carreira
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              <p>&copy; 2025 I.K Advogados, Sociedade Unipessoal, Lda. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
              <span>Desenvolvido por</span>
      
              <span><Link
    href="https://allahurodrigues.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-accent transition"
  >
    Allah‑u‑Abha Rodrigues
  </Link></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 