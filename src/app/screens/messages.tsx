import React, { useState } from 'react';
import { Search, Send, Paperclip, Smile, MoreVertical } from 'lucide-react';
import { Card } from '@/app/components/card';
import logoImage from 'figma:asset/fe8fb61b5c7d589bcf73e2db18f59c13bbe3cbfe.png';

interface Chat {
  id: string;
  influencer: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

interface Message {
  id: string;
  sender: 'me' | 'them';
  text: string;
  time: string;
}

const chats: Chat[] = [
  {
    id: '1',
    influencer: 'Нодира Рахимова',
    avatar: '👩‍💻',
    lastMessage: 'Звучит интересно! Когда можем обсудить детали?',
    time: '10:30',
    unread: 2,
    online: true,
  },
  {
    id: '2',
    influencer: 'Жасур Каримов',
    avatar: '👨‍🍳',
    lastMessage: 'Отправил портфолио с прошлыми работами',
    time: 'Вчера',
    unread: 0,
    online: false,
  },
  {
    id: '3',
    influencer: 'Дилноза Азимова',
    avatar: '👗',
    lastMessage: 'Спасибо за предложение!',
    time: '2д назад',
    unread: 0,
    online: true,
  },
  {
    id: '4',
    influencer: 'Малика Нурматова',
    avatar: '💄',
    lastMessage: 'Какой бюджет вы готовы предложить?',
    time: '3д назад',
    unread: 1,
    online: false,
  },
];

const mockMessages: Message[] = [
  {
    id: '1',
    sender: 'them',
    text: 'Привет! Спасибо за предложение о сотрудничестве',
    time: '10:15',
  },
  {
    id: '2',
    sender: 'me',
    text: 'Здравствуйте! Мы хотели бы обсудить интеграцию нашего продукта',
    time: '10:20',
  },
  {
    id: '3',
    sender: 'them',
    text: 'Звучит интересно! Когда можем обсудить детали?',
    time: '10:30',
  },
];

export const MessagesScreen: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = chats.filter(chat =>
    chat.influencer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedChat) {
    const chat = chats.find(c => c.id === selectedChat);
    
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-[#E2E8F0] px-6 py-4 flex items-center gap-3 shadow-sm">
          <button
            onClick={() => setSelectedChat(null)}
            className="text-[#0EA5E9] font-medium"
          >
            ← Назад
          </button>
          <div className="w-10 h-10 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-full flex items-center justify-center text-xl relative">
            {chat?.avatar}
            {chat?.online && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#10B981] rounded-full border-2 border-white" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-[#0F172A]">{chat?.influencer}</h3>
            <p className="text-xs text-[#64748B]">{chat?.online ? 'В сети' : 'Не в сети'}</p>
          </div>
          <button className="w-8 h-8 flex items-center justify-center">
            <MoreVertical size={20} className="text-[#64748B]" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 px-6 py-4 space-y-3 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 240px)' }}>
          {mockMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                  message.sender === 'me'
                    ? 'bg-[#0EA5E9] text-white'
                    : 'bg-white text-[#0F172A] border border-[#E2E8F0]'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span
                  className={`text-xs mt-1 block ${
                    message.sender === 'me' ? 'text-white/70' : 'text-[#94A3B8]'
                  }`}
                >
                  {message.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="bg-white border-t border-[#E2E8F0] px-6 py-4 pb-24">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center">
              <Paperclip size={20} className="text-[#64748B]" />
            </button>
            <input
              type="text"
              placeholder="Написать сообщение..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="flex-1 h-12 px-4 bg-[#F8F9FA] border-2 border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:border-[#0EA5E9] focus:outline-none"
            />
            <button className="w-10 h-10 flex items-center justify-center">
              <Smile size={20} className="text-[#64748B]" />
            </button>
            <button className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all">
              <Send size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-4 pb-24">
      {/* Header */}
      <div className="px-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <img src={logoImage} alt="Blogify" className="w-10 h-10" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#0F172A]">Сообщения</h2>
            <p className="text-sm text-[#64748B]">{chats.filter(c => c.unread > 0).length} непрочитанных</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
          <input
            type="text"
            placeholder="Поиск по сообщениям..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-white border-2 border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:border-[#0EA5E9] focus:outline-none"
          />
        </div>
      </div>

      {/* Chats list */}
      <div className="px-6 space-y-2">
        {filteredChats.map((chat) => (
          <Card
            key={chat.id}
            className="p-4 cursor-pointer hover:shadow-md transition-all active:scale-[0.99]"
            onClick={() => setSelectedChat(chat.id)}
          >
            <div className="flex items-start gap-3">
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-full flex items-center justify-center text-2xl">
                  {chat.avatar}
                </div>
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#10B981] rounded-full border-2 border-white" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-base font-semibold text-[#0F172A] truncate">{chat.influencer}</h3>
                  <span className="text-xs text-[#64748B] ml-2 flex-shrink-0">{chat.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#64748B] truncate flex-1">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <div className="ml-2 min-w-[20px] h-5 bg-[#0EA5E9] rounded-full flex items-center justify-center px-2">
                      <span className="text-xs text-white font-semibold">{chat.unread}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};