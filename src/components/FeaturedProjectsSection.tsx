import React, { useState, useRef, useEffect } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Activity, 
  CheckCircle2, 
  ArrowLeft, 
  Sparkles,
  FileCheck,
  ChevronLeft,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data/mockData';

import { InnerScrollIndicator } from './InnerScrollIndicator';
import { LazyImage } from './LazyImage';

interface FeaturedProjectsSectionProps {
  projects?: Project[];
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
}


export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  projects = PROJECTS,
  onSelectProject,
  onOpenConsultation,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(6);
  
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(loadMoreRef, { margin: "200px 0px" });

  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter]);

  useEffect(() => {
    if (isInView) {
      setVisibleCount(prev => prev + 6);
    }
  }, [isInView]);

  const filterTabs = [
    { id: 'all', label: 'همه پروژه‌ها' },
    { id: 'broiler', label: 'مرغداری گوشتی' },
    { id: 'layer', label: 'مرغداری تخم‌گذار' },
    { id: 'feed_mill', label: 'کارخانه خوراک' },
    { id: 'breeder', label: 'مادر و اجداد' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);
    
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section className="min-h-screen relative overflow-hidden z-0" id="projects-section">
      {/* Dynamic Vibrant Mesh Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.15)_0%,_transparent_60%)] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.15)_0%,_transparent_60%)] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-[radial-gradient(circle_at_center,_rgba(52,211,153,0.12)_0%,_transparent_60%)] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="w-full min-h-[100dvh] flex flex-col justify-center relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Header section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-white/50 shadow-sm mb-6">
              <FileCheck className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-bold text-slate-800">مطالعات موردی (Case Studies)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              پروژه‌های شاخص <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-amber-500">اجرا شده</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              اثبات عملکرد با نتایج واقعی در ظرفیت، بهبود ضریب تبدیل (FCR) و کاهش تلفات. پروژه‌هایی که استانداردهای صنعت طیور را ارتقا داده‌اند.
            </p>
          </motion.div>
        </div>
        <InnerScrollIndicator />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 relative z-10">

        {/* Categories (Glassmorphism Tabs) */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 backdrop-blur-xl border ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-[#003F86] to-blue-700 text-white border-blue-600 shadow-xl shadow-blue-900/20 scale-105'
                  : 'bg-white/60 text-slate-600 border-white/40 hover:bg-white hover:text-[#003F86] hover:border-blue-200 shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid with AnimatePresence */}
        <motion.div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                key={project.id}
                className="relative bg-white/70 backdrop-blur-2xl rounded-[2rem] border border-white overflow-hidden shadow-xl shadow-slate-300/40 hover:shadow-2xl hover:shadow-[#003F86]/20 hover:-translate-y-2 transition-all duration-500 flex flex-col group cursor-pointer origin-center"
                onClick={() => onSelectProject(project)}
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#003F86] to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

                {/* Image & Meta Tags */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-lg">
                    {project.typeTitle}
                  </div>

                  {/* Location & Year */}
                  <div className="absolute bottom-4 right-4 left-4 z-20 flex items-center justify-between text-white text-xs font-medium">
                    <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-lg">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 text-blue-300" />
                      سال {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between relative">
                  {/* Subtle hover glow inside card */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h3 className="font-black text-slate-900 text-lg sm:text-xl group-hover:text-[#003F86] transition-colors leading-snug mb-4">
                      {project.title}
                    </h3>

                    {/* Capacity & Key Specs */}
                    <div className="bg-white/80 rounded-2xl border border-slate-200/60 shadow-sm mb-5 p-4 space-y-2.5 text-xs sm:text-sm">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                        <span className="text-slate-500">ظرفیت پروژه:</span>
                        <strong className="text-slate-800 font-bold">{project.capacity}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">دستاورد کلیدی:</span>
                        <strong className="text-emerald-600 font-bold">{project.keyOutcome}</strong>
                      </div>
                    </div>

                    {/* Equipment Summary Bullets */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] sm:text-xs font-bold text-slate-500 block mb-2 uppercase tracking-wider">
                        تجهیزات و خدمات انجام‌شده:
                      </span>
                      {project.equipmentSummary.slice(0, 2).map((eq, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#003F86] shrink-0 mt-0.5" />
                          <span className="line-clamp-2 leading-relaxed">{eq}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study CTA Button */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between relative z-10">
                    <button
                      className="w-full bg-slate-50 hover:bg-[#003F86] text-[#003F86] hover:text-white border border-blue-100 hover:border-[#003F86] font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <span>مشاهده مطالعه موردی کامل</span>
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Lazy Load Trigger */}
        {visibleCount < filteredProjects.length && (
          <div ref={loadMoreRef} className="w-full h-20 flex items-center justify-center mt-8">
            <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin opacity-50" />
          </div>
        )}

        {/* Similar Project CTA Box (Premium Callout) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-[#002d61] to-[#001733] border border-blue-500/20 rounded-[2rem] p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative shapes inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.15)_0%,_transparent_60%)] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.15)_0%,_transparent_60%)] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
          
          <div className="relative z-10 text-center lg:text-right flex-1">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              آیا قصد احداث یا ارتقای فارم صنعتی خود را دارید؟
            </h3>
            <p className="text-sm sm:text-base text-blue-200 font-medium max-w-3xl">
              تیم مهندسی طیوران صنعت پویا آماده ارائه پیش‌طرح رایگان، برآورد اولیه سرمایه‌گذاری و تحلیل بار تهویه پروژه شماست. با ما تماس بگیرید.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full lg:w-auto group relative overflow-hidden bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-2xl text-sm flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transform hover:-translate-y-1"
            >
              <span>درخواست مشاوره و برآورد</span>
              <div className="w-8 h-8 rounded-full bg-slate-950/10 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                <ArrowLeft className="w-4 h-4" />
              </div>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
