import characterImg from "@/imports/vns.png";
import logoSquareImg from "@/imports/IMG_2574.jpg";
import quadroImg from "@/imports/comp/quadro.jpeg";
import capaImg from "@/imports/comp/capa.jpeg";
import flwrImg from "@/imports/comp/flwr.jpg";
import bagImg from "@/imports/comp/bag.jpeg";

export const brand = {
  name: "VÊNUS",
  suffix: "ART",
  tagline: "Arte com personalidade",
  instagramUrl: "https://www.instagram.com",
};

export const navLinks: [label: string, href: string][] = [
  ["Sobre", "#sobre"],
  ["Serviços", "#servicos"],
  ["Portfólio", "#portfolio"],
  ["Feedbacks", "#feedbacks"],
  ["Contato", "#contato"],
];

export const marqueeItems = [
  "Pinturas manuais",
  "Personalização de roupas",
  "Flores artesanais",
  "Encomendas sob medida",
  "Peças decorativas",
  "100% autoral",
];

export const stats = [
  { num: "100%", label: "Personalizado" },
  { num: "∞", label: "Criatividade" },
  { num: "01", label: "Estilo Único" },
];

export type ServiceItem = {
  index: string;
  title: string;
  desc: string;
  tag: string;
};

export const services: ServiceItem[] = [
  {
    index: "01",
    title: "Pinturas manuais",
    desc: "Pinturas feitas à mão com tintas, estilo próprio e muito detalhe. Cada tela é única, autoral e cheia de personalidade.",
    tag: "Pintura",
  },
  {
    index: "02",
    title: "Personalização de roupas",
    desc: "Customização de camisetas, jaquetas, bolsas e peças de vestuário com arte manual, pintura e técnicas artesanais.",
    tag: "Moda",
  },
  {
    index: "03",
    title: "Flores artesanais",
    desc: "Flores exclusivas feitas com limpador de cachimbo — peças decorativas autorais, delicadas e cheias de personalidade.",
    tag: "Artesanal",
  },
  {
    index: "04",
    title: "Encomendas sob medida",
    desc: "Arte manual criada especialmente para o seu pedido — do conceito ao acabamento, feita com cuidado e atenção.",
    tag: "Encomenda",
  },
  {
    index: "05",
    title: "Peças e objetos decorativos",
    desc: "Artesanatos autorais, quadros e peças decorativas únicas, produzidas manualmente com técnicas e materiais variados.",
    tag: "Decoração",
  },
];

export type PortfolioItem = {
  src: string;
  alt: string;
  label: string;
  span?: "wide" | "tall";
  fit?: "cover" | "contain";
};

export const portfolioItems: PortfolioItem[] = [
  { src: characterImg, alt: "Personagem VênusArt — mascote oficial", label: "Personagem autoral", span: "tall" },
  { src: logoSquareImg, alt: "Logo VênusArt — identidade visual", label: "Identidade visual" },
  { src: flwrImg, alt: "Peça artesanal VênusArt em tecido", label: "Peça artesanal" },
  { src: capaImg, alt: "Arte feita à mão VênusArt", label: "Arte feita à mão", span: "tall" },
  {
    src: bagImg,
    alt: "Arte personalizada VênusArt em bolsa",
    label: "Arte personalizada",
  },
  {
    src: quadroImg,
    alt: "Pintura manual expressiva",
    label: "Pintura manual",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Encomendei uma peça personalizada e o resultado ficou exatamente como eu imaginei — atenção aos detalhes impressionante.",
    name: "Cliente satisfeita",
    role: "Encomenda personalizada",
  },
  {
    quote: "A qualidade do trabalho manual é outro nível. Cada pincelada mostra o cuidado que colocam em cada peça.",
    name: "Feedback real",
    role: "Arte artesanal",
  },
  {
    quote: "Superou minhas expectativas. A comunicação foi ótima do início ao fim e o prazo foi cumprido certinho.",
    name: "Cliente",
    role: "Pintura manual",
  },
  {
    quote: "As flores artesanais ficaram lindas, um presente super especial e cheio de personalidade.",
    name: "Encomenda personalizada",
    role: "Flores artesanais",
  },
  {
    quote: "Recomendo de olhos fechados. Peça decorativa autoral, feita com muito carinho e um acabamento impecável.",
    name: "Feedback real",
    role: "Peça artesanal",
  },
];

export const contactOptions = [
  { value: "pintura-manual", label: "Pintura manual" },
  { value: "personalizacao-roupa", label: "Personalização de roupa" },
  { value: "flores-artesanais", label: "Flores artesanais" },
  { value: "peca-decorativa", label: "Peça decorativa artesanal" },
  { value: "encomenda", label: "Encomenda sob medida" },
  { value: "outro", label: "Outro" },
];









