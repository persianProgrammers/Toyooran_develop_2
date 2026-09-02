import React, { useRef, useState, useEffect } from 'react';
import { 
  Building2, 
  Wrench, 
  TrendingUp, 
  CheckCircle2, 
  ChevronLeft,
  Sparkles,
  Factory,
  Pill,
  ArrowLeft
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'motion/react';
import { Service } from '../types';
import { SERVICES } from '../data/mockData';

import { InnerScrollIndicator } from './InnerScrollIndicator';

interface ServicesSectionProps {
  services?: Service[];
  onSelectService: (service: Service) => void;
  onOpenConsultation: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Factory,
  Wrench,
  Pill,
  TrendingUp,
};


export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services = SERVICES,
  onSelectService,
  onOpenConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(loadMoreRef, { margin: "200px 0px" });

  useEffect(() => {
    if (isInView) {
      setVisibleCount(prev => prev + 6);
    }
  }, [isInView]);

  const displayedServices = services.slice(0, visibleCount);
  
  return (
    <section className="min-h-screen relative overflow-hidden z-0" id="services-section">
      {/* Dynamic Vibrant Mesh Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-blue-400/40 to-purple-500/30 blur-[120px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-amber-400/40 to-orange-500/30 blur-[120px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-gradient-to-br from-emerald-400/30 to-teal-500/30 blur-[120px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '12s' }} />
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
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-bold text-slate-800">خدمات مهندسی و اجرایی (Outcome-Driven)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              پوشش کامل <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-amber-500">چرخه عمر</span> پروژه‌های صنعتی
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
              ما صرفاً تجهیزات نمی‌فروشیم. طیوران صنعت پویا با بیش از نیم قرن تجربه، شریک مهندسی شما از فاز طراحی مفهومی سوله تا رسیدن به بالاترین راندمان و ظرفیت نامی است.
            </p>
            
            <button
              onClick={onOpenConsultation}
              className="inline-flex relative overflow-hidden bg-slate-900 text-white font-bold px-8 py-4 rounded-2xl text-sm items-center justify-center gap-3 transition-all shadow-xl shadow-slate-900/10 hover:-translate-y-1 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-[#FF9F14] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 group-hover:text-slate-950 transition-colors duration-300">درخواست مشاوره تخصصی</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 group-hover:bg-slate-950/10 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                 <ArrowLeft className="w-4 h-4 group-hover:text-slate-950" />
              </div>
            </button>
          </motion.div>
        </div>
        <InnerScrollIndicator />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 relative z-10">

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedServices.map((service, index) => {
              const Icon = iconMap[service.iconName] || Wrench;
              
              return (
                <motion.div
                  
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  key={service.id}
                  className="relative bg-white/70 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white shadow-xl shadow-slate-300/40 hover:shadow-2xl hover:shadow-[#003F86]/20 hover:-translate-y-2 transition-all duration-500 group cursor-pointer flex flex-col h-full origin-center"
                  onClick={() => onSelectService(service)}
                >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#003F86] to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />
                
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Icon Column */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 text-[#003F86] group-hover:text-amber-500 group-hover:border-amber-200 group-hover:scale-110 group-hover:rotate-3 flex items-center justify-center transition-all duration-500 shadow-sm mb-6">
                    <Icon className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  
                  {/* Content Column */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#003F86] transition-colors mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                      {service.tagline}
                    </p>
                    
                    {/* Problem Solving Box */}
                    <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-4 transition-colors group-hover:bg-rose-50 mb-4">
                      <span className="text-[10px] sm:text-xs font-bold text-rose-600 block mb-1.5 uppercase tracking-wider">چالش صنعتی</span>
                      <p className="text-xs text-rose-900/80 leading-relaxed">
                        {service.problemSolved}
                      </p>
                    </div>
                    
                    {/* Deliverables List */}
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 transition-colors group-hover:bg-emerald-50 flex flex-col justify-center mb-6">
                      <span className="text-[10px] sm:text-xs font-bold text-emerald-700 block mb-2 uppercase tracking-wider">راه‌حل ما</span>
                      <div className="space-y-2">
                        {service.whatWeProvide.slice(0, 2).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-emerald-900/80">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="leading-tight font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer / CTA */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-sm font-bold text-[#003F86] group-hover:text-amber-500 transition-colors gap-2 mt-auto">
                    <span>مشاهده فرآیند اجرایی</span>
                    <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-amber-50 flex items-center justify-center group-hover:-translate-x-1 transition-all">
                      <ChevronLeft className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lazy Load Trigger */}
        {visibleCount < services.length && (
          <div ref={loadMoreRef} className="w-full h-20 flex items-center justify-center mt-8">
            <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin opacity-50" />
          </div>
        )}
      </div>
    </section>
  );
};
