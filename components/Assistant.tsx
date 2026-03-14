
import React, { useState } from 'react';
import { getCourseRecommendation } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [recommendation, setRecommendation] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConsult = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const result = await getCourseRecommendation(input);
      if (result && result.recommendedCourse) {
        setRecommendation(result);
      } else {
        setError("Could not generate a recommendation. Please try being more specific.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please check your connection.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-emerald-950/20 border border-emerald-500/30 p-8 rounded-2xl max-w-2xl mx-auto my-16 backdrop-blur-sm shadow-2xl shadow-emerald-500/5">
      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-sm">AI</span>
        Platform Advisor
      </h3>
      <p className="text-slate-400 mb-6 text-sm">Tell me what you're struggling with (e.g., "I can't focus" or "I need to make more money with tech") and I'll suggest a path.</p>
      
      <div className="flex flex-col gap-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your current bottleneck..."
          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all h-24 resize-none"
        />
        <button
          onClick={handleConsult}
          disabled={loading || !input.trim()}
          className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 text-white font-bold py-3 rounded-lg transition-all"
        >
          {loading ? 'ANALYZING...' : 'GET STRUCTURED ADVICE'}
        </button>
      </div>

      {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}

      {recommendation && (
        <div className="mt-8 pt-8 border-t border-emerald-500/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-xs text-emerald-500 uppercase font-black tracking-widest mb-2">Recommended Course</div>
          <div className="text-xl font-bold text-white mb-4">{recommendation.recommendedCourse}</div>
          <div className="p-4 bg-slate-900/80 rounded-lg mb-4">
            <p className="text-slate-300 text-sm leading-relaxed">{recommendation.reasoning}</p>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <span>Next Step:</span>
            <span className="underline decoration-emerald-500/30">{recommendation.nextStep}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assistant;
