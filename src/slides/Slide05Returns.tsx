import { DollarSign, Percent, Award, Layers } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

export const Slide05Returns: SlideDefinition = {
  type: 'content',
  title: 'Returns & Waterfall',
  subtitle: 'LP-first economics · 8% preferred return · 80/20 carry · quarterly distributions',
  content: (
    <div className="space-y-10">
      {/* Fee structure */}
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            icon: <Percent className="text-blue-600" size={22} />,
            title: 'Management fee',
            headline: '2.0% p.a. on committed capital',
            copy:
              'Covers operations, deal sourcing, compliance, risk, and investor relations. Fee steps down to invested capital after deployment.',
            breakdown: [
              ['Committed capital', '$5,000,000'],
              ['Annual fee (2%)', '$100,000'],
              ['Quarterly draw', '$25,000']
            ]
          },
          {
            icon: <Award className="text-emerald-600" size={22} />,
            title: 'Carried interest',
            headline: '20% carry after 8% preferred return',
            copy:
              '50% catch-up allows the GP to true-up after the LPs receive preferred return and capital back. Thereafter profits split 80/20.',
            breakdown: [
              ['Preferred hurdle', '8% IRR'],
              ['Catch-up split', '50% to GP until 20% net'],
              ['Ongoing split', '80% LP / 20% GP']
            ]
          }
        ].map(card => (
          <div key={card.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-slate-200 bg-slate-50 p-3">{card.icon}</div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{card.title}</div>
                <h3 className="text-lg font-semibold text-slate-900">{card.headline}</h3>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{card.copy}</p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50/60 p-4">
              <dl className="space-y-2 text-sm text-slate-700">
                {card.breakdown.map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <dt>{label}</dt>
                    <dd className="font-medium text-slate-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        ))}
      </div>

      {/* Waterfall example */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
        <div className="border-b border-slate-200 bg-slate-900 px-5 py-4 text-white">
          <h3 className="text-lg font-semibold tracking-tight">Illustrative waterfall · $5M invested → $20M exit (3-year hold)</h3>
        </div>
        <div className="p-6 space-y-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-[0.25em] text-slate-500">
                  <th className="py-2">Tier</th>
                  <th className="py-2 text-right">Distribution</th>
                  <th className="py-2 text-right">Cumulative</th>
                  <th className="py-2">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  ['Return of capital', '$5,000,000', '$5.0M', 'LPs receive original capital'],
                  ['Preferred return (8% IRR)', '$1,850,000', '$6.85M', 'Accrued over 3-year hold'],
                  ['GP catch-up (50%)', '$925,000', '$7.78M', 'Brings GP to 20% share'],
                  ['Remaining split · LP (80%)', '$9,780,000', '$17.56M', 'LP share of residual profits'],
                  ['Remaining split · GP (20%)', '$2,445,000', '$20.00M', 'GP carried interest']
                ].map(([tier, amount, cumulative, notes]) => (
                  <tr key={tier}>
                    <td className="py-3 font-medium text-slate-800">{tier}</td>
                    <td className="py-3 text-right text-slate-700">{amount}</td>
                    <td className="py-3 text-right text-slate-500">{cumulative}</td>
                    <td className="py-3 text-slate-600">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.3em] text-emerald-500">LP economics</div>
                <DollarSign className="text-emerald-600" size={18} />
              </div>
              <dl className="mt-3 space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <dt>Total LP proceeds</dt>
                  <dd className="font-medium text-slate-900">$14.78M</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Net MOIC</dt>
                  <dd className="font-medium text-emerald-600">2.96x</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Net IRR (3 years)</dt>
                  <dd className="font-medium text-emerald-600">39%</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.3em] text-blue-500">GP economics</div>
                <Layers className="text-blue-600" size={18} />
              </div>
              <dl className="mt-3 space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <dt>Carry + catch-up</dt>
                  <dd className="font-medium text-slate-900">$3.37M</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Management fees (3 yrs)</dt>
                  <dd className="font-medium text-slate-900">$0.30M</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Total GP compensation</dt>
                  <dd className="font-medium text-blue-600">$3.77M</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Scenario analysis */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
        <h3 className="text-lg font-semibold text-slate-900">LP net return scenarios</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-[0.25em] text-slate-500">
                <th className="pb-2">Scenario</th>
                <th className="pb-2 text-right">Exit value</th>
                <th className="pb-2 text-right">LP proceeds</th>
                <th className="pb-2 text-right">Net MOIC</th>
                <th className="pb-2 text-right">Net IRR (3 yr)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                ['Downside', '$27M', '$20.9M', '4.2x', '46%'],
                ['Base case', '$45M', '$33.6M', '6.7x', '72%'],
                ['Upside', '$54M', '$40.2M', '8.0x', '84%']
              ].map(([scenario, exit, proceeds, moic, irr]) => (
                <tr key={scenario}>
                  <td className="py-3 font-medium text-slate-800">{scenario}</td>
                  <td className="py-3 text-right text-slate-600">{exit}</td>
                  <td className="py-3 text-right text-slate-600">{proceeds}</td>
                  <td className="py-3 text-right font-medium text-slate-900">{moic}</td>
                  <td className="py-3 text-right font-medium text-slate-900">{irr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Assumptions: Sector Analysts exit multiple 5.0x revenue (base), Lidya HFT reaches $15M AUM by Month 18,
          Luxembourg entity valued at 2.0x investment upon remediation. Downside assumes fallback 3.0x RIA exit.
        </p>
      </div>
    </div>
  )
};
