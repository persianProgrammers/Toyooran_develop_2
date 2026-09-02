import React from 'react';
import { motion } from 'motion/react';
import { LazyImage } from './LazyImage';
import { 
  Award, 
  ShieldCheck, 
  Factory, 
  Layers, 
  CheckCircle2, 
  PhoneCall, 
  MapPin, 
  Clock, 
  Sparkles,
  Users,
  Target,
  Warehouse,
  Flame,
  Wheat,
  Droplets,
  Pill
} from 'lucide-react';
import { COMPANY_INFO, TESTIMONIALS_AND_PROOF } from '../data/mockData';
import { InnerScrollIndicator } from './InnerScrollIndicator';

interface AboutPageProps {
  onOpenConsultation?: () => void;
  onOpenQuote?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenConsultation = () => {},
  onOpenQuote = () => {},
}) => {
  const coreCompetencies = [
    {
      icon: Warehouse,
      title: 'راهکار جامع توسعه، تجهیز و سوله',
      desc: 'طراحی، ساخت و تجهیز کامل و صفر تا صد سوله، کارخانجات و سالن‌های مرغداری با سازه‌های مدرن، سبک، بهداشتی و صنعتی.'
    },
    {
      icon: Award,
      title: 'تولید انحصاری تحت لیسانس FDA آمریکا',
      desc: 'تنها تولیدکننده بشقاب‌های پروانه‌ای تحت لیسانس Butterfly Concepts آمریکا با تاییدیه رسمی FDA در کشور.'
    },
    {
      icon: Flame,
      title: 'تولید تخصصی جت هیتر و تجهیزات گرمایشی',
      desc: 'تولید انواع جت هیترهای موشکی ۱۰۰ و ۵۰ (گازی، گازوئیلی و دوگانه‌سوز)، هیتر کابینی، پنجره‌های اینلت و تهویه تخصصی.'
    },
    {
      icon: Factory,
      title: 'تولید ماشین‌آلات پیشرفته خطوط خوراک',
      desc: 'طراحی و ساخت ماشین‌آلات سنگین شامل پرس پلت، اکسترودر آبزیان، فلیکر اسب، میکرودایزینگ، آسیاب، میکسر و خشک‌کن تونلی.'
    },
    {
      icon: Droplets,
      title: 'تأمین تجهیزات آبخوری و دانخوری مرغداری',
      desc: 'سیستم آبخوری نیپل TSPK تمام استیل کارنو، فشارشکن، دانخوری بشقابی پروانه‌ای، پویا، پارس، کناوی و خطوط انتقال دان.'
    },
    {
      icon: Pill,
      title: 'تولید خوراک، مکمل، روغن و دارو',
      desc: 'تولید کنسانتره Mac و تخم‌گذار، جایگزین‌های فرآوری‌شده ذرت و جو، پریمیکس دامی و اسب، روغن خام سویا/آفتابگردان و اسید چرب.'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden z-0" id="about-page">
      {/* Dynamic Vibrant Mesh Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-blue-400/40 to-purple-500/30 blur-[120px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-amber-400/40 to-orange-500/30 blur-[120px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-gradient-to-br from-emerald-400/30 to-teal-500/30 blur-[120px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="w-full min-h-[100dvh] flex flex-col justify-center relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
          {/* Page Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-white/50 shadow-sm mb-6">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-bold text-slate-800">بیش از ۵۰ سال سابقه درخشان در صنعت</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              درباره شرکت <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-amber-500">طیوران صنعت پویا</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              مشاور، طراح و مجری توسعه و بهره‌برداری پروژه‌های صنعتی با سابقه اجرای بیش از ۲۰۰ پروژه بزرگ ملی و بین-المللی
            </p>
          </motion.div>
        </div>
        <InnerScrollIndicator />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 relative z-10 space-y-16">

        {/* Story & Core Capabilities */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-6 md:p-10 border border-white shadow-xl shadow-slate-300/40"
        >
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
              راهکار جامع توسعه، تجهیز و بهره‌برداری صنعتی
            </h2>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                شرکت <strong className="text-[#003F86]">طیوران صنعت پویا</strong> به عنوان مشاور، طراح و مجری توسعه و بهره‌برداری پروژه‌های صنعتی، با تکیه بر بیش از ۵۰ سال تجربه در صنعت دام، طیور و آبزیان و اجرای بیش از ۲۰۰ پروژه ملی و بین‌المللی، زنجیره کاملی از خدمات فنی، تولید ماشین‌آلات و تأمین تجهیزات را ارائه می‌نماید.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                این مجموعه افتخار دارد که به عنوان تنها تولیدکننده بشقاب‌های پروانه‌ای تحت لیسانس <strong className="text-amber-600">Butterfly Concepts آمریکا با تاییدیه رسمی FDA</strong> و همچنین تولیدکننده تخصصی جت هیتر و ماشین‌آلات مدرن خطوط فرآوری خوراک، استانداردهای نوینی از بهره‌وری و سودآوری را پیاده‌سازی نماید.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/60">
              <div className="bg-white/80 p-4 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-mono">۵۰+ سال</span>
                <span className="text-sm text-slate-600 block mt-1 font-bold">تجربه تخصصی در صنعت</span>
              </div>
              <div className="bg-white/80 p-4 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400 font-mono">۲۰۰+</span>
                <span className="text-sm text-slate-600 block mt-1 font-bold">پروژه ملی و بین‌المللی</span>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/50 h-80 sm:h-96 lg:h-full min-h-[400px] group">
            <LazyImage
              src="/images/equipment-1.jpg"
              alt="Toyooran Factory"
              className="w-full h-full absolute inset-0"
              imgClassName="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 right-6 left-6 text-white text-sm backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20">
              <strong className="block text-base font-bold text-amber-400 mb-2">
                کارخانجات و دفاتر مهندسی طیوران صنعت پویا
              </strong>
              <span className="leading-relaxed opacity-90 block">مشهد (دفتر مرکزی و کارخانه بلوار میثاق) و گرگان (ساختمان دفتر تحقیق و توسعه دانشگاه منابع طبیعی)</span>
            </div>
          </div>
        </motion.div>

        {/* 6 Core Pillars */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-8 sm:p-12 border border-white shadow-xl shadow-slate-300/40"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              محورهای اصلی فعالیت و توانمندی‌ها
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCompetencies.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div key={idx} className="group bg-white/80 hover:bg-white p-6 rounded-[1.5rem] border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-[#003F86]/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 flex items-center justify-center text-[#003F86] group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300 mb-4">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#003F86] transition-colors">
                    {comp.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {comp.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Customer Proof & Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 text-center mb-10">
            دیدگاه مشتریان و مدیران پروژه‌ها
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_AND_PROOF.map((item, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] border border-white shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6 font-medium relative">
                  <span className="text-4xl text-amber-300 absolute -top-4 -right-2 opacity-50 font-serif">"</span>
                  {item.text}
                </p>
                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center border border-blue-200 shrink-0">
                    <Users className="w-5 h-5 text-[#003F86]" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      {item.author}
                    </strong>
                    <span className="text-xs font-medium text-slate-500">
                      {item.role} ({item.location})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};
