import { Network, Server, ShieldCheck, Code2, GraduationCap, Cpu, SignalHigh } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "network",
      title: t("services.items.network.title"),
      description: t("services.items.network.desc"),
      icon: Network,
      color: "from-blue-500/20 to-blue-600/5",
      iconColor: "text-blue-500",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1600"
    },
    {
      id: "server",
      title: t("services.items.server.title"),
      description: t("services.items.server.desc"),
      icon: Server,
      color: "from-indigo-500/20 to-indigo-600/5",
      iconColor: "text-indigo-500",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600"
    },
    {
      id: "security",
      title: t("services.items.security.title"),
      description: t("services.items.security.desc"),
      icon: ShieldCheck,
      color: "from-electric-blue/20 to-electric-blue/5",
      iconColor: "text-electric-blue",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600"
    },
    {
      id: "software",
      title: t("services.items.software.title"),
      description: t("services.items.software.desc"),
      icon: Code2,
      color: "from-purple-500/20 to-purple-600/5",
      iconColor: "text-purple-500",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "cloud",
      title: t("services.items.cloud.title"),
      description: t("services.items.cloud.desc"),
      icon: Cpu,
      color: "from-cyan-500/20 to-cyan-600/5",
      iconColor: "text-cyan-500",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "isp",
      title: t("services.items.isp.title"),
      description: t("services.items.isp.desc"),
      icon: SignalHigh,
      color: "from-emerald-500/20 to-emerald-600/5",
      iconColor: "text-emerald-500",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "training",
      title: t("services.items.training.title"),
      description: t("services.items.training.desc"),
      icon: GraduationCap,
      color: "from-amber-500/20 to-amber-600/5",
      iconColor: "text-amber-500",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600"
    },
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
        >
          {t("services.title1")} <span className="text-electric-blue">{t("services.title2")}</span>
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg"
        >
          {t("services.desc")}
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-12"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`bg-dark-panel border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all group flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} shadow-[0_4px_30px_rgba(0,0,0,0.1)]`}
            >
              <div className="h-64 md:h-auto md:w-5/12 lg:w-2/5 relative overflow-hidden shrink-0">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${index % 2 === 0 ? 'md:bg-gradient-to-r' : 'md:bg-gradient-to-l'} from-dark-panel to-transparent`} />
              </div>
              
              <div className="p-8 md:p-12 lg:p-16 flex-grow flex flex-col relative z-10 justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`} />
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-dark-bg border border-white/10 group-hover:scale-110 transition-transform duration-300 ${service.iconColor} relative z-20 shadow-lg`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 relative z-20">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg relative z-20">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
