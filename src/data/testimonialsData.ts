export type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Robert Chen",
    position: "Marketing Director",
    company: "Innovate Tech",
    content: "Partnering with Positivus transformed our digital presence completely. Within six months, our website traffic increased by 150% and conversion rates doubled. Their strategic approach to SEO and content marketing has positioned us as industry leaders. Truly exceptional work!"
  },
  {
    id: 2,
    name: "Sophia Martinez",
    position: "E-commerce Head",
    company: "Bloom Retail",
    content: "The Positivus team revolutionized our online store's performance. Their data-driven PPC campaigns and site optimization reduced our customer acquisition costs by 40% while increasing average order values. They're responsive, transparent, and deliver measurable results."
  },
  {
    id: 3,
    name: "James Wilson",
    position: "CEO",
    company: "Quantum Solutions",
    content: "As a startup founder, working with Positivus was the best decision we made. Their comprehensive digital strategy helped us establish market presence and attract investors. They understand modern business challenges and create tailored solutions that drive real growth."
  },
  {
    id: 4,
    name: "Olivia Thompson",
    position: "Brand Director",
    company: "EcoLife Essentials",
    content: "Positivus helped us articulate our sustainable brand story across digital channels perfectly. Their social media campaigns increased our engagement by 300% and built a community of passionate customers. They truly understand how to build authentic brand connections."
  },
  {
    id: 5,
    name: "Daniel Nakamura",
    position: "Operations Manager",
    company: "Global Connect",
    content: "Our international expansion was seamlessly supported by Positivus's multilingual SEO and localized marketing strategies. They helped us navigate different markets with culturally relevant campaigns that resonated with diverse audiences. Their expertise is invaluable."
  }
]; 