import React, { useState } from 'react';
import { Button, DashboardCard, Header, Sidebar, SidebarItem } from '@/components/custom';
import { 
  ArrowLeft, 
  Building, 
  Users, 
  TrendingUp, 
  Target, 
  DollarSign, 
  Shield, 
  Zap,
  BarChart3,
  FileText,
  Settings,
  Home
} from 'lucide-react';

interface DealAnalysisProps {
  onBack: () => void;
}

const DealAnalysis: React.FC<DealAnalysisProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('summary');

  const tabs = [
    { id: 'summary', label: 'Deal Summary', icon: <Home className="h-4 w-4" /> },
    { id: 'company', label: 'Company Overview', icon: <Building className="h-4 w-4" /> },
    { id: 'team', label: 'Team', icon: <Users className="h-4 w-4" /> },
    { id: 'sector', label: 'Sector Overview', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'market', label: 'Market Analysis', icon: <Target className="h-4 w-4" /> },
    { id: 'business', label: 'Business Model', icon: <Settings className="h-4 w-4" /> },
    { id: 'risks', label: 'Risks & Returns', icon: <Shield className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-snow-white via-white to-gray-50">
      <div className="flex h-screen">
        <Sidebar>
          {tabs.map((tab) => (
            <SidebarItem 
              key={tab.id}
              icon={tab.icon} 
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </SidebarItem>
          ))}
        </Sidebar>

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            title="Score Deal Analysis"
            subtitle="LegalTech / Enterprise Risk Intelligence"
            actions={
              <div className="flex items-center gap-3">
                <Button variant="secondary" onClick={onBack}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Demo
                </Button>
                <Button>
                  <Zap className="mr-2 h-4 w-4" />
                  Generate Report
                </Button>
              </div>
            }
          />

          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              
              {activeTab === 'summary' && (
                <DashboardCard title="Deal Summary" subtitle="Key investment details">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                      <div className="text-sm text-blue-600 font-medium">Company</div>
                      <div className="text-lg font-bold text-gray-900">Score (Scorealytics, Inc.)</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                      <div className="text-sm text-green-600 font-medium">Founding Date</div>
                      <div className="text-lg font-bold text-gray-900">2024 (spun out of Baker McKenzie)</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                      <div className="text-sm text-purple-600 font-medium">Industry</div>
                      <div className="text-lg font-bold text-gray-900">LegalTech / Enterprise Risk Intelligence</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                      <div className="text-sm text-orange-600 font-medium">Location</div>
                      <div className="text-lg font-bold text-gray-900">Park City, Utah</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                      <div className="text-sm text-indigo-600 font-medium">Investment Method</div>
                      <div className="text-lg font-bold text-gray-900">Priced Round</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
                      <div className="text-sm text-pink-600 font-medium">Round Stage</div>
                      <div className="text-lg font-bold text-gray-900">Seed</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                      <div className="text-sm text-teal-600 font-medium">Size of Round</div>
                      <div className="text-lg font-bold text-gray-900">$4M</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                      <div className="text-sm text-red-600 font-medium">Post-Money Valuation</div>
                      <div className="text-lg font-bold text-gray-900">$18M</div>
                    </div>
                  </div>
                </DashboardCard>
              )}

              {activeTab === 'company' && (
                <DashboardCard title="Company Overview" subtitle="Business model and market position">
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Score is a legal risk intelligence platform that helps legal teams identify and act on regulatory, 
                      litigation, and compliance risks. It pulls data from government sources, litigation records, and 
                      internal documents to deliver real-time risk assessments.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The company spun out of Baker McKenzie, where founder Moiz Shirazi led the firm's consulting group. 
                      He saw that legal teams often lacked timely data to weigh in on business decisions. Score was built 
                      to fix that—giving legal departments the tools to act earlier and more strategically.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">$1.8M</div>
                        <div className="text-sm text-gray-600">Current ARR</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">15</div>
                        <div className="text-sm text-gray-600">Enterprise Clients</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">3 months</div>
                        <div className="text-sm text-gray-600">Time to $1.8M ARR</div>
                      </div>
                    </div>
                  </div>
                </DashboardCard>
              )}

              {activeTab === 'team' && (
                <DashboardCard title="Team" subtitle="Leadership and expertise">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Moiz Shirazi</h4>
                        <p className="text-sm text-gray-600 mb-2">Co-Founder & CEO</p>
                        <p className="text-sm text-gray-700">
                          15 years at Baker McKenzie, led consulting division. Data scientist and economist with 
                          advanced degrees in economics, finance, and marketing.
                        </p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Nicolas Jeangeorges</h4>
                        <p className="text-sm text-gray-600 mb-2">Co-Founder & Head of Strategy</p>
                        <p className="text-sm text-gray-700">
                          Specializes in complex modeling, valuation, and corporate restructurings. Based in Luxembourg, 
                          advises multinational clients on regulatory exposure.
                        </p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Kostas Dimitriou</h4>
                        <p className="text-sm text-gray-600 mb-2">Chief Product Officer</p>
                        <p className="text-sm text-gray-700">
                          20+ years product leadership from Google and early-stage startups. Leads product development 
                          and AI agent rollout.
                        </p>
                      </div>
                    </div>
                  </div>
                </DashboardCard>
              )}

              {activeTab === 'sector' && (
                <DashboardCard title="Sector Overview" subtitle="Market opportunity and trends">
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Score operates at the intersection of legal tech, enterprise AI, and risk intelligence. 
                      The U.S. legal market is over $400B, with legal tech expected to reach $35B by 2030. 
                      Legal risk automation represents a projected $8B opportunity.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Regulatory Complexity</h4>
                        <p className="text-sm text-blue-800">
                          Global compliance requirements growing in ESG, cybersecurity, and trade
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">AI Adoption</h4>
                        <p className="text-sm text-green-800">
                          Enterprises want domain-specific tools to automate legal workflows
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Legal Alignment</h4>
                        <p className="text-sm text-purple-800">
                          GCs pushed to act like business partners, not just legal reviewers
                        </p>
                      </div>
                    </div>
                  </div>
                </DashboardCard>
              )}

              {activeTab === 'market' && (
                <DashboardCard title="Market Analysis" subtitle="Competitive landscape and positioning">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Market Size</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">TAM (Total Addressable Market)</span>
                            <span className="font-semibold">$6-8B</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">SAM (Serviceable Available Market)</span>
                            <span className="font-semibold">$2-3B</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">SOM (Serviceable Obtainable Market)</span>
                            <span className="font-semibold">$400-500M</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Competitors</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Norm AI</span>
                            <span className="text-gray-600">$48M raised</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Luminance</span>
                            <span className="text-gray-600">$56M+ raised</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Clarity AI</span>
                            <span className="text-gray-600">$80M+ raised</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Harvey AI</span>
                            <span className="text-gray-600">$300M raised</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DashboardCard>
              )}

              {activeTab === 'business' && (
                <DashboardCard title="Business Model" subtitle="Revenue and go-to-market strategy">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Revenue Model</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Current ARR</span>
                            <span className="font-semibold">$1.8M</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Monthly Recurring Revenue</span>
                            <span className="font-semibold">$250K</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Average Contract Value</span>
                            <span className="font-semibold">$75K/year</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Target Contract Value</span>
                            <span className="font-semibold">$250K/year</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Go-to-Market</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Shield className="h-4 w-4 mr-2 text-green-600" />
                            <span>Direct enterprise sales</span>
                          </div>
                          <div className="flex items-center">
                            <Zap className="h-4 w-4 mr-2 text-blue-600" />
                            <span>Salesforce/SAP integrations</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-purple-600" />
                            <span>15 enterprise customers</span>
                          </div>
                          <div className="flex items-center">
                            <Target className="h-4 w-4 mr-2 text-orange-600" />
                            <span>Targeting $3M ARR by year-end</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DashboardCard>
              )}

              {activeTab === 'risks' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <DashboardCard title="Key Risks" subtitle="Potential challenges and mitigations">
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <h5 className="font-medium text-red-900">Enterprise Adoption Lag</h5>
                        <p className="text-sm text-red-700">Large legal departments adopt slowly due to risk aversion</p>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <h5 className="font-medium text-yellow-900">Data Accuracy & Liability</h5>
                        <p className="text-sm text-yellow-700">Errors in AI-generated legal insight could carry regulatory consequences</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <h5 className="font-medium text-orange-900">Competitive Entry</h5>
                        <p className="text-sm text-orange-700">Players like Thomson Reuters could build similar platforms</p>
                      </div>
                    </div>
                  </DashboardCard>

                  <DashboardCard title="Exit Analysis" subtitle="Potential returns and acquirers">
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h5 className="font-medium text-green-900">Best Case</h5>
                        <p className="text-sm text-green-700">$20-30M ARR, $200M+ acquisition by Salesforce/SAP</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h5 className="font-medium text-blue-900">Base Case</h5>
                        <p className="text-sm text-blue-700">$5-8M ARR, strategic M&A at 5-7x return</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h5 className="font-medium text-gray-900">Worst Case</h5>
                        <p className="text-sm text-gray-700">Limited traction, acqui-hire by law firm innovation arm</p>
                      </div>
                    </div>
                  </DashboardCard>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DealAnalysis; 