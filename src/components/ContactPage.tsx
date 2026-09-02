import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, Clock, Building2, Factory, Map,
  MessageCircle, Instagram, Linkedin, FileText, Send
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { FreeConsultationForm } from './FreeConsultationForm';
import { InnerScrollIndicator } from './InnerScrollIndicator';

interface ContactPageProps {
  initialSubject?: string;
  initialProduct?: string;
  initialMessage?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialSubject,
  initialProduct,
  initialMessage
}) => {
  const { companyInfo } = useData();
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);
  
  const locations = companyInfo.locations || [];
  const activeLocation = locations[activeLocationIndex] || null;

  return (
    <div className="w-full min-h-screen relative overflow-hidden z-0" id="contact-page">
      <style>{`
        .dir-scrollbar::-webkit-scrollbar { width: 4px; }
        .dir-scrollbar::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.1); border-radius: 8px; }
        .dir-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 8px; }
        .dir-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(251, 191, 36, 0.4); }
      `}</style>
      
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
              <Phone className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-bold text-slate-800">ارتباط هوشمند با طیوران صنعت پویا</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              تماس با <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-amber-500">ما</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              تیم مهندسی و پشتیبانی ما آماده ارائه مشاوره رایگان، پاسخ به استعلامات و اعزام تکنسین برای پروژه‌های شما در سراسر کشور است.
            </p>
          </motion.div>
        </div>
        <InnerScrollIndicator />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 relative z-10">

        {/* Central Layout: Unified Free Consultation Form + Contact Direct Info Box */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Contact Direct Info Box (5 Cols) -> Now with premium dark aesthetic matching the new landing section */}
          <div className="xl:col-span-5 space-y-5">
            <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden group">
              {/* Premium Inner Glows */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full group-hover:bg-amber-500/30 transition-colors duration-500" />
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-colors duration-500" />
              <div className="absolute inset-0 bg-[url('/images/cubes.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="font-black text-amber-400 text-lg flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <Phone className="w-5 h-5" />
                  <span>راه‌های ارتباط مستقیم</span>
                </h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/30 hover:bg-white/10 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 shadow-inner shadow-amber-400/20">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-xs mb-1">تلفن دفتر مرکزی:</span>
                      <a href={`tel:\${companyInfo.phone}`} className="font-mono font-bold text-white text-base hover:text-amber-400 transition-colors drop-shadow-md">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center shrink-0 shadow-inner shadow-blue-400/20">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-xs mb-1">واحد فروش و استعلام:</span>
                      <a href={`tel:\${companyInfo.salesPhone || companyInfo.phone}`} className="font-mono font-bold text-white text-base hover:text-blue-400 transition-colors drop-shadow-md">
                        {companyInfo.salesPhone || companyInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/30 hover:bg-white/10 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0 shadow-inner shadow-emerald-400/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-xs mb-1">پست الکترونیک رسمی:</span>
                      <a href={`mailto:\${companyInfo.email}`} className="font-mono text-slate-200 text-sm hover:text-emerald-400 transition-colors">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-slate-700/50 text-slate-300 flex items-center justify-center shrink-0 shadow-inner shadow-white/5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-xs mb-1">ساعات پاسخگویی مهندسین:</span>
                      <span className="text-slate-200 text-sm">{companyInfo.workingHours}</span>
                    </div>
                  </div>
                </div>

                {/* Social Links inside the dark card */}
                {companyInfo.socialLinks && Object.values(companyInfo.socialLinks).some(link => typeof link === 'string' && link.trim() !== '') && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <span className="text-slate-400 text-xs block mb-4">شبکه‌های اجتماعی:</span>
                    <div className="flex items-center gap-3">
                      {companyInfo.socialLinks.instagram && (
                        <a href={companyInfo.socialLinks.instagram} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:border-transparent transition-all duration-300 group">
                          <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </a>
                      )}
                      {companyInfo.socialLinks.telegram && (
                        <a href={companyInfo.socialLinks.telegram} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0088cc] hover:border-transparent transition-all duration-300 group">
                          <Send className="w-4 h-4 ml-0.5 group-hover:scale-110 transition-transform" />
                        </a>
                      )}
                      {companyInfo.socialLinks.whatsapp && (
                        <a href={companyInfo.socialLinks.whatsapp} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#25D366] hover:border-transparent transition-all duration-300 group">
                          <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </a>
                      )}
                      {companyInfo.socialLinks.linkedin && (
                        <a href={companyInfo.socialLinks.linkedin} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077b5] hover:border-transparent transition-all duration-300 group">
                          <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Main Free Consultation Form (7 Cols) */}
          <div className="xl:col-span-7 h-full">
            <FreeConsultationForm 
              initialSubject={initialSubject}
              initialProduct={initialProduct}
              initialMessage={initialMessage}
              className="h-full shadow-lg border-slate-200 hover:shadow-xl transition-shadow"
            />
          </div>
          
        </div>

        {/* Section 2: Massive Dark Cinematic Locations Card (from unified section) */}
        <div className="bg-slate-950 rounded-[2.5rem] p-6 lg:p-8 relative overflow-hidden flex flex-col shadow-2xl border border-slate-800">
          {/* Ambient Background Magic */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#003F86]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/images/cubes.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
          
          <div className="relative z-10 mb-8">
            <h3 className="text-2xl font-black text-white flex items-center gap-3">
              <MapPin className="w-6 h-6 text-amber-400" />
              <span>شعب و کارخانجات در یک نگاه</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 relative z-10 lg:h-[450px]">
            {/* Left Sidebar: Scrollable List of Branches */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-3xl p-3 flex flex-col backdrop-blur-xl h-[300px] lg:h-full relative overflow-hidden shadow-inner">
               <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-slate-950/80 to-transparent z-10 pointer-events-none rounded-t-3xl" />
               <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-slate-950/90 to-transparent z-10 pointer-events-none rounded-b-3xl" />
               
               <div className="flex-1 overflow-y-auto pl-2 pr-1 dir-scrollbar space-y-2 relative z-0 pb-6 pt-2">
                 {locations.map((loc, idx) => {
                    const isActive = idx === activeLocationIndex;
                    const isHQ = loc.type === 'headquarter';
                    const isFact = loc.type === 'factory';
                    const Icon = isHQ ? Building2 : isFact ? Factory : MapPin;
                    return (
                      <button
                        key={loc.id || idx}
                        onClick={() => setActiveLocationIndex(idx)}
                        className={`w-full text-right flex items-center gap-4 p-4 rounded-[1.25rem] transition-all duration-300 border ${
                          isActive 
                            ? 'bg-white/10 border-amber-400/40 shadow-[0_0_20px_rgba(251,191,36,0.15)]' 
                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                         <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-[12px] flex items-center justify-center shrink-0 transition-all duration-300 shadow-inner ${
                           isActive ? 'bg-amber-400 text-slate-900 shadow-white/20' : 'bg-slate-800 text-slate-200 shadow-transparent'
                         }`}>
                           <Icon className="w-5 h-5" />
                         </div>
                         <div className="flex-1 overflow-hidden">
                           <h5 className={`font-black truncate text-xs sm:text-sm mb-1 transition-colors ${isActive ? 'text-amber-400' : 'text-white'}`}>
                             {loc.title || (isHQ ? 'دفتر مرکزی' : 'شعبه')}
                           </h5>
                           <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">{loc.address}</p>
                         </div>
                      </button>
                    )
                 })}
               </div>
            </div>

            {/* Right Detail View: Active Card */}
            <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-slate-900/50 border border-white/10 h-[350px] lg:h-full group shadow-2xl">
               <AnimatePresence mode="wait">
                  {activeLocation && (
                     <motion.div
                       key={activeLocationIndex}
                       initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
                       animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                       exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
                       transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                       className="absolute inset-0 flex flex-col w-full h-full"
                     >
                        <div className="absolute inset-0 z-0 bg-slate-900">
                          {activeLocation.mapEmbedUrl ? (
                             <iframe
                               src={activeLocation.mapEmbedUrl}
                               className="w-full h-full grayscale opacity-40 mix-blend-screen group-hover:opacity-70 group-hover:grayscale-[20%] transition-all duration-700 object-cover"
                               loading="lazy"
                             />
                          ) : (
                             <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/images/cubes.png')] opacity-5" />
                                <div className="w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]" />
                                <div className="w-[400px] h-[400px] absolute -bottom-32 -left-32 bg-blue-500/10 rounded-full blur-[100px]" />
                                <Map className="w-16 h-16 text-white/5 relative z-10" />
                             </div>
                          )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent z-10 pointer-events-none" />
                        
                        <div className="relative z-20 mt-auto p-6 sm:p-8 lg:p-10 flex flex-col w-full text-right pointer-events-auto">
                            <div className="flex items-center gap-3 mb-4">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-black rounded-lg border backdrop-blur-md \${
                                activeLocation.type === 'headquarter' ? 'text-amber-400 bg-amber-400/10 border-amber-400/20 shadow-[0_0_15px_rgba(251,191,36,0.15)]' :
                                activeLocation.type === 'factory' ? 'text-blue-300 bg-[#003F86]/30 border-[#003F86]/50 shadow-[0_0_15px_rgba(0,63,134,0.3)]' :
                                'text-emerald-400 bg-emerald-500/20 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                              }`}>
                                 {activeLocation.type === 'headquarter' ? <Building2 className="w-3.5 h-3.5"/> : activeLocation.type === 'factory' ? <Factory className="w-3.5 h-3.5"/> : <MapPin className="w-3.5 h-3.5"/>}
                                 {activeLocation.type === 'headquarter' ? 'دفتر مرکزی' : activeLocation.type === 'factory' ? 'سایت تولید' : 'شعبه / نمایندگی'}
                              </span>
                            </div>
                            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 drop-shadow-lg leading-tight">
                              {activeLocation.title || (activeLocation.type === 'headquarter' ? 'دفتر مرکزی' : 'شعبه')}
                            </h4>
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-6 font-medium">
                              {activeLocation.address}
                            </p>
                            {((activeLocation as any).workingHours || (activeLocation.type === 'headquarter' ? companyInfo.workingHours : null)) && (
                              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-amber-400 font-bold bg-amber-500/10 px-4 py-2.5 rounded-xl border border-amber-500/20 backdrop-blur-md shadow-lg self-start">
                                <Clock className="w-4 h-4" />
                                <span>{(activeLocation as any).workingHours || companyInfo.workingHours}</span>
                              </div>
                            )}
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
