import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BarChart3,
  MapPin,
  MessageCircle,
  Share2,
  Store,
  ChevronDown,
  LineChart,
  Target,
  Users,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Subtle GSAP reveals
    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray('.reveal');
      reveals.forEach((element) => {
        gsap.fromTo(element,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-foreground selection:text-background">
      {/* 
        ========================================
        1. STICKY NAVBAR
        ========================================
      */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-baseline gap-4">
            <span className="text-2xl font-display font-bold tracking-tighter">kpidrome.</span>
            <span className="hidden md:inline-block text-sm text-foreground/60 tracking-wide">Serving Mexico & USA</span>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-foreground/70 transition-colors">Services</a>
            <a href="#process" className="hover:text-foreground/70 transition-colors">Process</a>
            <a href="#results" className="hover:text-foreground/70 transition-colors">Results</a>
            <a href="#faq" className="hover:text-foreground/70 transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contact" className="btn-primary py-2.5 px-5 text-sm">
              Schedule <span className="hidden md:inline ml-1">Call</span>
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* 
          ========================================
          1. HERO SECTION
          ========================================
        */}
        <section className="relative min-h-[90vh] flex items-center justify-center section-padding overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-background mb-8 reveal">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium">Accepting new local business partners</span>
            </div>

            <h1 className="mb-6 reveal">
              <span className="block">More local leads.</span>
              <span className="block text-foreground/80">Clean reporting. <br className="md:hidden" />No confusion.</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/60 mb-10 max-w-2xl reveal">
              We help local business owners get more calls, messages, and store visits with precision Meta and Google Ads.
            </p>

            {/* What you get in 14 days list */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 text-sm md:text-base font-medium reveal">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 opacity-40" />
                <span>Audit & Goals setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 opacity-40" />
                <span>Tracking pixel installed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 opacity-40" />
                <span>First campaigns launched</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 reveal w-full sm:w-auto">
              <a href="#contact" className="btn-primary w-full sm:w-auto h-14 px-8 text-lg">
                Schedule a Free Strategy Call
              </a>
              <a href="#contact" className="btn-secondary w-full sm:w-auto h-14 px-8 text-lg">
                Get a Free Account Review
              </a>
            </div>

            <div className="mt-8 text-sm text-foreground/50 flex flex-col items-center gap-2 reveal">
              <p>No high-pressure sales. Just a transparent breakdown of your market.</p>
              <a href="#contact" className="flex items-center gap-2 text-foreground/80 hover:text-foreground font-medium underline underline-offset-4">
                Message us on WhatsApp (Mexico & USA) <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 
          ========================================
          2. SOCIAL PROOF
          ========================================
        */}
        <section className="border-y border-border/50 bg-background/50">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <p className="text-center text-sm font-medium text-foreground/60 mb-8 uppercase tracking-widest">
              Industries We Support
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale">
              {/* Minimal geometric placeholders for logos */}
              <div className="flex items-center gap-2 font-display font-semibold text-xl"><Store className="w-6 h-6" /> Local Retail</div>
              <div className="flex items-center gap-2 font-display font-semibold text-xl"><Briefcase className="w-6 h-6" /> Professional Providers</div>
              <div className="flex items-center gap-2 font-display font-semibold text-xl"><MapPin className="w-6 h-6" /> Area Services</div>
            </div>
          </div>
        </section>

        {/* Minimal Testimonials */}
        <section className="section-padding max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 reveal">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 rounded-xl border border-border/50 bg-background hover:border-foreground/20 transition-colors">
                <div className="flex text-foreground mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="mb-6 tracking-wide leading-relaxed">
                  "Since partnering with kpidrome, our monthly qualified leads have doubled. The reporting is exactly what they promised: clean and easy to understand."
                </p>
                <div>
                  <p className="font-semibold text-sm">Business Owner {i}</p>
                  <p className="text-sm text-foreground/60">Local Clinic, Texas</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 
          ========================================
          3. WHAT WE DO (5 Service Cards)
          ========================================
        */}
        <section id="services" className="section-padding max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-24 reveal">
            <h2 className="mb-4 text-center">Acquisition Systems.</h2>
            <p className="text-xl text-foreground/60 text-center max-w-2xl mx-auto">
              We build specialized marketing engines tailored for local conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Meta Ads */}
            <div className="group p-8 rounded-2xl bg-card-slate flex flex-col min-h-[320px] reveal">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-2xl mb-4">Meta Ads</h3>
              <p className="font-medium mb-2">Lead generation + Remarketing via Facebook & Instagram.</p>
              <p className="text-foreground/70 mb-auto">We capture attention where your locals spend their time, driving them straight to your booking page or inbox.</p>
              <a href="#contact" className="inline-flex items-center gap-2 font-medium mt-8 border-b border-foreground/20 w-fit pb-1 group-hover:border-foreground transition-colors">
                Learn more <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Google Ads */}
            <div className="group p-8 rounded-2xl bg-card-cream border border-border/50 flex flex-col min-h-[320px] reveal">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="text-2xl mb-4">Google Ads</h3>
              <p className="font-medium mb-2">Search intent capture + local remarketing.</p>
              <p className="text-foreground/70 mb-auto">We place your business at the exact moment a prospect searches for your services in your area.</p>
              <a href="#contact" className="inline-flex items-center gap-2 font-medium mt-8 border-b border-foreground/20 w-fit pb-1 group-hover:border-foreground transition-colors">
                Learn more <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* GMB */}
            <div className="group p-8 rounded-2xl bg-card-amber flex flex-col min-h-[320px] reveal">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-2xl mb-4">Google Business</h3>
              <p className="font-medium mb-2">Profile verification + Optimization.</p>
              <p className="text-foreground/70 mb-auto">Dominate the local map pack. We ensure your profile is active, accurate, and prioritized by search engines.</p>
              <a href="#contact" className="inline-flex items-center gap-2 font-medium mt-8 border-b border-foreground/20 w-fit pb-1 group-hover:border-foreground transition-colors">
                Learn more <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Content */}
            <div className="group p-8 rounded-2xl bg-card-pink flex flex-col min-h-[320px] reveal lg:col-span-1 md:col-span-2 lg:col-start-1">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl mb-4">Social Content</h3>
              <p className="font-medium mb-2">High-quality graphics + short-form assets.</p>
              <p className="text-foreground/70 mb-auto">We produce clean, premium content that elevates your brand identity and builds local trust.</p>
              <a href="#contact" className="inline-flex items-center gap-2 font-medium mt-8 border-b border-foreground/20 w-fit pb-1 group-hover:border-foreground transition-colors">
                Learn more <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Posting */}
            <div className="group p-8 rounded-2xl bg-background border border-border flex flex-col min-h-[320px] reveal lg:col-span-2">
              <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-2xl mb-4">Community Management</h3>
              <p className="font-medium mb-2">Consistent scheduling + Basic engagement.</p>
              <p className="text-foreground/70 mb-auto md:max-w-lg">We maintain your presence across platforms so you appear active and responsive to local inquiries, without lifting a finger.</p>
              <a href="#contact" className="inline-flex items-center gap-2 font-medium mt-8 border-b border-foreground/20 w-fit pb-1 group-hover:border-foreground transition-colors">
                Learn more <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* 
          ========================================
          4. OUR SIMPLE PROCESS
          ========================================
        */}
        <section id="process" className="section-padding max-w-7xl mx-auto px-6 border-t border-border/50">
          <div className="mb-16 md:mb-24 text-center reveal">
            <h2 className="mb-4">Our Simple Process.</h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              No confusion. Just a clear roadmap to more local customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative before:absolute before:inset-x-0 before:top-6 before:h-px before:bg-border/50 before:-z-10 hidden md:grid">
            {/* Step 1 */}
            <div className="bg-background pt-2 pr-6 reveal">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-display font-semibold mb-6">1</div>
              <h4 className="text-xl mb-2">Audit + Goals</h4>
              <p className="text-foreground/70">We analyze your market position and set hard target metrics.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-background pt-2 px-6 reveal" style={{ transitionDelay: '100ms' }}>
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-display font-semibold mb-6">2</div>
              <h4 className="text-xl mb-2">Launch + Tracking</h4>
              <p className="text-foreground/70">Deploy assets and ensure every lead action is recorded cleanly.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-background pt-2 pl-6 reveal" style={{ transitionDelay: '200ms' }}>
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-display font-semibold mb-6">3</div>
              <h4 className="text-xl mb-2">Optimize + Report</h4>
              <p className="text-foreground/70">Continuous refinement and transparent performance reviews.</p>
            </div>
          </div>

          {/* Mobile Process */}
          <div className="md:hidden space-y-12 relative before:absolute before:inset-y-0 before:left-5 before:w-px before:bg-border/50 before:-z-10">
            {[
              { id: '1', title: 'Audit + Goals', desc: 'We analyze your market position and set hard target metrics.' },
              { id: '2', title: 'Launch + Tracking', desc: 'Deploy assets and ensure every lead action is recorded cleanly.' },
              { id: '3', title: 'Optimize + Report', desc: 'Continuous refinement and transparent performance reviews.' },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 reveal">
                <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-display font-semibold shrink-0">{step.id}</div>
                <div className="pt-2">
                  <h4 className="text-xl mb-2">{step.title}</h4>
                  <p className="text-foreground/70">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 
          ========================================
          5. INDUSTRIES
          ========================================
        */}
        <section className="bg-background border-y border-border/50">
          <div className="max-w-7xl mx-auto px-6 section-padding">
            <h2 className="mb-12 text-center reveal">Built for Local Growth</h2>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-px bg-border/50 border border-border/50 reveal">
              {[
                { name: 'Restaurants', outcomes: 'Bookings & Walk-ins' },
                { name: 'Home Services', outcomes: 'Quote Requests' },
                { name: 'Medical/Wellness', outcomes: 'Patient Consults' },
                { name: 'Real Estate', outcomes: 'Buyer Leads' },
                { name: 'Retail', outcomes: 'Store Visits' },
                { name: 'Prof. Services', outcomes: 'Strategy Calls' },
              ].map((ind, i) => (
                <div key={i} className="bg-background flex flex-col items-center justify-center p-8 text-center hover:bg-foreground/5 transition-colors">
                  <span className="font-semibold mb-2">{ind.name}</span>
                  <span className="text-xs text-foreground/50 uppercase tracking-wider">{ind.outcomes}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 
          ========================================
          6. STATS / PROOF POINTS
          ========================================
        */}
        <section id="results" className="section-padding max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-5 reveal">
              <h2 className="mb-6">Data over promises.</h2>
              <p className="text-xl text-foreground/60 mb-8">
                We track the numbers that matter so you don't have to guess if your marketing is working.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-card-slate p-6 rounded-xl">
                  <p className="text-4xl md:text-5xl font-display font-semibold mb-2 tracking-tighter text-foreground">+226<span className="text-2xl text-foreground/50">%</span></p>
                  <p className="text-sm font-medium text-foreground/70 uppercase tracking-wide">Top 5 Rankings</p>
                </div>
                <div className="bg-card-cream p-6 rounded-xl border border-border/50">
                  <p className="text-4xl md:text-5xl font-display font-semibold mb-2 tracking-tighter text-foreground">+122<span className="text-2xl text-foreground/50">%</span></p>
                  <p className="text-sm font-medium text-foreground/70 uppercase tracking-wide">Monthly Leads</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 reveal">
              <div className="relative rounded-2xl border border-border/50 bg-background shadow-2xl shadow-foreground/5 overflow-hidden">
                <div className="border-b border-border/50 bg-background/50 p-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-border"></div>
                    <div className="w-3 h-3 rounded-full bg-border"></div>
                    <div className="w-3 h-3 rounded-full bg-border"></div>
                  </div>
                  <span className="text-xs font-medium text-foreground/40 uppercase tracking-widest">Client Dashboard Preview</span>
                </div>
                <div className="p-8 space-y-6">
                  {/* Mock dashboard row 1 */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-lg">Inbound Calls</p>
                      <p className="text-sm text-foreground/50">Google Ads Profile</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-semibold text-xl">142</p>
                      <p className="text-sm text-green-600 font-medium">↑ 14% vs last month</p>
                    </div>
                  </div>
                  <div className="h-px w-full bg-border/40"></div>
                  {/* Mock dashboard row 2 */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-lg">Form Submissions</p>
                      <p className="text-sm text-foreground/50">Meta Lead Ads</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-semibold text-xl">87</p>
                      <p className="text-sm text-green-600 font-medium">↑ 22% vs last month</p>
                    </div>
                  </div>
                  <div className="h-px w-full bg-border/40"></div>
                  {/* Mock dashboard row 3 */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-lg">Driving Directions</p>
                      <p className="text-sm text-foreground/50">Google Business Map Pack</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-semibold text-xl">204</p>
                      <p className="text-sm text-foreground/50 font-medium">Stable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ========================================
          7. FAQ
          ========================================
        */}
        <section id="faq" className="section-padding max-w-4xl mx-auto px-6 border-t border-border/50">
          <div className="mb-16 text-center reveal">
            <h2 className="mb-4">Common Questions.</h2>
            <p className="text-xl text-foreground/60">Everything you need to know about partnering with us.</p>
          </div>

          <div className="space-y-6 reveal">
            {[
              { q: 'What is your pricing model?', a: 'We charge a flat monthly retainer based on the scope of services, plus your actual ad spend paid directly to Meta/Google. No hidden markups.' },
              { q: 'Do you require long-term contracts?', a: 'We start with a 3-month initial commitment to allow the algorithms to optimize properly. After that, we move to a month-to-month agreement.' },
              { q: 'How fast can we launch?', a: 'Once we complete the initial audit and strategy call, we typically launch your first campaigns within 7 to 14 days.' },
              { q: 'What do you need from me?', a: 'Access to your ad accounts, your Google Business Profile, and about 2 hours of your time in the first week to align on goals and messaging.' },
              { q: 'How does reporting work?', a: 'You get a live, 24/7 dashboard tracking exact lead metrics (calls, forms, map clicks) and a monthly strategy review call with your dedicated account manager.' },
              { q: 'Do you run ads in both Mexico and the USA?', a: 'Yes. We build bilingual campaigns perfectly segmented for your service areas across the border, optimizing WhatsApp leads for Mexico and direct calls/forms for the USA.' },
              { q: 'What should my ad budget be?', a: 'We typically recommend a minimum starting ad spend of $1,000 USD / $20,000 MXN per month for meaningful data and results.' },
              { q: 'Can you help if my Google Business Profile is suspended?', a: 'Yes. We handle the verification and reinstatement processes to get you back on the Map Pack quickly.' },
            ].map((faq, i) => (
              <details key={i} className="group border-b border-border/50 pb-6">
                <summary className="flex items-center justify-between cursor-pointer font-medium text-lg list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-foreground/50 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-foreground/70 leading-relaxed pr-8">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 
          ========================================
          8. FINAL CTA
          ========================================
        */}
        <section className="bg-foreground text-background py-32 border-t border-border/50">
          <div className="max-w-4xl mx-auto px-6 text-center reveal">
            <h2 className="text-5xl md:text-6xl font-display mb-6">Ready to scale your local presence?</h2>
            <p className="text-xl text-background/70 mb-12">
              Stop guessing. Start generating predictable leads this month.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="bg-background text-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-background/90 text-lg w-full sm:w-auto text-center inline-flex justify-center flex-1 sm:flex-none">
                Schedule a Strategy Call
              </a>
              <a href="#contact" className="bg-transparent text-background border border-background/20 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-background/10 text-lg w-full sm:w-auto text-center inline-flex justify-center items-center gap-2 flex-1 sm:flex-none">
                <MessageCircle className="w-5 h-5" /> Message on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 
          ========================================
          9. CONTACT / FORM
          ========================================
        */}
        <section id="contact" className="section-padding bg-card-slate">
          <div className="max-w-3xl mx-auto px-6 reveal">
            <div className="text-center mb-12">
              <h2 className="mb-4">Get in touch.</h2>
              <p className="text-xl text-foreground/60">Fill out the form below and we'll reach out within 24 hours.</p>
            </div>

            <form className="bg-background p-8 md:p-12 rounded-2xl shadow-sm border border-border/50 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Name / Nombre *</label>
                  <input type="text" className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-foreground transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Business Name / Empresa *</label>
                  <input type="text" className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-foreground transition-all" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">City / Ciudad *</label>
                  <input type="text" className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-foreground transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Country / País *</label>
                  <select className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-foreground transition-all" required>
                    <option value="">Select / Seleccionar</option>
                    <option value="MX">Mexico</option>
                    <option value="US">United States</option>
                    <option value="OTHER">Other / Otro</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Email / Correo *</label>
                  <input type="email" className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-foreground transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Phone or WhatsApp / Teléfono *</label>
                  <input type="tel" className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-foreground transition-all" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Main Interest / Interés Principal *</label>
                  <select className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-foreground transition-all" required>
                    <option value="">Select / Seleccionar</option>
                    <option value="meta">Meta Ads (Facebook/Instagram)</option>
                    <option value="google">Google Ads</option>
                    <option value="gmb">Google Business Profile</option>
                    <option value="content">Social Content & Management</option>
                    <option value="full">Full Acquisition System</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Monthly Ad Budget / Presupuesto Mensual *</label>
                  <select className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-foreground transition-all" required>
                    <option value="">Select / Seleccionar</option>
                    <option value="<1k">Under $1,000 USD</option>
                    <option value="1k-3k">$1,000 - $3,000 USD</option>
                    <option value="3k-10k">$3,000 - $10,000 USD</option>
                    <option value="10k+">$10,000+ USD</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Message / Mensaje (Optional)</label>
                <textarea rows="4" className="w-full bg-background border border-border/80 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-foreground transition-all"></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full btn-primary h-14 text-lg">Submit Request / Enviar Solicitud</button>
                <p className="text-xs text-foreground/40 text-center mt-4">By submitting, you agree to our privacy policy. Your data is secure and will never be shared.</p>
              </div>
            </form>
          </div>
        </section>

      </main>

      {/* 
        ========================================
        FOOTER
        ========================================
      */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-display font-bold tracking-tighter">kpidrome.</span>
            <p className="text-sm text-foreground/50 mt-2">Serving local businesses across Mexico & the USA.</p>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-foreground/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground/70 transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono bg-border/30 px-3 py-1.5 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Systems Operational
          </div>
        </div>
      </footer>
    </div>
  )
}
