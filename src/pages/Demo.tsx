
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Brain, FileText, Share2, Download, Eye, Clock, Star, Zap, ArrowRight, Plus } from 'lucide-react';

const Demo = () => {
  const dealData = [
    { name: 'Week 1', deals: 4 },
    { name: 'Week 2', deals: 7 },
    { name: 'Week 3', deals: 12 },
    { name: 'Week 4', deals: 8 },
  ];

  const scoreData = [
    { name: 'Jan', score: 7.2 },
    { name: 'Feb', score: 8.1 },
    { name: 'Mar', score: 7.8 },
    { name: 'Apr', score: 8.7 },
  ];

  const sectorData = [
    { name: 'AI/ML', value: 35, color: '#3B82F6' },
    { name: 'FinTech', value: 25, color: '#10B981' },
    { name: 'HealthTech', value: 20, color: '#8B5CF6' },
    { name: 'SaaS', value: 20, color: '#F59E0B' },
  ];

  const recentDeals = [
    { company: 'VitaFlow', sector: 'HealthTech', score: 9.2, status: 'hot', funding: '$2.5M', stage: 'Series A' },
    { company: 'DataMesh', sector: 'AI/ML', score: 8.8, status: 'warm', funding: '$1.8M', stage: 'Seed' },
    { company: 'GreenLab', sector: 'CleanTech', score: 7.4, status: 'cool', funding: '$3.2M', stage: 'Series A' },
    { company: 'CloudSync', sector: 'SaaS', score: 8.1, status: 'warm', funding: '$950K', stage: 'Seed' },
    { company: 'PayFlow', sector: 'FinTech', score: 8.9, status: 'hot', funding: '$4.1M', stage: 'Series B' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Decide</h1>
            <p className="text-slate-300">AI-Powered Deal Scoring for Smart VCs</p>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="mr-2 h-4 w-4" />
              New Deal
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Active Deals</CardTitle>
              <Eye className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">24</div>
              <p className="text-xs text-green-400">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Avg Deal Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">8.7</div>
              <p className="text-xs text-green-400">+0.9 this quarter</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Time Saved</CardTitle>
              <Clock className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">127h</div>
              <p className="text-xs text-purple-400">This month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Success Rate</CardTitle>
              <Star className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">94%</div>
              <p className="text-xs text-yellow-400">Prediction accuracy</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Analytics */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Deal Flow Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={dealData}>
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
                  <Bar dataKey="deals" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Average Deal Scores</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={scoreData}>
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
                  <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Deals by Sector</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={sectorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {sectorData.map((entry, index) => (
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

        {/* Recent Deals Table */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Recent Deals</CardTitle>
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDeals.map((deal, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {deal.company.substring(0, 2)}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{deal.company}</h4>
                      <p className="text-sm text-slate-400">{deal.sector} • {deal.stage}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-bold text-white">{deal.funding}</div>
                      <div className="text-sm text-slate-400">Funding</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white">{deal.score}</div>
                      <Badge 
                        className={
                          deal.status === 'hot' ? 'bg-red-600 text-white' : 
                          deal.status === 'warm' ? 'bg-orange-600 text-white' : 
                          'bg-blue-600 text-white'
                        }
                      >
                        {deal.status}
                      </Badge>
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
              <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <CardTitle className="text-white">Smart Scoring</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 mb-4">
                AI-powered deal scoring with best/medium/worst case financial modeling
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Try Scoring
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="text-center">
              <Brain className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <CardTitle className="text-white">AI Note Taking</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 mb-4">
                Automated transcription and analysis during founder pitch calls
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Start Recording
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <CardTitle className="text-white">Instant Insights</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 mb-4">
                Real-time company summaries and competitive analysis
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Generate Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Demo;
