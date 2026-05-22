import { Coins, Lock, Users, Globe, Shield, Server, Layers } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

export const Slide03Tokenization: SlideDefinition = {
  type: 'content',
  title: 'Tokenization Strategy',
  subtitle: 'RIA-FUND-I security token issued on Plume Network with institutional guardrails',
  content: (
    <div className="space-y-10">
      {/* Rationale */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
        <h3 className="text-lg font-semibold text-slate-900">Why tokenize the fund?</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            {
              icon: <Users className="text-blue-600" size={22} />,
              title: 'Democratized access',
              copy:
                'Open the vehicle to accredited investors with $25K minimums instead of traditional $100K+ private equity tickets.'
            },
            {
              icon: <Globe className="text-emerald-600" size={22} />,
              title: 'Global distribution',
              copy:
                '24/7 subscription and transfer capabilities for qualified investors, including cross-border allocations.'
            },
            {
              icon: <Coins className="text-purple-600" size={22} />,
              title: 'Programmable economics',
              copy:
                'Smart contracts manage quarterly distributions, cap table updates, governance votes, and performance waterfalls.'
            },
            {
              icon: <Shield className="text-slate-700" size={22} />,
              title: 'Regulated liquidity',
              copy:
                'Post 12-month lock-up, tokens trade on compliant ATS venues, giving LPs optional liquidity without forced exit.'
            }
          ].map(item => (
            <div key={item.title} className="flex gap-3 rounded-lg border border-slate-200/80 bg-slate-50/60 p-4">
              <div className="rounded-full border border-slate-200 bg-white p-2">{item.icon}</div>
              <div>
                <div className="text-sm font-semibold text-slate-800">{item.title}</div>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Token specification */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
        <div className="border-b border-slate-200 bg-slate-900 px-5 py-4 text-white">
          <h3 className="text-lg font-semibold tracking-tight">Security token specification · RIA-FUND-I</h3>
        </div>
        <div className="grid gap-6 p-6 lg:grid-cols-2">
          <div className="space-y-4">
            {[
              ['Token standard', 'ERC-3643 (Permissioned)'],
              ['Chain', 'Plume Network · Ethereum L2'],
              ['Total supply', '5,000,000 tokens'],
              ['Issue price', '$1.00 per token'],
              ['Minimum subscription', '$25,000 (25,000 tokens)'],
              ['Lock-up', '12 months · Reg D 506(c)'],
              ['Reporting cadence', 'Quarterly (financial + on-chain dashboard)']
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-baseline justify-between border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
              >
                <span className="text-sm text-slate-500">{label}</span>
                <span className="text-sm font-medium text-slate-800">{value}</span>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-5">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Investor workflow</div>
            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              <li>• Accredited verification via integrated KYC/AML provider.</li>
              <li>• Subscription executed digitally; tokens delivered to whitelisted wallet.</li>
              <li>• Quarterly reports + distributions pushed automatically in USDC.</li>
              <li>• Secondary transfers gated by whitelist + lock-up logic.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Smart contract features */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
          <h3 className="text-lg font-semibold text-slate-900">Smart contract controls</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex gap-3">
              <Lock className="text-slate-700" size={20} />
              <span>Transfer restrictions enforced by whitelist + lock-up timer with admin override.</span>
            </li>
            <li className="flex gap-3">
              <Coins className="text-blue-600" size={20} />
              <span>Distribution module auto-calculates LP preferred return and GP catch-up each quarter.</span>
            </li>
            <li className="flex gap-3">
              <Users className="text-emerald-600" size={20} />
              <span>Governance voting (1 token = 1 vote) on fund life extension, key hires, or GP removal triggers.</span>
            </li>
            <li className="flex gap-3">
              <Shield className="text-purple-600" size={20} />
              <span>Audit trail on-chain for capital calls, distributions, and NAV attestations.</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-inner">
          <h3 className="text-lg font-semibold text-slate-900">Plume Network integration</h3>
          <div className="mt-4 grid gap-4">
            {[
              {
                icon: <Server className="text-blue-600" size={20} />,
                title: 'RWA-native infrastructure',
                copy: 'Built-in compliance modules, fiat ramps, and institutional custody integrations.'
              },
              {
                icon: <Layers className="text-emerald-600" size={20} />,
                title: 'Composable architecture',
                copy: 'Seamless connection to Lidya HFT vaults and future tokenized strategies.'
              },
              {
                icon: <Globe className="text-purple-600" size={20} />,
                title: 'Regulatory alignment',
                copy: 'Whitelisted participants, geofencing, and identity proofs to satisfy Reg D + MiFID obligations.'
              }
            ].map(card => (
              <div key={card.title} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <div className="rounded-full border border-slate-200 bg-slate-50 p-2">{card.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{card.title}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{card.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};
