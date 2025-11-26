
import React, { useState } from 'react';
import { BLOG_POSTS } from '../../constants';
import { ChevronLeft, Clock, Calendar, Tag, BookOpen } from 'lucide-react';

export const Blog: React.FC = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const activePost = selectedPostId ? BLOG_POSTS.find(p => p.id === selectedPostId) : null;

  return (
    <div className="h-full w-full flex bg-white text-gray-800 overflow-hidden">
      
      {/* Sidebar / List View */}
      <div className={`
        flex-col border-r border-gray-200 bg-gray-50
        ${activePost ? 'hidden sm:flex w-full sm:w-80' : 'flex w-full'}
      `}>
        <div className="p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
            <h2 className="text-xl font-bold flex items-center">
                <BookOpen size={20} className="mr-2 text-orange-500" />
                DevLog
            </h2>
            <p className="text-xs text-gray-500 mt-1">Thoughts on code & engineering</p>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {BLOG_POSTS.map(post => (
                <div 
                    key={post.id}
                    onClick={() => setSelectedPostId(post.id)}
                    className={`p-3 rounded-xl cursor-pointer transition-all ${selectedPostId === post.id ? 'bg-white shadow-md border-l-4 border-orange-500' : 'hover:bg-gray-100 border-l-4 border-transparent'}`}
                >
                    <div className="text-xs text-gray-400 mb-1">{post.date}</div>
                    <h3 className="font-bold text-sm mb-1 leading-tight">{post.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{post.preview}</p>
                    <div className="mt-2 flex items-center space-x-2">
                        <span className="px-2 py-0.5 bg-gray-200 rounded text-[10px] text-gray-600">{post.category}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Content View */}
      <div className={`
        flex-1 flex-col h-full overflow-y-auto bg-white relative
        ${activePost ? 'flex' : 'hidden sm:flex'}
      `}>
        {activePost ? (
            <div className="max-w-3xl mx-auto p-6 sm:p-10 animate-fade-in">
                <button 
                    onClick={() => setSelectedPostId(null)}
                    className="sm:hidden mb-4 flex items-center text-blue-500 text-sm font-medium"
                >
                    <ChevronLeft size={16} /> Back to posts
                </button>

                <div className="mb-6">
                    <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                        <span className="flex items-center"><Calendar size={12} className="mr-1" /> {activePost.date}</span>
                        <span className="flex items-center"><Clock size={12} className="mr-1" /> {activePost.readTime}</span>
                        <span className="flex items-center uppercase tracking-wider text-orange-500 font-bold bg-orange-50 px-2 py-0.5 rounded"><Tag size={10} className="mr-1" /> {activePost.category}</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">{activePost.title}</h1>
                </div>

                <div className="prose prose-sm sm:prose-base max-w-none text-gray-600 leading-relaxed">
                    <p>{activePost.content}</p>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Technical Challenges</h3>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-300 p-10 text-center">
                <BookOpen size={64} strokeWidth={1} className="mb-4" />
                <p className="text-lg">Select a post to start reading</p>
            </div>
        )}
      </div>
    </div>
  );
};