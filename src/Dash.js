import React, { useState, useEffect } from 'react';
import { Radar, Crosshair, Shield, Zap, Radio, Target, Map, Fingerprint, Lock, Bitcoin, TrendingUp, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

export default function Dash() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 sm:p-6 md:p-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNmMGYwZjAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-50"></div>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        <div className="col-span-1 md:col-span-2 lg:col-span-3 border border-black p-4 rounded-lg relative">
            <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{currentTime.toLocaleTimeString()}</span>
                </div>
            </div>

            <h2 className="text-xl font-semibold mb-4 flex items-center">
                Operation Pump
            </h2>
            <div className="relative h-[425px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
                <iframe
                src="https://pump.fun/board"
                className="absolute inset-0 w-full h-full border-0 rounded-lg"
                title="Pump Fun Board"
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded border border-black">
                <p className="text-sm font-medium">Location: pump.fun</p>
                </div>
                <div className="absolute bottom-4 right-4">
                <a href="https://pump.fun/board" className="bg-white border border-black p-2 rounded flex items-center">
                    <Crosshair className="mr-2 h-4 w-4 inline" /> Track Market
                </a>
                </div>
            </div>
        </div>

        <div className="border border-black p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Fingerprint className="mr-2" /> Agent Profile
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-black">
              <img src="/a.png" alt="Agent Shiba" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-1">James Bond</h3>
            <p className="mb-4">Codename: 007</p>
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Mission Readiness</span>
                <span className="text-sm">92%</span>
              </div>
              <div className="w-full bg-blue-200 h-2 rounded">
                <div className="h-full w-[92%] bg-blue-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-black p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Shield className="mr-2" /> Multi-Wallet Security
          </h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold text-green-600">SECURE</p>
              <p className="text-sm">Last check: 1 minute ago</p>
            </div>
            <Lock className="w-12 h-12 text-green-500" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">BTC Wallet</span>
              <span className="text-green-600 border-green-600 border p-1 rounded">Protected</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">ETH Wallet</span>
              <span className="text-green-600 border-green-600 border p-1 rounded">Protected</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">SOL Wallet</span>
              <span className="text-green-600 border-green-600 border p-1 rounded">Protected</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">007 Wallet</span>
              <span className="text-red-500 border-red-500 border p-1 rounded">Classified</span>
            </div>
          </div>
        </div>

        <div className="border border-black p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingUp className="mr-2" /> Market Sentiment
          </h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold text-green-600">Bullish</p>
              <p className="text-sm">Last updated: 10 seconds ago</p>
            </div>
            <Zap className="w-12 h-12 text-green-500" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">BTC/USD</span>
              <span className="text-green-600">+3.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">ETH/USD</span>
              <span className="text-green-600">+5.0%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">SOL/USD</span>
              <span className="text-red-600">-2.1%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">007/USD</span>
              <span className="text-green-600">+10.0%</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Bitcoin className="mr-2" /> Crypto Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Bitcoin', symbol: 'BTC', amount: '1.5431', value: '$78,836.90', change: '+3.2%', color: 'orange' },
              { name: 'Ethereum', symbol: 'ETH', amount: '13.7652', value: '$41,283.44', change: '+5.7%', color: 'blue' },
              { name: 'Solana', symbol: 'SOL', amount: '133.8901', value: '$19,671.21', change: '-1.8%', color: 'purple' },
              { name: '007', symbol: '007', amount: '10M', value: '$10,000.00', change: '+10.0%', color: 'green' },
            ].map((coin) => (
              <div key={coin.symbol} className={`bg-white p-4 rounded-lg border border-black`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-700">{coin.name}</span>
                  <span className={`border-black border p-1 rounded`}>{coin.symbol}</span>
                </div>
                <div className="text-2xl font-bold mb-2">{coin.amount}</div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{coin.value}</span>
                  <span className={`text-${coin.change.startsWith('+') ? 'green' : 'red'}-600 flex items-center`}>
                    {coin.change.startsWith('+') ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                    {coin.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}