import { Calendar, CheckCircle2, Clock, Rocket } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

export const Slide04MultiCustodianRoadmap: SlideDefinition = {
  type: 'content',
  title: 'Multi-Custodian Roadmap',
  subtitle: 'Unified platform for TradFi and crypto assets across multiple custodians',
  content: (
    <div className="space-y-8">
      {/* Vision Statement */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8 rounded-lg border-l-4 border-blue-400">
        <div className="flex items-start gap-4">
          <Rocket className="text-blue-300 flex-shrink-0 mt-1" size={32} />
          <div>
            <h3 className="text-2xl font-light mb-3">Strategic Vision</h3>
            <p className="text-lg text-blue-100 leading-relaxed">
              Build a unified custody platform leveraging institutional-grade infrastructure (Schwab, BNY Mellon)
              integrated with innovative crypto platforms (Plume.org for RWA/tokenization) and advanced TradFi strategies
              (Lidya HFT). This enables clients to seamlessly manage traditional securities and digital assets while
              reducing counterparty risk and accessing best-in-class yield strategies across both ecosystems.
            </p>
          </div>
        </div>
      </div>

      {/* Implementation Roadmap */}
      <div className="space-y-6">
        <h3 className="text-2xl font-light text-slate-800 border-b-2 border-slate-300 pb-3">18-Month Implementation Timeline</h3>

        {/* Phase 1: Foundation (Months 1-3) */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-r-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-blue-700" size={24} />
            <div>
              <h4 className="text-xl font-semibold text-blue-900">Phase 1: Foundation Layer</h4>
              <div className="text-sm text-blue-700">Months 1-3 | Investment: $400K</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <div className="font-semibold text-blue-900 mb-3 text-sm uppercase tracking-wide">TradFi Infrastructure</div>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Onboard BNY Mellon as 2nd custodian (alongside existing Schwab)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Build custody aggregation API layer (Schwab + BNY Mellon)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Integrate Lidya HFT for enhanced TradFi yield strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Implement position reconciliation engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Build unified reporting dashboard (internal)</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-blue-900 mb-3 text-sm uppercase tracking-wide">Client Portal MVP</div>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Launch basic client portal (view-only access)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Real-time position and performance tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Document vault and statement archive</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Mobile-responsive design</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-blue-300">
            <div className="text-sm text-blue-700">
              <strong>Key Milestone:</strong> 50% of clients onboarded to portal | 2 custodians operational (Schwab + BNY Mellon)
            </div>
          </div>
        </div>

        {/* Phase 2: Crypto Integration (Months 4-9) */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded-r-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="text-purple-700" size={24} />
            <div>
              <h4 className="text-xl font-semibold text-purple-900">Phase 2: Crypto Asset Integration</h4>
              <div className="text-sm text-purple-700">Months 4-9 | Investment: $800K</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <div className="font-semibold text-purple-900 mb-3 text-sm uppercase tracking-wide">Crypto Custody Layer</div>
              <ul className="space-y-2 text-sm text-purple-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Onboard BNY Mellon Digital Assets (enterprise-grade tech infrastructure)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Integrate Plume.org for RWA tokenization and crypto strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Build crypto custody API integration (BNY + Plume)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Implement real-time crypto pricing feeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Compliance framework for digital assets (BSA/AML)</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-purple-900 mb-3 text-sm uppercase tracking-wide">Enhanced Portal Features</div>
              <ul className="space-y-2 text-sm text-purple-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Unified view of TradFi + crypto holdings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Client-initiated crypto buy/sell orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Tax lot accounting for digital assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Crypto portfolio rebalancing tools</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-purple-300">
            <div className="text-sm text-purple-700">
              <strong>Key Milestone:</strong> 20% of AUM includes digital assets | BNY Mellon + Plume.org integrated | Lidya HFT strategies active
            </div>
          </div>
        </div>

        {/* Phase 3: Advanced Features (Months 10-18) */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-100 border-l-4 border-emerald-600 rounded-r-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="text-emerald-700" size={24} />
            <div>
              <h4 className="text-xl font-semibold text-emerald-900">Phase 3: Advanced Capabilities</h4>
              <div className="text-sm text-emerald-700">Months 10-18 | Investment: $1.0M</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <div className="font-semibold text-emerald-900 mb-3 text-sm uppercase tracking-wide">Multi-Custodian Optimization</div>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Onboard 3rd and 4th custodians (traditional + crypto)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Automated custody allocation based on cost/risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Cross-custodian asset transfer engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Integrated treasury management (in-house)</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-emerald-900 mb-3 text-sm uppercase tracking-wide">Premium Features</div>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>DeFi yield strategies (via qualified custodians)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Tokenized securities platform (RWA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Advanced portfolio analytics & AI insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>White-label API for institutional clients</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-emerald-300">
            <div className="text-sm text-emerald-700">
              <strong>Key Milestone:</strong> 4+ custodians (Schwab, BNY Mellon, +2 additional) | Full Plume.org + Lidya HFT integration | $620M+ AUM | $6-9M annual revenue
            </div>
          </div>
        </div>
      </div>

      {/* Total Investment Summary */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 rounded-lg">
        <h3 className="text-xl font-light mb-6 border-b border-slate-700 pb-3">Total Investment & Returns</h3>
        <div className="grid grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-sm text-slate-400 uppercase tracking-wide mb-2">Total Investment</div>
            <div className="text-4xl font-light">$2.2M</div>
            <div className="text-xs text-slate-500 mt-1">Over 18 months</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-blue-400 uppercase tracking-wide mb-2">Revenue Increase</div>
            <div className="text-4xl font-light text-blue-300">$3-6M</div>
            <div className="text-xs text-blue-500 mt-1">Incremental annual</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-green-400 uppercase tracking-wide mb-2">ROI</div>
            <div className="text-4xl font-light text-green-300">230%+</div>
            <div className="text-xs text-green-500 mt-1">By month 18</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-purple-400 uppercase tracking-wide mb-2">Payback</div>
            <div className="text-4xl font-light text-purple-300">12-15mo</div>
            <div className="text-xs text-purple-500 mt-1">From launch</div>
          </div>
        </div>
      </div>
    </div>
  )
};
