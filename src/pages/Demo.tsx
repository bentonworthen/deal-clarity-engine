import React, { useState } from 'react';
import { 
  Button, 
  StatusPill, 
  DashboardCard, 
  MetricCard, 
  Header, 
  Sidebar, 
  SidebarItem 
} from '@/components/custom';
import { 
  Phone, 
  Users, 
  Brain, 
  FileText, 
  Clock, 
  Zap, 
  ArrowRight, 
  Mic, 
  TrendingUp, 
  BarChart3,
  Home,
  Settings
} from 'lucide-react';

import CompanyAnalysis from "@/components/demo/CompanyAnalysis";
import DealAnalysis from "@/components/demo/DealAnalysis";

const Demo = () => {
  const [selectedCall, setSelectedCall] = useState(null);
  const [selectedDeal, setSelectedDeal] = useState(null);

  const recentDeals = [
    { 
      company: 'VACA (VACA Technologies)', 
      date: '2024-01-15', 
      stage: 'Seed', 
      amount: '$4M', 
      valuation: '$18M',
      industry: 'LegalTech / Enterprise Risk Intelligence',
      location: 'Park City, Utah',
      status: 'active',
      sentiment: 'positive',
      keyMetrics: ['$1.8M ARR', '15 enterprise clients', '3 months to $1.8M ARR'],
      insights: 'Strong traction with enterprise customers, clear product-market fit in legal risk intelligence'
    },
    { 
      company: 'VACA Technologies', 
      date: '2024-01-14', 
      stage: 'Series A', 
      amount: '$12M', 
      valuation: '$45M',
      industry: 'HealthTech / Digital Therapeutics',
      location: 'San Francisco, CA',
      status: 'completed',
      sentiment: 'positive',
      keyMetrics: ['$3.2M ARR', '127 customers', '94% retention'],
      insights: 'Impressive customer retention and growth metrics'
    },
    { 
      company: 'DataMesh Solutions', 
      date: '2024-01-13', 
      stage: 'Series B', 
      amount: '$25M', 
      valuation: '$120M',
      industry: 'Data Infrastructure / AI',
      location: 'Austin, TX',
      status: 'in_progress',
      sentiment: 'neutral',
      keyMetrics: ['$8.5M ARR', '45 enterprise clients', '2.5x YoY growth'],
      insights: 'Technical concerns raised about scalability'
    },
    { 
      company: 'GreenLab Systems', 
      date: '2024-01-12', 
      stage: 'Seed', 
      amount: '$6M', 
      valuation: '$24M',
      industry: 'CleanTech / Industrial IoT',
      location: 'Boston, MA',
      status: 'completed',
      sentiment: 'positive',
      keyMetrics: ['$1.2M ARR', '23 customers', 'Partnership momentum'],
      insights: 'Positive momentum on partnership discussions'
    },
  ];

  const handleDealClick = (deal) => {
    console.log('Navigate to deal analysis for:', deal.company);
    if (deal.company === 'VACA (VACA Technologies)') {
      setSelectedDeal(deal);
    } else {
      setSelectedCall(deal);
    }
  };

  const handleBackToDemo = () => {
    setSelectedCall(null);
    setSelectedDeal(null);
  };

  if (selectedDeal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-snow-white via-white to-gray-50">
        <DealAnalysis onBack={handleBackToDemo} />
      </div>
    );
  }

  if (selectedCall) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-snow-white via-white to-gray-50">
        <CompanyAnalysis companyData={selectedCall} onBack={handleBackToDemo} />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-snow-white via-white to-gray-50">
      <Sidebar>
        <SidebarItem icon={<Home className="h-5 w-5" />}>
          Home
        </SidebarItem>
        <SidebarItem icon={<Users className="h-5 w-5" />} badge={8} isActive>
          Calls
        </SidebarItem>
        <SidebarItem icon={<FileText className="h-5 w-5" />}>
          Reports
        </SidebarItem>
        <SidebarItem icon={<Settings className="h-5 w-5" />}>
          Settings
        </SidebarItem>
      </Sidebar>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title="Call Analytics"
          subtitle="AI-Powered Investment Intelligence"
          actions={
            <div className="flex items-center gap-3">
              <Button>
                <Mic className="mr-2 h-4 w-4" />
                Start Call Recording
              </Button>
              <Button variant="secondary">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
            </div>
          }
        />

        <div className="flex-1 overflow-auto p-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Total Calls"
              value="127"
              change="+12%"
              changeType="positive"
              icon={<Phone className="h-4 w-4" />}
            />
            <MetricCard
              title="Avg Call Duration"
              value="42 min"
              change="+8%"
              changeType="positive"
              icon={<Clock className="h-4 w-4" />}
            />
            <MetricCard
              title="Analysis Completion Rate"
              value="94%"
              change="+3%"
              changeType="positive"
              icon={<Brain className="h-4 w-4" />}
            />
            <MetricCard
              title="Key Insights Generated"
              value="1,247"
              change="+18%"
              changeType="positive"
              icon={<Zap className="h-4 w-4" />}
            />
          </div>

          {/* Recent Calls */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Recent Calls</h2>
                <p className="text-gray-600">Latest call activities and insights</p>
              </div>
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6">
              {recentDeals.map((deal, index) => (
                <div
                  key={index}
                  onClick={() => handleDealClick(deal)}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{deal.company}</h3>
                        <p className="text-sm text-gray-500">{deal.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <StatusPill status={deal.status} />
                      <span className="text-sm text-gray-500">{deal.date}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Stage</p>
                      <p className="font-medium text-gray-900">{deal.stage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Amount</p>
                      <p className="font-medium text-gray-900">{deal.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Valuation</p>
                      <p className="font-medium text-gray-900">{deal.valuation}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-900">{deal.location}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Key Metrics</p>
                      <div className="flex flex-wrap gap-2">
                        {deal.keyMetrics.map((metric, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Key Insight</p>
                      <p className="text-sm text-gray-700">{deal.insights}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <DashboardCard title="Real-time Transcription" subtitle="Automatic speech-to-text conversion">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Live call transcription</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Speaker identification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Timestamp tracking</span>
                </div>
              </div>
            </DashboardCard>

            <DashboardCard title="Sentiment Analysis" subtitle="AI-powered emotion detection">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Real-time sentiment tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Emotion classification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Trend analysis</span>
                </div>
              </div>
            </DashboardCard>

            <DashboardCard title="Insight Extraction" subtitle="Automated key topic extraction">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Topic identification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Action item detection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Risk assessment</span>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo; 