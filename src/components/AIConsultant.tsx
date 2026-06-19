import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, User, RefreshCw, Sparkles, HelpCircle } from 'lucide-react';
import { Language } from '../types';

interface AIConsultantProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
}

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export default function AIConsultant({ currentLang, onNavigate }: AIConsultantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  // Localized dictionary for AI Consultant
  const t = {
    title: {
      uz: 'CAMBELL AI Maslahatchi',
      zh: 'CAMBELL 智能AI顾问',
      en: 'CAMBELL AI Consultant'
    },
    subtitle: {
      uz: 'Onlayn eksport yordamchisi',
      zh: '在线出口及技术智囊',
      en: 'Online Export & Tech Intelligence'
    },
    welcome: {
      uz: "Assalomu alaykum! Lanzhou Guangtong (CAMBELL) New Energy rasmiy portaliga xush kelibsiz. Saytimizdagi avtobuslar, LTO tezkor zaryadlash, Andijon zavodi monitoringi yoki sotishdan keyingi xizmat haqida savolingiz bormi? Sizga yordam berishdan mamnunman!",
      zh: "您好！欢迎来到兰州广通（CAMBELL）新能源国合客车专栏。关于高规格城市客车、IP68钛酸锂（LTO）极速快充、安集延工厂的实时组装及物流监控，或24小时金牌售后保障，任何问题我都可以为您解答。",
      en: "Hello! Welcome to the Lanzhou Guangtong (CAMBELL) New Energy Vehicle Portal. Do you have questions about our Class3=17 electric buses, 15-min fast-charging LTO battery cells, Andijan Factory live telemetry, or global golden services? I am here to assist!"
    },
    placeholder: {
      uz: 'Savolingizni yozing...',
      zh: '请输入您的问题...',
      en: 'Type your message...'
    },
    errorMsg: {
      uz: 'Ulanishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko‘ring.',
      zh: '网络通信出现异常，请稍后再试。',
      en: 'A connection error occurred. Please try again later.'
    },
    suggestionsTitle: {
      uz: 'Tezkor savollar:',
      zh: '您可以这样问我：',
      en: 'Suggested Questions:'
    },
    suggestions: [
      {
        uz: 'LTO akkumulyatori afzalligi nimada?',
        zh: '钛酸锂（LTO）电池有什么技术优势？',
        en: 'What are the technical benefits of LTO battery?'
      },
      {
        uz: 'Andijon zavodini qanday kuzataman?',
        zh: '如何进入安集延工厂进行实时遥测监视？',
        en: 'How do I access Andijan Factory live monitors?'
      },
      {
        uz: 'Sotishdan keyingi kafolatlar qanday?',
        zh: '24小时“金牌双通道售后”怎么保障？',
        en: 'What is the corporate Golden Service guarantee?'
      },
      {
        uz: '12 metrlik GTQ6121BEV qanday avtobus?',
        zh: 'GTQ6121BEV 12米旗舰客车参数如何？',
        en: 'What are the specs of 12-meter GTQ6121BEV?'
      }
    ]
  };

  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sound notification or alert indicator
  useEffect(() => {
    if (!isOpen && chatHistory.length > 0) {
      setHasNewMessage(true);
    }
  }, [chatHistory.length, isOpen]);

  // Listen to header click event to open consultant panel
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-ai-consultant', handleOpen);
    return () => window.removeEventListener('open-ai-consultant', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false);
    }
    // Auto scroll when new messages arrive
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [chatHistory, isOpen, isLoading]);

  const handleSend = async (textToSend: string) => {
    const message = textToSend.trim();
    if (!message || isLoading) return;

    setInputText('');
    setIsLoading(true);

    // Update history locally with user action
    const updatedHistory: Message[] = [
      ...chatHistory,
      { role: 'user', parts: [{ text: message }] }
    ];
    setChatHistory(updatedHistory);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message,
          history: chatHistory
        })
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error || 'Server error');
      }

      const data = await response.json();
      setChatHistory([
        ...updatedHistory,
        { role: 'model', parts: [{ text: data.text }] }
      ]);
    } catch (err: any) {
      console.error('Chat API Error:', err);
      // Fallback response block
      const errMsg = err.message?.includes('GEMINI_API_KEY')
        ? err.message
        : (t.errorMsg[currentLang] || t.errorMsg['uz']);
      
      setChatHistory([
        ...updatedHistory,
        { role: 'model', parts: [{ text: errMsg }] }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestionText: string) => {
    handleSend(suggestionText);
  };

  const handleClearHistory = () => {
    setChatHistory([]);
  };

  // Safe translation picker
  const getVal = (obj: any) => obj[currentLang] || obj['uz'];

  return (
    <div className="fixed bottom-5 right-5 z-[100] font-sans antialiased text-left" id="ai-consultant-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="mb-4 w-[340px] sm:w-[380px] h-[520px] bg-white rounded-2xl shadow-[0_12px_45px_rgba(0,0,0,0.18)] border border-slate-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#014e96] text-white px-4 py-3.5 flex items-center justify-between relative overflow-hidden shrink-0">
              {/* Abstract decorative circles to elevate UI detail */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
              
              <div className="flex items-center gap-2.5 z-10">
                <div className="w-9 h-9 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                  <Bot className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight leading-4 flex items-center gap-1.5">
                    {getVal(t.title)}
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-ping"></span>
                  </h3>
                  <p className="text-[10px] text-blue-100 mt-0.5 font-medium">
                    {getVal(t.subtitle)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 z-10">
                {chatHistory.length > 0 && (
                  <button 
                    onClick={handleClearHistory} 
                    title="Yangi suhbat" 
                    className="p-1.5 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-1.5 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 shadow-inner">
              {/* Bot Welcome Bubble */}
              <div className="flex items-start gap-2 max-w-[85%]">
                <div className="w-7 h-7 rounded-lg bg-[#014e96]/10 text-[#014e96] flex items-center justify-center border border-[#014e96]/20 shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white px-3 py-2.5 rounded-2xl rounded-tl-sm border border-slate-200 shadow-sm text-xs leading-relaxed text-slate-800">
                  {getVal(t.welcome)}
                </div>
              </div>

              {/* Dynamic Chat messages */}
              {chatHistory.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start gap-2 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${
                    msg.role === 'user' 
                      ? 'bg-blue-50 text-blue-750 border-blue-200' 
                      : 'bg-[#014e96]/10 text-[#014e96] border-[#014e96]/20'
                  }`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`px-3 py-2.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-sm'
                      : 'bg-white text-slate-800 rounded-tl-sm border border-slate-200'
                  }`}>
                    {/* Render message formatting lines split up dynamically */}
                    <div className="whitespace-pre-wrap break-words prose prose-sm max-w-none">
                      {msg.parts[0].text}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="w-7 h-7 rounded-lg bg-[#014e96]/10 text-[#014e96] flex items-center justify-center border border-[#014e96]/20 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white px-3 py-2.5 rounded-2xl rounded-tl-sm border border-slate-250 shadow-sm flex items-center gap-1 text-slate-400">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}

              <div ref={scrollRef} />
            </div>

            {/* Suggested prompts helper bottom region */}
            {chatHistory.length === 0 && (
              <div className="px-4 py-3 bg-white border-t border-slate-100 shrink-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-2">
                  <HelpCircle className="w-3.5 h-3.5 text-[#014e96]" />
                  {getVal(t.suggestionsTitle)}
                </span>
                <div className="flex flex-col gap-1.5">
                  {t.suggestions.map((item, idx) => {
                    const phrase = item[currentLang] || item['uz'];
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(phrase)}
                        className="text-left text-xs bg-slate-50 hover:bg-slate-100 hover:text-blue-900 border border-slate-200 text-slate-700 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer font-medium"
                      >
                        {phrase}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input field */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(inputText); }}
              className="p-3 bg-white border-t border-slate-200 flex gap-2 items-center shrink-0"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={getVal(t.placeholder)}
                disabled={isLoading}
                className="flex-1 bg-slate-100 hover:bg-slate-50 focus:bg-white text-slate-900 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 outline-none focus:ring-1 focus:ring-blue-600 transition-all font-medium"
              />
              <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className={`p-2.5 rounded-xl flex items-center justify-center transition-all ${
                  inputText.trim() 
                    ? 'bg-[#014e96] hover:bg-blue-700 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher trigger circle button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-[#014e96] hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-[0_6px_25px_rgba(1,78,150,0.45)] hover:shadow-[0_8px_30px_rgba(1,78,150,0.6)] cursor-pointer transition-all border border-blue-400/30"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare className="w-6 h-6" />
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 absolute -top-1.5 -right-2 animate-pulse" />
              
              {/* Unread message notification circle dot badge */}
              {hasNewMessage && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
