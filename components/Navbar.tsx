
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Identity', id: 'about' },
    { name: 'Why Aastik', id: 'why' },
    { name: 'Experience', id: 'experience' },
    { name: 'Mentorship', id: 'courses' },
    { name: 'Consultation', id: 'consultation' },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-xl font-black tracking-[0.15em] text-white uppercase group-hover:text-amber-500 transition-colors">
              ARSHAD KHAN <span className="text-amber-500">AASTIK</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.id)}
                  className="text-slate-400 hover:text-amber-500 px-3 py-2 rounded-md text-xs font-bold tracking-widest uppercase transition-all cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => handleScroll('consultation')}
                className="bg-amber-600 text-white px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase hover:bg-amber-500 hover:scale-105 transition-all cursor-pointer shadow-lg shadow-amber-900/20"
              >
                BOOK ARSHAD
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white transition-colors"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className="text-slate-300 hover:text-amber-500 block w-full text-left px-3 py-4 rounded-md text-sm font-bold uppercase tracking-widest"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
