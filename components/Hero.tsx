
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-amber-500 font-bold tracking-[0.4em] mb-6 uppercase text-xs md:text-sm animate-pulse">
          Mentor • Practitioner • Authority
        </h2>
        <h1 className="text-5xl md:text-9xl font-black mb-8 tracking-tighter leading-none text-white uppercase italic">
          ARSHAD KHAN <br/>
          <span className="gold-text">AASTIK</span>
        </h1>
        <p className="text-2xl md:text-4xl font-light text-slate-300 mb-10 max-w-4xl mx-auto leading-tight italic serif">
          "I don't just teach. I show you how to <span className="text-white font-semibold">reclaim</span> your focus, <span className="text-white font-semibold">master</span> AI systems, and <span className="text-white font-semibold">conquer</span> the noise in your mind."
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <button className="group w-full sm:w-auto px-10 py-5 bg-white text-slate-950 font-black rounded-full text-lg hover:bg-amber-500 hover:text-white hover:scale-105 transition-all shadow-2xl shadow-amber-500/20 flex items-center gap-3">
            SECURE MENTORSHIP <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all border-2 border-white/20">
            VIEW CURRICULUM
          </button>
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all">
          <span className="text-sm font-bold tracking-widest uppercase">15+ Years Mastery</span>
          <span className="text-sm font-bold tracking-widest uppercase">AI Strategic Advisor</span>
          <span className="text-sm font-bold tracking-widest uppercase">Mental Clarity Specialist</span>
          <span className="text-sm font-bold tracking-widest uppercase">Urdu Literary Authority</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
