"use client"

import Head from 'next/head'
import { useState, useEffect } from 'react'
import Profile from '../components/Profile'
import Academics from '../components/Academics'
import Skills from '../components/Skills'
import Goals from '../components/Goals'

export default function Home() {
  const [activeTab, setActiveTab] = useState('profile')
  const [theme, setTheme] = useState('light')

  // Apply the theme class to the body element
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'}`}>
      <Head>
        <title>My Personal Dashboard</title>
        <meta name="description" content="My personal dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className={`rounded-lg shadow-md p-6 mb-8 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
          <div className="flex justify-between items-center mb-4">
            <h1 className={`text-3xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>My Personal Dashboard</h1>
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-md ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-700 text-white'}`}
            >
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
          <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>
            Welcome to my personal dashboard showcasing my academic and professional information.
          </p>
        </div>

        <div className={`rounded-lg shadow-md p-6 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'profile' ? (theme === 'light' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-blue-400 border-b-2 border-blue-400') : (theme === 'light' ? 'text-gray-500 hover:text-gray-700' : 'text-gray-400 hover:text-gray-200')}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'academics' ? (theme === 'light' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-blue-400 border-b-2 border-blue-400') : (theme === 'light' ? 'text-gray-500 hover:text-gray-700' : 'text-gray-400 hover:text-gray-200')}`}
              onClick={() => setActiveTab('academics')}
            >
              Academics/Experience
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'skills' ? (theme === 'light' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-blue-400 border-b-2 border-blue-400') : (theme === 'light' ? 'text-gray-500 hover:text-gray-700' : 'text-gray-400 hover:text-gray-200')}`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'goals' ? (theme === 'light' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-blue-400 border-b-2 border-blue-400') : (theme === 'light' ? 'text-gray-500 hover:text-gray-700' : 'text-gray-400 hover:text-gray-200')}`}
              onClick={() => setActiveTab('goals')}
            >
              Goals
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'profile' && <Profile theme={theme} />}
            {activeTab === 'academics' && <Academics theme={theme} />}
            {activeTab === 'skills' && <Skills theme={theme} />}
            {activeTab === 'goals' && <Goals theme={theme} />}
          </div>
        </div>
      </main>
    </div>
  )
}
