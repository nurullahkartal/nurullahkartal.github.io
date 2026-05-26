import React, { useState } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  category: 'Muhasebe' | 'Lojistik' | 'Yazılım & ERP' | 'Gelişim & Öğrenci';
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  image?: string;
}

interface Props {
  initialPosts: BlogPost[];
}

export default function BlogEngine({ initialPosts }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = initialPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Tümü' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['Tümü', 'Muhasebe', 'Lojistik', 'Yazılım & ERP', 'Gelişim & Öğrenci'];

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in-up">

      {/* Arama ve Filtre Kontrolleri */}
      <div className="flex flex-col gap-3 p-3 sm:p-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl shadow-xs">
        {/* Arama Barı */}
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 select-none pointer-events-none text-sm">🔍</span>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Konu, etiket veya kelime ara..."
            className="w-full pl-9 pr-8 py-2.5 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors text-slate-850 dark:text-slate-200"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              aria-label="Aramayı Temizle"
            >
              ✕
            </button>
          )}
        </div>

        {/* Kategori Filtre Hapları — mobilde yatay kaydırma */}
        <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none" role="group" aria-label="Kategori Filtrele">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-855 text-slate-650 dark:text-slate-350 border border-slate-100 dark:border-slate-850'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sonuç Sayısı */}
        {(searchQuery || selectedCategory !== 'Tümü') && (
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {filteredPosts.length} makale bulundu
            {selectedCategory !== 'Tümü' && ` · ${selectedCategory}`}
          </p>
        )}
      </div>

      {/* Makale Listesi */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPosts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.id}`}
              className="p-4 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl shadow-xs hover:shadow-md hover:border-indigo-500/40 dark:hover:border-indigo-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs flex-wrap gap-1">
                  <span className="px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/45 text-indigo-600 dark:text-indigo-400 font-bold rounded whitespace-nowrap">
                    {post.category}
                  </span>
                  <span className="text-slate-450 dark:text-slate-500 font-medium">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-350 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </div>
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">⏱️ {post.readTime}</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Oku <span className="text-sm">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="py-12 sm:py-16 text-center bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl px-4">
          <span className="text-4xl">🔍</span>
          <h2 className="mt-4 font-bold text-slate-800 dark:text-slate-200">Aramanıza Uygun Makale Bulunamadı</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
            Farklı anahtar kelimeler aramayı deneyebilir veya kategori filtrelerini sıfırlayabilirsiniz.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('Tümü'); }}
            className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg cursor-pointer transition-colors"
          >
            Filtreleri Temizle
          </button>
        </div>
      )}
    </div>
  );
}
