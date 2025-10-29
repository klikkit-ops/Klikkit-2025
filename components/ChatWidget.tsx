'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)

  useEffect(() => {
    // Initialize with welcome message
    if (messages.length === 0) {
      setMessages([{
        id: '1',
        text: "Hi! I'm Klikkit's AI assistant. I can help you choose the right service tier for your business. What can I help you with today?",
        isUser: false,
        timestamp: new Date()
      }])
    }
  }, [messages.length])

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          sessionId: sessionId
        }),
      })

      const data = await response.json()

      if (data.sessionId) {
        setSessionId(data.sessionId)
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        isUser: false,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-colors z-50"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-primary-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Klikkit Assistant</h3>
              <p className="text-sm text-primary-100">How can I help you?</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-100 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.isUser
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
