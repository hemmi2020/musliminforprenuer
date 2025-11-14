'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Eye, EyeOff, Mail, Lock, User, Check, X } from 'lucide-react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const passwordRequirements = [
    { regex: /.{8,}/, text: 'Au moins 8 caractères' },
    { regex: /[A-Z]/, text: 'Une majuscule' },
    { regex: /[a-z]/, text: 'Une minuscule' },
    { regex: /[0-9]/, text: 'Un chiffre' },
    { regex: /[^A-Za-z0-9]/, text: 'Un caractère spécial' }
  ];

  const getPasswordStrength = (password) => {
    const validRequirements = passwordRequirements.filter(req => req.regex.test(password));
    return validRequirements.length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      setIsLoading(false);
      return;
    }

    if (getPasswordStrength(formData.password) < 4) {
      setError('Le mot de passe ne respecte pas les critères de sécurité');
      setIsLoading(false);
      return;
    }

    if (!formData.acceptTerms) {
      setError('Vous devez accepter les conditions d\\'utilisation');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        router.push('/auth/signin?message=Compte créé avec succès');
      } else {
        const data = await response.json();
        setError(data.message || 'Une erreur est survenue');
      }
    } catch (error) {
      setError('Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className=\"min-h-screen bg-black flex items-center justify-center px-4 py-8\">
      <Card className=\"w-full max-w-md bg-gray-900 border-gray-800\">
        <CardHeader className=\"text-center\">
          <CardTitle className=\"text-2xl font-bold text-white\">Créer un compte</CardTitle>
          <CardDescription className=\"text-gray-400\">
            Rejoignez la communauté MuslimInfopreneurs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className=\"space-y-4\">
            {error && (
              <div className=\"bg-red-900/50 border border-red-600 text-red-200 px-4 py-3 rounded-lg text-sm\">
                {error}
              </div>
            )}

            <div className=\"space-y-2\">
              <label className=\"text-sm font-medium text-gray-300\">Nom complet</label>
              <div className=\"relative\">
                <User className=\"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5\" />
                <input
                  type=\"text\"
                  name=\"name\"
                  value={formData.name}
                  onChange={handleChange}
                  className=\"w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500\"
                  placeholder=\"Votre nom complet\"
                  required
                />
              </div>
            </div>

            <div className=\"space-y-2\">
              <label className=\"text-sm font-medium text-gray-300\">Email</label>
              <div className=\"relative\">
                <Mail className=\"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5\" />
                <input
                  type=\"email\"
                  name=\"email\"
                  value={formData.email}
                  onChange={handleChange}
                  className=\"w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500\"
                  placeholder=\"votre@email.com\"
                  required
                />
              </div>
            </div>

            <div className=\"space-y-2\">
              <label className=\"text-sm font-medium text-gray-300\">Mot de passe</label>
              <div className=\"relative\">
                <Lock className=\"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5\" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name=\"password\"
                  value={formData.password}
                  onChange={handleChange}
                  className=\"w-full pl-10 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500\"
                  placeholder=\"Mot de passe sécurisé\"
                  required
                />
                <button
                  type=\"button\"
                  onClick={() => setShowPassword(!showPassword)}
                  className=\"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white\"
                >
                  {showPassword ? <EyeOff className=\"w-5 h-5\" /> : <Eye className=\"w-5 h-5\" />}
                </button>
              </div>
              
              {formData.password && (
                <div className=\"space-y-2 mt-2\">
                  <div className=\"flex gap-1\">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full ${
                          level <= passwordStrength
                            ? passwordStrength < 3
                              ? 'bg-red-500'
                              : passwordStrength < 5
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                            : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <div className=\"space-y-1\">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className=\"flex items-center gap-2 text-xs\">
                        {req.regex.test(formData.password) ? (
                          <Check className=\"w-3 h-3 text-green-500\" />
                        ) : (
                          <X className=\"w-3 h-3 text-gray-500\" />
                        )}
                        <span className={req.regex.test(formData.password) ? 'text-green-400' : 'text-gray-500'}>
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className=\"space-y-2\">
              <label className=\"text-sm font-medium text-gray-300\">Confirmer le mot de passe</label>
              <div className=\"relative\">
                <Lock className=\"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5\" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name=\"confirmPassword\"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className=\"w-full pl-10 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500\"
                  placeholder=\"Confirmez votre mot de passe\"
                  required
                />
                <button
                  type=\"button\"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className=\"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white\"
                >
                  {showConfirmPassword ? <EyeOff className=\"w-5 h-5\" /> : <Eye className=\"w-5 h-5\" />}
                </button>
              </div>
            </div>

            <div className=\"flex items-start gap-3\">
              <input
                type=\"checkbox\"
                name=\"acceptTerms\"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className=\"mt-1 w-4 h-4 text-green-600 bg-gray-800 border-gray-600 rounded focus:ring-green-500\"
                required
              />
              <label className=\"text-sm text-gray-300\">
                J'accepte les{' '}
                <Link href=\"/terms\" className=\"text-green-400 hover:text-green-300\">
                  conditions d'utilisation
                </Link>{' '}
                et la{' '}
                <Link href=\"/privacy\" className=\"text-green-400 hover:text-green-300\">
                  politique de confidentialité
                </Link>
              </label>
            </div>

            <Button
              type=\"submit\"
              className=\"w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3\"
              disabled={isLoading}
            >
              {isLoading ? 'Création...' : 'Créer mon compte'}
            </Button>
          </form>

          <div className=\"mt-6 text-center\">
            <p className=\"text-gray-400 text-sm\">
              Déjà un compte ?{' '}
              <Link href=\"/auth/signin\" className=\"text-green-400 hover:text-green-300 font-medium\">
                Se connecter
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}