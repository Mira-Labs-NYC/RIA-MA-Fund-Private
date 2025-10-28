import { Coins, Lock, Users, TrendingUp, Shield, Globe } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

export const Slide03Tokenization: SlideDefinition = {
  type: 'content',
  title: 'Tokenization Strategy',
  subtitle: 'RWA security tokens on Plume Network - democratizing access to RIA M&A returns',
  content: (
    <div className="space-y-8">
      {/* Why Tokenization */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8 rounded-lg">
        <h3 className="text-2xl font-light mb-6 text-center">Why Tokenize the Fund?</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Users className="text-blue-300 flex-shrink-0 mt-1" size={32} />
              <div>
                <div className="font-semibold text-blue-200 mb-2">Democratized Access</div>
                <div className="text-sm text-blue-100">
                  $25K minimum (vs $100K+ traditional PE). Fractional ownership enables more investors
                  to participate in institutional-quality RIA M&A deals.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <TrendingUp className="text-purple-300 flex-shrink-0 mt-1" size={32} />
              <div>
                <div className="font-semibold text-purple-200 mb-2">Secondary Market Liquidity</div>
                <div className="text-sm text-purple-100">
                  Trade tokens on compliant exchanges post lock-up. Exit before fund liquidation vs
                  traditional 5-10 year illiquidity.
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Globe className="text-green-300 flex-shrink-0 mt-1" size={32} />
              <div>
                <div className="font-semibold text-green-200 mb-2">Global Distribution</div>
                <div className="text-sm text-green-100">
                  Reach accredited investors worldwide. Blockchain enables 24/7 subscription and
                  transfer capabilities across jurisdictions.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Coins className="text-yellow-300 flex-shrink-0 mt-1" size={32} />
              <div>
                <div className="font-semibold text-yellow-200 mb-2">Programmable Finance</div>
                <div className="text-sm text-yellow-100">
                  Automated distributions, voting, and governance via smart contracts. Transparent
                  NAV tracking and quarterly reporting on-chain.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Token Structure */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left: Token Details */}
        <div className="border border-slate-200">
          <div className="bg-slate-900 text-white p-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Coins size={24} />
              Security Token Details
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-baseline pb-2 border-b border-slate-200">
                <span className="text-sm text-slate-600">Token Name</span>
                <span className="font-semibold text-slate-900">RIA-FUND-I</span>
              </div>
              <div className="flex justify-between items-baseline pb-2 border-b border-slate-200">
                <span className="text-sm text-slate-600">Blockchain</span>
                <span className="font-semibold text-slate-900">Plume Network</span>
              </div>
              <div className="flex justify-between items-baseline pb-2 border-b border-slate-200">
                <span className="text-sm text-slate-600">Token Standard</span>
                <span className="font-semibold text-slate-900">ERC-3643 (Compliant)</span>
              </div>
              <div className="flex justify-between items-baseline pb-2 border-b border-slate-200">
                <span className="text-sm text-slate-600">Total Supply</span>
                <span className="font-semibold text-slate-900">5,000,000 tokens</span>
              </div>
              <div className="flex justify-between items-baseline pb-2 border-b border-slate-200">
                <span className="text-sm text-slate-600">Token Price</span>
                <span className="font-semibold text-slate-900">$1.00 (at inception)</span>
              </div>
              <div className="flex justify-between items-baseline pb-2 border-b border-slate-200">
                <span className="text-sm text-slate-600">Minimum Investment</span>
                <span className="font-semibold text-blue-600">$25,000</span>
              </div>
              <div className="flex justify-between items-baseline pb-2 border-b border-slate-200">
                <span className="text-sm text-slate-600">Lock-up Period</span>
                <span className="font-semibold text-orange-600">12 months</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-slate-600">Regulation</span>
                <span className="font-semibold text-slate-900">Reg D 506(c)</span>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded border border-blue-200">
              <div className="text-sm font-semibold text-blue-900 mb-2">Investor Requirements</div>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Accredited investor status (verified)</li>
                <li>• KYC/AML clearance</li>
                <li>• US jurisdiction (initially)</li>
                <li>• Subscription agreement executed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Smart Contract Features */}
        <div className="border border-slate-200">
          <div className="bg-slate-900 text-white p-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Shield size={24} />
              Smart Contract Features
            </h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start gap-3">
                <Lock className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <div className="font-semibold text-green-900 mb-1">Transfer Restrictions</div>
                  <div className="text-xs text-slate-700">
                    12-month lock-up enforced via smart contract. Transfers only permitted to
                    verified accredited investors post-lock-up.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <Coins className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <div className="font-semibold text-blue-900 mb-1">Automated Distributions</div>
                  <div className="text-xs text-slate-700">
                    Quarterly distributions programmed into token. USDC sent directly to token holders
                    based on pro-rata ownership.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start gap-3">
                <Users className="text-purple-600 flex-shrink-0" size={24} />
                <div>
                  <div className="font-semibold text-purple-900 mb-1">Governance Rights</div>
                  <div className="text-xs text-slate-700">
                    Token holders vote on major decisions: GP removal, fund extension, material conflicts.
                    1 token = 1 vote.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-3">
                <TrendingUp className="text-orange-600 flex-shrink-0" size={24} />
                <div>
                  <div className="font-semibold text-orange-900 mb-1">NAV Oracle</div>
                  <div className="text-xs text-slate-700">
                    On-chain NAV updates quarterly. Transparent portfolio valuation accessible to all
                    token holders via blockchain explorer.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plume Network Integration */}
      <div className="border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-lg">
        <div className="flex items-start gap-6">
          <div className="bg-purple-600 rounded-full p-4">
            <Coins className="text-white" size={48} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Why Plume Network?</h3>
            <div className="grid grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold text-purple-800 mb-2">RWA-Native L2</div>
                <div className="text-slate-700">
                  Purpose-built Ethereum L2 for Real-World Assets. Native compliance features, asset tokenization
                  infrastructure, and institutional custody integrations built-in.
                </div>
              </div>
              <div>
                <div className="font-semibold text-purple-800 mb-2">Compliant by Design</div>
                <div className="text-slate-700">
                  ERC-3643 standard with on-chain compliance. Automatic KYC/AML checks, jurisdiction filtering,
                  and accredited investor verification embedded in token transfers.
                </div>
              </div>
              <div>
                <div className="font-semibold text-purple-800 mb-2">Ecosystem Synergies</div>
                <div className="text-slate-700">
                  Already integrating Plume.org for Sector Analysts' RWA tokenization. Unified tech stack
                  across fund + portfolio companies creates operational efficiencies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Market */}
      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">Secondary Market Liquidity (Post Lock-Up)</h3>
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="bg-white p-4 rounded border border-slate-200 text-center">
            <div className="font-semibold text-slate-900 mb-2">Month 0-12</div>
            <Lock className="mx-auto text-red-500 mb-2" size={32} />
            <div className="text-xs text-slate-600">
              Tokens locked. No transfers permitted (smart contract enforced).
            </div>
          </div>
          <div className="bg-white p-4 rounded border border-slate-200 text-center">
            <div className="font-semibold text-slate-900 mb-2">Month 12+</div>
            <Coins className="mx-auto text-blue-500 mb-2" size={32} />
            <div className="text-xs text-slate-600">
              Lock-up expires. Tokens tradeable on compliant ATS (tZERO, INX, Securitize).
            </div>
          </div>
          <div className="bg-white p-4 rounded border border-slate-200 text-center">
            <div className="font-semibold text-slate-900 mb-2">Trading</div>
            <TrendingUp className="mx-auto text-green-500 mb-2" size={32} />
            <div className="text-xs text-slate-600">
              24/7 trading available. Price discovery based on NAV + performance expectations.
            </div>
          </div>
          <div className="bg-white p-4 rounded border border-slate-200 text-center">
            <div className="font-semibold text-slate-900 mb-2">Exit Options</div>
            <Users className="mx-auto text-purple-500 mb-2" size={32} />
            <div className="text-xs text-slate-600">
              LPs can exit before fund liquidation. Buyers get exposure to remaining upside.
            </div>
          </div>
        </div>
      </div>

      {/* Token Economics Summary */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6 rounded-lg">
        <div className="grid grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">Total Tokens</div>
            <div className="text-3xl font-light">5.0M</div>
            <div className="text-xs text-slate-400 mt-1">1 token = $1 NAV</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-blue-400 mb-2">Min Investment</div>
            <div className="text-3xl font-light text-blue-300">$25K</div>
            <div className="text-xs text-blue-400 mt-1">25,000 tokens</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-purple-400 mb-2">Lock-up</div>
            <div className="text-3xl font-light text-purple-300">12mo</div>
            <div className="text-xs text-purple-400 mt-1">From final close</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-green-400 mb-2">Distributions</div>
            <div className="text-3xl font-light text-green-300">Q1-Q4</div>
            <div className="text-xs text-green-400 mt-1">Automated USDC</div>
          </div>
        </div>
      </div>
    </div>
  )
};
