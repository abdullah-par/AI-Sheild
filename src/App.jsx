import React, { useState } from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Mail, User } from 'lucide-react';

export default function AIShieldWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLogin, setIsLogin] = useState(true);

  const Navbar = () => (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold">AI-Shield</span>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`hover:text-cyan-400 transition ${currentPage === 'home' ? 'text-cyan-400' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`hover:text-cyan-400 transition ${currentPage === 'about' ? 'text-cyan-400' : ''}`}
            >
              About
            </button>
            <button
              onClick={() => setCurrentPage('auth')}
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg transition font-semibold"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-cyan-400">AI-Shield</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI-powered protection against phishing attacks and hidden threats through steganography detection
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition">
            <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Phishing Detection</h3>
            <p className="text-gray-300">
              Our advanced machine learning algorithms analyze URLs, emails, and websites in real-time to identify and block phishing attempts before they can cause harm.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition">
            <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Eye className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Steganography Detection</h3>
            <p className="text-gray-300">
              Uncover hidden malicious content embedded within images and files using cutting-edge AI models trained to detect steganographic techniques.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => setCurrentPage('auth')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">
            About <span className="text-cyan-400">AI-Shield</span>
          </h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              AI-Shield is dedicated to protecting individuals and organizations from increasingly sophisticated cyber threats. In an era where phishing attacks have become more convincing and steganography is being weaponized, we leverage the power of artificial intelligence and machine learning to stay one step ahead of cybercriminals.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our platform combines state-of-the-art deep learning models with real-time threat intelligence to provide comprehensive protection against both visible and hidden digital threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <CheckCircle className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Protection</h3>
              <p className="text-gray-300">
                Instant analysis and threat detection to keep you safe as you browse and communicate online.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <CheckCircle className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Analysis</h3>
              <p className="text-gray-300">
                Advanced neural networks trained on millions of samples to identify even the most sophisticated attacks.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <CheckCircle className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Multi-Layer Detection</h3>
              <p className="text-gray-300">
                Comprehensive scanning across URLs, content, images, and attachments for maximum security.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <CheckCircle className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Continuous Learning</h3>
              <p className="text-gray-300">
                Our models continuously adapt and improve, learning from new threats to stay ahead of attackers.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-10 border border-cyan-400/30">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose AI-Shield?</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Unlike traditional security solutions that rely on signature-based detection, AI-Shield uses behavioral analysis and pattern recognition to identify threats that have never been seen before. Our dual-focus approach tackles both overt phishing attempts and covert steganographic attacks, providing complete peace of mind in your digital activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const AuthPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <Shield className="w-12 h-12 text-cyan-400" />
        </div>
        
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-gray-400 text-center mb-8">
          {isLogin ? 'Sign in to access AI-Shield' : 'Join AI-Shield today'}
        </p>

        <div className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/20 rounded-lg px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/20 rounded-lg px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>
          </div>

          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-300">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <button className="text-cyan-400 hover:text-cyan-300">
                Forgot password?
              </button>
            </div>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(isLogin ? 'Logging in...' : 'Signing up...');
            }}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </div>

        <p className="text-center text-gray-400 mt-6">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'auth' && <AuthPage />}
    </div>
  );
}