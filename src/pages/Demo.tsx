import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Phone, Users, Brain, FileText, Share2, Download, Eye, Clock, Star, Zap, ArrowRight, Plus, Mic, TrendingUp, BarChart3 } from 'lucide-react';
import CompanyAnalysis from "@/components/demo/CompanyAnalysis";

const Demo = () => {
  const [selectedCall, setSelectedCall] = useState(null);

  const callVolumeData = [
    { name: 'Week 1', calls: 12 },
    { name: 'Week 2', calls: 18 },
    { name: 'Week 3', calls: 24 },
    { name: 'Week 4', calls: 15 },
  ];

  const sentimentData = [
    { name: 'Jan', sentiment: 7.2 },
    { name: 'Feb', sentiment: 8.1 },
    { name: 'Mar', sentiment: 7.8 },
    { name: 'Apr', sentiment: 8.7 },
  ];

  const callTypesData = [
    { name: 'Pitch Calls', value: 45, color: '#2563EB' },
    { name: 'Due Diligence', value: 30, color: '#3B82F6' },
    { name: 'Follow-up', value: 15, color: '#60A5FA' },
    { name: 'Internal Review', value: 10, color: '#93C5FD' },
  ];

  const recentCalls = [
    { 
      participant: 'John Martinez (VitaFlow)', 
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

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'bg-blue-600 text-white';
      case 'neutral': return 'bg-blue-400 text-white';
      case 'negative': return 'bg-blue-800 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-blue-600 text-white';
      case 'in-progress': return 'bg-blue-500 text-white';
      case 'scheduled': return 'bg-blue-400 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  // Custom tooltip component for the PieChart
  const CustomPieTooltip = ({ active, payload }: { active?: boolean; payload?: any }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-white/95 backdrop-blur-sm border border-blue-200 rounded-lg px-3 py-2 shadow-xl">
          <p className="text-blue-900 font-medium text-sm">
            {data.name}: <span className="text-blue-700 font-bold">{data.value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  if (selectedCall) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
        <CompanyAnalysis companyData={selectedCall} onBack={handleBackToDemo} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-2">Decide</h1>
            <p className="text-blue-700">AI-Powered Call Analytics for Smart Investment Decisions</p>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
              <Mic className="mr-2 h-4 w-4" />
              Start Call Recording
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-200 bg-white/80 text-blue-700 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-300"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Total Calls</CardTitle>
              <Phone className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">69</div>
              <p className="text-xs text-blue-600">+23% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Avg Call Duration</CardTitle>
              <Clock className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">38 min</div>
              <p className="text-xs text-blue-600">+5 min this quarter</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Analysis Completion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">96%</div>
              <p className="text-xs text-blue-600">Processing accuracy</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Key Insights Generated</CardTitle>
              <Brain className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">287</div>
              <p className="text-xs text-blue-600">This month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">Call Volume Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={callVolumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#BFDBFE" />
                  <XAxis dataKey="name" stroke="#3B82F6" />
                  <YAxis stroke="#3B82F6" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #BFDBFE',
                      borderRadius: '8px',
                      color: '#1E40AF',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Bar dataKey="calls" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">Sentiment Analysis Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={sentimentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#BFDBFE" />
                  <XAxis dataKey="name" stroke="#3B82F6" />
                  <YAxis stroke="#3B82F6" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #BFDBFE',
                      borderRadius: '8px',
                      color: '#1E40AF',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Line type="monotone" dataKey="sentiment" stroke="#2563EB" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-900">Call Types Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={callTypesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {callTypesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomPieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-blue-900">Recent Calls</CardTitle>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-blue-200 bg-white/80 text-blue-700 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-300"
            >
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCalls.map((call, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-4 rounded-lg bg-blue-50/50 hover:bg-blue-100/70 transition-colors cursor-pointer border border-blue-100"
                  onClick={() => handleCallClick(call)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900">{call.participant}</h4>
                      <p className="text-sm text-blue-600">{call.type} • {call.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="font-bold text-blue-900">{call.duration}</div>
                      <div className="text-sm text-blue-600">Duration</div>
                    </div>
                    <div className="text-right">
                      <Badge className={getSentimentColor(call.sentiment)}>
                        {call.sentiment}
                      </Badge>
                      <div className="text-sm text-blue-600 mt-1">Sentiment</div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(call.status)}>
                        {call.status}
                      </Badge>
                      <div className="text-sm text-blue-600 mt-1">Status</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-blue-400" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader className="text-center">
              <Mic className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle className="text-blue-900">Real-time Transcription</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-700 mb-4">
                Automatic speech-to-text conversion with speaker identification and timestamps
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
                Start Recording
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader className="text-center">
              <Brain className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle className="text-blue-900">Sentiment Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-700 mb-4">
                AI-powered emotion detection and sentiment tracking throughout the conversation
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
                Analyze Sentiment
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-md border-blue-200 shadow-lg">
            <CardHeader className="text-center">
              <Zap className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle className="text-blue-900">Insight Extraction</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-700 mb-4">
                Automated extraction of key topics, concerns, and investment decision factors
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
                Extract Insights
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Demo;
