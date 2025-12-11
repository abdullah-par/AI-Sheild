import React, { useState } from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Mail, User, Link, FileImage, Brain, Zap, Globe, Filter } from 'lucide-react';

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
              onClick={() => setCurrentPage('features')}
              className={`hover:text-cyan-400 transition ${currentPage === 'features' ? 'text-cyan-400' : ''}`}
            >
              Features
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

  const FeaturesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Powerful <span className="text-cyan-400">Security Features</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered security tools designed to protect you from modern cyber threats
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Phishing Detection Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="bg-red-500/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <AlertTriangle className="w-10 h-10 text-red-400" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Phishing Detection</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Our advanced AI system analyzes multiple indicators to identify phishing attempts with exceptional accuracy, protecting you from credential theft and data breaches.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Link className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">URL Analysis</h4>
                      <p className="text-gray-400 text-sm">Deep inspection of domain names, subdomains, and URL structures to detect spoofing attempts. Checks for typosquatting, homograph attacks, and suspicious TLDs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email Header Analysis</h4>
                      <p className="text-gray-400 text-sm">Examination of sender authentication protocols including SPF, DKIM, and DMARC records to verify email legitimacy.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Brain className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Content Pattern Recognition</h4>
                      <p className="text-gray-400 text-sm">Natural language processing to identify social engineering tactics, urgency manipulation, and suspicious language patterns.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Brand Impersonation Detection</h4>
                      <p className="text-gray-400 text-sm">Visual similarity analysis using computer vision to catch fake login pages and spoofed websites mimicking legitimate brands.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-500/20">
                <h3 className="text-white font-bold text-xl mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Detection Accuracy</span>
                      <span className="text-green-400 font-bold">98.7%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '98.7%'}}></div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Response Time</span>
                      <span className="text-cyan-400 font-bold">&lt; 100ms</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">False Positive Rate</span>
                      <span className="text-purple-400 font-bold">0.3%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '5%'}}></div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Threats Blocked Daily</span>
                      <span className="text-yellow-400 font-bold">10,000+</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steganography Detection Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl p-8 border border-purple-500/20">
                  <h3 className="text-white font-bold text-xl mb-4">Supported Techniques</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <p className="text-gray-300 text-sm font-semibold">LSB Encoding</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <p className="text-gray-300 text-sm font-semibold">DCT-Based</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <p className="text-gray-300 text-sm font-semibold">Spread Spectrum</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <p className="text-gray-300 text-sm font-semibold">Palette Mod</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <p className="text-gray-300 text-sm font-semibold">DWT Methods</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <p className="text-gray-300 text-sm font-semibold">Pixel Manip</p>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">Supported Formats</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">PNG</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">JPEG</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">BMP</span>
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">TIFF</span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">GIF</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-purple-500/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-10 h-10 text-purple-400" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Steganography Detection</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Uncover hidden data concealed within digital images using state-of-the-art deep learning models trained on diverse steganographic techniques.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Filter className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Statistical Analysis</h4>
                      <p className="text-gray-400 text-sm">Detection of anomalies in pixel distributions, color histograms, and chi-square analysis to identify unnatural patterns.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Brain className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Deep Learning Models</h4>
                      <p className="text-gray-400 text-sm">CNN-based classifiers trained on millions of stego and clean images to identify subtle modifications invisible to the human eye.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileImage className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Multi-Format Support</h4>
                      <p className="text-gray-400 text-sm">Comprehensive analysis of PNG, JPEG, BMP, TIFF, and GIF formats with format-specific detection algorithms.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Payload Estimation</h4>
                      <p className="text-gray-400 text-sm">Quantification of hidden data volume when steganography is detected, providing insights into threat severity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-lg rounded-3xl p-10 border border-cyan-400/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">How AI-Shield Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Submit Content</h3>
                <p className="text-gray-300">Upload URLs, emails, or images through our secure interface for instant analysis.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Analysis</h3>
                <p className="text-gray-300">Multiple AI models process your content simultaneously using advanced machine learning algorithms.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Get Results</h3>
                <p className="text-gray-300">Receive detailed threat assessment with confidence scores and actionable recommendations.</p>
              </div>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Zap className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300">Real-time threat detection with response times under 100 milliseconds for instant protection.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Shield className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Ready</h3>
              <p className="text-gray-300">Scalable infrastructure capable of handling millions of requests with 99.9% uptime guarantee.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Brain className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Continuous Learning</h3>
              <p className="text-gray-300">Models automatically adapt to new threat patterns, staying ahead of evolving cyber attacks.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => setCurrentPage('auth')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
          >
            Try AI-Shield Now
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
      {currentPage === 'features' && <FeaturesPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'auth' && <AuthPage />}
    </div>
  );
}