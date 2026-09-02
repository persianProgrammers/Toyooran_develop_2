import React, { useState } from 'react';
import { 
  Package, 
  Plus, 
  Search, 
  Pencil, 
  Trash2, 
  X, 
  Save, 
  Check, 
  AlertCircle,
  ExternalLink,
  Layers,
  Sparkles,
  Tag,
  FileText
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { ImagePicker } from '../components/ImagePicker';
import { Product, ProductCategory, ProductSpec } from '../../types';

export const ProductsTab: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct, categories } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<Product>>({
    code: '',
    name: '',
    nameEn: '',
    category: 'machinery',
    categoryTitle: 'ماشین‌آلات خط تولید خوراک و مکمل',
    isIndustrialMachine: false,
    shortDescription: '',
    fullDescription: '',
    image: '/images/equipment-1.jpg',
    advantages: ['کیفیت ساخت صنعتی و استاندارد بالا'],
    applications: ['سالن‌های مرغداری و کارخانجات خوراک'],
    specs: [{ label: 'ظرفیت', value: 'استاندارد صنعتی' }],
    models: ['مدل پایه'],
    catalogPdfName: 'Datasheet_Toyooran.pdf'
  });

  const [advantageInput, setAdvantageInput] = useState('');
  const [appInput, setAppInput] = useState('');
  const [modelInput, setModelInput] = useState('');

  const openCreateModal = () => {
    setFormData({
      id: `prod-${Date.now()}`,
      code: 'TY-PROD-' + Math.floor(100 + Math.random() * 900),
      name: '',
      nameEn: '',
      category: 'machinery',
      categoryTitle: 'ماشین‌آلات خط تولید خوراک و مکمل',
      isIndustrialMachine: false,
      shortDescription: '',
      fullDescription: '',
      image: '/images/equipment-1.jpg',
      advantages: ['کیفیت ساخت صنعتی و استاندارد بالا', 'مصرف بهینه انرژی'],
      applications: ['سالن‌های مرغداری و کارخانجات خوراک'],
      specs: [
        { label: 'ظرفیت', value: 'سفارشی بر اساس نیاز سالن' },
        { label: 'گارانتی', value: '۱۲ ماه گارانتی و ۱۰ سال خدمات' }
      ],
      models: ['استاندارد TY-100'],
      catalogPdfName: 'Datasheet_Toyooran.pdf'
    });
    setIsCreating(true);
    setEditingProduct(null);
  };

  const openEditModal = (p: Product) => {
    setFormData(JSON.parse(JSON.stringify(p)));
    setEditingProduct(p);
    setIsCreating(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.category) return;

    const matchedCat = categories.find(c => c.id === formData.category);
    const categoryTitle = matchedCat ? matchedCat.title : 'سایر تجهیزات';

    const fullProduct: Product = {
      id: formData.id || `prod-${Date.now()}`,
      code: formData.code || 'TY-PROD',
      name: formData.name,
      nameEn: formData.nameEn || '',
      category: (formData.category as ProductCategory) || 'machinery',
      categoryTitle: categoryTitle,
      isIndustrialMachine: !!formData.isIndustrialMachine,
      shortDescription: formData.shortDescription || '',
      fullDescription: formData.fullDescription || formData.shortDescription || '',
      image: formData.image || '/images/equipment-1.jpg',
      advantages: formData.advantages || [],
      applications: formData.applications || [],
      specs: formData.specs || [],
      models: formData.models || [],
      catalogPdfName: formData.catalogPdfName || 'Datasheet_Toyooran.pdf'
    };

    if (isCreating) {
      addProduct(fullProduct);
    } else if (editingProduct) {
      updateProduct(editingProduct.id, fullProduct);
    }

    setIsCreating(false);
    setEditingProduct(null);
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.nameEn && p.nameEn.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      
      {/* Header and Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-5 rounded-3xl">
        <div>
          <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
            <Package className="w-5 h-5 text-amber-400" />
            <span>مدیریت محصولات، تجهیزات و ماشین‌آلات ({products.length})</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            افزودن، ویرایش مشخصات فنی، مزایا، تصاویر و دسته‌بندی کاتالوگ آنلاین
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>افزودن محصول جدید</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="جستجو بر اساس نام محصول، کد فنی، نام انگلیسی..."
            className="w-full bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 pl-10 transition-colors"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2.5 focus:border-amber-400 focus:ring-0 transition-colors"
        >
          <option value="all">همه دسته‌بندی‌ها ({products.length})</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>
      </div>

      {/* Products Table / Cards */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-bold">
              <tr>
                <th className="p-3.5">تصویر</th>
                <th className="p-3.5">کد فنی</th>
                <th className="p-3.5">نام محصول</th>
                <th className="p-3.5">دسته‌بندی</th>
                <th className="p-3.5">مشخصات</th>
                <th className="p-3.5 text-center">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-slate-500">
                    محصولی با این مشخصات یافت نشد.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-850/60 transition-colors">
                    <td className="p-3.5">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-12 h-12 rounded-lg object-cover border border-slate-700 shrink-0"
                      />
                    </td>
                    <td className="p-3.5 font-mono text-amber-400 font-bold">
                      {p.code}
                    </td>
                    <td className="p-3.5">
                      <span className="font-bold text-white block">{p.name}</span>
                      {p.nameEn && <span className="text-[10px] text-slate-400 font-mono block">{p.nameEn}</span>}
                    </td>
                    <td className="p-3.5">
                      <span className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 py-0.5 rounded-full text-[11px] font-bold inline-block">
                        {p.categoryTitle}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-400 text-[11px]">
                      {p.specs?.length || 0} آیتم فنی • {p.advantages?.length || 0} مزیت
                    </td>
                    <td className="p-3.5 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => openEditModal(p)}
                          className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors"
                          title="ویرایش محصول"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirmId(p.id)}
                          className="p-1.5 bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 hover:text-rose-200 rounded-lg transition-colors"
                          title="حذف محصول"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-sm w-full space-y-4 shadow-2xl">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-400" />
              <span>تایید حذف محصول</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              آیا از حذف این محصول از کاتالوگ آنلاین اطمینان دارید؟ این تغییر بلافاصله روی وب‌سایت اعمال خواهد شد.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold"
              >
                انصراف
              </button>
              <button
                onClick={() => {
                  deleteProduct(deleteConfirmId);
                  setDeleteConfirmId(null);
                }}
                className="px-3.5 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-black shadow-md"
              >
                حذف قطعی
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create / Edit Modal */}
      {(isCreating || editingProduct) && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-3xl w-full my-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-black text-white">
                  {isCreating ? 'افزودن محصول و ماشین‌آلات جدید' : `ویرایش محصول: ${formData.name}`}
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsCreating(false);
                  setEditingProduct(null);
                }}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              
              {/* Row 1: Code & Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">کد فنی محصول</label>
                  <input
                    type="text"
                    value={formData.code || ''}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    placeholder="مثال: TY-PELLET-PRESS"
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-mono focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">دسته‌بندی اصلی</label>
                  <select
                    value={formData.category || 'machinery'}
                    onChange={(e) => {
                      const val = e.target.value as ProductCategory;
                      const cat = categories.find(c => c.id === val);
                      setFormData({ 
                        ...formData, 
                        category: val, 
                        categoryTitle: cat?.title || '' 
                      });
                    }}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-amber-400"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Persian & English Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">نام فارسی محصول</label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثال: دستگاه پرس پلت صنعتی"
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">نام انگلیسی محصول</label>
                  <input
                    type="text"
                    value={formData.nameEn || ''}
                    onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                    placeholder="Industrial Pellet Press"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-mono focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Row 3: Image URL */}
              <div>
                <ImagePicker
                  label="تصویر شاخص محصول"
                  value={formData.image || ''}
                  onChange={(url) => setFormData({ ...formData, image: url })}
                />
              </div>

              {/* Short & Full Description */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">توضیحات کوتاه (نمایش در کاتالوگ)</label>
                <textarea
                  value={formData.shortDescription || ''}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  rows={2}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-amber-400 leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">توضیحات فنی کامل (مودال جزئیات)</label>
                <textarea
                  value={formData.fullDescription || ''}
                  onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-amber-400 leading-relaxed"
                />
              </div>

              {/* Specifications Builder */}
              <div className="bg-slate-950/60 p-4 rounded-3xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-amber-400">جدول مشخصات فنی (Specs)</label>
                  <button
                    type="button"
                    onClick={() => {
                      const cur = formData.specs || [];
                      setFormData({
                        ...formData,
                        specs: [...cur, { label: 'عنوان مشخصه', value: 'مقدار مشخصه' }]
                      });
                    }}
                    className="text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3 text-amber-400" />
                    <span>افزودن ردیف</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {formData.specs?.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={spec.label}
                        onChange={(e) => {
                          const updated = [...(formData.specs || [])];
                          updated[sIdx].label = e.target.value;
                          setFormData({ ...formData, specs: updated });
                        }}
                        placeholder="عنوان (مثلا: توان موتور)"
                        className="w-1/3 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                      />
                      <input
                        type="text"
                        value={spec.value}
                        onChange={(e) => {
                          const updated = [...(formData.specs || [])];
                          updated[sIdx].value = e.target.value;
                          setFormData({ ...formData, specs: updated });
                        }}
                        placeholder="مقدار (مثلا: ۵۵ کیلووات)"
                        className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updated = (formData.specs || []).filter((_, idx) => idx !== sIdx);
                          setFormData({ ...formData, specs: updated });
                        }}
                        className="p-1.5 text-rose-400 hover:bg-rose-950/40 rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setIsCreating(false);
                    setEditingProduct(null);
                  }}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-[#FF9F14] hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>ذخیره و انتشار روی سایت</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
