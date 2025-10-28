import { DollarSign, ArrowRight, Target, Wallet } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

export const Slide02CapitalStructure: SlideDefinition = {
  type: 'content',
  title: 'Capital Structure & Deployment',
  subtitle: '$50K setup capital → $5M raise → $40M+ returns to LPs',
  content: (
    <div className="space-y-8">
      {/* Phase Overview */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-6 rounded-lg relative">
          <div className="absolute -top-3 left-4 bg-blue-500 px-3 py-1 text-xs font-bold uppercase tracking-wide rounded">
            Phase 1
          </div>
          <div className="mt-4">
            <DollarSign className="mb-4" size={40} />
            <div className="text-4xl font-light mb-2">$50K</div>
            <div className="text-sm uppercase tracking-wide text-blue-200 mb-4">Setup Capital</div>
            <div className="text-xs text-blue-100 space-y-1">
              <div>• Fund formation (Delaware LP)</div>
              <div>• Legal docs (PPM, LPA, Sub)</div>
              <div>• Tokenization (Plume.org)</div>
              <div>• Banking & custody setup</div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-700 text-xs text-blue-200">
              Timeline: 4-6 weeks
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 text-white p-6 rounded-lg relative">
          <div className="absolute -top-3 left-4 bg-purple-500 px-3 py-1 text-xs font-bold uppercase tracking-wide rounded">
            Phase 2
          </div>
          <div className="mt-4">
            <Target className="mb-4" size={40} />
            <div className="text-4xl font-light mb-2">$5M</div>
            <div className="text-sm uppercase tracking-wide text-purple-200 mb-4">Target Raise</div>
            <div className="text-xs text-purple-100 space-y-1">
              <div>• Security token offering</div>
              <div>• Rolling closes (quarterly)</div>
              <div>• $25K minimum investment</div>
              <div>• Accredited investors only</div>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-700 text-xs text-purple-200">
              Timeline: 3-12 months
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900 to-green-800 text-white p-6 rounded-lg relative">
          <div className="absolute -top-3 left-4 bg-emerald-500 px-3 py-1 text-xs font-bold uppercase tracking-wide rounded">
            Phase 3
          </div>
          <div className="mt-4">
            <Wallet className="mb-4" size={40} />
            <div className="text-4xl font-light mb-2">$40M+</div>
            <div className="text-sm uppercase tracking-wide text-green-200 mb-4">LP Returns</div>
            <div className="text-xs text-green-100 space-y-1">
              <div>• Portfolio exits (24-36mo)</div>
              <div>• 8-10x MOIC target</div>
              <div>• 60-75% IRR</div>
              <div>• Quarterly distributions</div>
            </div>
            <div className="mt-4 pt-4 border-t border-green-700 text-xs text-green-200">
              Timeline: 3-5 years
            </div>
          </div>
        </div>
      </div>

      {/* Setup Capital Breakdown */}
      <div className="border border-slate-200">
        <div className="bg-slate-900 text-white p-4">
          <h3 className="text-lg font-semibold">Phase 1: Setup Capital Allocation ($50,000)</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-3 text-left font-semibold text-slate-900">Category</th>
                    <th className="p-3 text-right font-semibold text-slate-900">Amount</th>
                    <th className="p-3 text-right font-semibold text-slate-900">%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-3">Legal Formation</td>
                    <td className="p-3 text-right font-semibold">$15,000</td>
                    <td className="p-3 text-right text-slate-600">30%</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-3">SEC/FINRA Compliance</td>
                    <td className="p-3 text-right font-semibold">$12,000</td>
                    <td className="p-3 text-right text-slate-600">24%</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-3">Tokenization Setup</td>
                    <td className="p-3 text-right font-semibold">$10,000</td>
                    <td className="p-3 text-right text-slate-600">20%</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-3">Banking & Custody</td>
                    <td className="p-3 text-right font-semibold">$5,000</td>
                    <td className="p-3 text-right text-slate-600">10%</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-3">Marketing Materials</td>
                    <td className="p-3 text-right font-semibold">$5,000</td>
                    <td className="p-3 text-right text-slate-600">10%</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold">Contingency</td>
                    <td className="p-3 text-right font-bold">$3,000</td>
                    <td className="p-3 text-right text-slate-600">6%</td>
                  </tr>
                </tbody>
                <tfoot className="bg-blue-50">
                  <tr>
                    <td className="p-3 font-bold text-blue-900">TOTAL</td>
                    <td className="p-3 text-right font-bold text-blue-900 text-lg">$50,000</td>
                    <td className="p-3 text-right font-bold text-blue-900">100%</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <div className="text-sm font-semibold text-blue-900 mb-2">Legal Formation ($15K)</div>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Delaware LP formation</li>
                  <li>• Limited Partnership Agreement (LPA)</li>
                  <li>• Private Placement Memorandum (PPM)</li>
                  <li>• Subscription documents</li>
                  <li>• Operating Agreement</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <div className="text-sm font-semibold text-purple-900 mb-2">Tokenization ($10K)</div>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Plume.org integration</li>
                  <li>• ERC-3643 security token deployment</li>
                  <li>• KYC/AML provider setup</li>
                  <li>• Smart contract audit</li>
                  <li>• Distribution automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* $5M Deployment Plan */}
      <div className="border border-slate-200">
        <div className="bg-slate-900 text-white p-4">
          <h3 className="text-lg font-semibold">Phase 2: Capital Deployment ($5,000,000)</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-4">
              {/* Tranche 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg border-l-4 border-blue-600">
                <div className="text-xs uppercase tracking-wide text-blue-700 mb-2">Tranche 1</div>
                <div className="text-3xl font-light text-blue-900 mb-1">$2.0M</div>
                <div className="text-sm font-semibold text-blue-800 mb-3">Sector Analysts</div>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• 85% equity stake</li>
                  <li>• $309M AUM</li>
                  <li>• 800 clients</li>
                  <li>• 24mo exit</li>
                </ul>
              </div>

              {/* Tranche 2 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg border-l-4 border-purple-600">
                <div className="text-xs uppercase tracking-wide text-purple-700 mb-2">Tranche 2</div>
                <div className="text-3xl font-light text-purple-900 mb-1">$1.0M</div>
                <div className="text-sm font-semibold text-purple-800 mb-3">Lydia HFT Fund</div>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Tokenized strategies</li>
                  <li>• Setup + capital</li>
                  <li>• $425K/year revenue</li>
                  <li>• Standalone asset</li>
                </ul>
              </div>

              {/* Tranche 3 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg border-l-4 border-green-600">
                <div className="text-xs uppercase tracking-wide text-green-700 mb-2">Tranche 3</div>
                <div className="text-3xl font-light text-green-900 mb-1">$1.0M</div>
                <div className="text-sm font-semibold text-green-800 mb-3">Lux Entity</div>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• EU license</li>
                  <li>• Cross-border</li>
                  <li>• Pending DD</li>
                  <li>• Strategic value</li>
                </ul>
              </div>

              {/* Tranche 4 */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg border-l-4 border-orange-600">
                <div className="text-xs uppercase tracking-wide text-orange-700 mb-2">Tranche 4</div>
                <div className="text-3xl font-light text-orange-900 mb-1">$0.5M</div>
                <div className="text-sm font-semibold text-orange-800 mb-3">Working Capital</div>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Operations</li>
                  <li>• Deal sourcing</li>
                  <li>• Due diligence</li>
                  <li>• Management</li>
                </ul>
              </div>

              {/* Tranche 5 */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-lg border-l-4 border-slate-600">
                <div className="text-xs uppercase tracking-wide text-slate-700 mb-2">Tranche 5</div>
                <div className="text-3xl font-light text-slate-900 mb-1">$0.5M</div>
                <div className="text-sm font-semibold text-slate-800 mb-3">Reserve</div>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Follow-ons</li>
                  <li>• Opportunistic</li>
                  <li>• Add-ons</li>
                  <li>• Dry powder</li>
                </ul>
              </div>
            </div>

            {/* Deployment Timeline */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="text-sm font-semibold text-slate-900 mb-4">Deployment Timeline</div>
              <div className="grid grid-cols-4 gap-4 text-xs">
                <div className="text-center">
                  <div className="bg-blue-500 text-white rounded py-2 mb-2 font-semibold">Q1</div>
                  <div className="text-slate-700">Sector Analysts ($2M)</div>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500 text-white rounded py-2 mb-2 font-semibold">Q2</div>
                  <div className="text-slate-700">Lydia HFT ($1M)</div>
                </div>
                <div className="text-center">
                  <div className="bg-green-500 text-white rounded py-2 mb-2 font-semibold">Q3</div>
                  <div className="text-slate-700">Lux Entity ($1M)</div>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500 text-white rounded py-2 mb-2 font-semibold">Q4</div>
                  <div className="text-slate-700">Pipeline ($1M)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expected Returns */}
      <div className="bg-gradient-to-r from-emerald-900 via-green-900 to-teal-900 text-white p-8 rounded-lg">
        <h3 className="text-2xl font-light mb-6 text-center">Expected LP Returns</h3>
        <div className="grid grid-cols-5 gap-6 text-center">
          <div>
            <div className="text-xs uppercase tracking-wide text-emerald-300 mb-2">Investment</div>
            <div className="text-4xl font-light mb-1">$5M</div>
            <div className="text-xs text-emerald-200">LP Capital</div>
          </div>
          <div>
            <ArrowRight className="mx-auto text-green-400" size={40} />
            <div className="text-xs text-green-300 mt-2">3-5 years</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-green-300 mb-2">Returns</div>
            <div className="text-4xl font-light mb-1">$40M+</div>
            <div className="text-xs text-green-200">Net Proceeds</div>
          </div>
          <div>
            <ArrowRight className="mx-auto text-teal-400" size={40} />
            <div className="text-xs text-teal-300 mt-2">After fees</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-teal-300 mb-2">MOIC / IRR</div>
            <div className="text-4xl font-light mb-1">8-10x</div>
            <div className="text-xs text-teal-200">60-75% IRR</div>
          </div>
        </div>
      </div>
    </div>
  )
};
