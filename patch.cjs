const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCatalogSection.tsx', 'utf8');

// Replace the category section wrapper and title
const oldCategoryTitle = `<div className="min-h-[calc(100dvh-80px)] flex flex-col justify-center mb-16 relative z-20">
          <div className="text-center mb-10 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight">دسته‌بندی محصولات</h3>
            <div className="w-16 h-1.5 bg-[#003F86] rounded-full mx-auto mt-4 sm:mt-6" />
          </div>`;

const newCategoryTitle = `<div className="flex flex-col justify-start mb-16 sm:mb-20 lg:mb-24 relative z-20 pt-12 sm:pt-20 lg:pt-28">
          <div className="flex flex-col items-center justify-center mb-10 sm:mb-16 relative w-full">
             <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-50/80 border border-blue-100/80 shadow-sm mb-6 backdrop-blur-sm">
                <Layers className="w-4 h-4 text-[#003F86]" />
                <span className="text-[11px] sm:text-xs font-black text-[#003F86] tracking-widest uppercase">
                   نمایشگاه ماشین‌آلات
                </span>
             </div>
             <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight text-center relative z-10">
                دسته‌بندی <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003F86] to-amber-500">محصولات</span>
             </h3>
             <p className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-500 font-medium text-center max-w-xl mx-auto leading-relaxed">
                برای مشاهده مشخصات فنی و استعلام قیمت، دسته‌بندی مورد نظر خود را انتخاب کنید
             </p>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-32 bg-gradient-to-r from-blue-400/10 via-amber-400/10 to-blue-400/10 blur-3xl -z-10 rounded-full" />
          </div>`;

code = code.replace(oldCategoryTitle, newCategoryTitle);

// Make sure to remove the old mt-16 sm:mt-24 lg:mt-40 from motion.div
code = code.replace(
  '<motion.div className="min-h-[1200px]">',
  '<motion.div className="min-h-[1200px] mt-8 sm:mt-12">'
);

fs.writeFileSync('src/components/ProductCatalogSection.tsx', code);
