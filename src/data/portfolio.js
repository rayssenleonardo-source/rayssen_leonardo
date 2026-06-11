// Conteúdo centralizado do portfólio.

import profileImg from '../assets/img/profile.png';
import psIcon from '../assets/img/photoshop.svg';
import aiIcon from '../assets/img/illustrator.svg';
import idIcon from '../assets/img/indesign.svg';
import prIcon from '../assets/img/premiere.svg';
import aeIcon from '../assets/img/aftereffects.svg';
import thumbCafeteria from '../assets/img/thumb-cafeteria.png';
import thumbAlessandra from '../assets/img/thumb-alessandra.png';
import thumbRl from '../assets/img/thumb-rl.png';
import thumbVs from '../assets/img/thumb-vs.png';
import thumbOudoro from '../assets/img/thumb-oudoro.png';
import thumbZentraq from '../assets/img/thumb-zentraq.png';

export const typingPhrases = [
  'Identidade Visual',
  'Design Gráfico',
  'Desenvolvimento Web',
  'Automação de Processos',
  'Edição de Vídeo',
  'Motion Design',
  'Direção de Arte',
];

// Links do menu de navegação (também usados pela paginação lateral).
export const navLinks = [
  { id: 'welcome-section', label: 'Home' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'processo', label: 'Processo' },
  { id: 'skills', label: 'Ferramentas' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'projects', label: 'Projetos' },
  { id: 'contact', label: 'Contato' },
];

// Ordem das bolinhas de paginação lateral (todas as seções na ordem da página).
export const paginationSections = [
  { id: 'welcome-section', label: 'Ir para Home' },
  { id: 'sobre', label: 'Ir para Sobre mim' },
  { id: 'formacao', label: 'Ir para Formação' },
  { id: 'processo', label: 'Ir para Processo de trabalho' },
  { id: 'experiencia', label: 'Ir para Experiência profissional' },
  { id: 'skills', label: 'Ir para Ferramentas' },
  { id: 'servicos', label: 'Ir para Como posso ajudar' },
  { id: 'projects', label: 'Ir para Projetos' },
  { id: 'contact', label: 'Ir para Contato' },
];

export const educationItems = [
  {
    title: 'Graduação em Design Gráfico',
    description:
      'Ênfase em criação, layout e projetos gráficos digitais e impressos.',
    institution: 'Faculdade Anhanguera',
    period: '2021 - 2023',
  },
];

export const certificationItems = [
  {
    title: 'Desenvolvimento Web',
    institution: 'Alura',
    period: '2025 - 2026',
    description: 'Base para construção de páginas, interfaces e aplicações web.',
  },
  {
    title: 'Automação de Processos com N8N',
    institution: 'Udemy',
    period: '2025 - 2026',
    description: 'Criação de fluxos automatizados e integrações entre ferramentas.',
  },
  {
    title: 'JavaScript Moderno (ES6+)',
    institution: 'Alura',
    period: '2025 - 2026',
    description: 'Lógica, interatividade e recursos modernos da linguagem.',
  },
  {
    title: 'React.js e TypeScript',
    institution: 'Alura',
    period: '2025 - 2026',
    description: 'Componentização, tipagem e organização de interfaces React.',
  },
  {
    title: 'Python para Automação',
    period: '2025 - 2026',
    description: 'Scripts para automatizar tarefas e apoiar rotinas operacionais.',
  },
  {
    title: 'Node.js e APIs REST',
    institution: 'Alura',
    period: '2025 - 2026',
    description: 'Fundamentos de backend, rotas e comunicação entre sistemas.',
  },
  {
    title: 'Rede TCP/IP',
    institution: 'Udemy',
    period: '2024 - 2025',
    description: 'Conceitos de redes aplicados à infraestrutura e suporte técnico.',
  },
  {
    title: 'Defenser',
    institution: 'Intelbras',
    period: '2026',
    description: 'Capacitação ligada a soluções de segurança eletrônica.',
  },
];

export const processSteps = [
  {
    icon: 'fas fa-comments',
    title: '1. Briefing & Imersão',
    description:
      'Conversa inicial para entender o negócio, público, objetivos e referências. A partir disso, reúno informações-chave e defino o direcionamento criativo.',
  },
  {
    icon: 'fas fa-lightbulb',
    title: '2. Pesquisa & Conceitos',
    description:
      'Análise de concorrência, referências visuais e construção de moodboards, explorando caminhos de identidade, paleta de cores, tipografia e estilo.',
  },
  {
    icon: 'fas fa-pencil-ruler',
    title: '3. Criação & Refinamento',
    description:
      'Desenvolvimento das propostas visuais, apresentação dos conceitos e ajustes com base no feedback até chegar a uma solução consistente e funcional.',
  },
  {
    icon: 'fas fa-file-alt',
    title: '4. Entrega & Aplicações',
    description:
      'Organização dos arquivos finais (logos, variações, cores, tipografia) e criação de aplicações em mockups, materiais impressos e peças digitais.',
  },
];

export const jobs = [
  {
    title: 'Técnico de Suporte & Designer de Projetos',
    period: 'Brasfort | Mar 2024 - Atual',
    bullets: [
      'Criação e desenvolvimento do layout de propostas comerciais, alinhando clareza visual e padronização da marca.',
      'Mapeamento e otimização de fluxos de processo e estudos de integração via API.',
      'Elaboração de plantas técnicas para projetos de infraestrutura, como usinas e ambientes monitorados.',
      'Orientação e treinamento de clientes para utilização correta dos sistemas implantados.',
      'Manutenção corretiva e preventiva de sistemas de segurança.',
      'Elaboração de relatórios técnicos, documentando atividades e soluções aplicadas.',
    ],
  },
  {
    title: 'Estagiário em Direção de Arte',
    period: 'IPREV | Mar 2022 - Dez 2022',
    bullets: [
      'Apoio no desenvolvimento de peças gráficas para comunicação institucional.',
      'Criação de layouts de documentos e materiais internos.',
      'Colaboração na construção da identidade visual do IPREV e do INAS.',
    ],
  },
];

export const skillGroups = [
  {
    title: 'Design & Adobe',
    items: [
      {
        key: 'photoshop',
        name: 'Adobe Photoshop',
        icon: psIcon,
        description: 'Tratamento de imagens, mockups e peças digitais.',
      },
      {
        key: 'illustrator',
        name: 'Adobe Illustrator',
        icon: aiIcon,
        description: 'Criação vetorial, logotipos e sistemas de marca.',
      },
      {
        key: 'indesign',
        name: 'Adobe InDesign',
        icon: idIcon,
        description: 'Diagramação de propostas, relatórios e materiais institucionais.',
      },
      {
        key: 'premiere',
        name: 'Adobe Premiere Pro',
        icon: prIcon,
        description: 'Edição de vídeos institucionais e conteúdos curtos.',
      },
      {
        key: 'aftereffects',
        name: 'Adobe After Effects',
        icon: aeIcon,
        description: 'Motion design e animações simples para marcas.',
      },
      {
        key: 'figma',
        name: 'Figma',
        iconClass: 'fab fa-figma',
        description: 'Layouts, protótipos e organização de interfaces.',
      },
    ],
  },
  {
    title: 'Desenvolvimento Web',
    items: [
      {
        key: 'web',
        name: 'HTML5 & CSS3',
        iconClass: 'fas fa-code',
        description: 'Estrutura, responsividade e acabamento visual de interfaces.',
      },
      {
        key: 'javascript',
        name: 'JavaScript (ES6+)',
        lettermark: 'JS',
        description: 'Interações, lógica de interface e evolução de páginas.',
      },
      {
        key: 'typescript',
        name: 'TypeScript',
        lettermark: 'TS',
        description: 'Tipagem e organização de código em projetos React.',
      },
      {
        key: 'react',
        name: 'React.js',
        iconClass: 'fab fa-react',
        description: 'Componentização e criação de experiências web.',
      },
      {
        key: 'node',
        name: 'Node.js',
        iconClass: 'fab fa-node-js',
        description: 'Base para APIs REST e rotinas de backend.',
      },
      {
        key: 'python',
        name: 'Python',
        iconClass: 'fab fa-python',
        description: 'Automação de tarefas e scripts de apoio.',
      },
    ],
  },
  {
    title: 'Automação & Infraestrutura',
    items: [
      {
        key: 'n8n',
        name: 'N8N',
        lettermark: 'N8N',
        description: 'Fluxos automatizados e integrações entre sistemas.',
      },
      {
        key: 'git',
        name: 'Git & GitHub',
        iconClass: 'fab fa-github',
        description: 'Versionamento, colaboração e publicação de projetos.',
      },
      {
        key: 'api',
        name: 'APIs REST',
        iconClass: 'fas fa-plug',
        description: 'Integrações e melhoria de processos internos.',
      },
      {
        key: 'network',
        name: 'Redes TCP/IP',
        iconClass: 'fas fa-network-wired',
        description: 'Base técnica para infraestrutura e segurança eletrônica.',
      },
    ],
  },
];

export const services = [
  {
    icon: 'fas fa-pen-nib',
    title: 'Identidade Visual',
    description:
      'Criação de logotipo, paleta cromática, tipografia e sistema visual para marcas novas ou rebranding.',
    items: [
      'Logo principal e versões alternativas',
      'Paleta de cores e tipografia',
      'Diretrizes básicas de uso',
    ],
  },
  {
    icon: 'far fa-file-alt',
    title: 'Materiais Institucionais',
    description:
      'Desenvolvimento de peças gráficas alinhadas à identidade da marca para uso interno e externo.',
    items: [
      'Apresentações, propostas e relatórios',
      'Folders, cartazes e peças informativas',
      'Layouts para documentos digitais',
    ],
  },
  {
    icon: 'far fa-images',
    title: 'Social Media & Mockups',
    description:
      'Criação de artes para redes sociais e mockups que ajudam a visualizar a aplicação da marca.',
    items: [
      'Posts e capas para redes sociais',
      'Mockups de embalagens e ambientes',
      'Apresentações visuais de conceito',
    ],
  },
  {
    icon: 'fas fa-play-circle',
    title: 'Vídeo & Motion',
    description:
      'Edição de vídeos e animações simples para reforçar mensagens e campanhas da marca.',
    items: [
      'Vídeos institucionais curtos',
      'Animações leves de logo e textos',
      'Ajustes de ritmo, corte e trilha',
    ],
  },
  {
    icon: 'fas fa-rocket',
    title: 'Landing Pages',
    description:
      'Páginas objetivas para apresentar serviços, captar contatos e valorizar campanhas digitais.',
    items: [
      'Estrutura de seções e narrativa visual',
      'Layout responsivo em HTML, CSS e React',
      'Chamadas para ação e formulário de contato',
    ],
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Estilização Frontend',
    description:
      'Refino visual de páginas existentes, melhorando hierarquia, responsividade e experiência de uso.',
    items: [
      'Ajustes de layout, cores e tipografia',
      'Componentes React com acabamento visual',
      'Correções de responsividade e estados de interação',
    ],
  },
  {
    icon: 'fas fa-robot',
    title: 'Projetos de Automação',
    description:
      'Mapeamento e criação de fluxos para reduzir tarefas repetitivas e organizar rotinas internas.',
    items: [
      'Automações com N8N e scripts Python',
      'Organização de etapas e gatilhos de processo',
      'Apoio a rotinas comerciais e administrativas',
    ],
  },
  {
    icon: 'fas fa-plug',
    title: 'Integrações & APIs',
    description:
      'Conexão entre ferramentas, formulários e sistemas para centralizar dados e agilizar operações.',
    items: [
      'Consumo e organização de APIs REST',
      'Integração de formulários com fluxos internos',
      'Documentação simples para uso e manutenção',
    ],
  },
];

export const projects = [
  {
    badge: 'Identidade Visual',
    year: '2023',
    thumb: thumbCafeteria,
    title: 'Arroma Café – Identidade Visual',
    description:
      'Desenvolvimento de identidade visual completa para cafeteria, com logotipo, paleta cromática, tipografia, aplicações em embalagens e ambientação.',
    tags: ['Branding', 'Identidade Visual', 'Mockups'],
    pdf: 'https://github.com/user-attachments/files/24222209/arroma_cafe.pdf',
  },
  {
    badge: 'Identidade Visual',
    year: '2025',
    thumb: thumbAlessandra,
    title: 'Alessandra Gaio – Identidade Visual',
    description:
      'Sistema de marca para identidade pessoal/profissional, com foco em elegância, confiança e aplicações em materiais institucionais e redes sociais.',
    tags: ['Pessoal', 'Branding', 'Social Media'],
    pdf: 'https://github.com/user-attachments/files/24222238/alessandra_gaio.pdf',
  },
  {
    badge: 'Identidade Visual',
    year: '2021',
    thumb: thumbRl,
    title: 'RL Lab – Identidade Visual',
    description:
      'Conceito visual para laboratório criativo, explorando contraste entre tecnologia e experimental, com aplicações em apresentações e materiais digitais.',
    tags: ['Estúdio Criativo', 'Identidade Visual'],
    pdf: 'https://github.com/user-attachments/files/24222273/rl_lab.pdf',
  },
  {
    badge: 'Identidade Visual',
    year: '2025',
    thumb: thumbVs,
    title: 'Vessence – Identidade Visual',
    description:
      'Identidade visual com foco em impacto e personalidade forte, explorando tipografia marcante e cores sólidas para presença de marca.',
    tags: ['Logotipo', 'Manual de Marca'],
    pdf: 'https://github.com/user-attachments/files/24261576/Vs.pdf',
  },
  {
    badge: 'Identidade Visual',
    year: '2024',
    thumb: thumbOudoro,
    title: 'Oudoro – Identidade Visual',
    description:
      'Criação de marca com estética sofisticada e contemporânea, com foco em aplicações de branding em materiais impressos e digitais.',
    tags: ['Branding', 'Impressos'],
    pdf: 'https://github.com/user-attachments/files/24222214/oudoro.pdf',
  },
  {
    badge: 'Identidade Visual',
    year: '2025',
    thumb: thumbZentraq,
    title: 'Zentraq – Identidade Visual',
    description:
      'Identidade visual com pegada tecnológica, utilizando cores frias, geometria e linguagem visual voltada para o digital.',
    tags: ['Tech', 'Identidade Visual', 'Digital'],
    pdf: 'https://github.com/user-attachments/files/24222415/zentraq.pdf',
  },
];

export const profile = {
  name: 'Rayssen Leonardo',
  photo: profileImg,
  social: {
    linkedin: 'https://www.linkedin.com/in/rayssen-leonardo-bbb3201ba',
    email: 'rayssenleonardo@gmail.com',
    whatsapp: 'https://wa.me/5561995819374',
  },
};
