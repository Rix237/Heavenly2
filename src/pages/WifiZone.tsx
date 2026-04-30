import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, Ticket, Plus, User as UserIcon, LogOut, Settings, Laptop2, Signal, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { useAuth } from "../contexts/AuthContext";

export default function WifiZone() {
  const { currentUser, loading, signInWithGoogle, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<"tickets" | "create">("tickets");
  
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      setAuthError("");
      setAuthLoading(true);
      await signInWithGoogle();
    } catch (error: any) {
      setAuthError(error.message || "Une erreur est survenue.");
    } finally {
      setAuthLoading(false);
    }
  };

  if (loading) {
    return (
        <div className="pt-32 pb-24 flex items-center justify-center min-h-[60vh]">
            <div className="w-8 h-8 relative">
                <div className="absolute inset-0 border-2 border-electric-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
        </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
        >
            <div className="bg-dark-panel border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Decorative background glow */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-blue/20 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="text-center mb-8 relative z-10">
                    <div className="w-16 h-16 bg-electric-blue/10 text-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-4 border border-electric-blue/20">
                        <Wifi className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">Portail Wifi Zone</h2>
                    <p className="text-sm text-gray-400">Connectez-vous pour accéder au service.</p>
                </div>

                <div className="space-y-4 relative z-10">
                    {authError && <p className="text-red-400 text-sm mt-2 text-center">{authError}</p>}

                    <button
                        onClick={handleGoogleSignIn}
                        disabled={authLoading}
                        className="w-full bg-white text-gray-900 hover:bg-gray-100 font-medium py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                        {authLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                        )}
                        <span>Continuer avec Google</span>
                    </button>
                    
                    <div className="text-center mt-6 text-sm text-gray-500">
                        Actuellement, la connexion se fait uniquement via Google.
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
                <h1 className="text-3xl font-display font-bold text-white mb-2">Tableau de bord</h1>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                    <UserIcon className="w-4 h-4" /> Connecté en tant que <span className="text-white">{currentUser.email}</span>
                </p>
            </div>
            <button 
                onClick={logout}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors border border-white/10 hover:border-red-400/50 rounded-lg px-4 py-2 bg-dark-panel"
            >
                <LogOut className="w-4 h-4" />
                Déconnexion
            </button>
        </div>

        {/* Dashboard Tabs & Content */}
        <div className="bg-dark-panel border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {/* Tabs */}
            <div className="flex border-b border-white/10 bg-dark-bg/50">
                <button
                    onClick={() => setActiveTab("tickets")}
                    className={cn(
                        "flex items-center gap-2 px-6 py-4 font-medium text-sm transition-all relative",
                        activeTab === "tickets" ? "text-electric-blue" : "text-gray-400 hover:text-white hover:bg-white/5"
                    )}
                >
                    <Ticket className="w-4 h-4" />
                    Gérer mes tickets
                    {activeTab === "tickets" && (
                        <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-blue" />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab("create")}
                    className={cn(
                        "flex items-center gap-2 px-6 py-4 font-medium text-sm transition-all relative",
                        activeTab === "create" ? "text-electric-blue" : "text-gray-400 hover:text-white hover:bg-white/5"
                    )}
                >
                    <Plus className="w-4 h-4" />
                    Créer Wifi Zone
                    {activeTab === "create" && (
                        <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-blue" />
                    )}
                </button>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-10 min-h-[400px]">
                <AnimatePresence mode="wait">
                    {activeTab === "tickets" ? (
                        <motion.div
                            key="tickets"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-display font-semibold text-white">Mes Tickets Actifs</h2>
                                <button className="bg-electric-blue/10 text-electric-cyan hover:bg-electric-blue hover:text-white px-4 py-2 rounded-lg text-sm transition-colors border border-electric-blue/20">
                                    Acheter un forfait
                                </button>
                            </div>
                            
                            {/* Mock Tickets List */}
                            <div className="grid gap-4">
                                <div className="border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between bg-dark-bg/50">
                                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                                            <Signal className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">Forfait Mensuel Premium</h3>
                                            <p className="text-xs text-gray-400">Expire le: 15 Novembre 2026</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full font-medium mb-1">Actif</span>
                                        <span className="text-3xl font-display font-bold font-mono text-white tracking-widest">HT-9X2V-4A</span>
                                    </div>
                                </div>
                                
                                <div className="border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between bg-dark-bg/20 opacity-60">
                                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                                        <div className="w-10 h-10 rounded-lg bg-gray-500/10 text-gray-500 flex items-center justify-center">
                                            <Signal className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-300">Forfait Journalier</h3>
                                            <p className="text-xs text-gray-500">Expiré le: 20 Octobre 2026</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="bg-gray-500/20 text-gray-400 text-xs px-2 py-1 rounded-full font-medium mb-1">Expiré</span>
                                        <span className="text-lg font-mono text-gray-500 tracking-widest">HT-1K8L-9M</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="create"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h2 className="text-xl font-display font-semibold text-white mb-2">Déployer une Wifi Zone</h2>
                            <p className="text-gray-400 text-sm mb-8">
                                Configurez un point d'accès pour votre établissement. Remplissez les informations ci-dessous pour démarrer la configuration.
                            </p>
                            
                            <form className="max-w-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Nom du Point d'Accès (SSID)</label>
                                    <div className="relative">
                                        <Laptop2 className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                                        <input
                                            type="text"
                                            className="w-full bg-dark-bg border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors"
                                            placeholder="Ex: HEAVENLY_CAFE"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Type d'établissement</label>
                                        <select className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none">
                                            <option value="">Sélectionnez un type</option>
                                            <option value="entreprise">Entreprise</option>
                                            <option value="hotel">Hôtel / Résidence</option>
                                            <option value="restaurant">Restaurant / Café</option>
                                            <option value="campus">Campus / École</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Estimation Utilisateurs</label>
                                        <select className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none">
                                            <option value="1-50">1 - 50</option>
                                            <option value="50-200">50 - 200</option>
                                            <option value="200+">Plus de 200</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-white/5">
                                    <button
                                        type="button"
                                        className="bg-electric-blue hover:bg-electric-cyan text-white font-medium py-3 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] flex items-center gap-2"
                                    >
                                        <Settings className="w-5 h-5" />
                                        Générer la configuration
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    </div>
  );
}
