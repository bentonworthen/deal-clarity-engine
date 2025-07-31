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
      company: 'Score (Scorealytics, Inc.)', 
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
      company: 'VitaFlow Technologies', 
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
    if (deal.company === 'Score (Scorealytics, Inc.)') {
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
                Generate Report
              </Button>
            </div>
          }
        />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="Total Calls"
                value="69"
                icon={<Phone className="h-5 w-5" />}
                trend={{ value: 23, isPositive: true }}
              />
              <MetricCard
                title="Avg Call Duration"
                value="38 min"
                icon={<Clock className="h-5 w-5" />}
                trend={{ value: 5, isPositive: true }}
              />
              <MetricCard
                title="Analysis Completion Rate"
                value="96%"
                icon={<TrendingUp className="h-5 w-5" />}
                trend={{ value: 2, isPositive: true }}
              />
              <MetricCard
                title="Key Insights Generated"
                value="287"
                icon={<Brain className="h-5 w-5" />}
                trend={{ value: 15, isPositive: true }}
              />
            </div>

            {/* Recent Deals */}
            <DashboardCard 
              title="Recent Deals" 
              subtitle="Latest deal activities and analysis"
              action={
                <Button variant="secondary" size="sm">
                  View All
                </Button>
              }
            >
              <div className="space-y-4">
                {recentDeals.map((deal, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-vat-indigo/20 transition-all duration-300 cursor-pointer"
                    onClick={() => handleDealClick(deal)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-vat-indigo to-mint-tech rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {deal.company.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{deal.company}</h4>
                        <p className="text-sm text-gray-500">{deal.industry} • {deal.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="font-mono font-semibold text-gray-900">{deal.amount}</div>
                        <div className="text-sm text-gray-500">{deal.stage}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-semibold text-gray-900">{deal.valuation}</div>
                        <div className="text-sm text-gray-500">Valuation</div>
                      </div>
                      <div className="text-right">
                        <StatusPill status={deal.sentiment === 'positive' ? 'b2b' : deal.sentiment === 'negative' ? 'reverse-charge' : 'b2c'}>
                          {deal.sentiment}
                        </StatusPill>
                        <div className="text-sm text-gray-500 mt-1">Sentiment</div>
                      </div>
                      <div className="text-right">
                        <StatusPill status={deal.status === 'completed' ? 'b2b' : deal.status === 'active' ? 'b2c' : 'reverse-charge'}>
                          {deal.status}
                        </StatusPill>
                        <div className="text-sm text-gray-500 mt-1">Status</div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DashboardCard title="Real-time Transcription" subtitle="Automatic speech-to-text conversion">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-vat-indigo to-mint-tech rounded-full flex items-center justify-center mx-auto">
                    <Mic className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Automatic speech-to-text conversion with speaker identification and timestamps
                  </p>
                  <Button className="w-full">
                    Start Recording
                  </Button>
                </div>
              </DashboardCard>
              
              <DashboardCard title="Sentiment Analysis" subtitle="AI-powered emotion detection">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-mint-tech to-vat-indigo rounded-full flex items-center justify-center mx-auto">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-600">
                    AI-powered emotion detection and sentiment tracking throughout the conversation
                  </p>
                  <Button className="w-full">
                    Analyze Sentiment
                  </Button>
                </div>
              </DashboardCard>
              
              <DashboardCard title="Insight Extraction" subtitle="Automated key topic extraction">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-vat-indigo to-mint-tech rounded-full flex items-center justify-center mx-auto">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Automated extraction of key topics, concerns, and investment decision factors
                  </p>
                  <Button className="w-full">
                    Extract Insights
                  </Button>
                </div>
              </DashboardCard>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Demo; 