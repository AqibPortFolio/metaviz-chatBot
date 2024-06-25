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
            const newMessage = { author: 'You', text: query };
            const loadingMessage = { author: 'AI', text: 'Please wait...' };
            setMessages((prevMessages) => [...prevMessages, newMessage, loadingMessage]);
            setQuery('');

            const res = await axios.post('http://165.227.204.126:8000/chat', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const botResponse = { author: 'AI', text: res.data.Answer };
            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages];
                updatedMessages[updatedMessages.length - 1] = botResponse;
                return updatedMessages;
            });
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
                <h2 className="font-semibold text-lg tracking-tight mb-4 ">Metaviz AI ChatBot</h2>
            </div>
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
                  
                  <button disabled={loading} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center" >
    {loading ? (
      <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
      </svg>
    ): (
        'Send'
    )}
</button>

                </form>
            </div>
        </div>
    );
};

export default ChatBox;
