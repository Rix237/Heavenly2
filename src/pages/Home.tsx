import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Shield, Zap } from "lucide-react";
import Antigravity from "../components/home/Antigravity";
import { motion } from "framer-motion";
import Logo from "../components/ui/Logo";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center pb-20">
      {/* Background Physical Animation */}
      <Antigravity />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-20 pointer-events-none">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 mb-8 pointer-events-auto"
        >
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <Logo className="w-full h-full text-electric-blue drop-shadow-md" />
            </div>
            <span className="font-sans font-medium text-3xl md:text-4xl tracking-tight text-white mt-1">Heavenly <span className="text-gray-400 font-light">Tech</span></span>
        </motion.div>

        {/* Hero Text */}
        <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl leading-tight font-display font-bold text-white mb-6 tracking-wide"
        >
          {t("home.title1")} <span className="bg-gradient-to-r from-electric-blue to-electric-cyan text-transparent bg-clip-text">{t("home.title2")}</span><br/>
          {t("home.title3")}
        </motion.h1>
        
        <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-sans"
        >
          {t("home.desc")}
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
        >
          <Link 
            to="/services" 
            className="group relative inline-flex items-center justify-center gap-2 bg-electric-blue text-white px-8 py-4 rounded-full font-semibold overflow-hidden transition-all hover:bg-electric-cyan hover:shadow-[0_0_30px_rgba(0,210,255,0.4)]"
          >
            <span className="relative z-10">{t("home.btn_services")}</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/contact" 
            className="group inline-flex items-center justify-center gap-2 bg-white/5 text-white px-8 py-4 rounded-full font-semibold border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
          >
            <span>{t("home.btn_contact")}</span>
          </Link>
        </motion.div>
      </div>


    </div>
  );
}
