const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCatalogSection.tsx', 'utf8');

const oldCategoryTitle = `<div className="flex flex-col justify-start mb-16 sm:mb-20 lg:mb-24 relative z-20 pt-12 sm:pt-20 lg:pt-28">
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

const newCategoryTitle = `<div className="flex flex-col justify-start mb-16 relative z-20 pt-12 sm:pt-16">
          <div className="flex items-center gap-4 mb-8 w-full">
            <h3 className="text-lg sm:text-xl font-black text-slate-800 whitespace-nowrap">
              دسته‌بندی محصولات
            </h3>
            <div className="h-px bg-slate-200 flex-1" />
          </div>`;

code = code.replace(oldCategoryTitle, newCategoryTitle);

// Also remove `min-h-[100dvh]` from the hero to prevent huge gaps in tablet.
// In `w-full min-h-[100dvh] flex flex-col justify-center relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 z-10`
code = code.replace(
  'className="w-full min-h-[100dvh] flex flex-col justify-center relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 z-10"',
  'className="w-full min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 z-10"'
);

// We might want to remove `min-h-screen` from the outer section if we want it to adapt better, or leave it. 
// "min-h-screen relative overflow-hidden z-0" -> The hero is wrapped by this section. It's fine to leave it, but maybe it forces a very tall height if content is short?
// Let's replace `min-h-screen` with `min-h-0` on section#products? No, `section#products` contains EVERYTHING (Hero + Categories + Products). So `min-h-screen` is perfectly fine for the whole section.

fs.writeFileSync('src/components/ProductCatalogSection.tsx', code);
