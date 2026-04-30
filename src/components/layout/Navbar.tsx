import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Globe, LogIn, User } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import Logo from "../ui/Logo";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/AuthContext";
import AuthModal from "../ui/AuthModal";

const NAV_LINKS = [
  { label: "nav.home", href: "/" },
  { label: "nav.services", href: "/services" },
  { label: "nav.wifi", href: "/wifi-zone" },
  { label: "nav.contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { currentUser, logout } = useAuth();

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  return (
    <nav className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-dark-panel/50 border border-white/10 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:shadow-[0_0_20px_rgba(0,123,255,0.5)] group-hover:border-electric-blue/50 transition-all">
              <Logo className="w-6 h-6 text-electric-blue" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              Heavenly <span className="text-electric-blue">Tech</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-electric-cyan relative py-2",
                  location.pathname === link.href ? "text-electric-blue" : "text-gray-400"
                )}
              >
                {t(link.label)}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-electric-blue rounded-full" />
                )}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
              <button onClick={toggleTheme} className="text-gray-400 hover:text-white transition-colors" title="Toggle theme">
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={toggleLanguage} className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm font-medium" title="Switch language">
                <Globe className="w-4 h-4" />
                {i18n.language.toUpperCase()}
              </button>
              {currentUser ? (
                <button onClick={logout} className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors text-sm font-medium border border-white/10">
                  <User className="w-4 h-4" />
                  Déconnexion
                </button>
              ) : (
                <button onClick={() => setIsAuthOpen(true)} className="flex items-center gap-2 text-white bg-electric-blue hover:bg-electric-cyan px-4 py-1.5 rounded-full transition-colors text-sm font-medium shadow-[0_0_15px_rgba(0,123,255,0.4)]">
                  <LogIn className="w-4 h-4" />
                  Connexion
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-gray-400 hover:text-white transition-colors">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={toggleLanguage} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              {i18n.language.toUpperCase()}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-dark-panel border-b border-white/5 absolute w-full transition-colors duration-300">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.href
                    ? "bg-electric-blue/10 text-electric-blue"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                {t(link.label)}
              </Link>
            ))}
            
            <div className="mt-4 pt-4 border-t border-white/10">
              {currentUser ? (
                <button onClick={() => { logout(); setIsOpen(false); }} className="w-full flex items-center justify-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-colors text-base font-medium">
                  <User className="w-5 h-5" />
                  Déconnexion
                </button>
              ) : (
                <button onClick={() => { setIsAuthOpen(true); setIsOpen(false); }} className="w-full flex items-center justify-center gap-2 text-white bg-electric-blue hover:bg-electric-cyan px-4 py-3 rounded-xl transition-colors text-base font-medium">
                  <LogIn className="w-5 h-5" />
                  Connexion / Créer un compte
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
  );
}
