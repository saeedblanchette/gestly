import React, { useState, useEffect } from 'react';
import { Sparkles, AlertCircle, UserX, TrendingDown, Brain, Zap, Users, Calendar, CheckCircle, LineChart, Target, Shield, Leaf, ArrowRight, Mail, Play, Globe, ChefHat, ClipboardList, MessageSquare, BarChart3 } from 'lucide-react';

const translations = {
  en: {
    nav: {
      features: 'Features',
      ads: 'AI Ads',
      demo: 'Demo',
      signin: 'Sign in'
    },
    hero: {
      badge: 'Smarter operations for modern restaurants',
      title: 'Run Your Restaurant on Autopilot',
      subtitle: 'Smart reservations, seamless operations, and an AI agent that manages your ads — all in one modern system.',
      cta1: 'Get Started',
      cta2: 'Watch Demo',
      subtext: 'Built for restaurants of every size.'
    },
    problems: {
      title: 'Restaurants Should Not Run on Stress',
      card1: { title: 'Operational chaos', desc: 'Full books on paper. Empty tables in reality.' },
      card2: { title: 'No-shows & late changes', desc: 'Last-minute surprises that wreck the floor plan.' },
      card3: { title: 'Marketing guesswork', desc: 'Money into ads. No clarity on what actually works.' }
    },
    platform: {
      title: 'A Smarter Brain for Your Front of House',
      desc: 'GeneGuest brings reservations, operations, and AI-powered marketing into one clean interface. It works quietly in the background so your team can focus on guests.',
      imageAlt: 'Modern restaurant dashboard interface showing real-time table management, reservation flow, and guest analytics on a clean, intuitive screen'
    },
    features: {
      title: 'Core Features',
      f1: { title: 'AI Reservations', desc: 'Accept bookings instantly with automated confirmations and smart reminders.', imageAlt: 'AI-powered reservation calendar with automated booking confirmations and intelligent scheduling system' },
      f2: { title: 'Smart Table Assignment', desc: 'Let the system choose the optimal seating layout in real time.', imageAlt: 'Interactive restaurant floor plan with AI-suggested table assignments and real-time occupancy visualization' },
      f3: { title: 'Guest Insights', desc: 'Track visit history, preferences, and engagement.', imageAlt: 'Guest profile dashboard showing visit history, dining preferences, and personalized recommendations' },
      f4: { title: 'Predictive Occupancy', desc: 'See how busy you will be before service even starts.', imageAlt: 'Predictive analytics graph showing forecasted restaurant occupancy and peak hours for upcoming service' }
    },
    ads: {
      title: 'AI Ads Agent',
      subtitle: 'Your restaurant marketer, powered by AI',
      desc: 'The AI Ads Agent creates, manages, and optimizes your ads automatically — so you always fill the right seats at the right time.',
      chip1: 'Auto-target audiences',
      chip2: 'Generate promotions',
      chip3: 'Optimize campaigns',
      chip4: 'Weekly summaries',
      imageAlt: 'AI marketing dashboard showing automated ad campaigns, audience targeting, and performance metrics for restaurant promotions'
    },
    preview: {
      title: 'Product Preview',
      mock1: { title: 'Dashboard: Service at a glance', alt: 'Main dashboard view with service overview, active reservations, table status, and key performance metrics' },
      mock2: { title: 'Smart Table Map', alt: 'Interactive floor plan with color-coded tables, guest information, and AI-powered seating recommendations' },
      mock3: { title: 'Ads: Automated campaigns', alt: 'Marketing automation interface showing campaign performance, ad creative, and ROI analytics' }
    },
    cta: {
      title: 'Ready to see GeneGuest in action?',
      desc: 'Be the first to experience the next generation of restaurant management.',
      placeholder: 'name@email.com',
      button: 'Join the Waitlist',
      subtext: 'We respect your inbox — occasional, meaningful updates only.'
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
      signin: 'Se connecter'
    },
    hero: {
      badge: 'Opérations intelligentes pour restaurants modernes',
      title: 'Gérez Votre Restaurant en Pilote Automatique',
      subtitle: 'Réservations intelligentes, opérations fluides et un agent IA qui gère vos publicités — tout dans un seul système moderne.',
      cta1: 'Commencer',
      cta2: 'Voir la Démo',
      subtext: 'Conçu pour les restaurants de toutes tailles.'
    },
    problems: {
      title: 'Les Restaurants ne Devraient pas Fonctionner sous Stress',
      card1: { title: 'Chaos opérationnel', desc: 'Complet sur papier. Tables vides en réalité.' },
      card2: { title: 'Absences & changements', desc: 'Surprises de dernière minute qui ruinent le plan de salle.' },
      card3: { title: 'Marketing à l aveugle', desc: 'Argent dans les pubs. Aucune clarté sur ce qui fonctionne.' }
    },
    platform: {
      title: 'Un Cerveau Plus Intelligent pour Votre Salle',
      desc: 'GeneGuest réunit réservations, opérations et marketing IA dans une interface claire. Il travaille discrètement en arrière-plan pour que votre équipe se concentre sur les clients.',
      imageAlt: 'Interface de tableau de bord de restaurant moderne montrant la gestion des tables en temps réel, le flux de réservations et les analyses des clients'
    },
    features: {
      title: 'Fonctionnalités Principales',
      f1: { title: 'Réservations IA', desc: 'Acceptez les réservations instantanément avec confirmations et rappels automatiques.', imageAlt: 'Calendrier de réservation alimenté par IA avec confirmations automatiques et système de planification intelligent' },
      f2: { title: 'Attribution Intelligente', desc: 'Laissez le système choisir la disposition optimale en temps réel.', imageAlt: 'Plan de salle interactif avec attributions de table suggérées par IA et visualisation d occupation en temps réel' },
      f3: { title: 'Insights Clients', desc: 'Suivez l historique, préférences et engagement des visites.', imageAlt: 'Tableau de bord de profil client montrant l historique des visites, les préférences culinaires et les recommandations personnalisées' },
      f4: { title: 'Occupation Prédictive', desc: 'Voyez à quel point vous serez occupé avant même le service.', imageAlt: 'Graphique d analyse prédictive montrant l occupation prévue du restaurant et les heures de pointe pour le service à venir' }
    },
    ads: {
      title: 'Agent Pub IA',
      subtitle: 'Votre marketeur de restaurant, propulsé par IA',
      desc: 'L Agent Pub IA crée, gère et optimise vos publicités automatiquement — pour toujours remplir les bonnes places au bon moment.',
      chip1: 'Ciblage auto des audiences',
      chip2: 'Générer des promotions',
      chip3: 'Optimiser les campagnes',
      chip4: 'Résumés hebdomadaires',
      imageAlt: 'Tableau de bord marketing IA montrant les campagnes publicitaires automatisées, le ciblage d audience et les métriques de performance'
    },
    preview: {
      title: 'Aperçu du Produit',
      mock1: { title: 'Tableau de bord: Service en un coup d oeil', alt: 'Vue principale du tableau de bord avec aperçu du service, réservations actives, statut des tables et métriques clés' },
      mock2: { title: 'Plan de Tables Intelligent', alt: 'Plan d étage interactif avec tables codées par couleur, informations sur les clients et recommandations de placement par IA' },
      mock3: { title: 'Pubs: Campagnes automatisées', alt: 'Interface d automatisation marketing montrant les performances de campagne, les créations publicitaires et les analyses de ROI' }
    },
    cta: {
      title: 'Prêt à voir GeneGuest en action?',
      desc: 'Soyez parmi les premiers à découvrir la nouvelle génération de gestion de restaurant.',
      placeholder: 'nom@email.com',
      button: 'Rejoindre la Liste',
      subtext: 'Nous respectons votre boîte mail — mises à jour occasionnelles uniquement.'
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
      demo: 'العرض التجريبي',
      signin: 'تسجيل الدخول'
    },
    hero: {
      badge: 'عمليات أذكى للمطاعم الحديثة',
      title: 'أدر مطعمك بشكل تلقائي',
      subtitle: 'حجوزات ذكية، عمليات سلسة، ووكيل ذكاء اصطناعي يدير إعلاناتك — كل ذلك في نظام واحد حديث.',
      cta1: 'ابدأ الآن',
      cta2: 'شاهد العرض',
      subtext: 'مصمم للمطاعم من جميع الأحجام.'
    },
    problems: {
      title: 'المطاعم لا يجب أن تعمل تحت الضغط',
      card1: { title: 'فوضى تشغيلية', desc: 'حجوزات ممتلئة على الورق. طاولات فارغة في الواقع.' },
      card2: { title: 'الغياب والتغييرات', desc: 'مفاجآت اللحظة الأخيرة التي تدمر خطة الصالة.' },
      card3: { title: 'تسويق عشوائي', desc: 'أموال في الإعلانات. لا وضوح حول ما ينجح فعلاً.' }
    },
    platform: {
      title: 'عقل أذكى لواجهة مطعمك',
      desc: 'يجمع GeneGuest الحجوزات والعمليات والتسويق المدعوم بالذكاء الاصطناعي في واجهة واحدة نظيفة. يعمل بهدوء في الخلفية حتى يتمكن فريقك من التركيز على الضيوف.',
      imageAlt: 'واجهة لوحة تحكم مطعم حديثة تعرض إدارة الطاولات في الوقت الفعلي وتدفق الحجوزات وتحليلات الضيوف'
    },
    features: {
      title: 'المميزات الأساسية',
      f1: { title: 'حجوزات بالذكاء الاصطناعي', desc: 'قبول الحجوزات فوراً مع تأكيدات تلقائية وتذكيرات ذكية.', imageAlt: 'تقويم حجز مدعوم بالذكاء الاصطناعي مع تأكيدات حجز تلقائية ونظام جدولة ذكي' },
      f2: { title: 'توزيع طاولات ذكي', desc: 'دع النظام يختار الترتيب الأمثل للجلوس في الوقت الفعلي.', imageAlt: 'مخطط أرضي تفاعلي للمطعم مع تعيينات طاولات مقترحة بالذكاء الاصطناعي وتصور إشغال في الوقت الفعلي' },
      f3: { title: 'رؤى العملاء', desc: 'تتبع تاريخ الزيارات والتفضيلات والتفاعل.', imageAlt: 'لوحة تحكم ملف تعريف الضيف تعرض تاريخ الزيارات وتفضيلات تناول الطعام والتوصيات الشخصية' },
      f4: { title: 'توقع الإشغال', desc: 'اعرف مدى انشغالك قبل بدء الخدمة حتى.', imageAlt: 'رسم بياني تحليلي تنبؤي يوضح الإشغال المتوقع للمطعم وساعات الذروة للخدمة القادمة' }
    },
    ads: {
      title: 'وكيل الإعلانات الذكي',
      subtitle: 'مسوق مطعمك، مدعوم بالذكاء الاصطناعي',
      desc: 'ينشئ وكيل الإعلانات الذكي إعلاناتك ويديرها ويحسنها تلقائياً — لتملأ دائماً المقاعد الصحيحة في الوقت المناسب.',
      chip1: 'استهداف تلقائي للجمهور',
      chip2: 'توليد العروض',
      chip3: 'تحسين الحملات',
      chip4: 'ملخصات أسبوعية',
      imageAlt: 'لوحة معلومات تسويقية بالذكاء الاصطناعي تعرض حملات إعلانية آلية واستهداف الجمهور ومقاييس الأداء'
    },
    preview: {
      title: 'معاينة المنتج',
      mock1: { title: 'لوحة التحكم: الخدمة في لمحة', alt: 'عرض لوحة التحكم الرئيسية مع نظرة عامة على الخدمة والحجوزات النشطة وحالة الطاولة ومقاييس الأداء الرئيسية' },
      mock2: { title: 'خريطة الطاولات الذكية', alt: 'مخطط أرضي تفاعلي مع طاولات مرمزة بالألوان ومعلومات الضيوف وتوصيات جلوس مدعومة بالذكاء الاصطناعي' },
      mock3: { title: 'الإعلانات: حملات آلية', alt: 'واجهة أتمتة التسويق تعرض أداء الحملة والمواد الإبداعية الإعلانية وتحليلات عائد الاستثمار' }
    },
    cta: {
      title: 'مستعد لرؤية GeneGuest أثناء العمل؟',
      desc: 'كن من الأوائل الذين يختبرون الجيل القادم من إدارة المطاعم.',
      placeholder: 'الاسم@البريد.com',
      button: 'انضم لقائمة الانتظار',
      subtext: 'نحترم صندوق بريدك — تحديثات نادرة ومفيدة فقط.'
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
      alert(`Thanks! You're on the early access list. (${email})`);
      setEmail('');
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-slate-50 to-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-scale {
          animation: scaleIn 0.5s ease-out forwards;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-[#043B4C] to-[#0A5160] rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="8" width="16" height="8" rx="2" fill="white"/>
                </svg>
              </div>
              <strong className="text-lg">GeneGuest</strong>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#features" className="hidden sm:inline text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {t.nav.features}
              </a>
              <a href="#ads" className="hidden sm:inline text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {t.nav.ads}
              </a>
              <a href="#demo" className="hidden sm:inline text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {t.nav.demo}
              </a>
              
              {/* Language Switcher */}
              <div className="relative">
                <button 
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium uppercase">{lang}</span>
                </button>
                
                {showLangMenu && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl border border-slate-200 py-2 min-w-[140px]">
                    <button 
                      onClick={() => { setLang('en'); setShowLangMenu(false); }}
                      className={`w-full px-4 py-2 text-left hover:bg-slate-50 transition-colors ${lang === 'en' ? 'bg-slate-100 font-semibold' : ''}`}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => { setLang('fr'); setShowLangMenu(false); }}
                      className={`w-full px-4 py-2 text-left hover:bg-slate-50 transition-colors ${lang === 'fr' ? 'bg-slate-100 font-semibold' : ''}`}
                    >
                      Français
                    </button>
                    <button 
                      onClick={() => { setLang('ar'); setShowLangMenu(false); }}
                      className={`w-full px-4 py-2 text-left hover:bg-slate-50 transition-colors ${lang === 'ar' ? 'bg-slate-100 font-semibold' : ''}`}
                    >
                      العربية
                    </button>
                  </div>
                )}
              </div>
              
              <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                {t.nav.signin}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#AEE8D4] to-[#DFF7EE] mb-6">
                <span className="text-sm font-bold text-[#043B4C] uppercase tracking-wide">
                  {t.hero.badge}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t.hero.title}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <button className="px-6 py-3 bg-gradient-to-r from-[#043B4C] to-[#0A5160] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[#043B4C]/20 transition-all hover:scale-105">
                  {t.hero.cta1}
                </button>
                <button className="px-6 py-3 bg-white border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                  {t.hero.cta2}
                </button>
              </div>
              
              <p className="text-slate-500">{t.hero.subtext}</p>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl p-8 border border-slate-200 shadow-2xl">
                <svg width="100%" height="320" viewBox="0 0 800 480" className="w-full h-auto">
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#f8fbff"/>
                      <stop offset="1" stopColor="#fff"/>
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="800" height="480" rx="16" fill="url(#g)" />
                  <g transform="translate(40,36)">
                    <rect x="0" y="0" width="720" height="408" rx="12" fill="#fff" stroke="#E4E7EB"/>
                    <circle cx="120" cy="80" r="32" fill="#AEE8D4" style={{animation: 'float 3s ease-in-out infinite'}} />
                    <circle cx="260" cy="80" r="32" fill="#FF7A59" style={{animation: 'float 3.5s ease-in-out infinite'}} />
                    <circle cx="400" cy="80" r="32" fill="#AEE8D4" style={{animation: 'float 4s ease-in-out infinite'}} />
                    <rect x="80" y="180" width="140" height="80" rx="12" fill="#EDE8E3" />
                    <rect x="240" y="180" width="140" height="80" rx="12" fill="#EDE8E3" />
                    <rect x="400" y="180" width="140" height="80" rx="12" fill="#EDE8E3" />
                    <path d="M160 112 C200 140, 320 160, 380 120" stroke="#043B4C" strokeWidth="2" fill="none" strokeOpacity="0.12"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section id="problems" className="py-20" data-animate>
          <h3 className={`text-xl font-bold mb-8 ${isVisible.problems ? 'animate-in' : 'opacity-0'}`}>
            {t.problems.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <ProblemCard 
              icon={<AlertCircle className="w-8 h-8" />}
              title={t.problems.card1.title} 
              desc={t.problems.card1.desc}
              delay="stagger-1"
              isVisible={isVisible.problems}
            />
            <ProblemCard 
              icon={<UserX className="w-8 h-8" />}
              title={t.problems.card2.title} 
              desc={t.problems.card2.desc}
              delay="stagger-2"
              isVisible={isVisible.problems}
            />
            <ProblemCard 
              icon={<TrendingDown className="w-8 h-8" />}
              title={t.problems.card3.title} 
              desc={t.problems.card3.desc}
              delay="stagger-3"
              isVisible={isVisible.problems}
            />
          </div>
        </section>

        {/* Platform Section */}
        <section id="platform" className="py-20" data-animate>
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isVisible.platform ? 'animate-in' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.platform.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{t.platform.desc}</p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#043B4C]/10 to-[#AEE8D4]/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative bg-white rounded-3xl p-2 border border-slate-200 shadow-2xl overflow-hidden">
                <img 
                  src="./dashbourd.png"
                  alt={t.platform.imageAlt}
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20" data-animate>
          <h3 className={`text-xl font-bold mb-8 text-center ${isVisible.features ? 'animate-in' : 'opacity-0'}`}>
            {t.features.title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Calendar className="w-8 h-8" />}
              title={t.features.f1.title} 
              desc={t.features.f1.desc}
              imageAlt={t.features.f1.imageAlt}
              delay="stagger-1"
              isVisible={isVisible.features}
              imageSrc="./aireservation.png"
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8" />}
              title={t.features.f2.title} 
              desc={t.features.f2.desc}
              imageAlt={t.features.f2.imageAlt}
              delay="stagger-2"
              isVisible={isVisible.features}
              imageSrc="./tablas_ai.png"
            />
            <FeatureCard 
              icon={<MessageSquare className="w-8 h-8" />}
              title={t.features.f3.title} 
              desc={t.features.f3.desc}
              imageAlt={t.features.f3.imageAlt}
              delay="stagger-3"
              isVisible={isVisible.features}
              imageSrc="./guestai.png"
            />
            <FeatureCard 
              icon={<BarChart3 className="w-8 h-8" />}
              title={t.features.f4.title} 
              desc={t.features.f4.desc}
              imageAlt={t.features.f4.imageAlt}
              delay="stagger-4"
              isVisible={isVisible.features}
              imageSrc="./occupancy_forecast.png"
            />
          </div>
        </section>

        {/* AI Ads Agent */}
        <section id="ads" className="py-20" data-animate>
          <h3 className={`text-xl font-bold mb-8 ${isVisible.ads ? 'animate-in' : 'opacity-0'}`}>
            {t.ads.title}
          </h3>
          <div className={`bg-gradient-to-br from-[#AEE8D4]/10 to-transparent rounded-3xl p-8 md:p-12 border border-[#AEE8D4]/20 ${isVisible.ads ? 'animate-scale' : 'opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A59] to-[#FF8B6D] rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold">{t.ads.subtitle}</h4>
                </div>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">{t.ads.desc}</p>
                <div className="flex flex-wrap gap-3">
                  <Chip text={t.ads.chip1} />
                  <Chip text={t.ads.chip2} />
                  <Chip text={t.ads.chip3} />
                  <Chip text={t.ads.chip4} />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A59]/20 to-[#AEE8D4]/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
                <div className="relative bg-white rounded-2xl p-2 border border-slate-200 shadow-xl overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='400' fill='%23F8FFFB'/%3E%3Crect x='30' y='30' width='250' height='150' rx='12' fill='%23AEE8D4' opacity='0.3'/%3E%3Crect x='320' y='30' width='250' height='150' rx='12' fill='%23FF7A59' opacity='0.3'/%3E%3Crect x='30' y='210' width='540' height='60' rx='8' fill='%23043B4C' opacity='0.05'/%3E%3Crect x='30' y='290' width='540' height='80' rx='8' fill='%23EDE8E3'/%3E%3Ctext x='50' y='110' font-family='system-ui' font-size='24' font-weight='600' fill='%23043B4C'%3EAd Campaign%3C/text%3E%3Ctext x='340' y='110' font-family='system-ui' font-size='24' font-weight='600' fill='%23043B4C'%3EAnalytics%3C/text%3E%3C/svg%3E"
                    alt={t.ads.imageAlt}
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section id="demo" className="py-20" data-animate>
          <h3 className={`text-xl font-bold mb-8 text-center ${isVisible.demo ? 'animate-in' : 'opacity-0'}`}>
            {t.preview.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <MockupCard 
              title={t.preview.mock1.title}
              alt={t.preview.mock1.alt}
              color="#043B4C"
              delay="stagger-1"
              isVisible={isVisible.demo}
              imageSrc="data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='400' fill='%23fff'/%3E%3Crect x='20' y='20' width='560' height='80' rx='12' fill='%23043B4C' opacity='0.08'/%3E%3Crect x='20' y='120' width='270' height='250' rx='12' fill='%23AEE8D4' opacity='0.2'/%3E%3Crect x='310' y='120' width='270' height='120' rx='12' fill='%23FF7A59' opacity='0.2'/%3E%3Crect x='310' y='250' width='270' height='120' rx='12' fill='%23EDE8E3'/%3E%3Ctext x='40' y='65' font-family='system-ui' font-size='24' font-weight='600' fill='%23043B4C'%3EDashboard Overview%3C/text%3E%3C/svg%3E"
            />
            <MockupCard 
              title={t.preview.mock2.title}
              alt={t.preview.mock2.alt}
              color="#FF7A59"
              delay="stagger-2"
              isVisible={isVisible.demo}
              imageSrc="data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='400' fill='%23fff'/%3E%3Ccircle cx='150' cy='120' r='40' fill='%23AEE8D4'/%3E%3Ccircle cx='300' cy='120' r='40' fill='%23FF7A59'/%3E%3Ccircle cx='450' cy='120' r='40' fill='%23AEE8D4'/%3E%3Crect x='100' y='200' width='100' height='80' rx='12' fill='%23EDE8E3'/%3E%3Crect x='250' y='200' width='100' height='80' rx='12' fill='%23EDE8E3'/%3E%3Crect x='400' y='200' width='100' height='80' rx='12' fill='%23EDE8E3'/%3E%3Ctext x='40' y='350' font-family='system-ui' font-size='24' font-weight='600' fill='%23FF7A59'%3EFloor Plan%3C/text%3E%3C/svg%3E"
            />
            <MockupCard 
              title={t.preview.mock3.title}
              alt={t.preview.mock3.alt}
              color="#AEE8D4"
              delay="stagger-3"
              isVisible={isVisible.demo}
              imageSrc="data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='400' fill='%23fff'/%3E%3Crect x='20' y='20' width='280' height='180' rx='12' fill='%23AEE8D4' opacity='0.3'/%3E%3Crect x='320' y='20' width='260' height='180' rx='12' fill='%23FF7A59' opacity='0.3'/%3E%3Crect x='20' y='220' width='560' height='70' rx='8' fill='%23043B4C' opacity='0.05'/%3E%3Crect x='20' y='310' width='560' height='70' rx='8' fill='%23EDE8E3'/%3E%3Ctext x='40' y='120' font-family='system-ui' font-size='20' font-weight='600' fill='%23043B4C'%3ECampaigns%3C/text%3E%3C/svg%3E"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20">
          <div className="bg-gradient-to-r from-[#043B4C] to-[#0A5160] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">{t.cta.title}</h3>
            <p className="text-white/90 mb-8 text-lg">{t.cta.desc}</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder={t.cta.placeholder}
                className="flex-1 px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FF7A59] transition-shadow"
              />
              <button
                onClick={handleSubmit}
                className="px-8 py-4 bg-[#FF7A59] rounded-xl font-bold hover:bg-[#ff8b6d] transition-all hover:scale-105 whitespace-nowrap shadow-lg"
              >
                {t.cta.button}
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">{t.cta.subtext}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 mb-4">
            <a href="#" className="hover:text-[#FF7A59] transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-[#FF7A59] transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-[#FF7A59] transition-colors">{t.footer.contact}</a>
          </div>
          <p className="text-slate-500 text-sm">© GeneGuest 2025</p>
        </div>
      </footer>
    </div>
  );
}

function ProblemCard({ icon, title, desc, delay, isVisible }) {
  return (
    <div className={`group bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-[#FF7A59]/30 transition-all hover:-translate-y-2 ${isVisible ? `animate-in ${delay}` : 'opacity-0'}`}>
      <div className="w-14 h-14 bg-gradient-to-br from-[#FF7A59]/10 to-[#FF7A59]/5 rounded-xl flex items-center justify-center text-[#FF7A59] mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="font-bold mb-2 text-lg">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc, imageAlt, imageSrc, delay, isVisible }) {
  return (
    <div className={`group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2 ${isVisible ? `animate-in ${delay}` : 'opacity-0'}`}>
      <div className="relative overflow-hidden">
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-[#043B4C] group-hover:scale-110 transition-transform">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h5 className="font-bold mb-2 text-lg">{title}</h5>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Chip({ text }) {
  return (
    <span className="inline-block px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-semibold hover:border-[#043B4C] hover:bg-[#043B4C] hover:text-white transition-all cursor-default">
      {text}
    </span>
  );
}

function MockupCard({ title, alt, color, imageSrc, delay, isVisible }) {
  return (
    <div className={`group ${isVisible ? `animate-in ${delay}` : 'opacity-0'}`}>
      <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
        <div className="relative">
          <img 
            src={imageSrc}
            alt={alt}
            className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <h5 className="font-semibold text-slate-700">{title}</h5>
        </div>
      </div>
    </div>
  );
}