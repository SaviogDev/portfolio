# Sávio Gabriel · Portfolio 💻🚀
> **"Sites que vendem, não que ficam bonitos."**

Este é o repositório do portfólio oficial de **Sávio Gabriel**, Desenvolvedor Full Stack de 21 anos. O projeto foi reestruturado de um único script monolítico para uma **arquitetura React moderna e modularizada com Vite**, otimizado para performance técnica, SEO avançado e recheado de micro-animações premium (vibe de terminal retro/provocador).

---

## 👤 Sobre Mim (Sávio Gabriel)
* **Idade:** 21 anos
* **Formação:** Cursando Sistemas de Informação (UFAL / Alagoas)
* **Foco de Trabalho:** Construção de plataformas SaaS estruturadas do banco de dados ao deploy, e-commerces integrados e landing pages de conversão agressiva focadas em vendas rápidas.
* **Diferencial:** Solo Product Builder com +5 anos de experiência prática escrevendo código linha por linha, sem plugins pesados ou construtores de arrastar-e-soltar de baixa performance.

---

## 🎨 Características do Portfólio

### 1. Vibe Terminal Retro / Código
O portfólio usa o tema "Terminal Provocador" com fontes monoespaçadas profissionais (**JetBrains Mono**) combinadas com fontes sem serifa modernas (**Inter**) e tons de verde neon com fundos profundos (dark theme premium).

### 2. Animações e Interatividade Premium
* **Typewriter no Terminal (Hero):** Simulação em tempo real da digitação de comandos comuns de desenvolvedor (`whoami`, `stack --list` e `deliver --speed`) exibindo as respostas de forma realista no shell.
* **Scroll Reveal:** Componente nativo construído com `IntersectionObserver` que detecta a aproximação de cada seção da página e as revela com transição suave (fade-in + slide-up).
* **Cascading (Cascata):** Efeito gradual de carregamento sequencial nas stacks e etapas do cronograma de entrega.
* **Mockups Dinâmicos com Glow:** Os cases reais contêm capturas de tela reais envoltas por sombras dinâmicas que herdam a cor de destaque do projeto:
  * **Monity** (SaaS Financeiro) - Glow verde.
  * **ARX Jiu-Jitsu** (Landing Page) - Glow dourado.
  * **FutShop** (E-commerce) - Glow vermelho.
* **Brilho Atmosférico Móvel:** Efeito de glow orbital e expansivo no plano de fundo do Hero.

---

## 🛠️ Stack Tecnológica do Portfólio
* **Core:** [React.js](https://react.dev/)
* **Build Tool:** [Vite](https://vite.dev/)
* **Styling:** CSS Vanilla de alta performance com variáveis de Design Tokens
* **Fontes:** Google Fonts (Inter & JetBrains Mono)
* **SEO:** Tags de cabeçalho completas, OpenGraph e suporte de responsividade mobile-first completo.

---

## 📁 Estrutura de Pastas e Componentes

A arquitetura do projeto foi estruturada visando modularidade e facilidade de manutenção futuras:

```
portfolio/
├── public/                  # Ícones e favicon
├── src/
│   ├── assets/              # Capturas de tela e vetores dos projetos
│   ├── constants/
│   │   ├── designTokens.js  # Tokens visuais centrais (paleta de cores/fontes)
│   │   └── projectsData.jsx # Lista de projetos reais e referências de imagens
│   ├── styles/
│   │   └── index.css        # CSS global, animações de keyframes e responsividade
│   ├── components/
│   │   ├── Caret.jsx        # Cursor piscante do terminal
│   │   ├── Pill.jsx         # Badges/Tags estilizadas
│   │   ├── SectionLabel.jsx # Título padronizado das seções
│   │   ├── ScrollReveal.jsx # Componente orquestrador de animação de scroll
│   │   ├── Nav.jsx          # Barra de navegação com menu móvel expansivo
│   │   ├── Hero.jsx         # Seção inicial com o terminal de digitação
│   │   ├── Sobre.jsx        # Manifesto pessoal e trajetória
│   │   ├── Stack.jsx        # Grade de conhecimentos interativa
│   │   ├── ProjectCard.jsx  # Card individual de case com zoom na imagem e glow
│   │   ├── Projetos.jsx     # Orquestrador da seção de cases
│   │   ├── Processo.jsx     # Linha do tempo (timeline) com prazos
│   │   └── CTA.jsx          # Conversão direta (E-mail e WhatsApp)
│   ├── App.jsx              # Montagem do layout
│   └── main.jsx             # Ponto de entrada do React
└── index.html               # Configuração de SEO técnico e fontes do Google
```

---

## 💻 Como Rodar o Projeto Localmente

### Requisitos
* [Node.js](https://nodejs.org/) instalado em sua máquina.

### Execução

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/SaviogDev/portfolio.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd portfolio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Rode em modo de desenvolvimento local:
   ```bash
   npm run dev
   ```
   *O site estará disponível no endereço:* `http://localhost:5173/`

5. Compilação para produção:
   ```bash
   npm run build
   ```
   *Os arquivos otimizados serão gerados na pasta `/dist`.*

---

## ✉️ Contato e Orçamentos

Se você quer tirar sua ideia do papel com velocidade (projetos em até 7 dias) e alta conversão:

* **E-mail:** [saviog.dev@gmail.com](mailto:saviog.dev@gmail.com)
* **WhatsApp:** [Converse comigo](https://wa.me/5582987335690)
* **Site Oficial:** [savio.dev](https://savio.dev) (ou através da sua url final publicada)
