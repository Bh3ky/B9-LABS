import React from 'react';

const VscodeVisual: React.FC = () => {
  return (
    <div className="relative rounded-2xl border border-purple-800/70 bg-neutral-950/80 shadow-[0_0_50px_rgba(147,51,234,0.18)] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/80 border-b border-neutral-800">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-[10px] text-neutral-400 tracking-widest uppercase">B9 Labs</div>
        <div className="w-10" />
      </div>

      <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900/60 border-b border-neutral-800 text-[11px] text-neutral-300">
        <span className="px-2 py-1 rounded-md bg-neutral-800/70 border border-neutral-700">platform.ts</span>
        <span className="px-2 py-1 rounded-md border border-transparent text-neutral-500">motion.tsx</span>
        <span className="px-2 py-1 rounded-md border border-transparent text-neutral-500">brand.ts</span>
      </div>

      <div className="grid grid-cols-[40px_180px_1fr] md:grid-cols-[48px_220px_1fr]">
        <div className="hidden sm:flex flex-col items-center py-4 border-r border-neutral-800 bg-neutral-950/70 text-neutral-500 text-xs space-y-5">
          <span className="w-4 h-4 rounded bg-neutral-700/70" />
          <span className="w-4 h-4 rounded bg-purple-600/70" />
          <span className="w-4 h-4 rounded bg-neutral-700/70" />
          <span className="w-4 h-4 rounded bg-neutral-700/70" />
        </div>

        <div className="hidden sm:block border-r border-neutral-800 bg-neutral-950/60">
          <div className="px-4 py-3 text-[10px] text-neutral-500 uppercase tracking-widest">Explorer</div>
          <div className="px-4 pb-4 space-y-2 text-xs text-neutral-300">
            <div className="text-neutral-500">/B9-LABS</div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span>systems</span>
            </div>
            <div className="ml-4 text-neutral-400">platform.ts</div>
            <div className="ml-4 text-neutral-400">builds.ts</div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>interfaces</span>
            </div>
            <div className="ml-4 text-neutral-400">motion.tsx</div>
            <div className="ml-4 text-neutral-400">brand.ts</div>
          </div>
        </div>

        <div className="min-h-[260px] sm:min-h-[340px] max-h-[420px] overflow-y-auto">
          <div className="px-4 py-3 text-[10px] text-neutral-500 uppercase tracking-widest border-b border-neutral-800 bg-neutral-950/40">
            platform.ts
          </div>
          <div className="px-4 py-4 text-sm text-neutral-200 font-mono leading-6">
            <div className="text-neutral-500">01</div>
            <div><span className="text-purple-300">export</span> <span className="text-neutral-100">const</span> platform = {'{'} </div>
            <div className="ml-4"><span className="text-blue-300">focus</span>: <span className="text-green-300">'distributed systems'</span>,</div>
            <div className="ml-4"><span className="text-blue-300">discipline</span>: <span className="text-green-300">'performance builds'</span>,</div>
            <div className="ml-4"><span className="text-blue-300">ethos</span>: <span className="text-green-300">'human-first tooling'</span>,</div>
            <div>{'}'}</div>
            <div className="mt-6 text-neutral-500">07</div>
            <div><span className="text-purple-300">export</span> <span className="text-neutral-100">const</span> products = [</div>
            <div className="ml-4 text-neutral-300">'Ops dashboards'</div>
            <div className="ml-4 text-neutral-300">'CI acceleration'</div>
            <div className="ml-4 text-neutral-300">'Design systems'</div>
            <div>]</div>
            <div className="mt-6 text-neutral-500">13</div>
            <div><span className="text-purple-300">export</span> <span className="text-neutral-100">const</span> status = <span className="text-green-300">'shipping'</span></div>
            <div className="mt-10 text-neutral-500">18</div>
            <div><span className="text-neutral-100">// Scroll to explore more</span></div>
            <div className="mt-4 text-neutral-500">22</div>
            <div><span className="text-purple-300">export</span> <span className="text-neutral-100">const</span> teams = [</div>
            <div className="ml-4 text-neutral-300">'Founders'</div>
            <div className="ml-4 text-neutral-300">'Builders'</div>
            <div className="ml-4 text-neutral-300">'Systems'</div>
            <div>]</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VscodeVisual;
