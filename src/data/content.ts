export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Servicios',
    href: '#topics',
    subItems: [
      { label: 'Protección patrimonial', href: '#topics' },
      { label: 'Sucesión familiar', href: '#topics' },
      { label: 'Transferencia de activos', href: '#topics' },
      { label: 'Estructuración regional', href: '#topics' },
    ],
  },
  {
    label: 'Temas clave',
    href: '#topics',
    subItems: [
      { label: 'Fideicomisos y fundaciones', href: '#topics' },
      { label: 'Asuntos tributarios', href: '#topics' },
      { label: 'Regulación cambiaria', href: '#topics' },
      { label: 'Inversiones en el exterior', href: '#topics' },
    ],
  },
  {
    label: 'Nosotros',
    href: '#about',
    subItems: [
      { label: 'Nuestra historia (desde 1995)', href: '#about' },
      { label: 'Aliados en Centroamérica', href: '#partners' },
      { label: 'Últimas noticias', href: '#news' },
    ],
  },
  {
    label: 'Contacto',
    href: '#contact',
  },
];

export const KEY_TOPICS = [
  {
    id: 'foreign-assets',
    title: 'Activos en el exterior',
    description:
      'Apertura de cuentas, estructuración y resguardo de activos en jurisdicciones internacionales. Criterios vigentes y soluciones prácticas.',
    image: '/images/topic-foreign.jpg',
  },
  {
    id: 'currency-regulation',
    title: 'Regulación cambiaria',
    description:
      'Operaciones en divisas, reportes ante el BCCR y supervisión de movimientos transfronterizos en SINPE y MONEX. Cumplimiento bancario.',
    image: '/images/topic-currency.jpg',
  },
  {
    id: 'inheritance',
    title: 'Sucesión y herencia',
    description:
      'Planificación sucesoria, protocolos familiares y protección de intereses patrimoniales entre distintas generaciones.',
    image: '/images/topic-inheritance.jpg',
  },
  {
    id: 'investments-cfc',
    title: 'Estructuras societarias',
    description:
      'Sociedades de tenencia regional, tributación territorial, reportes ante Hacienda y mitigación de riesgos regulatorios.',
    image: '/images/topic-cfc.jpg',
  },
  {
    id: 'family-foundations',
    title: 'Fideicomisos y fundaciones',
    description:
      'Fundaciones de interés privado en Panamá, gobierno fiduciario y esquemas de preservación de capital a largo plazo.',
    image: '/images/topic-foreign.jpg',
  },
];

export const VIDEOS = [
  {
    id: 'v1',
    title: 'Impuesto al patrimonio y reportes regionales',
    description:
      'Qué aplica realmente en Costa Rica y Panamá, qué criterios utiliza Hacienda y cómo documentar el cumplimiento.',
    duration: '08:42',
    thumbnail: '/images/topic-cfc.jpg',
  },
  {
    id: 'v2',
    title: '¿Quiénes pierden la vocación sucesoria?',
    description:
      'Analizamos las causales legales de indignidad sucesoria, el criterio de los tribunales y cómo blindar el testamento.',
    duration: '11:15',
    thumbnail: '/images/topic-inheritance.jpg',
  },
  {
    id: 'v3',
    title: 'Cumplimiento en pagos transfronterizos',
    description:
      'Gestión práctica de riesgos en transferencias internacionales, banca corresponsal y verificaciones CRS.',
    duration: '09:30',
    thumbnail: '/images/topic-currency.jpg',
  },
];

export const FAQ_CARDS = [
  {
    id: 'faq-1',
    variant: 'light' as const,
    question: '¿La comisión del agente de pago depende del país de destino o de la divisa?',
    answer:
      '¿Varía la tarifa de intermediación según la jurisdicción receptora y la moneda de liquidación? Desglosamos los rangos de mercado.',
  },
  {
    id: 'faq-2',
    variant: 'dark' as const,
    question: 'Tarifa de mercado para pagos corporativos desde Centroamérica',
    answer:
      '¿Qué porcentaje de comisión resulta estándar para transferencias comerciales de alto volumen hacia Estados Unidos, Europa o Asia?',
  },
];

export interface PartnerPin {
  id: string;
  country: string;
  lat: number;
  lon: number;
  labelSide?: 'left' | 'right';
  partners: string[];
}

export const PARTNER_PINS: PartnerPin[] = [
  {
    id: 'costa-rica',
    country: 'Costa Rica',
    lat: 9.9281,
    lon: -84.0907,
    labelSide: 'left',
    partners: [
      'BAC Credomatic Privado',
      'Banco Nacional',
      'Banco de Costa Rica',
      'Banco Popular',
      'Grupo Financiero Improsa',
    ],
  },
  {
    id: 'panama',
    country: 'Panamá',
    lat: 8.9824,
    lon: -79.5199,
    labelSide: 'right',
    partners: ['Banco General Privado', 'Banistmo Wealth', 'Global Bank Panamá', 'Credicorp Bank'],
  },
  {
    id: 'guatemala',
    country: 'Guatemala',
    lat: 14.6349,
    lon: -90.5069,
    labelSide: 'left',
    partners: ['Banco Industrial Privado', 'G&T Continental', 'BAM Banca Patrimonial'],
  },
  {
    id: 'el-salvador',
    country: 'El Salvador',
    lat: 13.6929,
    lon: -89.2182,
    labelSide: 'left',
    partners: ['Banco Agrícola Privado', 'Banco Cuscatlán', 'Davivienda Salvadoreño'],
  },
  {
    id: 'honduras',
    country: 'Honduras',
    lat: 14.0723,
    lon: -87.1921,
    labelSide: 'right',
    partners: ['Ficohsa Banca Privada', 'Banco Atlántida', 'Banpaís Corporativo'],
  },
  {
    id: 'nicaragua',
    country: 'Nicaragua',
    lat: 12.115,
    lon: -86.2362,
    labelSide: 'right',
    partners: ['Lafise Bancentro', 'Banpro Grupo Promerica', 'BDF Corporativo'],
  },
];

export const LATEST_NEWS = [
  {
    id: 'regional-banking',
    date: '11.06.2026',
    title: 'Riesgos bancarios en la región: errores frecuentes de clientes privados',
    excerpt:
      'Las entidades bajo supervisión de SUGEF y la SBP refuerzan los controles de debida diligencia y origen de fondos. El cumplimiento dejó de ser un trámite único.',
    image: '/images/about-office.jpg',
  },
  {
    id: 'payment-agents',
    date: '09.06.2026',
    title: 'Agentes de pago y corresponsalía: claves operativas en 2026',
    excerpt:
      'Ante exigencias más estrictas en transferencias internacionales, la correcta documentación de pagos transfronterizos garantiza liquidez y trazabilidad.',
    image: '/images/topic-currency.jpg',
  },
  {
    id: 'prenuptial',
    date: '04.06.2026',
    title: 'Capitulaciones matrimoniales: por qué planificar con anticipación',
    excerpt:
      'Las capitulaciones permiten acordar de forma transparente el régimen de bienes antes de contraer matrimonio y resguardar el patrimonio familiar.',
    image: '/images/topic-cfc.jpg',
  },
];
