import monityImg from '../assets/monity.png';
import arxImg from '../assets/arx_jiujitsu.png';
import futshopImg from '../assets/futshop.png';

export const PROJECTS = [
  {
    id: 'monity',
    n: '01',
    tag: 'SAAS / FINANCEIRO',
    title: 'Monity',
    role: 'Solo Product Builder',
    pitch: 'Plataforma SaaS completa de gestão financeira pessoal e empresarial. Construída de forma autônoma do banco de dados ao deploy, com controle de fluxo de caixa, importação bancária inteligente e relatórios em tempo real.',
    stack: ['Next.js', 'React', 'Node.js', 'Prisma ORM', 'PostgreSQL', 'Chart.js', 'Supabase'],
    accent: '#10b981',
    results: [
      ['Entradas (Mês)', 'R$ 1.666,00'],
      ['Fluxo de Caixa', 'Tempo Real'],
      ['Uptime médio', '99.99%']
    ],
    image: monityImg
  },
  {
    id: 'arxjiujitsu',
    n: '02',
    tag: 'LANDING PAGE / ESPORTE',
    title: 'ARX Jiu-Jitsu',
    role: 'Designer & Developer',
    pitch: 'Landing page premium projetada para a equipe ARX Jiu-Jitsu. Focada em performance e conversão mobile-first, transmitindo os pilares de força, técnica e disciplina do esporte e integrando captação direta de alunos.',
    stack: ['React.js', 'Vanilla CSS', 'WhatsApp Cloud API', 'Resend', 'SEO Técnico'],
    accent: '#c5a059',
    results: [
      ['Taxa conversão', '+32.4%'],
      ['Novos alunos', '120+/mês'],
      ['Carregamento', '0.4s']
    ],
    image: arxImg
  },
  {
    id: 'futshop',
    n: '03',
    tag: 'E-COMMERCE / ESPORTE',
    title: 'FutShop',
    role: 'Dev Full Stack',
    pitch: 'E-commerce especializado na venda de mantos esportivos com fluxo simplificado de busca de camisas, categorias organizadas por ligas, carrinho interativo de compras e checkout rápido e seguro.',
    stack: ['Next.js', 'Express.js', 'PostgreSQL', 'Stripe', 'Node.js', 'GitHub Actions'],
    accent: '#ef4444',
    results: [
      ['Faturamento mensal', 'R$ 64k+'],
      ['Taxa de abandono', '-35%'],
      ['Tempo de checkout', '< 40s']
    ],
    image: futshopImg
  }
];

export default PROJECTS;
