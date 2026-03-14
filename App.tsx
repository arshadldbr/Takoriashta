
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ExperienceTimeline from './components/ExperienceTimeline';
import CourseCard from './components/CourseCard';
import Assistant from './components/Assistant';
import { COURSES } from './constants';
import { CourseCategory } from './types';

const App: React.FC = () => {
  const categories = Object.values(CourseCategory);

  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-white">
      <Navbar />
      
      <Hero />

      {/* Identity Section (About) */}
      <section id="about" className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm">The Practitioner</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                Arshad Khan Aastik. <br/>
                <span className="text-slate-500">More than a teacher.</span>
              </h3>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Over 15 years of deep involvement in high-pressure fields. From the intensity of <span className="text-white">Emergency Response & Firefighting</span> to the intricate beauty of <span className="text-white">Urdu Poetry</span> and the cutting-edge frontier of <span className="text-white">AI Automation</span>.
              </p>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                I specialize in helping the modern individual navigate <span className="text-amber-500 font-bold">Waswasa (Religious OCD)</span>, <span className="text-amber-500 font-bold">Depression</span>, and the complex distractions of the digital age.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-slate-800/50 rounded-xl border border-white/5 text-slate-200 font-bold uppercase tracking-widest text-xs">AI & Content Strategy</div>
                <div className="p-5 bg-slate-800/50 rounded-xl border border-white/5 text-slate-200 font-bold uppercase tracking-widest text-xs">Psychology & OCD</div>
                <div className="p-5 bg-slate-800/50 rounded-xl border border-white/5 text-slate-200 font-bold uppercase tracking-widest text-xs">Classical Urdu Literature</div>
                <div className="p-5 bg-slate-800/50 rounded-xl border border-white/5 text-slate-200 font-bold uppercase tracking-widest text-xs">Emergency Civil Defense</div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-amber-500/10 rounded-2xl blur-2xl group-hover:bg-amber-500/20 transition-all duration-700"></div>
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-white/10 flex items-center justify-center p-12 shadow-2xl overflow-hidden">
                <div className="text-center">
                  <span className="text-8xl block mb-4">A</span>
                  <span className="text-2xl font-black tracking-[0.5em] text-amber-500 uppercase">AASTIK</span>
                  <p className="mt-8 text-slate-500 text-sm italic serif">"Authored by experience, driven by discipline."</p>
                </div>
                {/* Visual placeholder for personal photo */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhySection />

      <ExperienceTimeline />

      {/* Engagement Feature */}
      <section className="bg-slate-950 px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-xs">Direct Council</h2>
          <h3 className="text-4xl font-black text-white uppercase italic">Ask Arshad Aastik</h3>
        </div>
        <Assistant />
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-32 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-xs">Mentorship Curriculums</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic">Knowledge Applied.</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">My training systems are derived from real-world execution. No fluff, only high-impact skills.</p>
          </div>

          <div className="space-y-32">
            {categories.map((cat) => (
              <div key={cat}>
                <div className="flex items-center gap-4 mb-12">
                  <h3 className="text-white font-black text-2xl tracking-widest uppercase italic">{cat}</h3>
                  <div className="h-px bg-amber-500/20 flex-grow"></div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {COURSES.filter(c => c.category === cat).map(course => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation & Services */}
      <section id="consultation" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-xs">Strategic Partnership</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tight italic">Direct Access <br/>To The Mentor.</h3>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed italic serif">
                "Sometimes a group course isn't enough. When you are ready to fix your bottlenecks permanently, we speak one-on-one."
              </p>
              <ul className="space-y-6">
                {[
                  "Private Video Consultation",
                  "Elite Home Coaching / Tuition",
                  "AI Business Transformation Strategy",
                  "Personalized OCD/Anxiety Recovery Plan",
                  "Urdu Literary Mentorship"
                ].map((s, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-bold tracking-wide uppercase text-sm border-l-4 border-amber-500 pl-6 py-2 bg-white/5 hover:bg-white/10 transition-all cursor-default">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-3xl p-10 md:p-16 text-white shadow-3xl shadow-amber-500/10 flex flex-col justify-between">
              <div>
                <h3 className="text-4xl md:text-5xl font-black mb-8 leading-none uppercase">Commence Your <br/>Rebrand.</h3>
                <p className="text-amber-50 mb-10 text-xl font-light italic serif">
                  "The first step to authority is deciding that average is no longer acceptable."
                </p>
              </div>
              <div className="space-y-6">
                <button className="w-full bg-white text-slate-950 font-black py-6 rounded-2xl text-xl hover:bg-slate-950 hover:text-white transition-all flex items-center justify-center gap-3 group">
                  REQUEST A SESSION <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <div className="flex justify-between items-center px-4">
                  <p className="text-xs text-amber-100 font-black tracking-widest uppercase">Limited Availability</p>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-[10px] uppercase font-bold text-emerald-100">Live Intake</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Quote */}
      <section className="py-24 bg-slate-900 text-center relative">
        <div className="max-w-4xl mx-auto px-4 italic serif text-3xl md:text-5xl text-white/80 leading-tight">
          "Mastering your mind is the <span className="text-amber-500">primary</span> skill. Mastering AI is your <span className="text-amber-500">force multiplier</span>. Combined, you are unstoppable."
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-2xl font-black tracking-[0.2em] text-white uppercase mb-12">
            ARSHAD KHAN <span className="text-amber-500">AASTIK</span>
          </div>
          
          <div className="flex justify-center gap-12 text-slate-500 hover:text-amber-500 transition-all text-xs font-black tracking-[0.2em] border-y border-white/5 py-8 mb-12 uppercase">
            <a href="#">X (Twitter)</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">LinkedIn</a>
          </div>

          <div className="text-[10px] text-slate-600 font-mono tracking-widest uppercase flex flex-wrap justify-center gap-x-8 gap-y-2">
            <span>© 2024 Arshad Khan Aastik</span>
            <span>Based in Pakistan</span>
            <span>Serving Global Seekers</span>
            <span>Designed for Mastery</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
