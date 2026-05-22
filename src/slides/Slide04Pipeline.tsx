import { Target, TrendingUp, DollarSign, CalendarCheck } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

export const Slide04Pipeline: SlideDefinition = {
  type: 'content',
  title: 'Acquisition Pipeline',
  subtitle: '9-month deployment roadmap across core platform deal + strategic add-ons',
  content: (
    <div className="space-y-10">
      {/* Sector Analysts priority deal */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-slate-200 bg-slate-50 p-3">
              <Target className="text-blue-600" size={24} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-blue-500">Priority · Ready to Close</div>
              <h3 className="text-xl font-semibold text-slate-900">Sector Analysts, LLC · SEC Registered RIA</h3>
              <div className="text-sm text-slate-500">CRD #169789 · Tampa, FL · Established 2003</div>
            </div>
          </div>
          <div className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-blue-600">
            Investment · $2.0M for 85%
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-4">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Snapshot</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex justify-between">
                <span>AUM</span>
                <span className="font-medium text-slate-800">$309M</span>
              </li>
              <li className="flex justify-between">
                <span>Clients</span>
                <span className="font-medium text-slate-800">800</span>
              </li>
              <li className="flex justify-between">
                <span>Revenue</span>
                <span className="font-medium text-slate-800">$3M / yr</span>
              </li>
              <li className="flex justify-between">
                <span>EBITDA margin</span>
                <span className="font-medium text-slate-800">10%</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-4">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Transaction terms</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• $2.0M fund equity for 85% ownership</li>
              <li>• Founders retain 15% + $1M KPI earnout</li>
              <li>• 18-month hold, fintech exit at 5.0x revenue</li>
              <li>• LP proceeds ≈ $38.3M (19.2x on invested capital)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-4">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Value creation rhythm</div>
            <ol className="mt-3 space-y-2 text-sm text-slate-600 list-decimal pl-4">
              <li>Months 0-9 · Build multi-custodian + crypto infrastructure.</li>
              <li>Months 9-15 · Scale AUM 2.5-3x via tokenized strategies + cross-border reach.</li>
              <li>Months 15-18 · Run sale process to fintech/crypto buyer at 5-6x revenue.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Strategic investments */}
      <div className="grid gap-6 lg:grid-cols-2">
        {[
          {
            icon: <TrendingUp className="text-purple-600" size={22} />,
            tag: 'Tokenization · $1.0M',
            title: 'Lidya HFT Strategies',
            points: [
              'Launch HFT vaults on Plume as flagship yield product.',
              'Offer 2/20 economics; projected $425K recurring revenue.',
              'First distribution channel: Sector Analysts UHNW clients.'
            ]
          },
          {
            icon: <DollarSign className="text-emerald-600" size={22} />,
            tag: 'Cross-Border · $1.0M',
            title: 'Luxembourg Entity (Due Diligence)',
            points: [
              'Acquire EU MiFID platform with crypto-friendly posture.',
              'Enables EU institutional onboarding + passporting rights.',
              'Integrates with RIA tech stack for global coverage.'
            ]
          }
        ].map(card => (
          <div key={card.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-slate-200 bg-slate-50 p-3">{card.icon}</div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{card.tag}</div>
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {card.points.map(point => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Pipeline reserve */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <CalendarCheck className="text-slate-600" size={22} />
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Reserve Capital · $1.5M</div>
              <div className="text-sm text-slate-600">
                Pipeline of bolt-on RIAs, wealth-tech tools, and opportunistic distressed assets.
              </div>
            </div>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Deployment cadence · 3-4 closes within 9 months
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {[
            {
              title: 'Succession RIAs',
              detail: '$100-300M AUM',
              bullets: ['Roll-ups at 2-3x revenue', 'Owner retirement situations', 'Bolt-on synergy play']
            },
            {
              title: 'Wealth Tech Tools',
              detail: 'Client portal / regtech',
              bullets: ['Accelerate digital journey', 'Bundle into platform fee', 'White-label revenue']
            },
            {
              title: 'Distressed Assets',
              detail: 'Regulatory remediation',
              bullets: ['Acquire at discount', 'Leverage compliance team', 'Upside via cleanup']
            },
            {
              title: 'Strategic Partnerships',
              detail: 'Exchanges & custodians',
              bullets: ['Co-invest alongside crypto custodians', 'Create buy-side demand', 'Broaden exit optionality']
            }
          ].map(card => (
            <div key={card.title} className="rounded-lg border border-slate-200 bg-slate-50/60 p-4">
              <div className="text-sm font-semibold text-slate-800">{card.title}</div>
              <div className="text-xs uppercase tracking-[0.25em] text-slate-500 mt-1">{card.detail}</div>
              <ul className="mt-3 space-y-1 text-xs text-slate-600">
                {card.bullets.map(bullet => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};
