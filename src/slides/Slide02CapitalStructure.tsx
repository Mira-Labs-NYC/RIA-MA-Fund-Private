import { DollarSign, Target, Wallet, Briefcase, LineChart } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

export const Slide02CapitalStructure: SlideDefinition = {
  type: 'content',
  title: 'Capital Structure & Deployment',
  subtitle: 'Disciplined use of $50K setup capital → $5M tokenized raise → $40M+ exits',
  content: (
    <div className="space-y-10">
      {/* Phase Overview */}
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            phase: 'Phase 01',
            label: 'Formation Sprint',
            amount: '$50K',
            description: 'Delaware LP setup, documentation, tokenization rails ready in 3-4 weeks.',
            icon: <DollarSign className="text-blue-600" size={24} />,
            timeline: 'Weeks 0-4'
          },
          {
            phase: 'Phase 02',
            label: 'Tokenized Raise',
            amount: '$5M',
            description: 'Security token offering with monthly closes and $25K minimum.',
            icon: <Target className="text-emerald-600" size={24} />,
            timeline: 'Months 1-4'
          },
          {
            phase: 'Phase 03',
            label: 'Deployment & Exits',
            amount: '$40M+',
            description: 'Acquire, scale, and exit 3-5 assets at fintech multiples within 15-20 months.',
            icon: <Wallet className="text-slate-700" size={24} />,
            timeline: 'Months 4-20'
          }
        ].map(card => (
          <div
            key={card.phase}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5"
          >
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{card.phase}</div>
              <div className="rounded-full border border-slate-200 bg-slate-50 p-2">{card.icon}</div>
            </div>
            <div className="mt-4 text-3xl font-light text-slate-900">{card.amount}</div>
            <div className="mt-1 text-sm font-semibold text-slate-700">{card.label}</div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{card.description}</p>
            <div className="mt-4 border-t border-slate-200 pt-3 text-xs uppercase tracking-[0.25em] text-slate-400">
              Timeline · {card.timeline}
            </div>
          </div>
        ))}
      </div>

      {/* Setup Capital Breakdown */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
        <div className="border-b border-slate-200 bg-slate-900 px-5 py-4 text-white">
          <h3 className="text-lg font-semibold tracking-tight">Phase 01 · $50,000 Setup Capital Allocation</h3>
        </div>
        <div className="p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              {[
                ['Legal formation', 'Entity creation, LPA, PPM, operating handbook'],
                ['SEC / FINRA compliance', 'Regulatory counsel, filings, policies, supervisory framework'],
                ['Tokenization infrastructure', 'Plume.org integration, smart contracts, KYC/AML provider'],
                ['Banking & custody setup', 'Accounts, payment rails, custodial agreements'],
                ['Brand & investor materials', 'Private placement collateral, investor data room']
              ].map(([label, detail]) => (
                <div
                  key={label}
                  className="rounded-lg border border-slate-200 bg-slate-50/70 px-4 py-3"
                >
                  <div className="text-sm font-semibold text-slate-800">{label}</div>
                  <div className="text-xs text-slate-600 mt-1 leading-relaxed">{detail}</div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border border-slate-200 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-blue-500 mb-2">Legal Stack</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Delaware LP, GP management entity, Limited Partnership Agreement, Private Placement
                  Memorandum, subscription docs, and operating handbook ready for investor diligence.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-emerald-500 mb-2">Tokenization</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Plume.org integration, ERC-3643 compliant issuance, KYC/AML partner onboarding, smart
                  contract audit, and automated distribution workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capital Deployment */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
        <div className="border-b border-slate-200 bg-slate-900 px-5 py-4 text-white">
          <h3 className="text-lg font-semibold tracking-tight">Phase 02 · Deployment of $5,000,000 Capital</h3>
        </div>
        <div className="p-6 space-y-5">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                tranche: 'Tranche A',
                amount: '$2.0M',
                title: 'Sector Analysts Acquisition',
                bullets: ['85% equity stake', '$309M AUM', '18-month exit plan']
              },
              {
                tranche: 'Tranche B',
                amount: '$1.0M',
                title: 'Lidya HFT Token Strategies',
                bullets: ['Tokenize HFT vaults', '2/20 economics', '$425K recurring revenue']
              },
              {
                tranche: 'Tranche C',
                amount: '$1.0M',
                title: 'Luxembourg Entity',
                bullets: ['EU regulatory passport', 'MiFID permissions', 'Cross-border channel']
              },
              {
                tranche: 'Reserve',
                amount: '$1.0M',
                title: 'Dry Powder & Fees',
                bullets: ['Follow-on capital', 'Management fees', 'Working capital buffer']
              }
            ].map(block => (
              <div key={block.tranche} className="rounded-lg border border-slate-200 bg-slate-50/50 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{block.tranche}</div>
                <div className="mt-2 text-2xl font-light text-slate-900">{block.amount}</div>
                <div className="mt-1 text-sm font-semibold text-slate-700">{block.title}</div>
                <ul className="mt-3 space-y-1 text-xs text-slate-600">
                  {block.bullets.map(item => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <Briefcase className="text-slate-600" size={22} />
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Use of Proceeds</div>
                  <div className="text-sm text-slate-600">
                    60% operating acquisitions · 20% growth initiatives · 20% reserves & fees
                  </div>
                </div>
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Target blended entry multiple · 2.6x revenue
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capital Timeline */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <LineChart className="text-blue-600" size={22} />
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Capital Timeline</div>
              <div className="text-sm text-slate-600">
                Fund close by Month 6 · Deployment by Month 12 · Exits beginning Month 18
              </div>
            </div>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
            LP economics · 8% pref · 80/20 carry · quarterly reporting
          </div>
        </div>
      </div>
    </div>
  )
};
