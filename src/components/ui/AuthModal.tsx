import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LogIn, User, LogOut, Loader2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { t } = useTranslation();
  const { signInWithGoogle, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithGoogle();
      onClose();
    } catch (err: any) {
      setError(err.message || 'Error signing in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={onClose} 
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-dark-panel border border-white/10 rounded-2xl p-8 shadow-2xl z-10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-3xl font-display font-bold text-white mb-2">Bienvenue</h2>
            <p className="text-gray-400">Connectez-vous pour accéder à votre espace</p>
          </div>

          <div className="space-y-6 relative z-10">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-sm text-center">
                {error}
              </div>
            )}
            
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full bg-white text-gray-900 hover:bg-gray-100 font-medium py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              )}
              <span>Continuer avec Google</span>
            </button>
            
            <div className="mt-6 text-sm text-center text-gray-500">
              Actuellement, la connexion se fait uniquement via Google.
            </div>
            
            <button 
              onClick={onClose}
              className="w-full mt-4 text-gray-400 hover:text-white transition-colors text-sm"
            >
              Annuler
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
