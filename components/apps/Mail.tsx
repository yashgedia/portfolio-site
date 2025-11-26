
import React, { useState } from 'react';
import { Send, Paperclip, Inbox, Star, Send as SendIcon, File, AlertCircle, CheckCircle } from 'lucide-react';
import { useData } from '../../contexts/DataContext';

export const Mail: React.FC = () => {
  const { data } = useData();
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !body) return;

    setIsSending(true);
    // Simulate network delay
    setTimeout(() => {
        setIsSending(false);
        setSendStatus('success');
        setSubject('');
        setBody('');
        // Reset status after 3 seconds
        setTimeout(() => setSendStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="flex h-full w-full bg-white text-gray-800 overflow-hidden">
      {/* Sidebar */}
      <div className="w-48 bg-gray-50 border-r border-gray-200 flex-col hidden sm:flex">
        <div className="p-4 font-bold text-gray-400 text-xs uppercase tracking-wider">Mailboxes</div>
        <div className="flex-1 space-y-1 px-2">
            <div className="flex items-center px-3 py-2 bg-blue-500 text-white rounded-md text-sm font-medium">
                <Inbox size={16} className="mr-3" /> Inbox
            </div>
            <div className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-200 rounded-md text-sm font-medium cursor-default">
                <Star size={16} className="mr-3" /> VIP
            </div>
            <div className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-200 rounded-md text-sm font-medium cursor-default">
                <SendIcon size={16} className="mr-3" /> Sent
            </div>
            <div className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-200 rounded-md text-sm font-medium cursor-default">
                <File size={16} className="mr-3" /> Drafts
            </div>
        </div>
        <div className="p-4 text-xs text-gray-400 text-center">
            Updated Just Now
        </div>
      </div>

      {/* Composition Area */}
      <div className="flex-1 flex flex-col h-full relative">
        
        {/* Toolbar */}
        <div className="h-12 border-b border-gray-200 flex items-center px-4 justify-between bg-white">
            <div className="flex space-x-4">
                <button 
                    onClick={handleSend}
                    disabled={isSending || sendStatus === 'success'}
                    className={`flex items-center space-x-2 px-4 py-1.5 rounded-md transition-all ${
                        sendStatus === 'success' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-transparent hover:bg-gray-100 text-gray-600'
                    }`}
                >
                    {sendStatus === 'success' ? (
                        <><CheckCircle size={16} /> <span>Sent</span></>
                    ) : (
                        <><Send size={16} /> <span>{isSending ? 'Sending...' : 'Send'}</span></>
                    )}
                </button>
                <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md">
                    <Paperclip size={18} />
                </button>
            </div>
        </div>

        {/* Form */}
        <form className="flex-1 flex flex-col p-6 space-y-4 overflow-y-auto">
            <div className="border-b border-gray-100 pb-2 flex items-center">
                <span className="text-gray-400 w-16 text-sm font-medium">To:</span>
                <div className="flex items-center bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-sm">
                    <span className="font-medium mr-1">{data.name}</span>
                    <span className="opacity-60 text-xs">&lt;{data.contact.email}&gt;</span>
                </div>
            </div>
            
            <div className="border-b border-gray-100 pb-2 flex items-center">
                <span className="text-gray-400 w-16 text-sm font-medium">Cc:</span>
                <input type="text" className="flex-1 outline-none text-sm bg-transparent" placeholder="" />
            </div>

            <div className="border-b border-gray-100 pb-2 flex items-center">
                <span className="text-gray-400 w-16 text-sm font-medium">Subject:</span>
                <input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="flex-1 outline-none text-sm font-medium bg-transparent" 
                    placeholder="Project Inquiry..." 
                />
            </div>

            <textarea 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="flex-1 w-full resize-none outline-none text-sm leading-relaxed text-gray-700 mt-4 font-sans"
                placeholder="Write your message here..."
            />
        </form>

        {/* Notification Toast */}
        {sendStatus === 'success' && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 text-sm animate-fade-in-up">
                <CheckCircle size={16} className="text-green-400" />
                <span>Message sent successfully!</span>
            </div>
        )}
      </div>
    </div>
  );
};