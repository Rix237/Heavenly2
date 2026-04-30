import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// French translations
const fr = {
  nav: {
    home: "Accueil",
    services: "Services",
    wifi: "Wifi Zone",
    contact: "Contact"
  },
  home: {
    title1: "L'excellence",
    title2: "technologique",
    title3: "à votre service",
    desc: "Heavenly Technologies propulse votre entreprise dans la nouvelle ère numérique. Expertise de pointe en cybersécurité, réseaux haute performance, et solutions IoT sur mesure.",
    btn_services: "Nos Services",
    btn_contact: "Nous Contacter"
  },
  services: {
    title1: "Notre",
    title2: "Expertise",
    desc: "Des solutions technologiques complètes pour répondre aux défis numériques d'aujourd'hui et anticiper ceux de demain.",
    items: {
      network: { title: "Réseaux et Sécurité informatique", desc: "Conception, déploiement et sécurisation d'infrastructures réseaux complexes pour garantir fluidité et protection de vos données." },
      server: { title: "Configuration et administration serveurs", desc: "Mise en place de serveurs robustes, maintenance proactive et optimisation des performances pour vos applications critiques." },
      security: { title: "Audit et Cybersécurité", desc: "Évaluation complète de votre posture de sécurité, tests d'intrusion et implémentation de protocoles de défense avancés." },
      software: { title: "Conception de Logiciels", desc: "Développement d'applications web, mobiles et métiers sur mesure, adaptées à vos processus et objectifs de croissance." },
      cloud: { title: "Internet des Objets (IoT)", desc: "Connectez votre écosystème matériel avec des solutions logicielles intelligentes pour l'automatisation et l'analyse de données en temps réel." },
      isp: { title: "Fournisseur d'accès Internet", desc: "Connexion très haut débit fiable et garantie pour les entreprises et les particuliers exigeant une disponibilité maximale." },
      training: { title: "Formation et incubation de projets", desc: "Transfert de compétences, formations certifiantes et accompagnement de startups technologiques de l'idée à la réalisation." }
    }
  },
  contact: {
    title: "Contactez-nous",
    desc: "Prêt à transformer votre infrastructure ? Notre équipe d'experts est à votre disposition.",
    form_title: "Envoyez-nous un message",
    name: "Nom Complet",
    email: "Adresse Email",
    subject: "Sujet",
    subj_quote: "Demande de devis",
    subj_support: "Support Technique",
    subj_wifi: "Installation Wifi Zone",
    subj_other: "Autre",
    message: "Message",
    send: "Envoyer le message"
  },
  footer: {
    desc: "Votre partenaire de confiance pour l'innovation numérique et la sécurité des infrastructures.",
    quick_links: "Liens Rapides",
    contact: "Contact"
  }
};

// English translations
const en = {
  nav: {
    home: "Home",
    services: "Services",
    wifi: "Wifi Zone",
    contact: "Contact"
  },
  home: {
    title1: "Technological",
    title2: "excellence",
    title3: "at your service",
    desc: "Heavenly Technologies propels your business into the new digital era. Cutting-edge expertise in cybersecurity, high-performance networks, and custom IoT solutions.",
    btn_services: "Our Services",
    btn_contact: "Contact Us"
  },
  services: {
    title1: "Our",
    title2: "Expertise",
    desc: "Comprehensive technological solutions to meet today's digital challenges and anticipate tomorrow's.",
    items: {
      network: { title: "Network & IT Security", desc: "Design, deployment and security of complex network infrastructures to ensure smooth operation and data protection." },
      server: { title: "Server Configuration & Administration", desc: "Deployment of robust servers, proactive maintenance and performance optimization for your critical applications." },
      security: { title: "Audit & Cybersecurity", desc: "Comprehensive assessment of your security posture, penetration testing and implementation of advanced defense protocols." },
      software: { title: "Software Development", desc: "Development of custom web, mobile and business applications, tailored to your processes and growth objectives." },
      cloud: { title: "Internet of Things (IoT)", desc: "Connect your hardware ecosystem with smart software solutions for automation and real-time data analysis." },
      isp: { title: "Internet Service Provider", desc: "Reliable, high-speed guaranteed connection for businesses and individuals requiring maximum uptime." },
      training: { title: "Training & Project Incubation", desc: "Skills transfer, certifying training and support for tech startups from idea to execution." }
    }
  },
  contact: {
    title: "Contact Us",
    desc: "Ready to transform your infrastructure? Our team of experts is at your disposal.",
    form_title: "Send us a message",
    name: "Full Name",
    email: "Email Address",
    subject: "Subject",
    subj_quote: "Request a quote",
    subj_support: "Technical Support",
    subj_wifi: "Wifi Zone Installation",
    subj_other: "Other",
    message: "Message",
    send: "Send message"
  },
  footer: {
    desc: "Your trusted partner for digital innovation and infrastructure security.",
    quick_links: "Quick Links",
    contact: "Contact Us"
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en }
    },
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
