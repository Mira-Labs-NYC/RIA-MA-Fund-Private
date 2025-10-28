import { DollarSign, Percent, Award } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

export const Slide05Returns: SlideDefinition = {
  type: 'content',
  title: 'Returns & Waterfall',
  subtitle: 'LP-friendly economics with 8% preferred return hurdle',
  content: (
    <div className="space-y-8">
      {/* Management Fees & Carry */}
      <div className="grid grid-cols-2 gap-6">
        <div className="border border-slate-200">
          <div className="bg-slate-900 text-white p-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Percent size={24} />
              Management Fee
            </h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="text-5xl font-light text-slate-900 mb-2">2.0%</div>
              <div className="text-sm text-slate-600">Per annum on committed capital</div>
            </div>
            <div className="bg-blue-50 p-4 rounded border border-blue-200">
              <div className="font-semibold text-blue-900 mb-3">Fee Calculation</div>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Committed Capital:</span>
                  <span className="font-semibold">$5,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Fee (2%):</span>
                  <span className="font-semibold text-blue-600">$100,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Quarterly Fee:</span>
                  <span className="font-semibold">$25,000</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-300 text-xs text-slate-600">
                <strong>Covers:</strong> Operations, deal sourcing, portfolio management, compliance, reporting
              </div>
            </div>
          </div>
        </div>

        <div className="border border-slate-200">
          <div className="bg-slate-900 text-white p-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Award size={24} />
              Carried Interest
            </h3>
          </div>
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="text-5xl font-light text-slate-900 mb-2">20%</div>
              <div className="text-sm text-slate-600">Of profits above 8% preferred return</div>
            </div>
            <div className="bg-purple-50 p-4 rounded border border-purple-200">
              <div className="font-semibold text-purple-900 mb-3">Carry Structure</div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex justify-between">
                  <span>Preferred Return (Hurdle):</span>
                  <span className="font-semibold text-purple-600">8% IRR</span>
                </li>
                <li className="flex justify-between">
                  <span>Catch-up:</span>
                  <span className="font-semibold">50%</span>
                </li>
                <li className="flex justify-between">
                  <span>GP Carry:</span>
                  <span className="font-semibold">20%</span>
                </li>
                <li className="flex justify-between">
                  <span>LP Share:</span>
                  <span className="font-semibold text-green-600">80%</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-purple-300 text-xs text-slate-600">
                <strong>LP-Friendly:</strong> GPs only earn carry after LPs receive 8% IRR + return of capital
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Waterfall Example */}
      <div className="border border-slate-200">
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-4">
          <h3 className="text-lg font-semibold">Waterfall Example: $5M Investment → $20M Exit (4 years)</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-3 text-left font-semibold text-slate-900">Waterfall Tier</th>
                  <th className="p-3 text-right font-semibold text-slate-900">Amount</th>
                  <th className="p-3 text-right font-semibold text-slate-900">Cumulative</th>
                  <th className="p-3 text-left font-semibold text-slate-900">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 bg-blue-50">
                  <td className="p-3 font-semibold text-blue-900">1. Return of Capital</td>
                  <td className="p-3 text-right font-semibold">$5,000,000</td>
                  <td className="p-3 text-right text-slate-600">$5.0M</td>
                  <td className="p-3 text-slate-700">LPs receive original investment back</td>
                </tr>
                <tr className="border-b border-slate-200 bg-purple-50">
                  <td className="p-3 font-semibold text-purple-900">2. Preferred Return (8%)</td>
                  <td className="p-3 text-right font-semibold">$1,850,000</td>
                  <td className="p-3 text-right text-slate-600">$6.85M</td>
                  <td className="p-3 text-slate-700">LPs receive 8% IRR over 4 years</td>
                </tr>
                <tr className="border-b border-slate-200 bg-orange-50">
                  <td className="p-3 font-semibold text-orange-900">3. GP Catch-up (50%)</td>
                  <td className="p-3 text-right font-semibold">$925,000</td>
                  <td className="p-3 text-right text-slate-600">$7.78M</td>
                  <td className="p-3 text-slate-700">GP catches up to 20% total carry</td>
                </tr>
                <tr className="border-b border-slate-200 bg-green-50">
                  <td className="p-3 font-semibold text-green-900">4. LP Split (80%)</td>
                  <td className="p-3 text-right font-semibold">$9,780,000</td>
                  <td className="p-3 text-right text-slate-600">$17.56M</td>
                  <td className="p-3 text-slate-700">LPs receive 80% of remaining profits</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">5. GP Split (20%)</td>
                  <td className="p-3 text-right font-semibold">$2,445,000</td>
                  <td className="p-3 text-right text-slate-600">$20.0M</td>
                  <td className="p-3 text-slate-700">GP receives 20% of remaining profits</td>
                </tr>
              </tbody>
              <tfoot className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
                <tr>
                  <td className="p-3 font-bold">TOTAL DISTRIBUTION</td>
                  <td className="p-3 text-right font-bold">$20,000,000</td>
                  <td className="p-3 text-right"></td>
                  <td className="p-3">100% of exit proceeds</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="text-green-600" size={32} />
                <div>
                  <div className="text-xs uppercase tracking-wide text-green-700">LP Returns</div>
                  <div className="text-3xl font-light text-green-900">$14.78M</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Total LP Proceeds:</span>
                  <span className="font-semibold">$14,780,000</span>
                </div>
                <div className="flex justify-between">
                  <span>LP Investment:</span>
                  <span className="font-semibold">$5,000,000</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-green-200">
                  <span className="font-semibold">LP Multiple (MOIC):</span>
                  <span className="text-2xl font-bold text-green-600">2.96x</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">LP IRR:</span>
                  <span className="text-2xl font-bold text-green-600">31%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-blue-600" size={32} />
                <div>
                  <div className="text-xs uppercase tracking-wide text-blue-700">GP Returns</div>
                  <div className="text-3xl font-light text-blue-900">$3.37M</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Catch-up:</span>
                  <span className="font-semibold">$925,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Carried Interest:</span>
                  <span className="font-semibold">$2,445,000</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-blue-200">
                  <span className="font-semibold">Total GP Carry:</span>
                  <span className="text-2xl font-bold text-blue-600">$3.37M</span>
                </div>
                <div className="text-xs text-slate-600 mt-3">
                  Plus management fees: $400K over 4 years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Return Scenarios */}
      <div className="border border-slate-200">
        <div className="bg-slate-50 p-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Target Return Scenarios (LP Net)</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-3 text-left font-semibold uppercase tracking-wide text-xs">Scenario</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">Exit Value</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">LP Proceeds</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">MOIC</th>
                  <th className="p-3 text-right font-semibold uppercase tracking-wide text-xs">IRR (4yr)</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold">Conservative</td>
                  <td className="p-3 text-right">$15M</td>
                  <td className="p-3 text-right">$11.7M</td>
                  <td className="p-3 text-right font-semibold">2.3x</td>
                  <td className="p-3 text-right font-semibold">23%</td>
                </tr>
                <tr className="border-b border-slate-200 bg-blue-50">
                  <td className="p-3 font-semibold">Base Case</td>
                  <td className="p-3 text-right">$40M</td>
                  <td className="p-3 text-right">$30.5M</td>
                  <td className="p-3 text-right font-semibold text-blue-600">6.1x</td>
                  <td className="p-3 text-right font-semibold text-blue-600">58%</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-3 font-semibold">Growth Case</td>
                  <td className="p-3 text-right">$50M</td>
                  <td className="p-3 text-right">$37.8M</td>
                  <td className="p-3 text-right font-semibold text-green-600">7.6x</td>
                  <td className="p-3 text-right font-semibold text-green-600">66%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            <div><strong>Assumptions:</strong></div>
            <div>• Conservative: Sector Analysts exits at 3x revenue, other deals flat</div>
            <div>• Base Case: Sector Analysts exits at 5x revenue ($45M), Lydia HFT scales, Lux entity 2x</div>
            <div>• Growth Case: Sector Analysts exits at 6x revenue ($54M), full portfolio appreciation</div>
          </div>
        </div>
      </div>

      {/* LP Benefits Summary */}
      <div className="bg-gradient-to-r from-emerald-900 via-green-900 to-teal-900 text-white p-8 rounded-lg">
        <h3 className="text-2xl font-light mb-6 text-center">LP Investment Summary</h3>
        <div className="grid grid-cols-5 gap-6 text-center">
          <div>
            <div className="text-xs uppercase tracking-wide text-emerald-300 mb-2">Minimum</div>
            <div className="text-4xl font-light mb-1">$25K</div>
            <div className="text-xs text-emerald-200">25,000 tokens</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-green-300 mb-2">Target MOIC</div>
            <div className="text-4xl font-light mb-1">8-10x</div>
            <div className="text-xs text-green-200">Over 3-5 years</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-teal-300 mb-2">Target IRR</div>
            <div className="text-4xl font-light mb-1">60-75%</div>
            <div className="text-xs text-teal-200">Net of fees</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-cyan-300 mb-2">Distributions</div>
            <div className="text-4xl font-light mb-1">Q1-Q4</div>
            <div className="text-xs text-cyan-200">Automated</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-blue-300 mb-2">Liquidity</div>
            <div className="text-4xl font-light mb-1">12mo+</div>
            <div className="text-xs text-blue-200">Secondary market</div>
          </div>
        </div>
      </div>
    </div>
  )
};
