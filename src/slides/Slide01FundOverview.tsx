import { Rocket, TrendingUp, Coins, Shield } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

export const Slide01FundOverview: SlideDefinition = {
  type: 'title',
  title: 'RIA M&A Fund I, LP',
  subtitle: 'Tokenized Investment Vehicle for Financial Services Acquisition',
  content: (
    <div className="space-y-12">
      {/* Hero Statement */}
      <div className="text-center space-y-6">
        <div className="text-6xl font-light text-slate-900">
          $50K → $5M → $40M+
        </div>
        <div className="text-2xl text-slate-600 max-w-4xl mx-auto">
          Tokenized fund acquiring undervalued RIAs, transforming them into fintech platforms,
          and exiting at 2-3x value creation multiples
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-4 gap-8">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
          <Rocket className="mx-auto mb-4 text-blue-600" size={48} />
          <div className="text-3xl font-light text-blue-900 mb-2">$50K</div>
          <div className="text-sm uppercase tracking-wide text-blue-700">Setup Capital</div>
          <div className="text-xs text-blue-600 mt-2">Fund Formation + Tokenization</div>
        </div>

        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
          <Coins className="mx-auto mb-4 text-purple-600" size={48} />
          <div className="text-3xl font-light text-purple-900 mb-2">$5M</div>
          <div className="text-sm uppercase tracking-wide text-purple-700">Target Raise</div>
          <div className="text-xs text-purple-600 mt-2">Via Security Token Offering</div>
        </div>

        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
          <TrendingUp className="mx-auto mb-4 text-green-600" size={48} />
          <div className="text-3xl font-light text-green-900 mb-2">8-10x</div>
          <div className="text-sm uppercase tracking-wide text-green-700">Target MOIC</div>
          <div className="text-xs text-green-600 mt-2">60-75% IRR over 3-5 years</div>
        </div>

        <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
          <Shield className="mx-auto mb-4 text-orange-600" size={48} />
          <div className="text-3xl font-light text-orange-900 mb-2">3-5</div>
          <div className="text-sm uppercase tracking-wide text-orange-700">Target Deals</div>
          <div className="text-xs text-orange-600 mt-2">RIAs + Fintech + Strategies</div>
        </div>
      </div>

      {/* Investment Strategy */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white p-8 rounded-lg">
        <h3 className="text-2xl font-light mb-6 text-center">Investment Strategy</h3>
        <div className="grid grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-semibold text-blue-300 mb-3">1. Acquire Undervalued RIAs</div>
            <ul className="space-y-2 text-blue-100">
              <li>• Buy at 2-3x revenue multiples</li>
              <li>• Target: $200-500M AUM firms</li>
              <li>• Founder succession opportunities</li>
              <li>• Strong client retention (85%+)</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-purple-300 mb-3">2. Build Tech Platform</div>
            <ul className="space-y-2 text-purple-100">
              <li>• Multi-custodian infrastructure</li>
              <li>• Crypto/DeFi integration (Plume.org)</li>
              <li>• Client portal + automation</li>
              <li>• Tokenize strategies (Lydia HFT)</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-green-300 mb-3">3. Exit at Fintech Multiples</div>
            <ul className="space-y-2 text-green-100">
              <li>• Sell at 5-7x revenue (fintech)</li>
              <li>• Buyers: Coinbase, SoFi, custodians</li>
              <li>• 24-36 month hold period</li>
              <li>• 2-3x value creation arbitrage</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tokenization Advantage */}
      <div className="border-2 border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-lg">
        <div className="flex items-start gap-6">
          <Coins className="text-emerald-600 flex-shrink-0" size={64} />
          <div>
            <h3 className="text-2xl font-semibold text-emerald-900 mb-3">Why Tokenization?</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
              <div>
                <strong className="text-emerald-800">Lower Barriers:</strong> $25K minimum (vs $100K+ traditional PE)
              </div>
              <div>
                <strong className="text-emerald-800">24/7 Liquidity:</strong> Trade tokens post-lock-up (vs 5-10 year illiquidity)
              </div>
              <div>
                <strong className="text-emerald-800">Global Access:</strong> Distribute to accredited investors worldwide
              </div>
              <div>
                <strong className="text-emerald-800">Programmable:</strong> Automated distributions + governance via smart contracts
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deal Pipeline Preview */}
      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">Initial Acquisition Pipeline</h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-4 rounded border border-slate-200">
            <div className="font-semibold text-blue-900 mb-2">🎯 Sector Analysts, LLC</div>
            <div className="space-y-1 text-slate-600">
              <div>• $309M AUM, 800 clients</div>
              <div>• SEC-Registered RIA (CRD #169789)</div>
              <div>• Investment: $2M (85% stake)</div>
              <div>• Exit: $38M+ (24 months)</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded border border-slate-200">
            <div className="font-semibold text-purple-900 mb-2">📈 Lydia HFT Fund</div>
            <div className="space-y-1 text-slate-600">
              <div>• Tokenized trading strategies</div>
              <div>• High-frequency TradFi alpha</div>
              <div>• Investment: $1M (setup + capital)</div>
              <div>• Revenue: $425K/year</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded border border-slate-200">
            <div className="font-semibold text-green-900 mb-2">🇱🇺 Luxembourg Entity</div>
            <div className="space-y-1 text-slate-600">
              <div>• EU regulatory license</div>
              <div>• Cross-border capability</div>
              <div>• Investment: $1M (pending DD)</div>
              <div>• Strategic value TBD</div>
            </div>
          </div>
        </div>
      </div>

      {/* Confidentiality Notice */}
      <div className="text-center text-xs text-slate-500 pt-4 border-t border-slate-200">
        <strong>CONFIDENTIAL</strong> - Private Placement | Accredited Investors Only | Reg D Rule 506(c)
      </div>
    </div>
  )
};
