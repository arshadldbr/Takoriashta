
import React from 'react';

const WhySection: React.FC = () => {
  const painPoints = [
    "Most gurus haven't seen a real crisis.",
    "Mental clarity is taught by people who aren't practitioners.",
    "Technology training is often outdated or shallow.",
    "Religious OCD is misunderstood by conventional secular gurus.",
    "Growth feels soft because it's mostly 'fake motivation'."
  ];

  return (
    <section id="why" className="py-32 bg-slate-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-xs">The Differentiation</h2>
            <h2 className="text-4xl md:text-6xl font-black mb-10 text-white leading-tight uppercase italic tracking-tighter">
              A Mentor <br/>For The <span className="gold-text">Real World</span>.
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed italic serif">
              "The market is flooded with 'life coaches'. What you need is an <strong>Authority</strong> who has practiced discipline in firefighting, written literature that lasts, and mastered the tools of the future."
            </p>
            <ul className="space-y-6">
              {painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="mt-1.5 w-5 h-px bg-amber-500 transition-all group-hover:w-8" />
                  <span className="text-slate-300 text-lg group-hover:text-white transition-colors">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-slate-900 p-10 md:p-16 rounded-3xl border border-white/10 shadow-3xl">
              <div className="space-y-8">
                <h3 className="text-3xl font-black text-white uppercase italic">The Aastik Approach</h3>
                <p className="text-amber-400 font-mono italic text-xl border-l-4 border-amber-500 pl-8 py-2">
                  "I am not interested in your motivation. I am interested in your <span className="underline decoration-amber-500/50">Structure</span>."
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  People don't come to me to feel better. They come to me to <strong>get better</strong>. We build internal systems (psychology) and external systems (AI/Tech) so that you no longer rely on 'feeling like it'.
                </p>
                <div className="pt-8 border-t border-white/5">
                  <p className="text-white font-black text-2xl uppercase italic tracking-tight">Authority is Earned.</p>
                  <p className="text-slate-500 text-sm mt-2">Discipline is the currency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
