import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Search,
  Layers, 
  Zap, 
  PhoneCall,
  ArrowLeft,
  Filter
} from 'lucide-react';
import { Product, ProductCategory } from '../types';

import { InnerScrollIndicator } from './InnerScrollIndicator';
import { LazyImage } from './LazyImage';

interface ProductCatalogSectionProps {
  products: Product[];
  selectedCategory?: ProductCategory | 'all';
  onSelectCategory?: (cat: ProductCategory | 'all') => void;
  onSelectProduct: (product: Product) => void;
  onRequestQuoteForProduct: (product: Product) => void;
}

import { CategoryMarquee } from "./CategoryMarquee";



export const ProductCatalogSection: React.FC<ProductCatalogSectionProps> = ({ 
  products, 
  selectedCategory: propSelectedCategory,
  onSelectCategory: propOnSelectCategory,
  onSelectProduct,
  onRequestQuoteForProduct
}) => {
  const [localCategory, setLocalCategory] = useState<ProductCategory | 'all'>('all');
  const selectedCategory = propSelectedCategory !== undefined ? propSelectedCategory : localCategory;
  
  const handleSelectCategory = (cat: ProductCategory | 'all') => {
    if (propOnSelectCategory) {
      propOnSelectCategory(cat);
    } else {
      setLocalCategory(cat);
    }
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(loadMoreRef, { margin: "200px 0px" });

  useEffect(() => {
    setVisibleCount(6);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    if (isInView) {
      setVisibleCount(prev => prev + 6);
    }
  }, [isInView]);

  const filteredProducts = products.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustrial = true;
    return matchesCat && matchesSearch && matchesIndustrial;
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="products" className="min-h-screen relative overflow-hidden z-0">
      {/* Dynamic Vibrant Mesh Gradient Background to match Magazine */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-blue-400/40 to-purple-500/30 blur-[120px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-amber-400/40 to-orange-500/30 blur-[120px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[30%] right-[30%] w-[40vw] h-[40vw] bg-gradient-to-br from-emerald-400/30 to-teal-500/30 blur-[120px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="w-full min-h-[100dvh] flex flex-col justify-center relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
          {/* 
            ========================================================
            HERO & HEADER (MINIMALIST)
            ========================================================
          */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-white/50 shadow-sm mb-6">
              <Zap className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-bold text-slate-800">تجهیزات و ماشین‌آلات</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              نمایشگاه <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-amber-500">محصولات</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              بررسی و انتخاب پیشرفته‌ترین تجهیزات و ماشین‌آلات صنعت طیور با بالاترین استانداردهای مهندسی
            </p>
          </motion.div>
        </div>
        <InnerScrollIndicator />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-16 lg:pb-24 relative z-10">

        {/* 
          ========================================================
          FILTERS & SEARCH
          ========================================================
        */}
        <div className="w-full flex flex-col justify-start mb-4 relative z-20 pt-8 sm:pt-12 md:pt-16">
          <div className="flex items-center justify-center gap-4 mb-10 w-full opacity-60">
            <div className="h-px bg-slate-400 flex-1 max-w-[40px] sm:max-w-[60px]" />
            <h3 className="text-[11px] sm:text-xs font-bold text-slate-500 tracking-widest whitespace-nowrap">
              دسته‌بندی محصولات
            </h3>
            <div className="h-px bg-slate-400 flex-1 max-w-[40px] sm:max-w-[60px]" />
          </div>
          {/* Infinite Draggable Category Marquee */}
          <CategoryMarquee 
            selectedCategory={selectedCategory} 
            onSelectCategory={handleSelectCategory} 
          />

          {/* Search & Toggles */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
            <div className="relative w-full sm:w-[400px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجوی نام محصول یا کد..."
                className="w-full bg-white border border-slate-200 focus:border-[#003F86] rounded-2xl py-3.5 pr-12 pl-4 text-sm font-bold text-slate-800 transition-all outline-none placeholder:text-slate-400 placeholder:font-normal shadow-sm"
              />
              <Search className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
        </div>
          </div>

        {/* 
          ========================================================
          PRODUCT GRID (DRIBBBLE STYLE / MINIMALIST)
          ========================================================
        */}
        <motion.div className="mt-2 sm:mt-4">
            {filteredProducts.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-24 flex flex-col items-center justify-center text-center bg-white rounded-[3rem] border border-slate-200 shadow-sm"
              >
                <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-6">
                  <Filter className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-3">محصولی یافت نشد</h3>
                <p className="text-slate-500 mb-8 max-w-md">هیچ محصولی با این فیلترها وجود ندارد. لطفاً کلمات کلیدی یا دسته‌بندی را تغییر دهید.</p>
                <button 
                  onClick={() => { handleSelectCategory('all'); setSearchQuery('');  }}
                  className="px-8 py-3 rounded-full bg-[#003F86] text-white font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20"
                >
                  نمایش همه محصولات
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
                  {displayedProducts.map((product, index) => (
                    <motion.div
                      
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                      key={`${product.id}-${selectedCategory}`}
                      className="group bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 flex flex-col"
                    >
                    {/* Image Area */}
                    <div 
                      className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 mb-6 cursor-pointer"
                      onClick={() => onSelectProduct(product)}
                    >
                      <LazyImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full"
                        imgClassName="w-full h-full object-cover mix-blend-multiply transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

                      {/* Floating Badges */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-bold text-[#003F86] shadow-sm border border-white">
                        {product.categoryTitle}
                      </div>
                      
                      {product.isIndustrialMachine && (
                        <div className="absolute top-4 left-4 bg-amber-400 px-3 py-1.5 rounded-full text-[11px] font-bold text-slate-900 shadow-sm flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5" />
                          صنعتی
                        </div>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="px-2 flex-1 flex flex-col">
                      <div className="text-xs text-slate-400 font-bold mb-2">
                        کد محصول: {product.code}
                      </div>
                      
                      <h3 
                        className="text-xl md:text-2xl font-black text-slate-900 mb-8 group-hover:text-[#003F86] transition-colors cursor-pointer line-clamp-2"
                        onClick={() => onSelectProduct(product)}
                      >
                        {product.name}
                      </h3>

                      {/* Action Buttons */}
                      <div className="mt-auto flex items-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onRequestQuoteForProduct(product);
                          }}
                          className="flex-1 bg-[#003F86] hover:bg-blue-800 text-white py-3.5 px-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 flex justify-center items-center gap-2"
                        >
                          <PhoneCall className="w-4 h-4" />
                          استعلام قیمت
                        </button>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProduct(product);
                          }}
                          className="w-14 h-14 shrink-0 flex justify-center items-center bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 rounded-2xl transition-colors"
                          title="مشاهده جزئیات کامل"
                        >
                          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

          {/* Lazy Load Trigger */}
          {visibleCount < filteredProducts.length && (
            <div ref={loadMoreRef} className="w-full h-20 flex items-center justify-center mt-8">
              <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin opacity-50" />
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
};
