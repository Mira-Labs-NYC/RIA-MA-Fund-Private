import { Rocket, Coins, Shield, Sparkle, BarChart3 } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

export const Slide01FundOverview: SlideDefinition = {
  type: 'content',
  title: 'Plan B | RIA M&A Fund I, LP',
  subtitle: 'Tokenized acquisition platform to scale Sector Analysts and next-wave RIAs',
  content: (
    <div className="space-y-10">
      <div className="rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 text-white px-8 py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/50 bg-blue-500/10 px-4 py-1 text-xs tracking-[0.3em] uppercase text-blue-200">
              <Sparkle size={14} /> Plan B · Confidential
            </div>
            <h3 className="text-3xl md:text-4xl font-light tracking-tight">
              $50K setup capital → $5M raise → $40M+ fintech exits
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Tokenized Delaware LP acquiring undervalued RIAs, layering fintech infrastructure, and exiting to crypto-fintech buyers at premium multiples.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center min-w-[260px]">
            <div className="rounded-lg border border-blue-500/40 bg-blue-500/10 px-6 py-5">
              <div className="text-xs uppercase tracking-widest text-blue-200 mb-2">Setup Capital</div>
              <div className="text-3xl font-light">$50K</div>
              <div className="text-xs text-blue-300 mt-2">Formation + tokenization</div>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-800/60 px-6 py-5">
              <div className="text-xs uppercase tracking-widest text-slate-300 mb-2">Target Raise</div>
              <div className="text-3xl font-light">$5M</div>
              <div className="text-xs text-slate-400 mt-2">Security token offering</div>
            </div>
            <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-6 py-5">
            <div className="text-xs uppercase tracking-widest text-emerald-200 mb-2">Fund Hold</div>
            <div className="text-3xl font-light">18-24m</div>
            <div className="text-xs text-emerald-200/80 mt-2">Compressed exit window</div>
            </div>
            <div className="rounded-lg border border-purple-500/40 bg-purple-500/10 px-6 py-5">
              <div className="text-xs uppercase tracking-widest text-purple-200 mb-2">Target MOIC</div>
              <div className="text-3xl font-light">8-10x</div>
              <div className="text-xs text-purple-200/80 mt-2">60-75% net IRR</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="text-blue-600" size={28} />
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Phase 01</div>
              <h4 className="text-lg font-semibold text-slate-900">Formation Sprint (Weeks 0-4)</h4>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• Delaware LP + management company</li>
            <li>• PPM, LPA, subscription docs finalized</li>
            <li>• Token framework on Plume (ERC-3643)</li>
            <li>• Banking, custody, audit partners onboarded</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Coins className="text-emerald-600" size={28} />
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Phase 02</div>
              <h4 className="text-lg font-semibold text-slate-900">Capital Raise (Months 1-6)</h4>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• $5M STO with rolling quarterly closes</li>
            <li>• $25K minimum · 5,000,000 tokens @ $1</li>
            <li>• Investor onboarding via KYC/AML + accreditation</li>
            <li>• Quarterly reporting + tokenized distributions</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-slate-700" size={28} />
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Phase 03</div>
              <h4 className="text-lg font-semibold text-slate-900">Deployment & Exits</h4>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-600">
              <li>• $2M: Sector Analysts 85% acquisition</li>
              <li>• $1M: Lidya HFT tokenized strategies</li>
            <li>• $1M: Luxembourg regulated platform</li>
            <li>• $1M: Dry powder + fees + follow-ons</li>
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="text-blue-600" size={28} />
            <div>
              <h4 className="text-lg font-semibold text-slate-900">Priority Deals</h4>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">First 9-month deployment map</p>
            </div>
          </div>
          <div className="text-xs text-slate-500 uppercase tracking-[0.3em]">
            Value Creation Stack · TradFi + Crypto + Tokenization
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-5">
          <div className="rounded-lg border border-blue-200 bg-white p-5">
            <div className="text-sm font-semibold text-blue-900 mb-1">Sector Analysts, LLC</div>
            <p className="text-xs text-blue-600 uppercase tracking-[0.25em] mb-3">Acquisition · $2M</p>
            <ul className="space-y-1 text-sm text-slate-600">
              <li>• $309M AUM | 800 clients | CRD #169789</li>
              <li>• 18-month fintech exit at 5x revenue → $45M</li>
              <li>• LP share (85% ownership) ≈ $38.3M</li>
            </ul>
          </div>
          <div className="rounded-lg border border-purple-200 bg-white p-5">
            <div className="text-sm font-semibold text-purple-900 mb-1">Lidya HFT Token Strategies</div>
            <p className="text-xs text-purple-600 uppercase tracking-[0.25em] mb-3">Tokenization · $1M</p>
            <ul className="space-y-1 text-sm text-slate-600">
              <li>• Launch HFT vaults on Plume.org</li>
              <li>• 2/20 economics | $425K annual revenue</li>
              <li>• Provides yield product for fund tokens</li>
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-white p-5">
            <div className="text-sm font-semibold text-emerald-900 mb-1">Luxembourg Entity</div>
            <p className="text-xs text-emerald-600 uppercase tracking-[0.25em] mb-3">Cross-Border · $1M</p>
            <ul className="space-y-1 text-sm text-slate-600">
              <li>• EU regulatory passport + MiFID permissions</li>
              <li>• Gateway to institutional crypto mandates</li>
              <li>• Upside: 2x+ valuation with cleanup</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 uppercase tracking-[0.3em] text-center">
        Confidential · Private Placement · For Accredited Investors (Reg D 506(c))
      </div>
    </div>
  )
};
