import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Logo from "../ui/Logo";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-panel border-t border-white/10 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
                <div className="w-8 h-8 bg-dark-panel border border-white/10 rounded-lg flex items-center justify-center group-hover:border-electric-blue/50 transition-colors">
                  <Logo className="w-5 h-5 text-electric-blue" />
                </div>
                <span className="font-display font-bold text-lg tracking-tight">
                  Heavenly <span className="text-electric-blue">Tech</span>
                </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t("footer.desc")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">{t("footer.quick_links")}</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-electric-cyan text-sm transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-electric-cyan text-sm transition-colors">{t("nav.services")}</Link></li>
              <li><Link to="/wifi-zone" className="text-gray-400 hover:text-electric-cyan text-sm transition-colors">{t("nav.wifi")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Expertise</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">{t("services.items.network.title")}</li>
              <li className="text-gray-400 text-sm">{t("services.items.software.title")}</li>
              <li className="text-gray-400 text-sm">{t("services.items.cloud.title")}</li>
              <li className="text-gray-400 text-sm">{t("services.items.security.title")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:heavenlytechnologie@gmail.com" className="flex items-start gap-3 group text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-electric-blue mt-0.5 group-hover:text-electric-cyan transition-colors" />
                  <span className="text-sm">heavenlytechnologie@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+237676096350" className="flex items-start gap-3 group text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-electric-blue mt-0.5 group-hover:text-electric-cyan transition-colors" />
                  <span className="text-sm">+237 676 09 63 50</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/237695551954" target="_blank" rel="noreferrer" className="flex items-start gap-3 group text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#25D366] mt-0.5" />
                  <span className="text-sm">+237 695 55 19 54 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/dir/?api=1&destination=5°27'39.74%22N+10°26'13.16%22E" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <MapPin className="w-5 h-5 text-electric-blue shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm">Mairie de Bafoussam Ier Après EEC de Ndiengdam.</span>
                    <span className="text-xs text-electric-blue italic opacity-80 group-hover:opacity-100 transition-opacity">Cliquez pour afficher l'itinéraire</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Heavenly Technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
