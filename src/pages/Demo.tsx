
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Phone, Users, Brain, FileText, Share2, Download, Eye, Clock, Star, Zap, ArrowRight, Plus, Mic, TrendingUp, BarChart3 } from 'lucide-react';

const Demo = () => {
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
    { name: 'Pitch Calls', value: 45, color: '#3B82F6' },
    { name: 'Due Diligence', value: 30, color: '#10B981' },
    { name: 'Follow-up', value: 15, color: '#8B5CF6' },
    { name: 'Internal Review', value: 10, color: '#F59E0B' },
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
    // This would navigate to a detailed analytics page for the call
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'bg-green-600 text-white';
      case 'neutral': return 'bg-yellow-600 text-white';
      case 'negative': return 'bg-red-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-600 text-white';
      case 'in-progress': return 'bg-blue-600 text-white';
      case 'scheduled': return 'bg-purple-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Decide</h1>
            <p className="text-slate-300">AI-Powered Call Analytics for Smart Investment Decisions</p>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Mic className="mr-2 h-4 w-4" />
              Start Call Recording
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <BarChart3 className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Calls</CardTitle>
              <Phone className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">69</div>
              <p className="text-xs text-green-400">+23% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Avg Call Duration</CardTitle>
              <Clock className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">38 min</div>
              <p className="text-xs text-green-400">+5 min this quarter</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Analysis Completion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">96%</div>
              <p className="text-xs text-purple-400">Processing accuracy</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Key Insights Generated</CardTitle>
              <Brain className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">287</div>
              <p className="text-xs text-yellow-400">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Analytics */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Call Volume Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={callVolumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                  />
                  <Bar dataKey="calls" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Sentiment Analysis Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={sentimentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                  />
                  <Line type="monotone" dataKey="sentiment" stroke="#10B981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Call Types Distribution</CardTitle>
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
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Calls Table */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Recent Calls</CardTitle>
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCalls.map((call, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => handleCallClick(call)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{call.participant}</h4>
                      <p className="text-sm text-slate-400">{call.type} • {call.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="font-bold text-white">{call.duration}</div>
                      <div className="text-sm text-slate-400">Duration</div>
                    </div>
                    <div className="text-right">
                      <Badge className={getSentimentColor(call.sentiment)}>
                        {call.sentiment}
                      </Badge>
                      <div className="text-sm text-slate-400 mt-1">Sentiment</div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(call.status)}>
                        {call.status}
                      </Badge>
                      <div className="text-sm text-slate-400 mt-1">Status</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Features Showcase */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="text-center">
              <Mic className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <CardTitle className="text-white">Real-time Transcription</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 mb-4">
                Automatic speech-to-text conversion with speaker identification and timestamps
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Recording
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="text-center">
              <Brain className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <CardTitle className="text-white">Sentiment Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 mb-4">
                AI-powered emotion detection and sentiment tracking throughout the conversation
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Analyze Sentiment
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="text-center">
              <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <CardTitle className="text-white">Insight Extraction</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 mb-4">
                Automated extraction of key topics, concerns, and investment decision factors
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
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
