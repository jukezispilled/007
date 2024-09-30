import React, { useState, useEffect } from 'react';
import logo from './m.png'; // assuming this is your FBI logo
import './App.css';
import Dash from './Dash';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 100 / 20; // Increase by 100% over 30 steps (3 seconds)
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-screen w-screen">
      {loading ? (
        <div className="h-full w-full flex flex-col justify-center items-center bg-white">
          <img
            src={logo}
            alt="FBI logo"
            className="size-[275px] md:size-[375px] h-auto mb-8"
          />
          <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-black transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      ) : (
        <Dash />
      )}
    </div>
  );
};

export default App;