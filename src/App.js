import { useState } from 'react';
import logo from './fbi.svg'; // assuming this is your fbi.svg logo
import './App.css';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [disguise, setDisguise] = useState("Pirate Captain")
  const [conspiracy, setConspiracy] = useState("The moon is made of cheese")

  const generateConspiracy = () => {
    const subjects = ["Aliens", "Bigfoot", "The Illuminati", "Lizard People", "Time Travelers"]
    const actions = ["are controlling", "are secretly", "have infiltrated", "are living inside", "have replaced"]
    const targets = ["the government", "Hollywood", "your refrigerator", "the internet", "your neighbor's cat"]
    const newConspiracy = `${subjects[Math.floor(Math.random() * subjects.length)]} ${actions[Math.floor(Math.random() * actions.length)]} ${targets[Math.floor(Math.random() * targets.length)]}`
    setConspiracy(newConspiracy)
  }

  const generateDisguise = () => {
    const disguises = ["Elvis Impersonator", "Sentient Cactus", "Undercover Penguin", "Disco Ninja", "Quantum Physicist"]
    setDisguise(disguises[Math.floor(Math.random() * disguises.length)])
  }

  const handleClick = () => {
    setHasEntered(true);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      {!hasEntered ? (
        <div className="flex flex-col justify-center items-center">
          <img
            src={logo}
            alt="FBI logo"
            className="w-1/2 md:w-2/5 h-auto"
            onClick={handleClick}
          />
          <p className="text-slate-400 text-sm md:text-base absolute bottom-5">
            {window.innerWidth < 768 ? 'Touch to enter' : 'Click to enter'}
          </p>
        </div>
      ) : (
        <div className="w-full h-full">
          <div className='absolute bottom-0 w-full bg-gray-400 h-min py-1 flex justify-center text-xs md:text-base'>CA: 38V8tmzGfTUkrtYAMhV4Ma2nXEBeLRUPbFEuqR4Epump</div>
          <div className="flex h-screen bg-gray-950">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-950 border-r border-gray-600">
              <div className="flex items-center justify-center border-b border-gray-600">
                <img
                  src={logo}
                  alt="FBI logo"
                  className="w-3/5 p-6"
                  onClick={handleClick}
                />
              </div>
              <nav className="mt-6">
                <a className="flex items-center px-4 py-2 text-gray-300 bg-gray-400" href="#">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="mx-4 font-medium">Home</span>
                </a>
                <a className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="mx-4 font-medium">Cases</span>
                </a>
                <a href="https://t.me/AdogPortal" className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="mx-4 font-medium">Telegram</span>
                </a>
                <a href="https://x.com/aDOGsolana" className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="mx-4 font-medium">Twitter</span>
                </a>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Header */}
              <header className="flex items-center justify-between px-6 py-4 border-b border-gray-600">
                <div className="flex items-center">
                  <input className="w-64 px-4 py-2 text-gray-700 bg-gray-500 rounded-md focus:outline-none focus:ring" placeholder="Search..." type="search" />
                  <button className="ml-4 text-gray-600 hover:text-gray-900">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center">
                  <button className="mr-4 text-gray-600 hover:text-gray-900">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                  <div className="size-10 md:size-12 overflow-hidden rounded-full bg-gray-600">
                    <img src="/agent.jpg" alt="Agent Smith" className="w-full h-full object-cover" />
                  </div>
                </div>
              </header>

              {/* Dashboard Content */}
              <main className="flex-1 overflow-y-auto bg-gray-950 p-6">
                <h1 className="text-2xl font-semibold text-gray-300 mb-6">Welcome, Agent</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Current Case Overview */}
                  <div className="bg-gray-400 rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-2">Current Case</h2>
                    <p className="text-sm text-gray-800 mb-4">Operation MAGA</p>
                    <p className="text-sm text-gray-800 mb-4">
                      Operation MAGA was launched after the FBI uncovered a plot to transform American culture into a gay orgy. The mastermind behind this movement is a group of drag queens, TikTok influencers, and pop culture icons, determined to make the country more gay, with Pride parades, rainbow flags, and endless brunches.
                    </p>
                    <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-300 rounded-md hover:bg-gray-200">
                      View Case Details
                    </button>
                  </div>

                  {/* Recent Activities */}
                  <div className="bg-gray-400 rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
                    <div className="h-[200px] overflow-y-auto">
                      <ul className="space-y-4">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          <span className="text-sm">Interrogated suspect Elton John</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                          <span className="text-sm">Filed report on DJT</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                          <span className="text-sm">Attended briefing on new cyber threats</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                          <span className="text-sm">Flagged sus TikToks</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                          <span className="text-sm">Analyzed digital evidence from recent raid</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Quick Access Tools */}
                  <div className="bg-gray-400 rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Quick Access Tools</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring truncate">
                        Database Search
                      </button>
                      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring truncate">
                        Evidence Locker
                      </button>
                      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring truncate">
                        Communication Hub
                      </button>
                      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring truncate">
                        Forensic Tools
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-400 rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-2">Disguise of the Day</h2>
                    <p className="text-sm text-gray-800 mb-4">{disguise}</p>
                    <button
                      onClick={generateDisguise}
                      className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-300 rounded-md hover:bg-gray-200"
                    >
                      Generate New Disguise
                    </button>
                  </div>

                  <div className="bg-gray-400 rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-2">Conspiracy Generator</h2>
                    <p className="text-sm text-gray-800 mb-4">{conspiracy}</p>
                    <button
                      onClick={generateConspiracy}
                      className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-300 rounded-md hover:bg-gray-200"
                    >
                      Generate New Conspiracy
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;