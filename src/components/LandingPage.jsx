import React, { useState, useEffect } from 'react';
import { 
  Sparkles, AlertCircle, UserX, TrendingDown, Brain, Zap, Users, 
  Calendar, LineChart, Target, ArrowRight, Globe, MessageSquare, 
  BarChart3, Check, Menu, X 
} from 'lucide-react';

const translations = {
  en: {
    nav: {
      features: 'Features',
      ads: 'AI Ads',
      demo: 'Demo',
      signin: 'Sign in'
    },
    hero: {
      badge: 'New: AI Marketing Agent v2.0',
      title: 'Run Your Restaurant on Autopilot',
      subtitle: 'Smart reservations, seamless operations, and an AI agent that manages your ads — all in one modern system.',
      cta1: 'Start Free Trial',
      cta2: 'Watch Demo',
      subtext: 'No credit card required • Cancel anytime'
    },
    problems: {
      title: 'Restaurants Should Not Run on Stress',
      card1: { title: 'Operational Chaos', desc: 'Full books on paper, but empty tables in reality due to poor management.' },
      card2: { title: 'No-shows & Changes', desc: 'Last-minute surprises that wreck the floor plan and revenue.' },
      card3: { title: 'Marketing Guesswork', desc: 'Throwing money into ads with zero clarity on what actually brings guests.' }
    },
    platform: {
      title: 'A Smarter Brain for Your Front of House',
      desc: 'GeneGuest brings reservations, operations, and AI-powered marketing into one clean interface. It works quietly in the background so your team can focus on guests.',
      imageAlt: 'Modern restaurant dashboard'
    },
    features: {
      title: 'Everything You Need',
      f1: { title: 'AI Reservations', desc: 'Accept bookings instantly with automated confirmations and smart reminders.' },
      f2: { title: 'Smart Table Assignment', desc: 'Let the system choose the optimal seating layout in real time.' },
      f3: { title: 'Guest Insights', desc: 'Track visit history, preferences, and engagement automatically.' },
      f4: { title: 'Predictive Occupancy', desc: 'See how busy you will be before service even starts.' }
    },
    ads: {
      title: 'Meet Your AI Ads Agent',
      subtitle: 'Your 24/7 Marketing Expert',
      desc: 'The AI Ads Agent creates, manages, and optimizes your ads automatically — filling the right seats at the right time.',
      chip1: 'Auto-Targeting',
      chip2: 'Creative Gen',
      chip3: 'ROI Tracking',
      chip4: 'Weekly Reports',
    },
    preview: {
      title: 'Why Restaurants Love The AI Agent',
      goldFeatures: [
        { title: 'Ultra-Precise Targeting', desc: 'Finds high-intent diners based on real behavior, not just broad demographics.' },
        { title: 'Auto-Pilot Campaigns', desc: 'Creates ads, tests variations, and shifts budget automatically to what works.' },
        { title: 'Real Revenue Attribution', desc: 'Track exactly how many dollars each ad generated in actual reservations.' }
      ]
    },
    cta: {
      title: 'Ready to upgrade your operations?',
      desc: 'Join 500+ modern restaurants using GeneGuest.',
      placeholder: 'work@restaurant.com',
      button: 'Get Early Access',
      subtext: 'Limited spots available for the beta program.'
    },
    footer: {
      terms: 'Terms',
      privacy: 'Privacy',
      contact: 'Contact'
    }
  },
  fr: {
    nav: {
      features: 'Fonctionnalités',
      ads: 'Pub IA',
      demo: 'Démo',
      signin: 'Connexion'
    },
    hero: {
      badge: 'Nouveau : Agent Marketing IA v2.0',
      title: 'Gérez Votre Restaurant en Pilote Automatique',
      subtitle: 'Réservations intelligentes, opérations fluides et un agent IA qui gère vos publicités.',
      cta1: 'Essai Gratuit',
      cta2: 'Voir la Démo',
      subtext: 'Pas de carte requise • Annulez à tout moment'
    },
    problems: {
      title: 'Les Restaurants ne Devraient pas Fonctionner sous Stress',
      card1: { title: 'Chaos opérationnel', desc: 'Complet sur papier. Tables vides en réalité.' },
      card2: { title: 'Absences & changements', desc: 'Surprises de dernière minute qui ruinent le plan de salle.' },
      card3: { title: 'Marketing à l aveugle', desc: 'Argent dans les pubs sans savoir ce qui fonctionne.' }
    },
    platform: {
      title: 'Un Cerveau Plus Intelligent',
      desc: 'GeneGuest réunit réservations, opérations et marketing IA dans une interface claire.',
      imageAlt: 'Interface de tableau de bord'
    },
    features: {
      title: 'Tout ce dont vous avez besoin',
      f1: { title: 'Réservations IA', desc: 'Acceptez les réservations avec confirmations automatiques.' },
      f2: { title: 'Attribution Intelligente', desc: 'Laissez le système choisir la disposition optimale.' },
      f3: { title: 'Insights Clients', desc: 'Suivez l historique et les préférences des visites.' },
      f4: { title: 'Occupation Prédictive', desc: 'Voyez à quel point vous serez occupé avant le service.' }
    },
    ads: {
      title: 'Votre Agent Pub IA',
      subtitle: 'Expert Marketing 24/7',
      desc: 'L Agent Pub IA crée et optimise vos publicités automatiquement.',
      chip1: 'Ciblage Auto',
      chip2: 'Création Pubs',
      chip3: 'Suivi ROI',
      chip4: 'Rapports Hebdo',
    },
    preview: {
      title: 'Pourquoi l IA change tout',
      goldFeatures: [
        { title: 'Ciblage ultra-précis', desc: 'Identifie les clients à haute intention basés sur le comportement réel.' },
        { title: 'Campagnes Auto-Pilote', desc: 'Crée et optimise les budgets automatiquement.' },
        { title: 'Attribution Réelle', desc: 'Mesurez exactement le CA généré par chaque publicité.' }
      ]
    },
    cta: {
      title: 'Prêt à passer à la vitesse supérieure ?',
      desc: 'Rejoignez 500+ restaurants modernes.',
      placeholder: 'pro@restaurant.com',
      button: 'Accès Anticipé',
      subtext: 'Places limitées pour le programme bêta.'
    },
    footer: {
      terms: 'Conditions',
      privacy: 'Confidentialité',
      contact: 'Contact'
    }
  },
  ar: {
    nav: {
      features: 'المميزات',
      ads: 'الإعلانات الذكية',
      demo: 'تجربة',
      signin: 'دخول'
    },
    hero: {
      badge: 'جديد: وكيل التسويق الذكي v2.0',
      title: 'أدر مطعمك بشكل تلقائي',
      subtitle: 'حجوزات ذكية، عمليات سلسة، ووكيل ذكاء اصطناعي يدير إعلاناتك — كل ذلك في نظام واحد.',
      cta1: 'ابدأ مجاناً',
      cta2: 'شاهد العرض',
      subtext: 'لا تتطلب بطاقة ائتمان • إلغاء في أي وقت'
    },
    problems: {
      title: 'وداعاً لضغط العمل',
      card1: { title: 'فوضى التشغيل', desc: 'حجوزات ممتلئة على الورق، وطاولات فارغة في الواقع.' },
      card2: { title: 'المفاجآت', desc: 'تغييرات اللحظة الأخيرة التي تدمر خطة توزيع الطاولات.' },
      card3: { title: 'تسويق عشوائي', desc: 'صرف أموال في الإعلانات دون معرفة العائد الحقيقي.' }
    },
    platform: {
      title: 'عقل أذكى للمطعم',
      desc: 'يجمع GeneGuest الحجوزات والعمليات والتسويق في واجهة واحدة نظيفة.',
      imageAlt: 'واجهة لوحة التحكم'
    },
    features: {
      title: 'كل ما تحتاجه',
      f1: { title: 'حجوزات آلية', desc: 'قبول الحجوزات فوراً مع تأكيدات وتذكيرات ذكية.' },
      f2: { title: 'توزيع ذكي', desc: 'توزيع أمثل للطاولات في الوقت الفعلي.' },
      f3: { title: 'رؤى العملاء', desc: 'تتبع تاريخ الزيارات والتفضيلات تلقائياً.' },
      f4: { title: 'توقع الإشغال', desc: 'اعرف مدى انشغالك قبل بدء الخدمة.' }
    },
    ads: {
      title: 'وكيل الإعلانات الذكي',
      subtitle: 'خبير تسويق 24/7',
      desc: 'ينشئ وكيل الإعلانات الذكي إعلاناتك ويديرها ويحسنها تلقائياً.',
      chip1: 'استهداف آلي',
      chip2: 'توليد إبداعي',
      chip3: 'تتبع العائد',
      chip4: 'تقارير أسبوعية',
    },
    preview: {
      title: 'لماذا يفضلون الوكيل الذكي',
      goldFeatures: [
        { title: 'استهداف فائق الدقة', desc: 'يكتشف الزبائن الأكثر احتمالاً للحجز بناءً على السلوك.' },
        { title: 'حملات ذاتية القيادة', desc: 'إنشاء وتحسين الإعلانات والميزانية تلقائياً.' },
        { title: 'أرباح حقيقية', desc: 'تتبع بالضبط كم دولار حققه كل إعلان من الحجوزات.' }
      ]
    },
    cta: {
      title: 'مستعد لتطوير مطعمك؟',
      desc: 'انضم إلى أكثر من 500 مطعم حديث.',
      placeholder: 'email@restaurant.com',
      button: 'احصل على دخول مبكر',
      subtext: 'أماكن محدودة لبرنامج البيتا.'
    },
    footer: {
      terms: 'الشروط',
      privacy: 'الخصوصية',
      contact: 'اتصل بنا'
    }
  }
};

export default function GeneGuestLanding() {
  const [lang, setLang] = useState('en');
  const [email, setEmail] = useState('');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  
  const t = translations[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      alert(`Thanks! Added: ${email}`);
      setEmail('');
    }
  };

  // Animation Styles
  const styles = `
    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-in { animation: fadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .glass-nav { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(0,0,0,0.05); }
    .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.5); }
  `;

  return (
    <div className={`min-h-screen font-sans bg-slate-50 text-slate-900 selection:bg-[#FF7A59] selection:text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <style>{styles}</style>

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-100/50 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#FF7A59]/10 rounded-full blur-[100px] opacity-40" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2.5 group cursor-pointer">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-slate-900/20 transition-transform group-hover:scale-105">
                <Zap size={20} fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">GeneGuest</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">{t.nav.features}</a>
              <a href="#ads" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">{t.nav.ads}</a>
              
              <div className="h-4 w-px bg-slate-200 mx-2" />

              {/* Language */}
              <div className="relative">
                <button onClick={() => setShowLangMenu(!showLangMenu)} className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 uppercase">
                  <Globe size={14} /> {lang}
                </button>
                {showLangMenu && (
                  <div className="absolute top-full mt-4 right-0 bg-white rounded-xl shadow-xl border border-slate-100 p-2 min-w-[160px] animate-in z-50">
                    {['en', 'fr', 'ar'].map(l => (
                      <button key={l} onClick={() => { setLang(l); setShowLangMenu(false); }} className={`w-full px-4 py-2 text-left rounded-lg text-sm transition-colors ${lang === l ? 'bg-slate-100 font-semibold' : 'hover:bg-slate-50'}`}>
                        {l === 'en' ? 'English' : l === 'fr' ? 'Français' : 'العربية'}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
                {t.nav.signin}
              </button>
              <button className="px-5 py-2.5 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all transform hover:-translate-y-0.5">
                {t.nav.demo}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white px-6 py-24 animate-in">
          <div className="flex flex-col gap-6 text-lg font-medium text-center">
            <a href="#features" onClick={() => setIsMenuOpen(false)}>{t.nav.features}</a>
            <a href="#ads" onClick={() => setIsMenuOpen(false)}>{t.nav.ads}</a>
            <hr className="border-slate-100" />
            <button className="text-slate-900">{t.nav.signin}</button>
            <button className="w-full py-3 bg-slate-900 text-white rounded-xl">{t.nav.demo}</button>
          </div>
        </div>
      )}

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wide mb-8 animate-in">
                  <Sparkles size={14} />
                  {t.hero.badge}
                </div>
                
                <h1 className="text-5xl lg:text-6xl/tight font-bold text-slate-900 mb-6 animate-in delay-100">
                  {t.hero.title}
                </h1>
                
                <p className="text-lg text-slate-600 mb-10 leading-relaxed animate-in delay-200">
                  {t.hero.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 animate-in delay-300">
                  <button className="px-8 py-4 bg-[#FF7A59] text-white rounded-full font-bold shadow-lg shadow-[#FF7A59]/30 hover:shadow-[#FF7A59]/40 hover:bg-[#FF6A45] transition-all hover:-translate-y-1">
                    {t.hero.cta1}
                  </button>
                  <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center"><div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-slate-600 border-b-[4px] border-b-transparent ml-0.5"/></div>
                    {t.hero.cta2}
                  </button>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-400 animate-in delay-300">
                  <Check size={14} className="text-emerald-500" /> {t.hero.subtext}
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative animate-float">
                {/* Abstract Decor */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-gradient-to-br from-emerald-300 to-cyan-300 rounded-full blur-3xl opacity-30" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full blur-3xl opacity-30" />
                
                {/* Glass Browser Window */}
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden backdrop-blur-sm">
                  {/* Fake Browser Header */}
                  <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    </div>
                    <div className="flex-1 text-center">
                      <div className="inline-block w-32 h-2 bg-slate-200 rounded-full opacity-50" />
                    </div>
                  </div>
                  
                  {/* Image Content */}
                  <div className="relative aspect-[16/10] bg-slate-50 group">
                     <img 
                      src="./reservation_preview.png" 
                      alt="Dashboard" 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    
                    {/* Floating UI Elements */}
                    <div className="absolute top-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-xl border border-white/50 w-48 animate-in delay-200">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-slate-600">Live Occupancy</span>
                      </div>
                      <div className="text-2xl font-bold text-slate-900">94%</div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[94%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Grid */}
        <section id="problems" className="py-24" data-animate>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible.problems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.problems.title}</h2>
              <div className="h-1 w-20 bg-[#FF7A59] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-50', ...t.problems.card1 },
                { icon: UserX, color: 'text-orange-500', bg: 'bg-orange-50', ...t.problems.card2 },
                { icon: TrendingDown, color: 'text-slate-500', bg: 'bg-slate-100', ...t.problems.card3 }
              ].map((card, i) => (
                <div 
                  key={i}
                  className={`bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${isVisible.problems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className={`w-7 h-7 ${card.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Split Section */}
        <section id="platform" className="py-24 bg-white relative overflow-hidden" data-animate>
           {/* Background Grain/Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`${isVisible.platform ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-700`}>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">{t.platform.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t.platform.desc}</p>
                
                <div className="space-y-4">
                  {[t.features.f1, t.features.f2, t.features.f3].map((f, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-default">
                      <div className="w-10 h-10 rounded-full bg-[#043B4C] flex items-center justify-center flex-shrink-0 text-white mt-1">
                        {i === 0 ? <Calendar size={18} /> : i === 1 ? <Users size={18} /> : <MessageSquare size={18} />}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{f.title}</h4>
                        <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`relative ${isVisible.platform ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-700 delay-200`}>
                 <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[2rem] blur-2xl opacity-20" />
                 <img 
                  src="./dashbourd.png"
                  alt="Interface"
                  className="relative w-full rounded-[20px] shadow-2xl border border-slate-200"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ADS AI Section - The "Gold" Feature */}
        <section id="ads" className="py-32 bg-[#0B1120] text-white relative overflow-hidden" data-animate>
          {/* Dark Theme Background Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF7A59] blur-[120px] opacity-20 rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-medium mb-8 text-[#FFAB91]">
                <Brain size={16} /> {t.ads.subtitle}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t.ads.title}</h2>
              <p className="text-xl text-slate-300 leading-relaxed">{t.ads.desc}</p>
            </div>

            {/* Gold Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {t.preview.goldFeatures.map((feat, i) => (
                <div 
                  key={i}
                  className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm ${isVisible.ads ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                    {i === 0 ? <Target className="text-white" /> : i === 1 ? <Zap className="text-white" /> : <LineChart className="text-white" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feat.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* Integration / Preview Image */}
            <div className="relative rounded-2xl bg-slate-800/50 border border-slate-700 p-2 md:p-4">
               <img src="./aiagent_ads2.png" alt="AI Ads Interface" className="w-full rounded-xl shadow-2xl" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.cta.title}</h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">{t.cta.desc}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder={t.cta.placeholder} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A59] backdrop-blur-sm transition-all"
                />
                <button 
                  onClick={handleSubmit}
                  className="px-8 py-4 bg-[#FF7A59] hover:bg-[#FF6A45] text-white rounded-full font-bold shadow-lg shadow-[#FF7A59]/30 transition-all hover:scale-105 whitespace-nowrap"
                >
                  {t.cta.button}
                </button>
              </div>
              <p className="text-slate-500 text-sm mt-6">{t.cta.subtext}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                <Zap size={16} fill="currentColor" />
              </div>
              <span className="font-bold text-xl text-slate-900">GeneGuest</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-[#FF7A59] transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-[#FF7A59] transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-[#FF7A59] transition-colors">{t.footer.contact}</a>
            </div>
          </div>
          <div className="text-center text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} GeneGuest Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}