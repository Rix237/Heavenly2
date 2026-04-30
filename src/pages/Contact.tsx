import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "devis",
      message: ""
  });

  const handleSubmit = (e: any) => {
      e.preventDefault();
      const mailtoLink = `mailto:heavenlytechnologie@gmail.com?subject=${encodeURIComponent(`[${formData.subject.toUpperCase()}] Contact depuis le site - ${formData.name}`)}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            >
                {t("contact.title")}
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-2xl mx-auto text-gray-400 text-lg"
            >
                {t("contact.desc")}
            </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
            >
                <div>
                    <h2 className="text-2xl font-display font-semibold text-white mb-6">Nos Coordonnées</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Passez nous voir dans nos locaux ou contactez-nous via les plateformes numériques. Nous sommes réactifs et à l'écoute.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Location */}
                    <a href="https://www.google.com/maps/dir/?api=1&destination=5°27'39.74%22N+10°26'13.16%22E" target="_blank" rel="noreferrer" className="flex items-start gap-4 p-4 rounded-2xl bg-dark-panel/50 border border-white/5 hover:border-electric-blue/30 transition-colors group">
                        <div className="w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center text-electric-blue flex-shrink-0 group-hover:bg-electric-blue group-hover:text-white transition-colors">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white font-medium mb-1 group-hover:text-electric-blue transition-colors">Localisation Centrale</h3>
                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Mairie de Bafoussam Ier Après EEC de Ndiengdam.</p>
                            <p className="text-electric-blue text-xs mt-2 italic opacity-80 group-hover:opacity-100 transition-opacity">Cliquez pour afficher l'itinéraire</p>
                        </div>
                    </a>

                    {/* Phone */}
                    <a href="tel:+237676096350" className="flex items-start gap-4 p-4 rounded-2xl bg-dark-panel/50 border border-white/5 hover:border-electric-blue/30 transition-colors group">
                        <div className="w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center text-electric-blue flex-shrink-0 group-hover:bg-electric-blue group-hover:text-white transition-colors">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-white font-medium mb-1">Appel Téléphonique</h3>
                            <p className="text-gray-400 text-sm group-hover:text-electric-cyan transition-colors">+237 676 09 63 50</p>
                        </div>
                    </a>

                    {/* WhatsApp */}
                    <a href="https://wa.me/237695551954" target="_blank" rel="noreferrer" className="flex items-start gap-4 p-4 rounded-2xl bg-dark-panel/50 border border-white/5 hover:border-[#25D366]/30 transition-colors group">
                        <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                            <MessageCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-white font-medium mb-1">WhatsApp</h3>
                            <p className="text-gray-400 text-sm group-hover:text-[#25D366] transition-colors">+237 695 55 19 54</p>
                        </div>
                    </a>

                    {/* Email */}
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=heavenlytechnologie@gmail.com" target="_blank" rel="noreferrer" className="flex items-start gap-4 p-4 rounded-2xl bg-dark-panel/50 border border-white/5 hover:border-red-400/30 transition-colors group">
                        <div className="w-12 h-12 bg-red-400/10 rounded-xl flex items-center justify-center text-red-400 flex-shrink-0 group-hover:bg-red-400 group-hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-white font-medium mb-1">Email via Gmail</h3>
                            <p className="text-gray-400 text-sm group-hover:text-red-400 transition-colors">heavenlytechnologie@gmail.com</p>
                        </div>
                    </a>
                </div>
            </motion.div>

            {/* Form */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-dark-panel border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/10 blur-[100px] rounded-full pointer-events-none" />
                
                <h2 className="text-2xl font-display font-semibold text-white mb-6 relative z-10">{t("contact.form_title")}</h2>
                
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">{t("contact.name")}</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">{t("contact.email")}</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">{t("contact.subject")}</label>
                        <select 
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none"
                        >
                            <option value="devis">{t("contact.subj_quote")}</option>
                            <option value="support">{t("contact.subj_support")}</option>
                            <option value="wifi">{t("contact.subj_wifi")}</option>
                            <option value="autre">{t("contact.subj_other")}</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">{t("contact.message")}</label>
                        <textarea
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-electric-blue hover:bg-electric-cyan text-white font-medium py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] flex items-center justify-center gap-2 group"
                    >
                        <span>{t("contact.send")}</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </motion.div>

        </div>
    </div>
  );
}
