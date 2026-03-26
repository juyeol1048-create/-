import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  Settings, 
  LogOut, 
  Plus, 
  Search,
  MoreVertical,
  Edit2,
  Trash2,
  X,
  Image as ImageIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStorage } from '../lib/storage';
import { Project, Post } from '../types';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const { projects, posts, settings, saveProjects, savePosts, saveSettings } = useStorage();
  const navigate = useNavigate();

  const sidebarItems = [
    { id: 'dashboard', name: '대시보드', icon: LayoutDashboard },
    { id: 'portfolio', name: '포트폴리오 관리', icon: Briefcase },
    { id: 'posts', name: '게시글 관리', icon: FileText },
    { id: 'settings', name: '사이트 설정', icon: Settings },
  ];

  const handleDelete = (id: string) => {
    if (!confirm('정말로 삭제하시겠습니까?')) return;
    if (activeTab === 'portfolio') {
      saveProjects(projects.filter(p => p.id !== id));
    } else {
      savePosts(posts.filter(p => p.id !== id));
    }
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: any = Object.fromEntries(formData.entries());
    
    if (activeTab === 'portfolio') {
      const newProject: Project = {
        id: editingItem?.id || Date.now().toString(),
        title: data.title,
        category: data.category,
        description: data.description,
        imageUrl: data.imageUrl || `https://picsum.photos/seed/${Date.now()}/800/600`,
        createdAt: editingItem?.createdAt || Date.now(),
      };
      
      if (editingItem) {
        saveProjects(projects.map(p => p.id === editingItem.id ? newProject : p));
      } else {
        saveProjects([newProject, ...projects]);
      }
    } else if (activeTab === 'posts') {
      const newPost: Post = {
        id: editingItem?.id || Date.now().toString(),
        title: data.title,
        category: data.category,
        content: data.content,
        imageUrl: data.imageUrl || `https://picsum.photos/seed/${Date.now()}/800/600`,
        createdAt: editingItem?.createdAt || Date.now(),
      };
      
      if (editingItem) {
        savePosts(posts.map(p => p.id === editingItem.id ? newPost : p));
      } else {
        savePosts([newPost, ...posts]);
      }
    }
    
    setIsModalOpen(false);
    setEditingItem(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 p-6 flex flex-col sticky top-0 h-screen">
        <div className="mb-12">
          <h1 className="text-xl font-black tracking-tighter">
            ADMIN<span className="text-brand">P2013</span>
          </h1>
        </div>

        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-brand text-black' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => navigate('/login')}
          className="mt-auto flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-400/10 transition-all"
        >
          <LogOut className="w-4 h-4" />
          로그아웃
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-bold capitalize">{activeTab}</h2>
            <p className="text-gray-500 text-sm">관리자 시스템에 오신 것을 환영합니다.</p>
          </div>
          
          <div className="flex items-center gap-4">
            {(activeTab === 'portfolio' || activeTab === 'posts') && (
              <button 
                onClick={() => {
                  setEditingItem(null);
                  setIsModalOpen(true);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-brand text-black text-sm font-bold rounded-lg hover:bg-white transition-colors"
              >
                <Plus className="w-4 h-4" /> 새 항목 추가
              </button>
            )}
          </div>
        </header>

        {/* Content Area */}
        <div className="grid grid-cols-1 gap-6">
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: '총 프로젝트', value: projects.length, change: '최근 업데이트됨' },
                { label: '총 게시글', value: posts.length, change: '최근 업데이트됨' },
                { label: '문의 건수', value: '8', change: '신규 3건' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-6 rounded-2xl">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold mb-2">{stat.value}</p>
                  <p className="text-brand text-xs">{stat.change}</p>
                </div>
              ))}
            </div>
          )}

          {(activeTab === 'portfolio' || activeTab === 'posts') && (
            <div className="glass-card rounded-2xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-white/5 border-b border-white/5">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500">제목</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500">카테고리</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500">날짜</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500 text-right">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {(activeTab === 'portfolio' ? projects : posts).map((item: any) => (
                    <tr key={item.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={item.imageUrl} className="w-10 h-10 rounded object-cover bg-gray-800" referrerPolicy="no-referrer" />
                          <span className="font-medium">{item.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">{item.category}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button 
                            onClick={() => {
                              setEditingItem(item);
                              setIsModalOpen(true);
                            }}
                            className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-2xl space-y-8">
              <div className="glass-card p-8 rounded-2xl space-y-6">
                <h3 className="text-lg font-bold mb-4">기본 사이트 정보</h3>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data: any = Object.fromEntries(formData.entries());
                  saveSettings({
                    ...settings,
                    title: data.title,
                    description: data.description,
                    keywords: data.keywords,
                  });
                  alert('설정이 저장되었습니다.');
                }}>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">사이트 제목</label>
                    <input name="title" type="text" defaultValue={settings.title} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">사이트 설명</label>
                    <textarea name="description" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand resize-none" defaultValue={settings.description} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">키워드 (쉼표로 구분)</label>
                    <input name="keywords" type="text" defaultValue={settings.keywords} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand" />
                  </div>
                  <button type="submit" className="px-8 py-3 bg-brand text-black font-bold rounded-xl hover:bg-white transition-colors">
                    설정 저장
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Modal for Add/Edit */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass-card p-8 rounded-3xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">{editingItem ? '항목 수정' : '새 항목 추가'}</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form className="space-y-6" onSubmit={handleSave}>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">제목</label>
                  <input name="title" required defaultValue={editingItem?.title} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">카테고리</label>
                  <input name="category" required defaultValue={editingItem?.category} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">이미지 URL (선택사항)</label>
                  <div className="relative">
                    <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input name="imageUrl" defaultValue={editingItem?.imageUrl} className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-brand" placeholder="https://..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    {activeTab === 'portfolio' ? '설명' : '내용'}
                  </label>
                  <textarea 
                    name={activeTab === 'portfolio' ? 'description' : 'content'} 
                    required 
                    rows={4} 
                    defaultValue={activeTab === 'portfolio' ? editingItem?.description : editingItem?.content}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand resize-none" 
                  />
                </div>
                <button type="submit" className="w-full py-4 bg-brand text-black font-bold rounded-xl hover:bg-white transition-colors">
                  {editingItem ? '수정 완료' : '추가하기'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
