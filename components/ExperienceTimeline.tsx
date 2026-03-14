
import React from 'react';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Technology Foundation</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            My relationship with technology did not start with trends. It started in 2005, when digital work demanded patience and genuine understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-all">
            <div className="text-emerald-500 font-bold text-2xl mb-4">2005+</div>
            <h4 className="text-white font-bold mb-2">Early Creative Tools</h4>
            <p className="text-slate-400 text-sm">Ulead VideoStudio, MediaStudio, PhotoImpact, InPage. Mastering timeline logic and print-ready layouts before presets existed.</p>
          </div>
          
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-all">
            <div className="text-emerald-500 font-bold text-2xl mb-4">Professional Era</div>
            <h4 className="text-white font-bold mb-2">Advanced Editing</h4>
            <p className="text-slate-400 text-sm">Adobe Premiere Pro & Filmora. Transitioning to industry-grade workflows for story-driven high-production systems.</p>
          </div>

          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-all">
            <div className="text-emerald-500 font-bold text-2xl mb-4">Mobile Shift</div>
            <h4 className="text-white font-bold mb-2">Short-Form Logic</h4>
            <p className="text-slate-400 text-sm">CapCut, VN Editor, KineMaster. Mastering the psychology of Reels, TikTok, and fast-turnaround editing.</p>
          </div>

          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-all">
            <div className="text-emerald-500 font-bold text-2xl mb-4">2020 (Pre-Hype)</div>
            <h4 className="text-white font-bold mb-2">AI Integration</h4>
            <p className="text-slate-400 text-sm">Using AI tools before mainstream public awareness. AI is a force multiplier for disciplined thinking, not a replacement.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
