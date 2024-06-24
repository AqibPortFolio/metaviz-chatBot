import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ChatBox = ({onClose}) => {
    const [query, setQuery] = useState('');
    const [messages, setMessages] = useState([
        { author: 'AI', text: 'Hi, how can I help you today?' }
    ]);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { query };

        try {
            setLoading(true);
            const res = await axios.post('http://165.227.204.126:8000/chat', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const newMessage = { author: 'You', text: query };
            const botResponse = { author: 'AI', text: res.data.Answer };
            setMessages([...messages, newMessage, botResponse]);
            setQuery('');
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !loading) {
            handleSubmit(event);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
       
            <div className="fixed top-4 right-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[600px] overflow-hidden">
                <div className='text-black bg-white'>
                <button onClick={onClose} className=' float-end'>
                <i className="fa-solid fa-xmark fa-xl  hover:text-red-600" />
                </button>
                <h2 className="font-semibold text-lg tracking-tight mb-4 ">Metaviz AI ChatBot</h2></div>
                <div className="pr-4 h-[524px] overflow-y-auto flex flex-col">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex gap-3 my-4 text-gray-600 text-sm ${message.author === 'You' ? 'justify-end' : 'justify-start'}`}>
                            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                                <div className="rounded-full bg-gray-100 border p-1">
                                    <svg stroke="none" fill="black" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                                    </svg>
                                </div>
                            </span>
                            <p className="leading-relaxed"><strong>{message.author === 'You' ? 'You' : 'Metaviz AI ChatBot'}</strong>: {message.text}</p>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <div className="flex items-center pt-4">
                    <form onSubmit={handleSubmit} className="flex items-center justify-center w-full space-x-2">
                        <input
                            className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                            placeholder="Type your message"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button type="submit" className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2">
                            {loading ? <div className="loader">Sending....</div> : 'Send'}
                        </button>
                    </form>
                </div>
            </div>
       
    );
};

export default ChatBox;
