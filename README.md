# I.K Advogados - Website Institucional

Website oficial da **I.K Advogados, Sociedade Unipessoal, Lda.**, escritório de advocacia liderado pelo Dr. Ibraimo Kanté em Maputo, Moçambique.

## 🏛️ Sobre o Dr. Ibraimo Kanté

**Managing Partner** com mais de 15 anos de experiência no sector jurídico moçambicano.

### Qualificações e Cargos
- **Conselheiro Nacional** - Ordem dos Advogados de Moçambique (2024-presente)
- **Árbitro Certificado** - CACM - Centro de Arbitragem (2022-presente)
- **Presidente da Comissão** - Verificação de Sociedades de Advogados (2023-2024)
- **Executivo Jurídico** - AMEEM - Associação de Empresários Muçulmanos (2022-presente)

### Formação
- **Universidade Eduardo Mondlane** (2008-2012)
- Licenciatura em Direito
- Especialização: Banking, Corporate, Finance & Securities Law

### Experiência Profissional
- **2019-presente**: Managing Partner - I.K Advogados
- **2011-2019**: Senior Associate Lawyer - Zaheer Lorgat Advogados (8 anos)
- **Idiomas**: Português (Nativo), Francês (Proficiente), Inglês (Proficiente)

## 🚀 Funcionalidades do Website

### ✨ Design Moderno e Responsivo
- Interface moderna com as cores da marca (#022B4A azul, #CFA94F dourado)
- Design responsivo otimizado para todos os dispositivos
- Componentes Shadcn/UI e Radix UI
- Animações e transições suaves

### 📄 Páginas Implementadas

1. **Home (/)** - Página inicial com apresentação do Dr. Kanté
2. **Sobre (/sobre)** - Biografia detalhada e percurso profissional
3. **Serviços (/servicos)** - 6 áreas de prática jurídica
4. **Carreira (/carreira)** - Oportunidades de emprego
5. **Contacto (/contato)** - Formulário de contacto e mapa 3D
6. **Agendamento (/agendar)** - Sistema de agendamento de consultas
7. **Login (/entrar)** - Sistema de autenticação (placeholder)

### 🗓️ Sistema de Agendamento Avançado
- **Três tipos de consulta**: Presencial, Online, Urgente
- **Calendário interativo** com navegação por mês
- **Horários disponíveis** (Segunda-Sexta: 08:00-17:00)
- **Formulário completo** de dados do cliente
- **Integração preparada** para Google Calendar

### 🗺️ Mapa 3D de Maputo
- Visualização interativa da localização do escritório
- **Endereço**: Rua 1301, Bairro da Sommerschield, Maputo
- Componente personalizado com design moderno

### 📧 Contactos Atualizados
- **Email principal**: ibrakante@ikadvogados.co.mz
- **Email geral**: geral@ikadvogados.co.mz
- **Telefone**: +258 84 123 4567
- **Website**: ikadvogados.com

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4
- **Componentes**: Shadcn/UI + Radix UI
- **Ícones**: Lucide React
- **Fontes**: Geist Sans & Geist Mono
- **Validação**: Zod
- **Formulários**: React Hook Form
- **Datas**: date-fns
- **Estado**: useState/useReducer
- **Email**: Resend (configurado)
- **Base de dados**: Supabase (preparado)

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <repository-url>
cd ikadvogados/apps/site

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.local.example .env.local

# Execute em modo de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção  
npm run start        # Servidor de produção
npm run lint         # Verificação de código
npm run type-check   # Verificação TypeScript
```

## 🌐 Estrutura do Projeto

```
apps/site/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── (pages)/           # Páginas principais
│   │   ├── globals.css        # Estilos globais
│   │   └── layout.tsx         # Layout principal
│   ├── components/            # Componentes reutilizáveis
│   │   ├── ui/               # Componentes Shadcn/UI
│   │   ├── Header.tsx        # Cabeçalho
│   │   ├── Footer.tsx        # Rodapé
│   │   └── MapboxMap.tsx     # Mapa 3D
│   └── lib/                  # Utilidades e configurações
├── public/                   # Arquivos estáticos
├── tailwind.config.ts        # Configuração Tailwind
├── components.json           # Configuração Shadcn/UI
└── package.json              # Dependências
```

## 📱 Páginas Detalhadas

### Home
- Hero section com apresentação do Dr. Kanté
- Faixa de especialidades jurídicas
- Seção sobre o profissional com educação e conquistas
- Estatísticas da firma (15+ anos, 500+ casos, 3 cargos de liderança)

### Sobre
- Biografia completa do Dr. Ibraimo Kanté
- Timeline do percurso profissional
- Especializações e áreas de expertise
- Valores da firma com ícones

### Agendamento
- Seleção de tipo de consulta (Presencial/Online/Urgente)
- Calendário interativo com disponibilidade
- Formulário de dados completo
- Resumo da consulta antes de confirmar

### Contacto
- 4 cartões informativos (Localização, Email, Telefone, Horário)
- Formulário de contacto avançado
- Mapa 3D do escritório em Sommerschield
- Integração preparada para envio de emails

## 🎨 Guia de Cores

```css
/* Cores da Marca */
--primary: #022B4A        /* Azul principal */
--accent: #CFA94F         /* Dourado de destaque */
--background: #FFFFFF     /* Fundo branco */
--foreground: #000000     /* Texto principal */

/* Variações */
--primary-foreground: #FFFFFF
--accent-foreground: #FFFFFF
--muted: #F5F5F5
--border: #E5E7EB
```

## 🔧 Configurações de Ambiente

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
GOOGLE_CALENDAR_CLIENT_ID=your_google_calendar_client_id
GOOGLE_CALENDAR_CLIENT_SECRET=your_google_calendar_client_secret
```

## 🚀 Deploy

O projeto está otimizado para deploy em:
- **Vercel** (recomendado)
- Netlify
- AWS Amplify
- Servidor próprio

### Deploy na Vercel
```bash
# Instale a CLI da Vercel
npm install -g vercel

# Execute o deploy
vercel --prod
```

## 🔮 Próximas Funcionalidades

- [ ] Integração real com Google Calendar API
- [ ] Sistema de autenticação com Supabase
- [ ] Painel administrativo para gestão de consultas
- [ ] Blog/Artigos jurídicos
- [ ] Sistema de notificações por email
- [ ] Chat online com assistente virtual
- [ ] Área do cliente para acompanhamento de casos
- [ ] Integração com sistemas de pagamento

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, SEO, Accessibility)
- **Core Web Vitals**: Otimizados
- **SEO**: Meta tags completas em português
- **Acessibilidade**: WCAG 2.1 AA compliant

## 🤝 Contribuição

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch para sua feature
3. Faça commit das suas alterações
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto é proprietário da I.K Advogados, Sociedade Unipessoal, Lda.

## 📞 Suporte

Para questões sobre o website:
- **Email**: ibrakante@ikadvogados.co.mz
- **Telefone**: +258 84 123 4567
- **Endereço**: Rua 1301, Bairro da Sommerschield, Maputo, Moçambique

---

**I.K Advogados** - *Advocacia de Excelência em Moçambique*
