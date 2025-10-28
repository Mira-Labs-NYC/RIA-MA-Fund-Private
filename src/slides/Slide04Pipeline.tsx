import { Target, DollarSign, TrendingUp, Calendar } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

export const Slide04Pipeline: SlideDefinition = {
  type: 'content',
  title: 'Acquisition Pipeline',
  subtitle: '$5M deployed across 3-5 strategic acquisitions over 12 months',
  content: (
    <div className="space-y-8">
      {/* Priority Deal: Sector Analysts */}
      <div className="border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg relative">
        <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-2 rounded font-bold uppercase tracking-wide text-sm">
          Priority #1 - Ready to Close
        </div>
        <div className="mt-4 grid grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-blue-600" size={40} />
              <div>
                <h3 className="text-2xl font-semibold text-blue-900">Sector Analysts, LLC</h3>
                <div className="text-sm text-blue-700">SEC-Registered RIA | CRD #169789</div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex justify-between">
                <span>AUM:</span>
                <span className="font-semibold">$309M</span>
              </div>
              <div className="flex justify-between">
                <span>Clients:</span>
                <span className="font-semibold">800</span>
              </div>
              <div className="flex justify-between">
                <span>Revenue (current):</span>
                <span className="font-semibold">$3M/year</span>
              </div>
              <div className="flex justify-between">
                <span>EBITDA Margin:</span>
                <span className="font-semibold">10%</span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-blue-900 mb-3">Investment Terms</div>
            <div className="space-y-2 text-sm">
              <div className="bg-white p-3 rounded border border-blue-200">
                <div className="font-semibold text-slate-900 mb-1">Fund Investment: $2.0M</div>
                <div className="text-xs text-slate-600">For 85% equity stake</div>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200">
                <div className="font-semibold text-slate-900 mb-1">Founders: Keep 15%</div>
                <div className="text-xs text-slate-600">Plus $1M setup capital (bonus)</div>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200">
                <div className="font-semibold text-slate-900 mb-1">Hold Period: 24 months</div>
                <div className="text-xs text-slate-600">Exit to fintech buyer</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-blue-900 mb-3">Value Creation Plan</div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-white flex-shrink-0 text-[10px]">1</div>
                <div><strong>Month 1-12:</strong> Build tech platform (BNY Mellon, Lydia HFT, client portal)</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-white flex-shrink-0 text-[10px]">2</div>
                <div><strong>Month 13-24:</strong> Launch crypto (BNY Digital, Plume.org), scale AUM 3x</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-white flex-shrink-0 text-[10px]">3</div>
                <div><strong>Month 24-28:</strong> Exit to fintech at 5x revenue = $45M valuation</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center text-white flex-shrink-0 text-[10px]">✓</div>
                <div><strong>Fund Proceeds:</strong> $38.3M (85% stake) = 19.2x return on $2M</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Deal 2: Lydia HFT */}
      <div className="grid grid-cols-2 gap-6">
        <div className="border border-purple-300 bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="text-purple-600" size={32} />
            <div>
              <h3 className="text-xl font-semibold text-purple-900">Lydia HFT Tokenized Fund</h3>
              <div className="text-sm text-purple-700">Standalone Trading Strategy Fund</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-xs text-slate-600 mb-1">Fund Investment</div>
                <div className="font-semibold text-purple-900">$1.0M</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Strategy</div>
                <div className="font-semibold text-purple-900">HFT + Alpha</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Target AUM</div>
                <div className="font-semibold text-purple-900">$10M (Year 1)</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Annual Revenue</div>
                <div className="font-semibold text-purple-900">$425K+</div>
              </div>
            </div>
            <div className="bg-white p-3 rounded border border-purple-200 text-xs">
              <div className="font-semibold text-purple-900 mb-2">Value Proposition</div>
              <ul className="space-y-1 text-slate-700">
                <li>• Tokenize HFT strategies via Plume.org</li>
                <li>• Offer to Sector Analysts clients first</li>
                <li>• 2% management + 20% performance fees</li>
                <li>• Stand-alone asset (sellable separately)</li>
                <li>• 43% ROI annually on fund investment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Deal 3: Lux Entity */}
        <div className="border border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="text-green-600" size={32} />
            <div>
              <h3 className="text-xl font-semibold text-green-900">Luxembourg Entity</h3>
              <div className="text-sm text-green-700">EU Financial Services License</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-xs text-slate-600 mb-1">Fund Investment</div>
                <div className="font-semibold text-green-900">$1.0M</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Status</div>
                <div className="font-semibold text-orange-600">Pending DD</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">License Type</div>
                <div className="font-semibold text-green-900">EU FS</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Timeline</div>
                <div className="font-semibold text-green-900">Q3 Close</div>
              </div>
            </div>
            <div className="bg-white p-3 rounded border border-green-200 text-xs">
              <div className="font-semibold text-green-900 mb-2">Strategic Rationale</div>
              <ul className="space-y-1 text-slate-700">
                <li>• EU regulatory license (valuable asset)</li>
                <li>• Cross-border distribution capability</li>
                <li>• Crypto-friendly jurisdiction</li>
                <li>• Synergies with Sector Analysts (EU clients)</li>
                <li>• Due diligence: Documents/DD folder review</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline Deals */}
      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Calendar className="text-slate-600" size={24} />
          Additional Pipeline ($1.5M Reserve)
        </h3>
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="bg-white p-4 rounded border-l-4 border-blue-500">
            <div className="font-semibold text-slate-900 mb-2">Small RIAs</div>
            <div className="text-xs text-slate-600 mb-3">$100-500M AUM</div>
            <ul className="text-xs text-slate-600 space-y-1">
              <li>• Succession situations</li>
              <li>• 2-3x revenue multiples</li>
              <li>• Bolt-on acquisitions</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-purple-500">
            <div className="font-semibold text-slate-900 mb-2">Wealth Tech</div>
            <div className="text-xs text-slate-600 mb-3">SaaS platforms</div>
            <ul className="text-xs text-slate-600 space-y-1">
              <li>• Client portal tech</li>
              <li>• Compliance tools</li>
              <li>• Portfolio analytics</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <div className="font-semibold text-slate-900 mb-2">Distressed Assets</div>
            <div className="text-xs text-slate-600 mb-3">Below-market deals</div>
            <ul className="text-xs text-slate-600 space-y-1">
              <li>• Regulatory issues</li>
              <li>• Forced sales</li>
              <li>• Opportunistic pricing</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-orange-500">
            <div className="font-semibold text-slate-900 mb-2">Follow-ons</div>
            <div className="text-xs text-slate-600 mb-3">Portfolio support</div>
            <ul className="text-xs text-slate-600 space-y-1">
              <li>• Add-on capital</li>
              <li>• Growth investments</li>
              <li>• M&A within portfolio</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Deployment Timeline */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6 rounded-lg">
        <h3 className="text-xl font-light mb-4 text-center">12-Month Deployment Schedule</h3>
        <div className="grid grid-cols-4 gap-4 text-center text-sm">
          <div>
            <div className="bg-blue-600 rounded py-3 mb-2 font-semibold">Q1 2026</div>
            <div className="text-blue-200 mb-2">Sector Analysts</div>
            <div className="text-3xl font-light">$2.0M</div>
          </div>
          <div>
            <div className="bg-purple-600 rounded py-3 mb-2 font-semibold">Q2 2026</div>
            <div className="text-purple-200 mb-2">Lydia HFT Fund</div>
            <div className="text-3xl font-light">$1.0M</div>
          </div>
          <div>
            <div className="bg-green-600 rounded py-3 mb-2 font-semibold">Q3 2026</div>
            <div className="text-green-200 mb-2">Lux Entity</div>
            <div className="text-3xl font-light">$1.0M</div>
          </div>
          <div>
            <div className="bg-orange-600 rounded py-3 mb-2 font-semibold">Q4 2026</div>
            <div className="text-orange-200 mb-2">Pipeline + Reserve</div>
            <div className="text-3xl font-light">$1.0M</div>
          </div>
        </div>
      </div>
    </div>
  )
};
