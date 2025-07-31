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

const Demo = () => {
  const [selectedCall, setSelectedCall] = useState(null);

  const recentCalls = [
    { 
      participant: 'John Martinez (VACA)', 
      date: '2024-01-15', 
      duration: '45 min', 
      type: 'Pitch Call', 
      status: 'completed',
      sentiment: 'positive',
      keyTopics: ['Product-market fit', 'Revenue growth', 'Team expansion'],
      insights: 'Strong traction metrics and clear value proposition'
    },
    { 
      participant: 'Sarah Chen (DataMesh)', 
      date: '2024-01-14', 
      duration: '32 min', 
      type: 'Due Diligence', 
      status: 'completed',
      sentiment: 'neutral',
      keyTopics: ['Technical architecture', 'Scalability', 'Competition'],
      insights: 'Technical concerns raised about scalability'
    },
    { 
      participant: 'Mike Thompson (GreenLab)', 
      date: '2024-01-14', 
      duration: '28 min', 
      type: 'Follow-up', 
      status: 'completed',
      sentiment: 'positive',
      keyTopics: ['Partnership strategy', 'Market expansion', 'Funding timeline'],
      insights: 'Positive momentum on partnership discussions'
    },
    { 
      participant: 'Lisa Wang (CloudSync)', 
      date: '2024-01-13', 
      duration: '52 min', 
      type: 'Pitch Call', 
      status: 'completed',
      sentiment: 'positive',
      keyTopics: ['SaaS metrics', 'Customer acquisition', 'Retention rates'],
      insights: 'Impressive customer retention and growth metrics'
    },
    { 
      participant: 'David Rodriguez (PayFlow)', 
      date: '2024-01-12', 
      duration: '38 min', 
      type: 'Due Diligence', 
      status: 'completed',
      sentiment: 'positive',
      keyTopics: ['Regulatory compliance', 'Financial projections', 'Exit strategy'],
      insights: 'Strong regulatory position and clear path to profitability'
    },
  ];

  const handleCallClick = (call) => {
    console.log('Navigate to call analytics for:', call.participant);
    setSelectedCall(call);
  };

  const handleBackToDemo = () => {
    setSelectedCall(null);
  };

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

            {/* Recent Calls */}
            <DashboardCard 
              title="Recent Calls" 
              subtitle="Latest call activities and insights"
              action={
                <Button variant="secondary" size="sm">
                  View All
                </Button>
              }
            >
              <div className="space-y-4">
                {recentCalls.map((call, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-vat-indigo/20 transition-all duration-300 cursor-pointer"
                    onClick={() => handleCallClick(call)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-vat-indigo to-mint-tech rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{call.participant}</h4>
                        <p className="text-sm text-gray-500">{call.type} • {call.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="font-mono font-semibold text-gray-900">{call.duration}</div>
                        <div className="text-sm text-gray-500">Duration</div>
                      </div>
                      <div className="text-right">
                        <StatusPill status={call.sentiment === 'positive' ? 'b2b' : call.sentiment === 'negative' ? 'reverse-charge' : 'b2c'}>
                          {call.sentiment}
                        </StatusPill>
                        <div className="text-sm text-gray-500 mt-1">Sentiment</div>
                      </div>
                      <div className="text-right">
                        <StatusPill status={call.status === 'completed' ? 'b2b' : 'b2c'}>
                          {call.status}
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