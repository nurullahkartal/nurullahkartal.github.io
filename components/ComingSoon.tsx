import React from 'react';

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#030305] overflow-hidden text-white selection:bg-cyan-500/30">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      <div className="relative z-10 mx-4">
        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 shadow-2xl max-w-lg w-full text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-20 h-20 bg-black rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(0,242,234,0.3)]">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">NK</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">Nurullah Kartal</h1>
          <p className="text-cyan-400 text-sm tracking-widest uppercase mb-6">Full Stack & AI Engineer</p>
          <p className="text-gray-400 text-lg mb-8">Geleceği inşa ediyorum.<br/>Çok yakında yayındayım.</p>
          <div className="mt-12 text-sm text-gray-600 font-mono">System Status: <span className="text-green-500 animate-pulse">Building...</span></div>
        </div>
      </div>
    </div>
  );
}