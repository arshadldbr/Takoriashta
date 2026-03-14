
import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group bg-slate-900/40 hover:bg-slate-800/60 p-10 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 flex flex-col h-full shadow-xl">
      <div className="text-[10px] font-black text-amber-500 mb-6 tracking-[0.2em] uppercase opacity-60">
        {course.category}
      </div>
      <h3 className="text-2xl font-black text-white mb-6 group-hover:text-amber-400 transition-colors uppercase italic tracking-tight">
        {course.title}
      </h3>
      <ul className="space-y-4 mb-10 flex-grow">
        {course.description.map((item, idx) => (
          <li key={idx} className="text-slate-400 text-sm flex items-start gap-3">
            <span className="text-amber-500/30 text-xs mt-0.5">▶</span> {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8 border-t border-white/5">
        <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Primary Objective</div>
        <div className="text-white text-sm font-bold italic serif">
          "{course.outcome}"
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
